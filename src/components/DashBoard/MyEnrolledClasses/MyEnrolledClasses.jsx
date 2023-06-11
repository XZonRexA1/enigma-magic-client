import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const MyEnrolledClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("https://enigma-magic-server-xzonrexa1.vercel.app/payments")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
  const selectedEnrolledClass = classes.map((item) => item.selectedItem);
  console.log(selectedEnrolledClass);
  return (
    <div className="w-full">
      <Helmet>
        <title>Enigma Magic | My Enrolled Classes</title>
      </Helmet>
      <h1 className="text-5xl text-center  mb-4">My Enrolled Classes</h1>
      <hr className="mb-4" />
      <div className="overflow-x-auto w-full">
        <table className="table text-white w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Class Name</th>
              <th>Email</th>
              <th>Instructor</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {selectedEnrolledClass.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.instructor}</td>
                <td className="text-end">${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
