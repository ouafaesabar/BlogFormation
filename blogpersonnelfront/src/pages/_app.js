import React from 'react'
import '@/styles/globals.css'
import Layout from 'compnents/Layout/index'
import { ThemeProvider } from '@mui/material/styles';
import theme from 'compnents/theme/theme';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'


function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  return getLayout(
    <Component {...pageProps} />
  )

}

export default function App({ Component, pageProps }) {
  
  const queryClient = new QueryClient()

  return(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <MyApp Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  </QueryClientProvider>
  )
}
