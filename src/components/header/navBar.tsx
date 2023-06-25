import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hook"
import { allCategorys } from "../../redux/features/categorySlice"
import { actionCategory, actionMovement } from "../../redux/sagas/sagaActions"
import React, { useEffect, useState } from "react"
import { allMovements } from "../../redux/features/movementSlice";


const Navbar: React.FC = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  // const [active, setActive] = useState(false);

  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch({ type: actionCategory.GET_CATEGORY });
    dispatch({ type: actionMovement.GET_MOVEMENT });
  }, [dispatch]);
  const userToken: any = localStorage.getItem('token');
  return (
    <>
      <header className="header">
        <div className="cont d_flex">
          <div className="navlink">
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link j_flex uppercase"} onClick={() => setMobileMenu(false)}>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              {userToken &&

                <li>
                  <Link to="/order">Orders</Link>
                </li>
              }
            </ul>

            {/* <button  onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className="fas fa-times close home-btn"></i> : <i className="fas fa-bars open"></i>}
            </button> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
