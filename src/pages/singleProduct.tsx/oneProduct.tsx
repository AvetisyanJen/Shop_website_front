import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { getSelectedProduct } from "../../redux/features/ProductSlice";
import { actionProducts } from "../../redux/sagas/sagaActions";
import "./oneProduct.css"
const SingleProduct:React.FC=()=>{
    const { id } = useParams<{ id?: string }>();
    const dispatch=useAppDispatch()
    const [currentImage, setCurrentImage] = useState("");
    const product=useAppSelector(getSelectedProduct)
    useEffect(() => {
            if (id) {
              dispatch({type: actionProducts.  GET_ONEPRODUCT,id});
            }
          }, [dispatch, id]);
          console.log(product)
            useEffect(() => {
    if (product  && product?.Photos?.length > 0) {
      setCurrentImage(product?.Photos[0].url); 
    }
  }, [product]);

  if (!product) {
    return <div>Loading...</div>;
  }

            const handleImageClick = (url: string) => {
    setCurrentImage(url); 
  };
    return(<>

<div className="prod-box">
   
       <div>
       <div className="slideshow">
         <div className="big-image">
             <img
              src={`http://localhost:3333/images/${currentImage}`}
              alt={currentImage}
              style={{ width: "450px", height:"400px" }}
            />
          </div>
          <div className="small-images">
            {product?.Photos?.map((image) => (
              <img
                key={image?.url}
                src={`http://localhost:3333/images/${image.url}`}
                alt={image.url}
                style={{ width: "70px", cursor: "pointer" }}
                onClick={() => handleImageClick(image.url)}
                className={image?.url === currentImage ? "selected" : ""}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="txt-box">
      <h3>{product.Brand.name}</h3>
      <h2>{product?.name}</h2>
      <p>{product.Category.name}, {product.gender.name}</p>
      <p>{product?.description}</p>
      <p>{product.Movement.name}</p>

      <p>Price: ${product?.price}</p>

  
      </div>
    </div>
    </>)
}
export default SingleProduct



