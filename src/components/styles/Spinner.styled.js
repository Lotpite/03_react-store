import styled from "styled-components";

export const Spinner = styled.span`
    // background-color: #1DCF65;
    display: inline-block;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-top: 100px;
    margin-left: 49%;
    border-top: 3px solid rgba(0, 0, 0, 0.1);
    border-right: 3px solid rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid rgba(0, 0, 0, 0.1);
    border-left: 3px solid #1DCF65;
    animation: loading-spinner 0.8s infinite linear;
    
    @keyframes loading-spinner {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
`