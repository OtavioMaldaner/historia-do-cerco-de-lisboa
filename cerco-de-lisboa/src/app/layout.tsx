import type { Metadata } from 'next';
import { Nunito, Roboto_Flex as Roboto } from 'next/font/google';
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';

const roboto = Roboto({ subsets: ['latin'] })
const nunito = Nunito({ subsets: ['latin'] })
export const metadata: Metadata = {
    title: 'História do Cerco de Lisboa',
    description: 'Site dedicado a experiência da leitura do livro História do Cerco de Lisboa, de José Saramago.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br" className={`${roboto.className} ${nunito.className}`}>
            <Header />
            <body>{children}</body>
            <Footer />
        </html>
    )
}
