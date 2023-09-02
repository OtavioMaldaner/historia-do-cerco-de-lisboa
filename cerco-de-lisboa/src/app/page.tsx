import { Analytics } from '@vercel/analytics/react'
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <Analytics />
        </main>
    )
}