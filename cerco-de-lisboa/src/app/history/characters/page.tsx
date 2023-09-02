import { Analytics } from "@vercel/analytics/react";
import styles from '../../../../styles/characters.module.scss';

const Characters = () => {
    return (
        <main className={styles.main}>
            <div className={styles.mainUtil}>
                <h2 className={styles.title}>Personagens</h2>
                <h3 className={styles.subtitle}>Raimundo Silva</h3>
                <div className={styles.content}>
                    <p>Ele é o protagonista da história e trabalha como revisor de textos em uma editora. Ele é um homem solitário e introspectivo, com uma visão cética da vida. Raimundo é contratado para revisar um livro de história sobre o Cerco de Lisboa, um evento histórico que ocorreu no século XII. No entanto, ele decide alterar um detalhe crucial na narrativa ao inserir a palavra "não" em uma frase, mudando a história ao afirmar que os cruzados não ajudaram na defesa de Lisboa contra os mouros. Isso desencadeia uma série de eventos que questionam a própria natureza da história e da ficção.</p>
                </div>
                <h3 className={styles.subtitle}>Maria Sara</h3>
                <div className={styles.content}>
                    <p>É uma colega de trabalho de Raimundo Silva na editora. Ela é uma mulher inteligente e misteriosa que se torna o interesse romântico de Raimundo. A relação entre eles é complexa e simbólica, e Maria Sara desempenha um papel fundamental na trama à medida que os eventos se desenrolam.</p>
                </div>
                <h3 className={styles.subtitle}>Costa</h3>
                <div className={styles.content}>
                    <p>Costa é um personagem secundário que desempenha um papel significativo na história ao fazer parte do ambiente de trabalho de Raimundo Silva e ao reagir às consequências da decisão ousada de Raimundo de alterar a narrativa histórica.</p>
                </div>
                <h3 className={styles.subtitle}>Mogueime</h3>
                <div className={styles.content}>
                    <p>é um personagem que viveu durante o período do Cerco de Lisboa, que ocorreu no século XII (ano 1147) e foi um evento fundamental na história de Portugal. O cerco envolveu a tentativa de conquista de Lisboa pelos cruzados cristãos, liderados pelo rei Afonso I de Portugal e pelo bispo D. Gilberto, contra os mouros muçulmanos que controlavam a cidade na época. Durante a história, Saramago vai intercalando a vida de Raimundo Silva com a vida de Mogueime, ligando suas ações e sentimentos, mesmo com uma diferença de 800 anos que aconteceram suas vidas.</p>
                </div>
                <h3 className={styles.subtitle}>Oruana</h3>
                <div className={styles.content}>
                    <p>Ela é uma mulher misteriosa e sedutora que se envolve romanticamente com o personagem principal, Mogueime, alterando o curso dos eventos em sua vida. Sua presença na trama desencadeia uma série de consequências inesperadas, levando Raimundo a questionar a natureza da realidade e da ficção. Durante a escrita do livro, Saramago liga as vidas de Maria Sara e de Oruana, da mesma maneira que faz com Mogueime e Raimundo.</p>
                </div>
            </div>
            <Analytics />
        </main>
    )
}
export default Characters;