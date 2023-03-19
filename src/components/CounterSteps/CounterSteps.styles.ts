import styled from 'styled-components';

export const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
`

export const StyledCounter = styled.p `
  background-color: var(--color-red);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-weight: bold;
  display: table;
  margin: 0 auto;
`

export const ButtonModal = styled(StyledCounter) `
  background-color: var(--color-purple);
  font-size: 1rem;
  position: absolute;
  right: 0;
  display: none;
  z-index: 1;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: block;
  }
`