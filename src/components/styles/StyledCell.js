import styled from 'styled-components';

const StyledCell = styled.div`
    background: rgba(${(props) => props.color}, 0.8);
    display: inline-block;
    width:auto;
    border: ${(props) => (props.type === 0 ? '0px' : '4px solid')};
    border-bottom-color: rgba(${(props) => props.color}, 0.1);
    border-right-color: rgba(${(props) => props.color}, 1);
    border-left-color: rgba(${(props) => props.color}, 0.3);
    border-top-color: rgba(${(props) => props.color}, 1);
`;
// i dont understand props => props.color

export { StyledCell };
