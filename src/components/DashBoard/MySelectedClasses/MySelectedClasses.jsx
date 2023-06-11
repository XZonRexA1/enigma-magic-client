import { Helmet } from "react-helmet-async";
import useMySelectedClass from "../../../hooks/useMySelectedClass";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const MySelectedClasses = () => {
  const [mySelectedClass, refetch] = useMySelectedClass();

  const navigate = useNavigate();
  const handlePay = (item) => {
    navigate("/dashboard/payment", { state: { selectedItem: item } });
  };

  // console.log(mySelectedClass);
  const total = mySelectedClass.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://enigma-magic-server-xzonrexa1.vercel.app/mySelectedClass/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <Fade delay={1e3} cascade damping={1e-1}>
      <div className="w-full">
        <Helmet>
          <title>Enigma Magic | My Selected Classes</title>
        </Helmet>
        <h1 className="text-4xl text-center mb-4">My Selected Classes</h1>
        <hr className="mb-4" />
        <div className="uppercase font-semibold flex justify-evenly items-center h-[60px]">
          <h3 className="text-3xl">Total Classes: {mySelectedClass.length}</h3>
          <h3 className="text-3xl mx-4">Total Price: ${total.toFixed()}</h3>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table text-white w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class</th>
                <th>Class Name</th>
                <th>Instructor</th>
                <th>Price</th>
                <th>Action</th>
                <th>Pay</th>
              </tr>
            </thead>
            <tbody>
              {mySelectedClass.map((item, index) => (
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
                  <td>{item.instructor}</td>
                  <td className="text-end">${item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost  bg-red-800"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handlePay(item)}
                      className="btn btn-warning btn-sm"
                    >
                      pay
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fade>
  );
};

export default MySelectedClasses;
