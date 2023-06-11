import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckForm from "./CheckForm";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  return (
    <div className="w-full">
      <h1 className="text-5xl text-center mb-4">Payment</h1>
      <hr className="mb-4" />
      <Elements stripe={stripePromise}>
        <CheckForm></CheckForm>
      </Elements>
    </div>
  );
};

export default Payment;
