import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useForm } from "react-hook-form";
import { useAddComment } from "hooks/useAddComments";
import Button from "@mui/material/Button";


const CommentSection = ({ comments }) => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            numberOfLikes: 0,
            commentPublishingDate: new Date(),
            article: {
                articleId: 1
            },
            user: {
                userId: 1
            }
        }
    });

    const { mutate } = useAddComment()
    const onSubmit = data => {
        let comment = data;
        comment.commentPublishingDate = new Date();
        console.log(data);
        console.log(comment);
        mutate(comment);
    };


    return (
        <Box sx={{
            padding: "30px"

        }}>
            <Typography variant='h4'
                sx={{
                    marginBottom: "20px"
                }}
            >
                Comments
            </Typography>
            {comments?.length > 0 ?
                (
                    <>
                        <Typography
                            variant="body2"
                            color="grey"
                            sx={{
                                marginBottom: "30px",
                                fontStyle: "italic"
                            }}>
                            {comments.length} comments
                        </Typography>
                        <Divider sx={{
                            marginBottom: "20px"
                        }} />

                        <List>
                            {comments.map((comment) => {
                                return (
                                    <ListItem
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            marginBottom: "5px"
                                        }}
                                        key={comment.commentId}
                                        divider
                                    >
                                        <Box sx={{
                                            display: "flex",
                                            marginBottom: "20px"
                                        }}>
                                            <ListItemAvatar>
                                                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                                                    {comment.user.userName.charAt(0).toUpperCase()}
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText>
                                                <Typography>{comment.user.userName}</Typography>
                                            </ListItemText>
                                        </Box>
                                        <Box sx={{
                                            maxWidth: "300px",
                                            marginBottom: "20px"

                                        }}>
                                            <Typography variant="body2">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </Typography>
                                        </Box>
                                        <Box sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: 'space-between',
                                            width: "100%"
                                        }}>
                                            <Box sx={{
                                                display: "flex",
                                            }}>
                                                <FavoriteBorderIcon color="primary"
                                                    sx={{
                                                        marginRight: "5px"
                                                    }} />
                                                <Typography color="primary">10</Typography>
                                            </Box>

                                            <Box>
                                                <Typography color="primary">{comment.commentPublishingDate}</Typography>
                                            </Box>
                                        </Box>
                                    </ListItem>
                                );

                            })}

                        </List>
                    </>)
                :
                (
                    <>
                        <Typography
                            variant="body2"
                            color="grey"
                            sx={{
                                marginBottom: "30px",
                                fontStyle: "italic"
                            }}>
                            0 comments
                        </Typography>
                        <Divider sx={{
                            marginBottom: "20px"
                        }} />
                    </>
                )

            }
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "15px"
                }}
            >
                <Avatar sx={{
                    bgcolor: 'secondary.main',
                    marginRight: "5px"
                }}>
                    A
                </Avatar>
                <TextField
                    label="Ajouter un commentaire"
                    multiline
                    rows={4}
                    fullWidth
                    sx={{
                        marginTop: "10px"
                    }}
                    {...register("commentContent")}/>
                <Button fullWidth
                    size="large"
                    variant="outlined"
                    color="primary"
                    sx={{
                        mt: "20px",
                    }}
                    type="submit"
                    >
                    Add Comment
                </Button>
            </Box>

        </Box>);
}

export default CommentSection;