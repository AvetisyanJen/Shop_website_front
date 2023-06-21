import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hook"
import { allCategorys } from "../../redux/features/categorySlice"
import { actionCategory, actionMovement } from "../../redux/sagas/sagaActions"
import React, { useEffect,useState } from "react"
import { allMovements } from "../../redux/features/movementSlice";


const Navbar:React.FC = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState(false);
  const categorys=useAppSelector(allCategorys)
  const dispatch=useAppDispatch()
  const movements=useAppSelector(allMovements)

  useEffect(() => {
    dispatch({ type:actionCategory.GET_CATEGORY});
    dispatch({ type:actionMovement.GET_MOVEMENT});
  }, [dispatch]);

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
                <Link to="/user">Brands</Link>
              </li>
              <li onClick={() => setActive(!active)}>
                Categories
                {active && <div className="modal">
                 <div>
                  <h3>MOVEMENT TYPE</h3>
                  <div>
                    {movements.map((elm)=>{
                   return <p key={elm.id}>
                      {elm.name}
                    </p>
            })}
                  </div>
                 </div>
                 <div>
                  <h3>
                    CATEGORIES
                  </h3>
                  <div>
                    {categorys.map((elm)=>{
                   return <p key={elm.id}>
                      {elm.name}
                    </p>
            })}
                  </div>
                 </div>
                  </div>}
              </li>
              <li>
                <Link to="/contact">Men's</Link>
              </li>
              <li>
                <Link to="/contact">Women's</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
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