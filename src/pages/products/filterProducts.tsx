import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { allProducts } from "../../redux/features/ProductSlice";
import { actionBrand, actionCart, actionCategory, actionGender, actionMovement, actionProducts } from "../../redux/sagas/sagaActions";
import "./products.css";
import { allCategorys } from "../../redux/features/categorySlice";
import { allMovements } from "../../redux/features/movementSlice";
import { allBrands } from "../../redux/features/brandSlice";
import { allGenders } from "../../redux/features/genderSlice";
import { decodeToken } from "react-jwt";
import { Link } from "react-router-dom";

interface Filter {
  [key: string]: string[] | string;
}

const Product: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(allProducts);
  const categorys = useAppSelector(allCategorys);
  const movements = useAppSelector(allMovements);
  const brands = useAppSelector(allBrands);
  const genders = useAppSelector(allGenders);
  const [active, setactive] = useState(false);
  const [activMove, setActivMove] = useState(false);
  const [activBrand, setActivBrand] = useState(false);
  const [activGender, setActivgender] = useState(false);

  const [priceRange, setPriceRange] = useState({
    from: "",
    to: "",
  });

  useEffect(() => {
    dispatch({ type: actionProducts.GET_PRODUCTS });
    dispatch({ type: actionCategory.GET_CATEGORY });
    dispatch({ type: actionMovement.GET_MOVEMENT });
    dispatch({ type: actionBrand.GET_BRAND });
    dispatch({ type: actionGender.GET_GENDER });
  }, [dispatch]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;

    setFilter((prevFilter) => {
      if (typeof prevFilter[name] === 'string') {
        return {
          ...prevFilter,
          [name]: checked ? value : '',
        };
      }

      const updatedFilter = [...prevFilter[name]];

      if (checked) {
        updatedFilter.push(value);
      } else {
        const index = updatedFilter.indexOf(value);
        if (index !== -1) {
          updatedFilter.splice(index, 1);
        }
      }

      return {
        ...prevFilter,
        [name]: updatedFilter,
      };
    });
  };

  const [filter, setFilter] = useState<Filter>({
    category: [],
    movement: [],
    price: "",
    gender: [],
    brand: [],
  });

  const handlePriceRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setPriceRange((prevPriceRange) => ({
      ...prevPriceRange,
      [name]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilter({
      category: [],
      movement: [],
      price: "",
      gender: [],
      brand: [],
    });
    setPriceRange({
      from: "",
      to: "",
    });
  };

  const filteredProducts = products.filter((product) => {
    const price = product.price.toString();
    const { from, to } = priceRange;

    const isWithinPriceRange =
      (from === "" || Number(price) >= Number(from)) &&
      (to === "" || Number(price) <= Number(to));

    return (
      (filter.category.length === 0 || filter.category.includes(product.Category?.name.toLowerCase())) &&
      (filter.movement.length === 0 || filter.movement.includes(product.Movement?.name.toLowerCase())) &&
      (filter.gender.length === 0 || filter.gender.includes(product.gender?.name.toLowerCase())) &&
      (filter.brand.length === 0 || filter.brand.includes(product.Brand?.name.toLowerCase())) &&
      isWithinPriceRange
    );
  });
    function addToCart(id: number) {
 
    const user = localStorage.getItem("token");
    if (user) {
      const decoded: any = decodeToken(user);
      const product = products.find(item => item.id === id);
      if (product && product.count > 0) {
        dispatch({
          type: actionCart.ADD_CART,
           payload: {
            ProductId: id,
            userId: decoded.id
          }
        });
      }
    }
  }

  return (
    <div className="product-container">
      <div className="filters">
        <div className="cleare-filters">
          <h5>Filters</h5>
          <button onClick={handleClearFilters}>Clear Filters</button>
        </div>
        <div onClick={() => setactive(!active)} className="isactive">
          <h6>Category</h6>
          {active ? (
            <i className="fa-sharp fa-solid fa-chevron-up fa-lg"></i>
          ) : (
            <i className="fa-solid fa-chevron-down fa-lg"></i>
          )}
        </div>

        {active && categorys.map((category) => (
          <label key={category.id} className="filter-item">
            <div className="child-input">
              <input
                type="checkbox"
                name="category"
                value={category.name.toLowerCase()}
                checked={filter.category.includes(category.name.toLowerCase())}
                onChange={handleFilterChange}
                className="filter-item-input"
              />
              <span className="filter-item-name">{category.name}</span>
            </div>
          </label>
        ))}

        <div onClick={() => setActivMove(!activMove)} className="isactive">
          <h6>Movement</h6>
          {activMove ? (
            <i className="fa-sharp fa-solid fa-chevron-up fa-lg"></i>
          ) : (
            <i className="fa-solid fa-chevron-down fa-lg"></i>
          )}
        </div>

        {activMove && movements.map((movement) => (
          <label key={movement.id} className="filter-item">
            <div className="child-input">
              <input
                type="checkbox"
                name="movement"
                value={movement.name.toLowerCase()}
                checked={filter.movement.includes(movement.name.toLowerCase())}
                onChange={handleFilterChange}
                className="filter-item-input"
              />
              <span className="filter-item-name"> {movement.name}</span>
            </div>
          </label>
        ))}

        <div onClick={() => setActivBrand(!activBrand)} className="isactive">
          <h6>Brand</h6>
          {activBrand ? (
            <i className="fa-sharp fa-solid fa-chevron-up fa-lg"></i>
          ) : (
            <i className="fa-solid fa-chevron-down fa-lg"></i>
          )}
        </div>

        {activBrand && brands.map((brand) => (
          <label key={brand.id} className="filter-item">
            <div className="child-input">
              <input
                type="checkbox"
                name="brand"
                value={brand.name.toLowerCase()}
                checked={filter.brand.includes(brand.name.toLowerCase())}
                onChange={handleFilterChange}
                className="filter-item-input"
              />
              <span className="filter-item-name">{brand.name}</span>
            </div>
          </label>
        ))}

        <div onClick={() => setActivgender(!activGender)} className="isactive">
          <h6>Gender</h6>
          {activGender ? (
            <i className="fa-sharp fa-solid fa-chevron-up fa-lg"></i>
          ) : (
            <i className="fa-solid fa-chevron-down fa-lg"></i>
          )}
        </div>

        {activGender && genders.map((gender) => (
          <label key={gender.id} className="filter-item">
            <div className="child-input">
              <input
                type="checkbox"
                name="gender"
                value={gender.name.toLowerCase()}
                checked={filter.gender.includes(gender.name.toLowerCase())}
                onChange={handleFilterChange}
                className="filter-item-input"
              />
              <span className="filter-item-name">{gender.name}</span>
            </div>
          </label>
        ))}
        <div className="price-filter">
          <h6>Price Range</h6>
          <div className="price-range">
            <input
              type="number"
              name="from"
              placeholder="From"
              value={priceRange.from}
              onChange={handlePriceRangeChange}
              className="price-input"
            />
            <input
              type="number"
              name="to"
              placeholder="To"
              value={priceRange.to}
              onChange={handlePriceRangeChange}
              className="price-input"
            />
          </div>
        </div>
      </div>

{/* product list */}

      <div className="product-list">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className='box' key={product.id}>
              
            <div className='product mtop'>
            <Link to={`/productPage/${product.id}`}>
              <div className='img'>
             
            {product.Photos && ( <img src={"http://localhost:3333/images/" + product?.Photos[0]?.url}
            style={{ width: '200px', height: '200px' }} alt={product.name} />)}
              
              </div>
              </Link>
              <div className='product-details'>
              <Link to={`/productPage/${product.id}`}>
                <h3>{product.name}</h3>
                </Link>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>

                <div className='price'>
                  <h5>${product.price}.00 </h5>
                  <i className="fa-solid fa-cart-plus"
                       onClick={() =>  addToCart(product.id) }></i>
                  
                </div>

              </div>
            
            </div>
            
          </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>


    </div>
  );
};

export default Product;











