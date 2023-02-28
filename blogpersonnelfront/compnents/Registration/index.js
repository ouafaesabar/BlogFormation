import Paper  from "@mui/material/Paper";
import Box  from "@mui/material/Box";
import Image from "next/image";
import NovelisLogo from "../../public/images/Novelis_logo.svg"


const Registration = ({children}) => {
    return ( 
        <Paper elevation={3}
        sx={{
         position : "absolute",
         top : "5%",
         left : "5%",
         height : "90vh",
         width : "90%",
         display:"flex",
         justifyContent : "space-between",
         padding : "20px"
        }}>
         <Box sx={{
             width : "60%",
             display:"flex",
             justifyContent :"center",
             alignItems : "center"
         }}>
             <Image src={NovelisLogo}
                    style={{
                     width : "500px",
                     height : "500px"
                    }}/>
         </Box>
         <Box sx={{
             display : "flex",
             flexDirection :"column",
             justifyContent : "center",
             alignItems : "center",
             padding : " 20px",
             width : "40%"
         }}>
              {children}
         </Box>
         

 </Paper>
     );
}

export default Registration;