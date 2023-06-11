import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useClasses from "../../hooks/useClasses";
import { useLocation, useNavigate } from "react-router-dom";

const Classes = () => {
  const [classes] = useClasses();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // checking the if seats are 0 then change the bg color to red
  const getClassCardColor = (seats) => {
    if (seats === 0) {
      return "bg-red-500";
    } else {
      return "bg-white";
    }
  };

  // checking the if the seats are 0 then disabled the button
  const isButtonDisabled = (seats) => {
    return seats === 0;
  };

  const handleAddToMySelectedClass = (singleClass) => {
    // console.log(singleClass);
    if (user && user.email) {
      const classItem = {
        classId: singleClass._id,
        name: singleClass.name,
        image: singleClass.image,
        seats: singleClass.seats,
        price: singleClass.price,
        instructor: singleClass.instructor,
        email: user.email,
      };
      fetch(`http://localhost:5000/mySelectedClass`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Classed has Been Selected",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to select the class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="w-full md:grid md:grid-cols-3 mx-4 text-black gap-2 ">
      {classes.map((singleClass) => (
        <div
          key={singleClass._id}
          className={`card w-96 ${getClassCardColor(singleClass.seats)}`}
        >
          <figure className="px-10 pt-10">
            <img
              src={singleClass.image}
              alt="image of magical classes"
              className="rounded-xl h-96 w-96"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{singleClass.name}</h2>
            <p>Instructor: {singleClass.instructor}</p>
            <p>Seats: {singleClass.seats}</p>
            <p>Price: ${singleClass.price}</p>
            <div className="card-actions">
              <button
                className="btn"
                onClick={() => handleAddToMySelectedClass(singleClass)}
                disabled={isButtonDisabled(singleClass.seats)}
              >
                Select
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
