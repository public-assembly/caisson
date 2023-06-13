'use client'

import '../styles/globals.css'
import { ConnectKitProvider } from 'connectkit'
import type { AppProps } from 'next/app'
import * as React from 'react'
import { WagmiConfig } from 'wagmi'
import { client } from '../wagmi'

export function Providers({ Component, pageProps }: AppProps) {
	const [mounted, setMounted] = React.useState(false)
	React.useEffect(() => setMounted(true), [])
	return (
		<WagmiConfig client={client}>
			<ConnectKitProvider theme="minimal">
			

				{mounted && <Component {...pageProps} />}
			</ConnectKitProvider>
		</WagmiConfig>
	)
}