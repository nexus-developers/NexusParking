import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 17%;
  overflow-x: hidden;
`;

// Modal Container
export const InternContainer = styled.div`
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  `