import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link"
import Registration from "compnents/Registration";





function SignIn() {
    return (
        <Registration>
            <Typography variant="h2"
                sx={{
                    mb: "40px",
                    fontFamily: "Arial",
                    fontWeight: "bolder",
                    color: "secondary.main"
                }}>
                Login
            </Typography>
            <TextField id="outlined-required"
                defaultValue="Email"
                fullWidth
                margin="normal"
            />
            <TextField id="outlined-required"
                defaultValue="Password"
                fullWidth
                margin="normal"
            />
            <FormControlLabel
                sx={{ alignSelf: "flex-start" }}
                control={<Checkbox defaultChecked />} label="Remember me" />

            <Button fullWidth
                size="large"
                variant="outlined"
                color="primary"
                sx={{
                    mt: "20px",
                }}>
                Login
            </Button>

            <Link href="#"
                color="inherit"
                sx={{
                    margin: "30px",
                    fontSize: 15,
                    fontFamily: 'Arial'
                }}>
                Forgot your Password ?

            </Link>
        </Registration>
    );
}


export default SignIn;

SignIn.getLayout = (page) => page;