import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import Link from "next/link";
import styles from '../../../styles/references.module.scss';
import qrcode from '../assets/images/qrcode.svg';

const References = () => {
    return (
        <main className={styles.main}>
            <div className={styles.mainUtil}>
                <h3 className={styles.title}>Referências</h3>
                <div className={styles.content}>
                    <h4>História:</h4>
                    <ul>
                        <li><Link href='https://www.infoescola.com/livros/historia-do-cerco-de-lisboa/' target="_blank">https://www.infoescola.com/livros/historia-do-cerco-de-lisboa/</Link></li>
                    </ul>
                    <h4>Autor:</h4>
                    <ul>
                        <li><Link href='https://pt.wikipedia.org/wiki/José_Saramago' target="_blank">https://pt.wikipedia.org/wiki/José_Saramago</Link></li>
                        <li><Link href='https://pt.wikipedia.org/wiki/Laureados_com_o_Nobel_de_Literatura' target="_blank">https://pt.wikipedia.org/wiki/Laureados_com_o_Nobel_de_Literatura</Link></li>
                    </ul>
                </div>

                <h3 className={styles.subtitle}>Para acessar o site:</h3>
                <div className={`${styles.content} ${styles.imageBox}`}>
                    <Image src={qrcode} width={200} height={200} quality={100} alt="qr code"/>
                </div>
            </div>
            <Analytics />
        </main>
    )
}
export default References;