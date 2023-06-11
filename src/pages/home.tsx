import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/hook";
import { actionCart, actionProducts } from "../redux/sagas/sagaActions";
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Product, allProducts } from "../redux/features/ProductSlice";
import { decodeToken } from "react-jwt";


const Home: React.FC = () => {

  const dispatch = useAppDispatch();
  const products = useAppSelector(allProducts);

  useEffect(() => {
    dispatch({ type: actionProducts.GET_PRODUCTS });
  }, [dispatch]);

  function addToCart(id: number) {
    const user = localStorage.getItem("token");
    if (user) {
      const decoded: any = decodeToken(user);
      dispatch({
        type: actionCart.ADD_CART,
        payload: {
          ProductId: id,
          userId: decoded.id
        }
      });
    }
  }
  

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", alignItems: "center" }}>
        {products.map((item:Product) => (
          <Card key={item.id} style={{ margin: '10px', maxWidth: '300px' }}>
         {item.Photos && (
              <img src={"http://localhost:3333/images/" + item?.Photos[0]?.url} style={{ width: '100%', height: 'auto' }} alt={item.name} />
         )}
            <CardContent>
              <Typography variant="h6" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {item.price}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {item.count}
              </Typography>
              <IconButton
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: '#fff',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.3s ease',
                }}
                aria-label="Add to Cart"
                onClick={() => addToCart(item.id)}
              >
                <AddShoppingCartIcon />
              </IconButton>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
export default Home;

