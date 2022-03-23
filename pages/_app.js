import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  console.log(getLayout)
  return getLayout(<Component {...pageProps} />)
}
