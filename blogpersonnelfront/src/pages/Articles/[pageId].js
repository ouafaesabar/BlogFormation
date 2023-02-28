import * as React from 'react';
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArticleList from "compnents/ArticleList";
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router'
import { Link } from "next/router"
import PaginationItem from '@mui/material/PaginationItem';
import { useGetArticles } from 'hooks/useGetArticles';



const Articles = ({params}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    

    const menuItems = [
        "Author",
        "Date",
        "Title"
    ]
    const {pageId} = params
    
        const {
            isLoading,
            isError,
            pageArticles
        } = useGetArticles(pageId, 3)
      
    return (
        <Paper elevation={3}
            sx={{
                position: "relative",
                top: "5%",
                left: "5%",
                width: "90%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                marginTop: "30px",
                marginBottom: "30px",
            }}>
            <Stack sx={{
                alignSelf: "flex-end",
                marginRight: "40px"
            }}>
                <Button
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                    variant={"contained"}
                >
                    Filter By
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left'
                    }}
                >
                    {menuItems.map((item, index) => {
                        return (
                            <MenuItem onClick={handleClose} key={index}>{item}</MenuItem>
                        )
                    })}
                </Menu>

            </Stack>

            <Stack sx={{
                alignSelf: "center",
                paddingTop: "20px",
                paddingBottom: "20px",
                width : "100%",
                display : "flex",
                flexDirection : "column",
                justifyContent : "center",
                alignItems : "center"

            }}>
                <ArticleList isLoading={isLoading} isError={isError} pageArticles={pageArticles}/>
            </Stack>


        </Paper>
    );
}

export default Articles;


export function getServerSideProps(context) {
    return {
      props: {params: context.params}
    };
  }