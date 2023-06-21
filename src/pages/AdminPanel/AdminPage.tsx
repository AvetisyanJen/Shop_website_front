// import { Link, Outlet } from "react-router-dom";
// import { MenuItem, MenuList, Box } from "@mui/material";
// import React from 'react';

// const AdminPage:React.FC=()=>{
//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           width: 220,
//           height: "91vh",
//           maxWidth: "100%",
//           boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
//           borderRadius: "none",
//           backgroundColor: "black",
//         }}
//       >
//         <MenuList
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "20px",
//             color: "white",
//             marginRight: 50,
//           }}
//         >
//           <MenuItem sx={{ marginTop: "15px" }}>Dashboard</MenuItem>

//           <Link to="products" style={{ textDecoration: "none" }}>
//             <MenuItem sx={{ color: "white" }}>Products</MenuItem>
//           </Link>
//           <Link to="categories" style={{ textDecoration: "none" }}>
//             <MenuItem sx={{ color: "white" }}>Categories</MenuItem>
//           </Link>
//         </MenuList>
//         <Outlet />
//       </Box>
//     </>
//   );
// }
// export default AdminPage;
