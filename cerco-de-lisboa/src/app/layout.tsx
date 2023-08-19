import './globals.css'
import type { Metadata } from 'next'

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
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
