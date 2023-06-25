import { useEffect, useState } from 'react';
import { decodeToken } from 'react-jwt';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hook';
import { cartItems } from '../../redux/features/cartSlice';
import { actionCart, actionProducts } from '../../redux/sagas/sagaActions';
import { useDispatch } from 'react-redux';


const Search: React.FC = () => {

  // window.addEventListener("scroll", function () {
  //   const search:any = document.querySelector(".search")
  //   search.classList.toggle("active", window.scrollY > 100)
  // })
  useEffect(() => {
    const handleScroll = () => {
      const search: any = document.querySelector('.search');
      search.classList.toggle('active', window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate();
  const userToken: any = localStorage.getItem('token');
  const profile: any = decodeToken(userToken);
  const [quantity, setQuantity] = useState(0);
  const CartItems = useAppSelector(cartItems);
  const [searchQuery, setSearchQuery] = useState('')
  const dispatch = useDispatch();

  useEffect(() => {
    if (profile) {
      dispatch({
        type: actionCart.GET_CART,
        id: profile.id,
      });
    }
  }, [dispatch]);
  useEffect(() => {
    const updatedQuantity = CartItems.reduce((total, item) => total + item.quantity, 0);
    setQuantity(updatedQuantity);
  }, [CartItems]);

  const logOut = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  const handleSearch = (e: any) => {
    e.preventDefault();
    dispatch({ type: actionProducts.FIND_PRODUCT, productName: searchQuery, navigate })

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
            <form onSubmit={handleSearch} >
              <input className="input-search" type="text" placeholder="Search ..."
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </form>
          </div>

          <div className="icon f_flex width">
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle" style={{ color: '#000000' }}></i>
                {quantity > 0 && <span>{quantity}</span>}
              </Link>
            </div>

            {userToken ? (
              <div className="f_flex">
                <div className="icon-circle" style={{ fontWeight: 'bold' }}>
                  {profile?.userName.split('')[0]}
                </div>
                <i className="fa-solid fa-arrow-right-from-bracket icon-circle" onClick={logOut}></i>
              </div>
            ) : (<Link to="/login">
              <i className="fa fa-user icon-circle"></i>
            </Link>
            )}

          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
