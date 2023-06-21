
// import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"


const Search:React.FC = () => {
  window.addEventListener("scroll", function () {
    const search:any = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  

  return (
    <>
      <section className='search'>
        <div className='cont c_flex'>
          <div className='logo width '>
            <img className="log" src="./images/logo.png" alt='' />
            {/* <h1>Watches</h1> */}
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input className="input-search " type='text' placeholder='Search and hit enter...' />
          </div>

          <div className='icon f_flex width'>
            <Link to="/login">
            <i className='fa fa-user icon-circle'></i>
            </Link>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search