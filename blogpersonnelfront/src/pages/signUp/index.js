import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Registration from "compnents/Registration";
import { useForm } from "react-hook-form";
import { useAddUser } from "hooks/useAddUser";




function SignUp() {
    const { register, handleSubmit } = useForm();
    console.log(register)
    const {mutate} = useAddUser();
    const onSubmit = data => {
        console.log(data);
        mutate(data);
    };

    return (
        <Registration>
            <Typography variant="h2"
                sx={{
                    mb: "40px",
                    fontFamily: "Arial",
                    fontWeight: "bolder",
                    color: "secondary.main"
                }}>
                Sign Up
            </Typography>
            <Box component="form"
                 onSubmit = {handleSubmit(onSubmit)}>
                <TextField 
                    label="UserName"
                    fullWidth
                    margin="normal"
                    {...register("userName")}
                />
                <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    {...register("userEmail")}

                />
                <TextField
                    label="Password"
                    fullWidth
                    margin="normal"
                    type="password"
                    {...register("userPassword")}
                />


                <Button fullWidth
                    size="large"
                    variant="outlined"
                    color="primary"
                    sx={{
                        mt: "20px",
                    }}
                    type="submit">
                    Sign Up
                </Button>
            </Box>
        </Registration>
    );
}


export default SignUp;

SignUp.getLayout = (page) => page;