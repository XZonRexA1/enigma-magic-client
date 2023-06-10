import { Helmet } from "react-helmet-async";
import useMySelectedClass from "../../../hooks/useMySelectedClass";
import { FaTrashAlt } from "react-icons/fa";

const MySelectedClasses = () => {
  const [mySelectedClass] = useMySelectedClass();
  console.log(mySelectedClass)
  const total = mySelectedClass.reduce((sum, item)=> item.price + sum, 0)
  console.log(total)
  return (
    <div>
      <Helmet>
        <title>Enigma Magic | My Selected Classes</title>
      </Helmet>
      <div className="w-full">
        <Helmet>
          <title>Bistro Boss | My Cart</title>
        </Helmet>
        <div className="uppercase font-semibold flex justify-evenly items-center h-[60px]">
          <h3 className="text-3xl">Total Classes: {mySelectedClass.length}</h3>
          <h3 className="text-3xl mx-4">
            Total Price: ${total.toFixed()}
          </h3>
          <button className="btn btn-warning btn-sm">pay</button>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table text-white w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Action</th>
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
                  <td className="text-end">${item.price}</td>
                  <td>
                    <button className="btn btn-ghost  bg-red-800">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySelectedClasses;
