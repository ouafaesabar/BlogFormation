import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Image from 'next/legacy/image';
import backgroundImage from '../../public/images/background.jpg'
import ArticleCard from 'compnents/ArticleCard';


export default function Home() {
  return (
    <Box sx={{ position: "relative" }}>
      <Stack sx={{
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
      >
        {/* <Image src={backgroundImage}
            width={"100%"}
            height={"100%"}
            layout={"responsive"}
                /> */}

        <Box sx={{
          display: "flex",
          flexDirection: 'column',
          alignItems: "center",
          justifyContent: "center",
          width: `calc(100% - 400px)`
        }}>
          <Typography variant='h1'
            color={"white"}
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3 rem",
              m: "10px"
            }}>
            Blog
          </Typography>
          <Typography variant='body1'
            color={"white"}
            align={"center"}
            sx={{
              m: "10px",
              fontSize: 20
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Button variant='contained'
            size='large'
            color="primary">
            <Typography variant='button'
              color="white"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: 20,
                letterSpacing: ".3 rem"
              }}>
              Découvrir
            </Typography>
          </Button>
        </Box>

      </Stack>
      <Stack sx={{
        padding: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        {/* <ArticleCard /> */}
      </Stack>
    </Box>
  );
}
