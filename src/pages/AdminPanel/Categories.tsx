// import { useEffect, useState } from "react";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import React from "react";

// import { Typography, Box, TextField, IconButton, Snackbar, Button } from '@mui/material';

// import Alert from '@mui/material/Alert';
// import { useAppDispatch, useAppSelector } from "../../hooks/hook";
// import { actionCategory } from "../../redux/sagas/sagaActions";
// import { allCategorys } from "../../redux/features/categorySlice";

// const Root = styled("div")({
//     margin: "2rem",
// });

// const CategoryContainer = styled(Paper)({
//     margin: "1rem",
//     padding: "1rem",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
// });

// const Categories: React.FC = () => {

//     const dispatch = useAppDispatch();
//     const categorys = useAppSelector(allCategorys);

//     const [categories, setCategories] = useState<string[]>([]);
//     const [remove, setRemove] = useState<boolean>(false);
//     const [add, setAdd] = useState<boolean>(false);
//     const [name, setName] = useState<string>("");
//     const [error, setError] = useState<boolean>(false);
//     const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
//     const [snackbarMessage, setSnackbarMessage] = useState<string>('');
//     const [active, setActive] = useState<boolean>(false);
//     const [rename, setRename] = useState<{ name: string; id: string }>({ name: "", id: "" });
//     const [update, setUpdate] = useState<boolean>(false);
//     const [activeCategory, setActiveCategory] = useState<string | null>(null);
//     const [activeId, setActiveId] = useState<number>();
//     const [notremove, setNotRemove] = useState<string>("");
//     const [correct, setCorrect] = useState<boolean>(false);
    




//     useEffect(() => {
//         dispatch({ type:actionCategory.GET_CATEGORY});
          
//     }, [dispatch,remove, add, update]);
// console.log(categorys)


//     const handleDelete = (id:number) => {
//         // fetch(`http://localhost:5000/cat/delete`, {
//         //     method: "DELETE",
//         //     body: JSON.stringify({
//         //         id,
//         //     }),
//         //     headers: {
//         //         "Content-type": "application/json; charset=UTF-8",
//         //         "Authorization": `Bearer ${token}`
//         //     },
//         // })
//         //     .then((res) => res.json())
//         //     .then((data) => {
//         //         console.log(data)

//         dispatch({ type:actionCategory.DELETE_CATEGORY,id:id});
//                 // if(data.error){
//                 //     setNotRemove(data.error)
//                 //     setCorrect(true)
//                 // }else{
//                 // setSnackbarOpen(true)

//                 // setSnackbarMessage(data.message)

//                 // setRemove(!remove)}
//             // })
//             // .catch((err) => console.log(err));
//     };


//     // const changeCategory = async (id) => {


//     //     fetch(`http://localhost:5000/cat/update`, {
//     //       method: "PUT",
//     //       headers: {
//     //         "Content-type": "application/json; charset=UTF-8",
//     //         "Authorization": `Bearer ${token}`
//     //       },
//     //       body: JSON.stringify({name:rename.name, id }),
//     //     })
//     //       .then((res) => res.json())
//     //       .then((data) => {
//     //         console.log(data)
//     //         setSnackbarOpen(true)
//     //         setUpdate(!update)
//     //         setSnackbarMessage(data.message)

//     //       })
//     //       .catch((err) => console.log(err));
//     // };
//     console.log(name)
//     const createCategory = async (e:any) => {
//          e.preventDefault();
//         try {
//             if (!name) {
//                 setError(true)
//                 return
//             }
//              dispatch({ type:actionCategory.ADD_CATEGORY,name:name});
//             // setAdd(!add);
//              setName('');
//             // setError(false)
//             // setSnackbarOpen(true);
//             // setSnackbarMessage('Category created');
//         } catch (err) {
//             console.error(err);
//             // display error message to user
//         }
//     };
//     // console.log(rename);
    

//     return (<>
    
//         <Root>
//             <Typography variant="h6">Categories</Typography>

//             <Box sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 marginTop: "1rem"
//             }}>

//                 <TextField
//                     sx={{ minWidth: "20rem" }}
//                     id="outlined-basic"
//                     label="Name"
//                     variant="outlined"
//                     required
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     error={!name && error}

//                     helperText={!error ? null : "fill in the field"}
                    
//                 />


//                 <Button variant="contained" onClick={createCategory} color="primary" sx={{ marginLeft: "1rem" }}>
//                     Add Category
//                 </Button>
//             </Box>


//             {categorys.map((category) => (
//     <CategoryContainer key={category.id}>
//         <TextField
//             value={
//                 // rename.id === category.id && rename.name.length >= 0
//                 //     ? rename.name
//                 //     : category.name
//                 category.name
//             }
//             // onChange={(e) => {
//             //     setRename({
//             //         ...rename,
//             //         name: e.target.value,
//             //         id: category.id,
//             //     });

//             //    e.preventDefault()
//             // }}
//             // error={ activeId===category.id && correct}

//             // InputProps={{
//             //     readOnly: !active || activeCategory !== category.id,
//             // }}
//             // helperText={ (activeCategory === category.id && "Edit Category") || (activeId === category.id && notremove) }

//         />

//         <div>
//             <IconButton
//                 aria-label="delete"
//                 onClick={() => {handleDelete(category.id)
//               setActiveId(category.id)
//                    }}
//             >
//                 <DeleteIcon />
//             </IconButton>
//             {activeCategory === category.id ? (
//                 <Button
//                     // onClick={(e) => {
//                     //     setActive(!active);
//                     //     setActiveCategory(null);
//                     //     changeCategory(category.id);
//                     //     setRename({ id: "", name: "" });
                   
//                     // }}
//                 >
//                     save
//                 </Button>
//             ) : (
//                 <Button
//                     // onClick={(e) => {
//                     //     setActiveCategory(category.id);
//                     //     setActive(!active);
                    
//                     // }}
//                     sx={{ cursor: "pointer" }}
//                 >
//                     edit
//                 </Button>
//             )}
//         </div>
//     </CategoryContainer>
// ))}


//             <Snackbar open={snackbarOpen}
//                 sx={{
//                     marginRight: "250px",
//                     marginTop: "50px"
//                 }}
//                 autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
//                 <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
//                     {snackbarMessage}
//                 </Alert>
//             </Snackbar>

//         </Root>
//    </> );
// }
// export default Categories
