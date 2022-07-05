import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: '#fff',
    fontColor: '#000',
    navColor: '#6200EE',
    navBg: 'linear-gradient(0deg, #6200EE, #3700B3)',
    navFontColor: '#fff',
    toggleButtonText: '#fff',
    cardColor: '#fff',
    cardShadow: '-3px -3px 3px rgba(250, 250, 250, 0.5), 3px 3px 5px rgba(0, 0, 0, 0.1)',
    solidityImgFilter: 'invert(0%)',
    ethersImgFilter: 'saturate(1) brightness(1)',
    hamburgerItemBg: '#6200EE'
};

export const darkTheme = {
    body: '#121212',
    fontColor: '#fff',
    navColor: '#BB86FC',
    navBg: 'linear-gradient(180deg, #b894f6, #9a66f4)',
    navFontColor: '#000',
    toggleButtonText: '#000',
    cardColor: 'rgba(255, 255, 255, 0.05)',
    cardShadow: '-3px -3px 3px rgba(255, 255, 255, 0.02), 3px 3px 5px rgba(0, 0, 0, 0.5)',
    solidityImgFilter: 'invert(100%)',
    ethersImgFilter: 'saturate(0.8) brightness(1.8)',
    hamburgerItemBg: '#9a66f4'
};

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.fontColor};
    }

    .nav {
        background: ${props => props.theme.navBg};
        color: ${props => props.theme.navFontColor};
    }

    .theme-toggle-button {
        color: ${props => props.theme.toggleButtonText};
    }

    .about-card,
    .skill-card,
    .project-card {
        background-color: ${props => props.theme.cardColor};
        box-shadow: ${props => props.theme.cardShadow};
    }

    .solidity-img {
        filter: ${props => props.theme.solidityImgFilter};
    }

    .ethers-js-img {
        filter: ${props => props.theme.ethersImgFilter};
    }

    .hamburger-menu {
        background-color: ${props => props.theme.hamburgerItemBg};
    }

    .hamburger-item {
        background-color: ${props => props.theme.hamburgerItemBg};
        color: ${props => props.theme.navFontColor};
    }

`