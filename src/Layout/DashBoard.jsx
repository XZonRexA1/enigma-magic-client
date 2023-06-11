import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  const [isAdmin] = useAdmin();
  // const isAdmin = true
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

          {isAdmin ? (
            <>
            
              <li>
                <Link to="/dashboard/adminHome"><FaHome/> Admin Home</Link>
              </li>
              <li>
                <Link to="/dashboard/manageClasses"><FaBook /> Manage Classes</Link>
              </li>
              <li>
                <Link to="/dashboard/manageUsers"><FaUsers />Manage Users</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/studentHome"><FaHome></FaHome> Student Home</Link>
              </li>
              <li>
                <Link to="/dashboard/mySelectedClasses">
                  <FaShoppingCart/> My Selected Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myEnrolledClasses">
                <FaCalendarAlt />  My Enrolled Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myPaymentHistory">
                <FaWallet/>  My Payment History
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
