import { useEffect, useState } from 'react';
import { decodeToken } from 'react-jwt';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hook';
import { cartItems } from '../../redux/features/cartSlice';
import { actionCart } from '../../redux/sagas/sagaActions';
import { useDispatch } from 'react-redux';


const Search: React.FC = () => {

  window.addEventListener("scroll", function () {
    const search:any = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  const navigate = useNavigate();
  const userToken:any = localStorage.getItem('token');
  const profile:any = decodeToken(userToken);

  const CartItems = useAppSelector(cartItems);

  const dispatch = useDispatch();
const quantity=CartItems.reduce((price, item) => price + item.quantity, 0)
  useEffect(() => {

    if (profile) {
      dispatch({
        type: actionCart.GET_CART,
        id: profile.id,
      });

    }

  
  }, [dispatch,quantity]);


  const logOut = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      <section className="search">
        <div className="cont c_flex">
          <div className="logo width">
            <img className="log" src="../images/logo.png" alt="" />
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input className="input-search" type="text" placeholder="Search and hit enter..." />
          </div>

          <div className="icon f_flex width">
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle" style={{ color: '#000000' }}></i>
                {CartItems.length > 0 &&  <span>{quantity}</span>}
              </Link>
            </div>
            <Link to="/login">
              {userToken ? (
                <div className="f_flex">
                  <div className="icon-circle" style={{ fontWeight: 'bold' }}>
                    {profile?.userName.split('')[0]}
                  </div>
                  <i className="fa-solid fa-arrow-right-from-bracket icon-circle" onClick={logOut}></i>
                </div>
              ) : (
                <i className="fa fa-user icon-circle"></i>
              )}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
