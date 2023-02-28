import { Box } from "@mui/material";
import ResponsiveAppBar from "compnents/ResponsiveAppBar";


const Layout = ({children}) => {
    return (
        <>
        <ResponsiveAppBar/>
        <Box sx={{
            mt : "120px"
        }}>{children}</Box>
        </>

    );
}

export default Layout;