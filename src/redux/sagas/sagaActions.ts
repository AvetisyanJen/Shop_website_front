export const actionProducts: { [key: string]: string } = {
    GET_PRODUCTS: "Get all products",
  };
  export const actionUser: { [key: string]: string } = {
    ADD_USER: "Add new user",
    LOGIN_USER:"Login user"
  };
  export const actionCart: { [key: string]: string } = {
    ADD_CART: "Add to cart",
    GET_CART: "Get products in cart",
    DELETE_CART:"Remove CartIetems",
    INCREMENT:"Add cartItem",
    DECREMENT:"Delete cartItem",

  }
  export const actionOrder:{[key: string]: string }={
    PAYMENT:"Pay to order",
    GET_ORDER:"get all order-products"

  }
  export const actionCategory:{[key: string]: string }={
    GET_CATEGORY:"Get all categorys",
    EDITE_CATEGORY:'change categorys',
    DELETE_CATEGORY:"delete category",
    ADD_CATEGORY:"Add new category",
  }
  export const actionMovement:{[key: string]: string }={
    GET_MOVEMENT:"Get all types movements",
  
  }
  export const actionBrand:{[key: string]: string }={
    GET_BRAND:"Get all brands",
  
  }
  export const actionGender:{[key: string]: string }={
    GET_GENDER:"Get genders",
  
  }