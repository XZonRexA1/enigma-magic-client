import { Helmet } from "react-helmet-async";

const AdminHome = () => {
  return (
    <div>
         <Helmet>
        <title>Enigma Magic | Admin Home</title>
      </Helmet>
      <h1 className="text-5xl text-center  mb-4">Admin Home</h1>
    </div>
  );
};

export default AdminHome;
