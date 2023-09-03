'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from '../../../styles/card.module.scss';
import { cardProps } from '../types';

const Card = ({link, imageSrc: src, title, description}: cardProps) => {
    const router = useRouter()
    return (
        <div className={styles.card} onClick={() => {
            router.push(link)
        }}>
            <div>
                <Image src={src} alt={`${src}`} quality={100} className={styles.image} placeholder='blur' />
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
            </div>
            <button className={styles.button}>Visitar</button>
        </div>
    );
}
export default Card;