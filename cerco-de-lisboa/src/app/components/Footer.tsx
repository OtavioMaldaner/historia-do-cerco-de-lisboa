import { FaGithubSquare, FaInstagramSquare } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import styles from '../../../styles/footer.module.scss';
const Footer = () => {
    // https://youtu.be/q_3tBjkcD80?si=YaApi2RlakH99Sc9
    return (
        <div className={styles.footer}>
            <div className={styles.footerUtil}>
                <ul>
                    <div className={styles.icons}>
                        <FaInstagramSquare />
                        <FaGithubSquare />
                        <SiGmail />
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Footer