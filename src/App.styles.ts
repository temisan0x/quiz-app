import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html { height: 100%; }
    body {
        background-image: url(${'../image/quiz.jpg'});
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
    body::before {
        content: '';
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.55);
        z-index: 0;
    }
    * { box-sizing: border-box; }
`;

export const Wrapper = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 900px;
    padding: 40px 20px;

    > p { color: #fff; }

    .score {
        color: #fff;
        font-size: 2rem;
        margin-top: 20px;
    }

    h1 {
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        font-weight: 400;
        text-align: center;
        margin: 90px auto 20px;
        width: 100%;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
        color: #ff5e31;
        font-size: 20px;
    }

    .start { max-width: 200px; }

    .results {
        background: rgba(255,255,255,0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 10px;
        padding: 30px 50px;
        text-align: center;
        color: #fff;
        margin-top: 20px;
        width: 100%;
        max-width: 650px;

        h2 { font-size: 2rem; margin-bottom: 10px; }
        p { font-size: 1.2rem; }
    }

    select {
        padding: 8px 16px;
        border-radius: 8px;
        border: 2px solid #87f1ff;
        background: #1a1a2e;
        color: #fff;
        font-size: 1rem;
        margin-bottom: 10px;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        outline: none;
    }

    select option {
        background: #1a1a2e;
        color: #fff;
    }
`;