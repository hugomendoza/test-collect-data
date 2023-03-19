import styled from "styled-components";

export interface StyledModalProps {
  open?: boolean;
}

export const StyledAside = styled.aside<StyledModalProps> `
  width: 30%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0 auto;
    position: fixed;
    background-color: white;
    z-index: 2;
    background-color: rgba( 0, 0, 0, 0.85 );
    inset: 0;
    transition: all 0.3s ease-in-out;
    transform: translate(${props => props.open ? "0%" : "100%"});
  }

`;

export const StyledClose = styled.button `
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  border: 1px solid var(--color-red);
  background-color: transparent;
  color: var(--color-red);
  display: block;
  margin-left: auto;
  margin-right: 0;
  margin-bottom: 1rem;
  cursor: pointer;
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`

export const StyledContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    background-color: white;
    padding: 1rem;
    width: min(500px, 90%);
    border-radius: 1rem;
  }

`

export const StyledArticle = styled.article `
  border: 1px solid var(--color-purple);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;

  h3 {
    color: var(--color-purple);
    font-size: 1.25rem;
  }

  p {
    color: var(--color-gray);
    font-size: 1rem;
  }
`;

export const StyledAlert = styled(StyledArticle) `
  border: 1px solid var(--color-red);
  text-align: center;
  margin-bottom: 0;

  h3 {
    color: var(--color-red);
    font-size: 1.15rem;
  }
`
