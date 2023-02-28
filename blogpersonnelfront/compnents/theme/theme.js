import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette:{
        primary: {
            main: '#FF067E',
          },
          secondary: {
            main: '#7BAFFF',
          },
        white :{
            main : '#ffffff'
          },
        grey : {
            main : "#808080"
          },

    },
    components :{
        MuiButton :{
          styleOverrides: {
            root: {
              padding: '10px',
              margin: "10px",
            },
        }
    },

  }
})

export default theme;