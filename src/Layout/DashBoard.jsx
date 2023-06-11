import { FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  const isInstructor = false;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          {isInstructor ? (
            <>
            
              <li>
                <Link to="/dashboard/addAClass">Add a Class</Link>
              </li>
              <li>
                <Link to="/dashboard/myClasses">My Classes</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/mySelectedClasses"><FaHome></FaHome> Student Home</Link>
              </li>
              <li>
                <Link to="/dashboard/mySelectedClasses">
                  My Selected Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myEnrolledClasses">
                  My Enrolled Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myPaymentHistory">
                  My Payment History
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
