import type { AppProps } from 'next/app'
import '../styles/globals.css'
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/500.css"; // Specify weight
import "@fontsource/poppins/600.css"; // Specify weight
import "@fontsource/poppins/700.css"; // Specify weight
import ChatbotComponent from '../components/chatbot';


export default function App({ Component, pageProps }: AppProps) {

	return (
		<>
			<Component {...pageProps} />
			<ChatbotComponent />
		</>
	)
}
