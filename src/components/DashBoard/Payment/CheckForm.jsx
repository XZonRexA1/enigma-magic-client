import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import "./CheckForm.css";
import useAuth from "../../../hooks/useAuth";

const CheckForm = ({  selectedClass, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.clientSecret);
        setClientSecret(data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      //   console.log('payment method', paymentMethod)
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError);
    }

    console.log("paymentIntent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

        
      const payment = {
        name: user?.displayName,
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        status: 'service pending',
        selectedClass: selectedClass.map(item=> item._id),
        selectedClassNames: selectedClass.map(item=> item.name)
      };

      fetch("http://localhost:5000/payments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payment),
    })
    .then(res=>res.json())
    .then(data => { 
        if(data.insertedId) {
            // 
        }
    })
    }
  };

  return (
    <>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-green-600 ml-8">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckForm;
