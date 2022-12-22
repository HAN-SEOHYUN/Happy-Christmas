import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="d-flex">
        <div>
          <Link
            className="btn btn-success me-2"
            type="button"
            id="from-Btn"
            onClick={() => {
              if (window.location.pathname === "/") {
                window.location.reload();
              }
            }}
            to="/"
          >
            From.한서현
          </Link>
        </div>
        <div>
          <Link className="btn btn-danger me-2" type="button" to="register" id="to-Btn">
            To.한서현
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
