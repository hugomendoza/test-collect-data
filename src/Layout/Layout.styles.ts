import styled from "styled-components";

export const StyledMain = styled.main `
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  width: min(1280px, 90%);
  margin: auto;
`

export const StyledSection = styled.section `
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
  }

  article {
    flex: 1 1 0%;
  }
`
