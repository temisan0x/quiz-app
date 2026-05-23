import styled from "styled-components";

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .loader {
    width: 50px;
    height: 50px;
    border: 4px solid rgba(255, 255, 255, 0.1);
    border-top: 4px solid #87f1ff;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;