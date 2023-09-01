import { FaGithubSquare, FaInstagramSquare } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import styles from '../../../styles/footer.module.scss';
import Link from 'next/link';
const Footer = () => {
    // https://youtu.be/q_3tBjkcD80?si=YaApi2RlakH99Sc9
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footerUtil}>
                    <ul>
                        <div className={styles.icons}>
                            <Link className={styles.icon} href='https://instagram.com/otavio.maldaner?utm_source=qr&igshid=ZDc4ODBmNjlmNQ==' ><FaInstagramSquare /></Link>
                            <Link className={styles.icon} href='https://github.com/OtavioMaldaner'><FaGithubSquare /></Link>
                            <Link className={styles.icon} href='mailto:otaviomaldaner571@gmail.com'><SiGmail /></Link>
                        </div>
                    </ul>
                </div>
                <div className={styles.content}>
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/author'>Autor</Link></li>
                        <li><Link href='/history'>História</Link></li>
                        <li><Link href='/history/characters'>Personagens</Link></li>
                        <li><Link href='/opinions'>Opiniões</Link></li>
                        <li><Link href='/references'>Referências</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottomPart}>
                <h1>Criado em 2023 | Otávio João Maldaner | 4º ano do Curso Técnico em Informática</h1>
            </div>
        </>
    )
}

export default Footer