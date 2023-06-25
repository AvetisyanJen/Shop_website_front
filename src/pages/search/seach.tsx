import { useEffect, useState } from "react"
import { useAppSelector } from "../../hooks/hook"
import { search} from "../../redux/features/ProductSlice"


const Search:React.FC=()=>{
    const findProduct=useAppSelector(search)
    const [currentImage, setCurrentImage] = useState("");

    console.log(findProduct,"aaaaaaaaaaaaa")
    const handleImageClick = (url: string) => {
        setCurrentImage(url);
      };
    useEffect(() => {
        if (findProduct && findProduct?.Photos?.length > 0) {
          setCurrentImage(findProduct?.Photos[0].url);
        }
      }, [findProduct])

      if (!findProduct) {
        return <div style={{height:"500px",textAlign:"center"}}>
            <h3 style={{marginTop:"60px"}}>Not Found...</h3></div>;
      }
    return(

        
    <>

<div className="prod-box">

<div>
  <div className="slideshow">

    <div className="big-image">
      <img
        src={`http://localhost:3333/images/${currentImage}`}
        alt={currentImage}
        style={{ width: "450px", height: "400px" }}
      />
    </div>
    <div className="small-images">
      {findProduct?.Photos?.map((image) => (
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
  <h3>{findProduct?.Brand.name}</h3>
  <h2>{findProduct?.name}</h2>
  <p>{findProduct?.Category.name}, {findProduct?.gender.name}</p>
  <p>{findProduct?.description}</p>
  <p>{findProduct?.Movement.name}</p>
  <p>TotalPurchases:
    {" " + findProduct?.totalPurchases}</p>
  <p>{findProduct?.count} pieces</p>
  <p>Price: ${findProduct?.price}</p>


</div>
</div>
    </>)
} 
export default Search