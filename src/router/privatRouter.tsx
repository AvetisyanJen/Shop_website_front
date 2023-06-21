import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";
import { useEffect } from "react";

const ProtectedRoute = (props: any) => {
  const navigate = useNavigate();
  const user: any = localStorage.getItem("token");
  const decodedToken: any = decodeToken(user);
  
  const checkUserToken = () => {
    if (!user || user === 'undefined' || decodedToken.role === 0) {
      return navigate('/login');
    }
  }

  useEffect(() => {
    checkUserToken();
  }, [decodedToken]);

  return (
    <>
      {decodedToken ? props.children : null}
    </>
  );
}

export default ProtectedRoute;
