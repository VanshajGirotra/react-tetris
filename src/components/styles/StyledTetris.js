import styled from 'styled-components';
import background from '../../../assets/images/bg.png';

export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;
    aside {
        width: 100%;
        max-width: 200px;
        display: block;
        padding: 0 20px;
    }
`;

export const StyledTetrisWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background: url(${background}) #000;
    background-size: cover;
    overflow: hidden;
`;
