import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import Link from "next/link";
import styles from '../../../styles/author.module.scss';
import saramago from '../assets/images/JSJoseSaramago.jpg';

const Author = () => {
    return (
        <main className={styles.main}>
            <div className={styles.mainUtil}>
                <h2 className={styles.title}>José Saramago</h2>
                <div className={`${styles.content} ${styles.saramago}`}>
                    <Image src={saramago} alt="José Saramago.jpg" width={320} quality={100} placeholder="blur"  />
                    <div>
                        <p>José de Souza Saramago nasceu em 16 de novembro de 1922, em Azinhaga, Golegã, em Portugal e faleceu, aos 87 anos no dia 18 de junho de 2010, em Tías, em Las Palmas na Espanha.</p>
                        <p>Saramago veio de uma família de agricultores. Seu pai, José de Souza (1896 - 1964), que depois se tornou policial e Maria da Piedade (1898 - 1982). O autor passou boa parte da vida em Lisboa, onde sua família se mudou em 1924, que também foi o ano da morte do seu irmão Francisco de Souza (1920 - 1924).</p>
                        <p>A origem do seu apelido se remete à alcunha da família, Saramago, que é uma herbácea que nasce na região de Golegã. Na data de seu registro, houve um equívoco e o registrador acabou preenchendo o nome de José com a alcunha que era conhecida a família</p>
                        <p>Desde cedo se dedicava aos estudos e a cultura, no entanto, a dificuldade econômica o impediu de fazer faculdade particular. Então, José se formou em uma escola técnica e conseguiu seu primeiro emprego, como serralheiro.</p>
                    </div>
                </div>
                <h3 className={styles.subtitle}>Carreira profissional e literária</h3>
                <div className={styles.content}>
                    <p>Começou sua carreira literária aos 25 anos com o romance "Terra do Pecado" em 1947, o mesmo ano de nascimento de sua filha, Violante dos Reis Saramago, fruto de seu primeiro casamento com Ilda Reis. Durante essa época, Saramago era funcionário público.</p>
                    <p>Entre 1970 e 1986, ele viveu com a escritora Isabel da Nóbrega. Em 1988, casou-se com a jornalista e tradutora espanhola María del Pilar del Río Sánchez, com quem permaneceu até sua morte.</p>
                    <p>Em 1955, para aumentar sua renda, Saramago começou a fazer traduções de obras de Hegel, Tolstói, Baudelaire e outros autores.</p>
                    <p>Após "Terra do Pecado", Saramago persistiu em seus esforços literários e, após 19 anos, mudou da prosa para a poesia, lançando "Os Poemas Possíveis". Ele publicou mais dois livros de poesia nos cinco anos seguintes.</p>
                    <p>Em 1975, Saramago trocou de emprego e trabalhou no jornal "Diário de Notícias". Posteriormente, retornou à mesma empresa como Diretor-Adjunto, mas foi demitido em 1975 devido a intervenção militar.</p>
                    <p>Saramago dedicou-se integralmente à literatura a partir desse momento e, em 1977, retornou à prosa ficcional com "Manual de Pintura e Caligrafia". No entanto, seu estilo característico "saramaguiano" só se desenvolveu com "Levantado do Chão" em 1980.</p>
                    <p>Ele continuou a escrever romances que abordavam temas sociais e políticos, como "Memorial do Convento" (1982), que misturava fatos reais com personagens inventados e fazia uma crítica à Igreja e à luta de classes marxista.</p>
                    <p>Entre 1980 e 1991, Saramago publicou quatro romances que questionavam a interpretação da história oficial.</p>
                    <p>Nos anos seguintes, de 1995 a 2005, ele lançou mais seis romances que exploravam questões sociais e a existência humana em uma sociedade capitalista.</p>
                </div>
                <h3 className={styles.subtitle}>Vida política</h3>
                <div className={styles.content}>
                    <p>Ele ingressou no Partido Comunista Português em 1969 e tornou-se membro da Célula dos Escritores do Setor Intelectual de Lisboa após a Revolução dos Cravos em Portugal. Em 1989, foi eleito Presidente da Assembleia Municipal de Lisboa nas Eleições Autárquicas.</p>
                    <p>Saramago também se candidatou a deputado no Parlamento Europeu em todas as eleições europeias de 1987 a 2009 pela Coligação Democrática Unitária, embora suas posições tornassem improvável sua eleição.</p>
                    <p>Ele foi diretor-adjunto do Diário de Notícias após a Revolução dos Cravos, onde expressou seu desejo de ver Portugal se tornar um estado socialista. No entanto, seu papel no jornal acabou devido a desentendimentos políticos.</p>
                </div>
                <h3 className={styles.subtitle}>Obras</h3>
                <div className={`${styles.content} ${styles.obras}`}>
                    <div>
                        <h4 className={styles.title}>Romances</h4>
                        <ul>
                            <li><Link href='https://pt.wikipedia.org/wiki/Terra_do_Pecado'>Terra do Pecado, 1947</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/Manual_de_Pintura_e_Caligrafia'>Manual de Pintura e Caligrafia, 1977</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/Levantado_do_Ch%C3%A3o'>Levantado do Chão, 1980</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/Memorial_do_Convento'>Memorial do Convento, 1982</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/O_Ano_da_Morte_de_Ricardo_Reis'>O Ano da Morte de Ricardo Reis, 1984</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/A_Jangada_de_Pedra'>A Jangada de Pedra, 1986</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_Cerco_de_Lisboa'>História do Cerco de Lisboa, 1989</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/O_Evangelho_Segundo_Jesus_Cristo'>O Evangelho Segundo Jesus Cristo, 1991</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/Ensaio_Sobre_a_Cegueira'>Ensaio Sobre a Cegueira, 1995</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/Todos_os_Nomes'>Todos os Nomes, 1997</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/A_Caverna'>A Caverna, 2000</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/O_Homem_Duplicado'>O Homem Duplicado, 2002</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/Ensaio_Sobre_a_Lucidez'>Ensaio Sobre a Lucidez, 2004</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/As_Intermit%C3%AAncias_da_Morte'>As Intermitências da Morte, 2005</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/A_Viagem_do_Elefante'>A Viagem do Elefante, 2008</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/Caim_(livro)'>Caim, 2009</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/Claraboia_(livro)'>Claraboia, 2011</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/Alabardas,_Alabardas,_Espingardas,_Espingardas'>Alabardas, Alabardas, Espingardas, Espingardas, 2014</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={styles.title}>Crônicas</h4>
                        <ul>
                            <li><Link href='https://pt.wikipedia.org/wiki/Deste_Mundo_e_do_Outro'>Deste Mundo e do Outro, 1971</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/A_Bagagem_do_Viajante'>A Bagagem do Viajante, 1973</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/As_Opini%C3%B5es_que_o_DL_Teve'>As Opiniões que o DL Teve, 1974</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={styles.title}>Crônicas</h4>
                        <ul>
                            <li><Link href='https://pt.wikipedia.org/wiki/A_Noite_(livro)'>A Noite, 1979</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/Que_Farei_com_Este_Livro%3F'>Que Farei com Este Livro?, 1980</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/A_Segunda_Vida_de_Francisco_de_Assis'>A Segunda Vida de Francisco de Assis, 1987</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/In_Nomine_Dei'>In Nomine Dei, 1993</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/Don_Giovanni_ou_O_Dissoluto_Absolvido'>Don Giovanni ou O Dissoluto Absolvido, 2005</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={styles.title}>Contos</h4>
                        <ul>
                            <li><Link href='https://pt.wikipedia.org/wiki/Objecto_Quase'>Objecto Quase, 1978</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/Po%C3%A9tica_dos_Cinco_Sentidos'>Poética dos Cinco Sentidos - O Ouvido, 1979</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/O_Conto_da_Ilha_Desconhecida'>O Conto da Ilha Desconhecida, 1997</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={styles.title}>Poesia</h4>
                        <ul>
                            <li><Link href='https://pt.wikipedia.org/wiki/Os_Poemas_Poss%C3%ADveis'>Os Poemas Possíveis, 1966</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/Provavelmente_Alegria'>Provavelmente Alegria, 1970</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/O_Ano_de_1993'>O Ano de 1993, 1975</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={styles.title}>Diário e Memórias</h4>
                        <ul>
                            <li><Link href='https://pt.wikipedia.org/wiki/Cadernos_de_Lanzarote'>Cadernos de Lanzarote (I-V), 1994</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/As_Pequenas_Mem%C3%B3rias'>As Pequenas Memórias, 2006</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/%C3%9Altimo_Caderno_de_Lanzarote'>Último Caderno de Lanzarote, 2018</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={styles.title}>Infantil</h4>
                        <ul>
                            <li><Link href='https://pt.wikipedia.org/wiki/A_Maior_Flor_do_Mundo'>A Maior Flor do Mundo, 2001</Link></li>
                            <li><Link href='https://pt.wikipedia.org/wiki/O_Sil%C3%AAncio_da_%C3%81gua'>O Silêncio da Água, 2011</Link></li>
                            <li>O Lagarto, 2016</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={styles.title}>Diário e Memórias</h4>
                        <ul>
                            <li><Link href='https://pt.wikipedia.org/wiki/Viagem_a_Portugal'>Viagem a Portugal, 1983</Link></li>
                        </ul>
                    </div>
                </div>
                <h3 className={styles.subtitle}>Prêmios</h3>
                <div className={styles.content}>
                    <ul>
                        <li><Link href='https://pt.wikipedia.org/wiki/Pr%C3%A9mio_Cidade_de_Lisboa'>Prémio Cidade de Lisboa (1980)</Link></li>
                        <li><Link href='https://pt.wikipedia.org/wiki/Pr%C3%A9mio_Liter%C3%A1rio_Munic%C3%ADpio_de_Lisboa'>Prémio Literário Município de Lisboa (1982)</Link></li>
                        <li><Link href='https://pt.wikipedia.org/wiki/Pr%C3%A9mio_P.E.N._Clube_Portugu%C3%AAs_de_Novel%C3%ADstica'>Prémio P.E.N. Clube Português de Novelística (1983, 1985)</Link></li>
                        <li><Link href='https://pt.wikipedia.org/wiki/Pr%C3%A9mio_D._Dinis'>Prémio D. Dinis (1984)</Link></li>
                        <li><Link href='https://pt.wikipedia.org/wiki/Pr%C3%A9mio_da_Cr%C3%ADtica_da_Associa%C3%A7%C3%A3o_Portuguesa_de_Cr%C3%ADticos_Liter%C3%A1rios'>Prémio da Crítica da Associação Portuguesa de Críticos Literários (1985)</Link></li>
                        <li><Link href='https://pt.wikipedia.org/wiki/Grande_Pr%C3%A9mio_de_Romance_e_Novela_APE/DGLB'>Grande Prémio de Romance e Novela APE/DGLB (1991)</Link></li>
                        <li><Link href='https://pt.wikipedia.org/wiki/Pr%C3%A9mio_Bordalo_de_Literatura_da_Casa_da_Imprensa'>Prémio Bordalo de Literatura da Casa da Imprensa (1991)</Link></li>
                        <li><Link href='https://pt.wikipedia.org/wiki/Grande_Pr%C3%A9mio_Vida_Liter%C3%A1ria_APE/CGD'>Grande Prémio Vida Literária APE/CGD (1993)</Link></li>
                        <li><Link href='https://pt.wikipedia.org/wiki/Pr%C3%A9mio_Cam%C3%B5es'>Prémio Camões (1995)</Link></li>
                        <li><Link href='https://pt.wikipedia.org/wiki/Pr%C3%A9mio_de_Consagra%C3%A7%C3%A3o_de_Carreira_da_Sociedade_Portuguesa_de_Autores'>Prémio de Consagração de Carreira da Sociedade Portuguesa de Autores (1995)</Link></li>
                        <li><Link href='https://pt.wikipedia.org/wiki/Nobel_de_Literatura'>Prémio Nobel de Literatura (1998)</Link></li>
                    </ul>
                </div>
            </div>
            <Analytics />
        </main>
    )
}
export default Author;