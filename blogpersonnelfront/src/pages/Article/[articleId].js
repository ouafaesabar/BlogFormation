import * as React from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import ButtonBase from '@mui/material/ButtonBase';
import CommentSection from 'compnents/CommentSection';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useGetArticle } from 'hooks/useGetArticle';

const Article = ({params}) => {

    const anchor = "right";
    const [state, setState] = React.useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    const {articleId} = params
    const {
        isLoading,
        isError,
        article
    } = useGetArticle(articleId);
 
    if(isLoading) return <Typography>is Loading</Typography>
    if(isError) return <Typography>Error</Typography>
    if(article){
    return (
        <>
            <Grid container
                spacing={2}
                direction={{xs : "column", md: "row"}}
                justifyContent="space-between">
                <Grid item xs={3}
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{
                        padding: "20px"
                    }}>

                    <Box sx={{
                        width: "300px",
                        height: "300px",
                        backgroundImage: "url(/images/background.jpg)",
                        backgroundSize: "cover",
                        borderRadius: "10px",
                        marginTop: "200px"

                    }} />
                    <Typography variant='h4'
                        sx={{ marginTop: "10px" }}>
                        Author Name</Typography>
                </Grid>


                <Grid item xs={9}
                    sx={{
                        padding: "20px"
                    }}>


                    <Stack sx={{
                        margin: "10px",
                        padding: "20px",

                    }}>
                        <Typography variant='h1'>
                            {article.articleTitle}
                        </Typography>
                    </Stack>
                    <Stack sx={{
                        margin: "10px",
                    }}>
                        <Box sx={{
                            backgroundImage: "url(/images/background.jpg)",
                            backgroundSize: "cover",
                            width: "100%",
                            height: "500px",
                            borderRadius: "10px"
                        }} />


                    </Stack>
                    <Stack sx={{
                        margin: "10px",
                        marginTop: "30px",
                        padding: "20px",
                    }}>
                        <Typography variant='body1'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                            est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                            veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                            commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>


            <ButtonBase onClick={toggleDrawer(anchor, true)}>
                       
                <Chip color='primary' 
                label={
                    <Typography>
                        Comments
                    </Typography>
                }
                    sx={{
                        position: "fixed",
                        bottom: "5%",
                        left: "50%",
                        cursor : "pointer",
                        padding : "10px"
                    }} 
                icon ={<ChatBubbleOutlineIcon/>}/>
            </ButtonBase>
            <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
                minFlingVelocity = {1000}>
                <CommentSection comments={article.comments}/>
            </SwipeableDrawer>
        </>
    );
}


}

export default Article;


export function getServerSideProps(context){

    return {
        props : {params : context.params}
    }
}