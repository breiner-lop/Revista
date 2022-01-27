import { CasosProvider } from '../contexts/contextApp'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return<CasosProvider> <Component {...pageProps} /></CasosProvider>
}

export default MyApp
