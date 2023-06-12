import { Fade } from "react-awesome-reveal";
import useInstructors from "../../hooks/useInstructors";
import { Helmet } from "react-helmet-async";


const Instructors = () => {
    const [instructors] = useInstructors();

    return (
        <Fade delay={1e3} cascade damping={1e-1}>
      <Helmet>
        <title>Enigma Magic | Instructors</title>
      </Helmet>
      <h1 className="text-5xl text-center  pt-24">Instructors</h1>
      <hr className="mb-4 mt-4" />
      <div className="w-full md:grid md:grid-cols-3 mx-4 mb-4 text-black gap-2 ">
        {instructors.map((singleInstructor) => (
          <div
            key={singleInstructor._id}
            className={`card w-96 bg-white`}
          >
            <figure className="px-10 pt-10">
              <img
                src={singleInstructor.image}
                alt="image of magical classes"
                className="rounded-xl h-96 w-96"
              />
            </figure>
            <div className="card-body  ">
              <h2 className="card-title">Name: <br /> {singleInstructor.name}</h2>
              <p>Email: <br /> {singleInstructor.email}</p>
            </div>
          </div>
        ))}
      </div>
    </Fade>
    );
};

export default Instructors;