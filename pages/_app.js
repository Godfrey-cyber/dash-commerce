import '../styles/globals.css'
import '../styles/main.css'
// import type { AppProps } from 'next/app'
// import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'
import { store } from "../redux/store"

function MyApp({ Component, pageProps }) {
  return (
  	 <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  	)	
}

export default MyApp
