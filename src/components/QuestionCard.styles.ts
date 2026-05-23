import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 90vw;
    max-width: 650px;
    align-self: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 30px;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
    text-align: center;

    p {
        font-size: 1rem;
        color: #fff;
    }
`;

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    &:hover { opacity: 0.8; }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({ correct, userClicked }) => correct
            ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
            : !correct && userClicked
            ? 'linear-gradient(90deg, #ff5656, #c16868)'
            : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
        border: 1px solid rgba(255,255,255,0.3);
        box-shadow: 1px 2px 0px rgba(0,0,0,0.1);
        border-radius: 10px;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0,0,0,0.25);
    }
`;
