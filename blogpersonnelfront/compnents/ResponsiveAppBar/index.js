import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'





const ResponsiveAppBar = ({children}) => {
    const router = useRouter();
    return (
        <>
            <AppBar position="fixed"
                    color="white">
                <Toolbar sx={{
                    justifyContent: 'space-between'
                }}>
                    <Typography variant='button'
                                    color="primary"
                                    sx={{fontFamily : "monospace",
                                        fontWeight : 700,
                                        fontSize : 50,
                                        letterSpacing : ".3 rem",
                                        alignSelf : "center" }}>
                            Blog
                        </Typography>
                    <Box>
                     <Button variant='contained'
                             size='large'
                             color='primary'
                             onClick={() => router.push("/Articles/1")}
                            >
                        <Typography variant='button'
                                    color="white"
                                    sx={{fontFamily : "monospace",
                                         fontWeight : 700,
                                         letterSpacing : ".3 rem" }}>
                            Articles
                        </Typography>
                    </Button>
                    <Button variant='contained'
                             size='large'
                             color='primary'
                        >
                        <Typography variant='button'
                                    color="white"
                                    sx={{fontFamily : "monospace",
                                         fontWeight : 700,
                                         letterSpacing : ".3 rem" }}>
                            S'inscrire
                        </Typography>
                    </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            {children}
            </>

    );
}

export default ResponsiveAppBar;