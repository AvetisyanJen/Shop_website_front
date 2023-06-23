import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";
import { useEffect } from "react";

const ProtectedRoute = (props: any) => {
  const navigate = useNavigate();
  const user: any = localStorage.getItem("token");
  const decoded: any = decodeToken(user);
  console.log(decoded,"aaaaaaaaaaaaaa")
  const checkUserToken = () => {
    if (!user || user && decoded.is_verified==0 ) {
      return navigate('/login');
      console.log("abc")
    }
  }

  useEffect(() => {
    checkUserToken();
  }, [user]);

  return (
    <>
      {decoded? props.children : null}
    </>
  );
}

export default ProtectedRoute;
