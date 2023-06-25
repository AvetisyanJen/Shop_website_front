import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook"
import { total } from "../../redux/features/ProductSlice"
import { actionProducts } from "../../redux/sagas/sagaActions";
import "./style.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SampleNextArrow = (props: any) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <div className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </div>
    </div>
  )
}
const SamplePrevArrow = (props: any) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <div className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </div>
    </div>
  )
}


const Purchases: React.FC = () => {
  const orders = useAppSelector(total)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch({
      type: actionProducts.GET_TOTALPURCHASES,
    })
  }, [dispatch])

  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (<>
    <Slider {...settings}>
      {orders.map((productItems) => {
        return (
          <div className='box sold'>
            <div className="product mtop">
              <div className='img'>
                <span className='discount'>sold {productItems.totalPurchases} times</span>
                {productItems.Photos && (<img src={"http://localhost:3333/images/" + productItems?.Photos[0]?.url}
                  style={{ width: '200px', height: '200px' }} alt={productItems.name} />)}

              </div>

              <div className='product-details'>
                <h3>{productItems.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>${productItems.price}.00 </h4>

                </div>
              </div>
            </div>
          </div>
        )
      })}
    </Slider>

  </>)
}
export default Purchases