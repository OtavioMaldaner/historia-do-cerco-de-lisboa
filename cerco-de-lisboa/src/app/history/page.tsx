import { Analytics } from "@vercel/analytics/react";
import styles from '../../../styles/history.module.scss';
import Link from "next/link";
import Image from "next/image";
import capa from '../assets/images/cerco de lisboa.jpg';

const History = () => {
    return (
        <main className={styles.main}>
            <div className={styles.mainUtil}>
                <h2 className={styles.title}>A História</h2>
                <div className={styles.content}>
                    <p>A História do Cerco de Lisboa é um romance escrito por <Link href={'/author'}>José Saramago</Link>, publicado em 1989. </p>
                    <p>A obra deu maior destaque à prosa na língua portuguesa, o que ajudou o autor a ganhar prêmios importantes, como o <a href="https://pt.wikipedia.org/wiki/Prémio_Camões" target="_blank">"Prêmio Camões"</a> em 1995 e o <a href="https://pt.wikipedia.org/wiki/Laureados_com_o_Nobel_de_Literatura" target="_blank">"Prêmio Nobel de Literatura"</a>, em 1998</p>
                </div>
                <h2 className={styles.subtitle}>Sinopse</h2>
                <div className={styles.content}>
                    <p>Raimundo Silva é um editor já afirmado em sua editora, porém, ao revisar um livro da própria história do cerco de Lisboa, acrescentou um "não" em uma frase. Tal palavra alterou o sentido do fato, assim, relatando o apoio dos cruzados aos portugueses, o que manteria o cerco e acabaria na queda de Lisboa.</p>
                    <p>Ao enviar o texto para a editora, eles acrescentam uma errata e resolvem o problema. Tal ato acaba mudando a vida de Raimundo, por quase ter sido demitido da editora e por conhecer a diretora dos revisores, Maria Sara. Por consequência do seu ato, Maria pede a Raimundo para reescrever a história, baseada na não-ajuda dos cruzados.</p>
                    <p>Raimundo, por sua vez, decide escrever a história de forma fictícia, sem a participação dos cruzados. Durante o período de escrita do livro, o revisor e a diretora acabam se apaixonando e, iniciam um relacionamento.</p>
                    <p>Na história do Cerco de Lisboa, há um personagem chamado Mogueime, que é considerado o herói da história. O soldado se apaixona por Ouruana e, durante a história, vivenciam um romance semelhante ao de Raimundo e Maria Sara. A história do livro se desenrola entre os planos da própria história do cerco de Lisboa e a história contada por Raimundo.</p>
                </div>
                <div className={styles.buy}>
                    <div className={styles.buyLeftPart}>
                        <h2 className={styles.subtitle}>Capa</h2>
                        <div className={`${styles.content} ${styles.image}`}>
                            <Image src={capa} alt="Capa Cerco de Lisboa" quality={100} width={300} height={450} style={{objectFit: 'cover'}} placeholder="blur" />
                        </div>
                    </div>
                    <div className={styles.buyRightPart}>
                        <h2 className={styles.subtitle}>Para adquirir:</h2>
                        <ul>
                            <li><a href="https://www.amazon.com.br/História-cerco-Lisboa-José-Saramago/dp/8535918752/" target="_blank">Compra na Amazon</a></li>
                            <li><a href="../book/historia-do-cerco-de-lisboa.pdf">Leitura do PDF</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Analytics />
        </main>
    )
}
export default History;