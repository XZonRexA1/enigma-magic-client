import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckForm from "./CheckForm";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useMySelectedClass from "../../../hooks/useMySelectedClass";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    
 const [selectedClass] = useMySelectedClass() 
    const location = useLocation();
    const price = location.state?.selectedItem.price || null;
    const selectedItem = location.state?.selectedItem || null;
    
  return (
    <div className="w-full">
        <Helmet>
        <title>Enigma Magic | Payment</title>
      </Helmet>
      <h1 className="text-5xl text-center  mb-4">Payment</h1>
      <hr className="mb-4" />
      <Elements stripe={stripePromise}>
        <CheckForm selectedClass={selectedClass} selectedItem={selectedItem} price={price}></CheckForm>
      </Elements>
    </div>
  );
};

export default Payment;
