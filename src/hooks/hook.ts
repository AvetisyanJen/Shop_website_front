import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import { AppDispatch, RootState } from '../redux/configureStore';
import { decodeToken } from "react-jwt";

interface Decoded {
  id: number;
  email: string;
  role: number;
}
export const useLocalStorage=()=> {
  const userInStorage = localStorage.getItem("token");
  const decoded: Decoded | null = userInStorage ? decodeToken(JSON.parse(userInStorage)?.jwt) : null;

  return { decoded, userInStorage };
}



//const {decoded, userInStorage} = useLocalStorage();

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;