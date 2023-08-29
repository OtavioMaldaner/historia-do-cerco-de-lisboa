'use client'
import Image from 'next/image';
import styles from '../../../styles/header.module.scss';
import bandeira from '../assets/images/bandeira-portugal-2.jpg'
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
const Header = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (

        // Link: https://youtu.be/k7LrSw_pl2g?si=Qeq_TrZnbJ3KZ26D
        <header className={styles.mainHeader}>

            <div className={styles.mainHeaderUtil}>
                <div className={styles.bookInfos}>
                    <div className={styles.icon}>
                        <Image src={bandeira} alt='Bandeira Portugal' height={30} width={30} />
                    </div>
                    <div className={styles.details}>
                        <strong><span>História do Cerco de Lisboa</span></strong>
                        <span>José Saramago</span>
                    </div>
                </div>
                <FiMenu clasName={styles.menuIcon} onClick={() => {
                    setOpen(!open)
                }} />
                {/* <nav className={styles.headerNav} style={open ? {display: 'block'} : {display: 'none'}}>
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/author'>Autor</Link></li>
                        <li><Link href='/history'>História</Link></li>
                        <li><Link href='/history/characters'>Personagens</Link></li>
                        <li><Link href='/opinions'>Opiniões</Link></li>
                        <li><Link href='/references'>Referências</Link></li>
                    </ul>
                </nav> */}
            </div>
        </header>
    )
}
export default Header;