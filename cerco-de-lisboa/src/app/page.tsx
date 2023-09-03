import { Analytics } from '@vercel/analytics/react';
import styles from '../../styles/page.module.scss';
import Card from './components/Card';
import { cards } from './pageContent';

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.mainUtil}>
                <div className={styles.content}>
                    {
                        cards.map((card, index) => {
                            return (
                                <Card key={index} description={card.description} imageSrc={card.imageSrc} link={card.link} title={card.title} />
                            )
                        })
                    }
                </div>
            </div>
            <Analytics />
        </main>
    )
}