import useClasses from "../../hooks/useClasses";

const Classes = () => {
  const [classes] = useClasses();

  const getClassCardColor = (seats) => {
    if (seats === 0) {
      return "bg-red-500";
    } else {
      return "bg-white";
    }
  };

  const isButtonDisabled = (seats) => {
    return seats === 0;
  };

  return (
    <div className="w-full md:grid md:grid-cols-3 m-4 text-black gap-2 ">
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
            <p>Price: {singleClass.price}</p>
            <div className="card-actions">
              <button
                className="btn"
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
