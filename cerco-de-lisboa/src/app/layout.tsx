import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Nunito } from 'next/font/google';

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
            <body>{children}</body>
        </html>
    )
}
