import styled, { createGlobalStyle } from 'styled-components';

export const LoaderWrapper = styled.div`
        .loader-bg {
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999999999;
        }
        .loader-bg h3 {
            position: fixed;
            color: #ff5e31;
            font-size: 24px;
        }
        .loader {
            width: 8em;
            height: 8em;
            font-size: 22px;
            box-sizing: border-box;
            border-top: 0.3em solid #505050;
            border-radius: 50%;
            position: relative;
            animation: rotating 2s ease-in-out infinite;
            --direction: 1;
        }
        .loader span {
            position: absolute;
            color: #FF5E31;
            width: inherit;
            height: inherit;
            text-align: center;
            line-height: 10em;
            font-family: sans-serif;
            animation: rotating 2s linear infinite;
        }
        .loader::before,
        .loader::after {
            content: '';
            position: absolute;
            width: inherit;
            height: inherit;
            border-radius: 50%;
            box-sizing: border-box;
            top: -0.2em;
        }
        .loader:::before {
            border-top: 0.3em solid dodgerblue;
            transform: rotate(120deg);
        }
        .loader::after {
            border-top: 0.3em solid #ff5e31;
            transform: rotate(240deg);
        }
        @keyframes rotating {
            50% {
            transform: rotate(calc(180deg));
            }
            100% {
            transform: rotate(calc(360deg));
            }
        }
`