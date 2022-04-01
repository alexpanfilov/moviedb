import styled from 'styled-components';

const StyledButton = styled.button`
  background:#333;
  color:#fff;
  border-radius: 4px;
  padding: 6px;
  margin: 1px;
  border: none;
`;
export default function Button(props) {
    return <StyledButton
     {...props} />;
  }