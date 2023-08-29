import Image from 'next/image';
import styles from '../../../styles/header.module.scss';
import bandeira from '../assets/images/bandeira-portugal-2.jpg'
const Header = () => {
    return (
        <nav className={styles.mainHeader}>

            <div className={styles.mainHeaderUtil}>
                <div className={styles.icon}>
                    <Image src={bandeira} alt='Bandeira Portugal' height={30} width={30} />
                </div>
            </div>
        </nav>
    )
}
export default Header;