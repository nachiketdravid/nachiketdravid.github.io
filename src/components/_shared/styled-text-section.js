import styled from '@emotion/styled';
import { contentBox } from './styled-mixins';

export const StyledTextSection = styled.section`
  white-space: pre-line;
  ${contentBox}
  max-height: 180px;
  padding: 10px;
  max-width : 95%;
  overflow: auto;

  ::-webkit-scrollbar-track {
    border: 1px solid #000;
    padding: 2px 0;
    background-color: #404040;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  > p {
    margin: 0;
    font-size: 0.8rem;
  }
`;
