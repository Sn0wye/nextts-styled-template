import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
  --zinc-50: #fafafa;
  --zinc-100: #f4f4f5;
  --zinc-200: #e4e4e7;
  --zinc-300: #d4d4d8;
  --zinc-400: #a1a1aa;
  --zinc-500: #71717a;
  --zinc-600: #52525b;
  --zinc-700: #3f3f46;
  --zinc-800: #27272a;
  --zinc-900: #18181b;

  --brand-700: #6d28d9;
  --brand-600: #835afd;
  --brand-500: #8257e6;
  --brand-300: #a78bfa;

  --yellow: #ffff80;
  --pink: #ff80bf;
  --purple: #9580ff;
  --red: #ff9580;
  --orange: #ffca80;
  --green: #8aff80;
  --cyan: #80ffea;
  --primary: #f2f2f2;
  --secondary: #8f9ba8;
  --background: #08070b;
  --hover: #212024;

  
  --text-title: #27272a;
  --text-body: #a1a1aa;

  --black: #29292E;

  --inter: 'Inter', sans-serif;
  --poppins: 'Poppins', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    color: var(--text-body);
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-family: var(--inter);
  }     

  h1, h2 , h3, h4, h5, h6, strong {
    font-weight: 600;
    font-family: var(--poppins);
    color: #fafafa;
  }

  button { 
    all: unset;
    cursor: pointer;
  }
`;
