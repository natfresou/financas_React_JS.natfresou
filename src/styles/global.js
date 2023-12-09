import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
            --Color-pink1:#FD377E;
            --Color-pink2:#E34981;
            --Color-green:#03B898;
            --Color-gray4:#212529;
            --Color-gray3:#868E96;
            --Color-gray2:#E9ECEF;
            --Color-gray1:#F8F9FA;
            --Font-primary:'Nunito', sans-serif;
            --Font-secundary: 'Inter', sans-serif;
    }
    .containner{
        width: 100%;
        max-width:1200px;
        gap:20px;
        margin-top:1rem;
        margin-inline:auto; 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
    }
    .showSection{
        display:flex;
    }
    .noShowsection{
        display:none;
    }

    @media (min-width: 1000px) {
        .containner {
            flex-direction: row; 
            align-items:flex-start;
            gap:60px;
        .valores{
            width:560px;
        }
    }
}
`;
