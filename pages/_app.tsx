import '@vercel/examples-ui/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <SWRConfig
      value={{
        refreshInterval: 40000,
        revalidateOnFocus: false,
        fetcher: (path, init) => fetch(path, init).then((res) => res.json()),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}
