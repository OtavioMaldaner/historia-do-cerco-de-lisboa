import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import styles from '../../../styles/opinions.module.scss';

const Opinions = () => {
    return (
        <main className={styles.main}>
            <div className={styles.mainUtil}>
                <h3 className={styles.title}>Opiniões</h3>
                <div className={styles.content}>
                    <p>Esta página tem como objetivo apresentar as opiniões de pessoas que já tiveram a oportunidade de ler o livro. Para tanto, reservamos este espaço com o intuito de compartilhar diversas avaliações sobre a história, incluindo a minha própria.</p>
                </div>
                <h4 className={styles.subtitle}>Avaliações populares</h4>
                <h4 className={styles.subtitle}>Otávio Maldaner</h4>
                <div className={styles.content}>
                    <p>"Achei uma leitura complexa, com um vocabulário rebuscado e com poucos sinais de pontuação. A história começa um pouco confusa, no entanto, a partir de um tempo você começa a se acostumar com as ideias do autor e compreender melhor o que ele quer dizer e aonde quer chegar. A escrita contém diversos detalhes durante a sua narrativa, como a citação de diversos exemplos de itens em uma lista. Acredito que por se tratar da primeira leitura de um livro do Saramago, fiquei desesperançoso no início por não entender nada, mas no fim, foi uma boa leitura e acabou se tornando uma boa experiência como leitor."</p>
                </div>
                <h4 className={styles.subtitle}>Maria Do Carmo Schmitt</h4>
                <h5 className={styles.title}>Retirada de: <Link href='https://www.amazon.com.br/Hist%C3%B3ria-cerco-Lisboa-Jos%C3%A9-Saramago/product-reviews/8535918752?reviewerType=all_reviews'>amazon.com.br</Link></h5>
                <div className={styles.content}>
                    <p>"A história é boa, mas o modo de escrita do autor não agradou. Tem parágrafos muito longos, o leitor se perde dentro deles. Não acabei a leitura, muito cansativo. E a impressão com tipos muito pequenos não ajudou."</p>
                </div>
                <h4 className={styles.subtitle}>Florival Scheroki</h4>
                <h5 className={styles.title}>Retirada de: <Link href='https://www.amazon.com.br/Hist%C3%B3ria-cerco-Lisboa-Jos%C3%A9-Saramago/product-reviews/8535918752?reviewerType=all_reviews'>amazon.com.br</Link></h5>
                <div className={styles.content}>
                    <p>"O estilo de linguagem mantém-se para a experiência de deleite ao passear pela história de um tempo que me faltou conhecer antes e melhor. Mas vou reler feito criança como fiz com outras dele."</p>
                </div>
                <h4 className={styles.subtitle}>Matheus</h4>
                <h5 className={styles.title}>Retirada de: <Link href='https://www.amazon.com.br/Hist%C3%B3ria-cerco-Lisboa-Jos%C3%A9-Saramago/product-reviews/8535918752?reviewerType=all_reviews'>amazon.com.br</Link></h5>
                <div className={styles.content}>
                    <p>"Para alguns pode ser um pouco arrastada, mas a leitura tem algo de poético e nobre, daqueles livros que no fim te deixam sentindo que leu algo "elevado", te fazendo imaginar os dias da conquista do cerco de Lisboa através dos olhos de um revisor-escritor nos tempos atuais."</p>
                </div>
                <h4 className={styles.subtitle}>M. Garchet</h4>
                <h5 className={styles.title}>Retirada de: <Link href='https://www.amazon.com.br/Hist%C3%B3ria-cerco-Lisboa-Jos%C3%A9-Saramago/product-reviews/8535918752?reviewerType=all_reviews'>amazon.com.br</Link></h5>
                <div className={styles.content}>
                    <p>"Saramago é sempre um escritor que envolve, comove e nos faz querer mais. Esta História do cerco de Lisboa nos enreda ao mesmo tempo em romance e história, em realidade e sonho. Maravilhoso!"</p>
                </div>
                <h4 className={styles.subtitle}>Avaliações críticas</h4>
                <h4 className={styles.subtitle}>Eva Albuquerque</h4>
                <h5 className={styles.title}>Retirada de: <Link href='https://www.institutoclaro.org.br/educacao/nossas-novidades/podcasts/historia-do-cerco-de-lisboa-livro-exigido-pela-unicamp-mistura-fato-historico-a-ficcao/'>institutoclaro.org.br</Link></h5>
                <div className={styles.content}>
                    <p>"O que que eu imagino que o Saramago pensa? Se a história tem controvérsia, ficção, e fatos reais não entraram na história e outros entraram e, às vezes, nem tão verdadeiros, então, vamos para a literatura, porque a literatura pode corrigir a história. É um elogio ao papel do escritor, o escritor ele pode fazer a história e uma história muito mais legal e aí eu tô pensando no Aristóteles. O Aristóteles fala assim: “A história é o que foi, a literatura, o que poderia ter sido”."</p>
                    <p>“A trajetória de vida do Saramago, que é uma figura do povo, tem a ver com a trajetória deste personagem tão simples, tão humilde.”</p>
                    <p>“A própria história de vida dele é mais olhar para as pessoas mais pobres, que tiveram mais dificuldade na vida e o Raimundo Silva é uma figura muito simples, muito sábia e do povo.”</p>
                </div>
                <h4 className={styles.subtitle}>Susana Dias</h4>
                <h5 className={styles.title}>Retirada de: <Link href='https://www.comciencia.br/comciencia/handler.php?section=8&tipo=resenha&edicao=40'>comciencia.br</Link></h5>
                <div className={styles.content}>
                    <p>"Saramago, que trabalhou como gerente de produção numa editora, cria histórias dentro de histórias. Perdemos a possibilidade de saber, muitas vezes, quem é o historiador, o revisor e o narrador. Num jogo de espelhos em que suas imagens se mesclam, confundem. A mudança na pontuação efetuada por Saramago confere à conversa, de revisor e historiador no primeiro capítulo, um ritmo enlouquecido, uma velocidade alucinante. Não há pontos, apenas vírgulas. Após as vírgulas, maiúsculas para indicar o início de uma fala. Embora o autor tenha o cuidado de nos oferecer pistas para saber quem fala, se o revisor ou se escritor, a mistura entre os dois personagens é inevitável, diria, proposital. Uma intensa e amorosa experimentação que o próprio Saramago faz com a escrita, com suas regras, normas, potencialidades. Um cerco amoroso, que afirma o fim do cerco: “Claro que estamos em guerra, e é guerra de sítio, cada um de nós cerca o outro e é cercado por ele, queremos deitar abaixo os muros do outro e continuar com os nossos, o amor será não haver mais barreiras, o amor é o fim do cerco” (p. 330)."</p>     
                </div>
            </div>
            <Analytics />
        </main>
    )
}
export default Opinions;