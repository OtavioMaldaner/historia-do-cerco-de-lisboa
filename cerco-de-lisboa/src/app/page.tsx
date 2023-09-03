import { Analytics } from '@vercel/analytics/react';
import Image from 'next/image';
import styles from '../../styles/page.module.scss';
import lisbon from './assets/images/wide-shot-boats-body-water-near-houses-buildings-porto-portugal.jpg';
import Card from './components/Card';
import { cards } from './pageContent';

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.homeImage}>
                <Image src={lisbon} alt='Lisbon' quality={100} height={1000} placeholder='blur' />
                <div>
                    <h1 className={styles.title}>História do Cerco de Lisboa</h1>
                    <h2 className={styles.subtitle}>de José Saramago</h2>
                </div>
                <span>Site dedicado à leitura da obra do autor português</span>
            </div>
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