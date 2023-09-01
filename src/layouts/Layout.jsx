import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="h-14 bg-[#135EF2] text-white px-8 lg:px-24 md:px-24">
        <ul className="h-14 flex flex-row items-center text-2xl md:text-xl lg:text-xl font-semibold">
          <li className="mr-4">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addUser">Add Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;
