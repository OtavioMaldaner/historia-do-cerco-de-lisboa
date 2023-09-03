import lisbon from './assets/images/aerial-view-lisbon-downtown-sunny-day.jpg';
import book from './assets/images/book-library-with-open-textbook.jpg';
import references from './assets/images/from-opened-books.jpg';
import chat from './assets/images/rear-view-man-with-raised-hand-group-therapy-medical-center.jpg';
import saramago from './assets/images/saramago2.jpeg';
import { cardProps } from "./types";

export const cards: cardProps[] = [
    {
        title: 'Autor',
        description: 'Conheça um pouco sobre a história de José Saramago, autor da obra.',
        link: '/author',
        imageSrc: saramago
    },
    {
        title: 'História',
        description: 'Uma breve sinopse sobre o livro.',
        link: '/history',
        imageSrc: book
    },
    {
        title: 'Personagens',
        description: 'Um resumo sobre os principais personagens da história.',
        link: '/history/characters',
        imageSrc: lisbon
    },
    {
        title: 'Opiniões',
        description: 'Opiniões populares e críticas coletadas de leitores da obra.',
        link: '/opinions',
        imageSrc: chat
    },
    {
        title: 'Referências',
        description: 'Links das referências utilizadas das pesquisas para criar o site.',
        link: '/references',
        imageSrc: references
    }
] 