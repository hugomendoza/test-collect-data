import styled from "styled-components";
import { StyledSection } from '../Layout/Layout.styles';

export interface StyledCenterProps {
  justify?: true;
}

export interface StyledFormProps {
  grid?: true;
}

export const StyledArticle = styled.article`
  display: grid;
  place-items: center;
  width: 100%;
  padding: 0 3rem;

  @media (max-width: 1024px) {
    padding: 0;
  }
`

export const StyledForm = styled.form<StyledFormProps> `
  width: 100%;
  display: ${props => props.grid ? "flex" : "block"};
  flex-wrap: wrap;
`

export const StyledFieldset = styled.fieldset `
  border: none;
  display: flex;
  align-items: center;
  width: calc(100% / 3);
`

export const StyledCheckbox = styled.input `
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.25rem;
  accent-color: var(--color-purple);
`

export const StyledInput = styled.input `
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--color-purple);
  font-size: 1.5rem;
  outline: none;
  padding: 1.5rem;
  color: var(--color-purple);
  font-weight: bold;

  &::placeholder {
    color: var(--color-gray);
    font-weight: 400;
  }

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    padding: 1rem;
  }
`

export const StyledWarning = styled.p `
  color: var(--color-red);
  font-size: 0.8rem;
  font-weight: bold;
`

export const StyledDiv = styled.div<StyledCenterProps>`
  width: 100%;
  display: flex;
  justify-content: ${props => props.justify ? "space-between" : "center"};
`

export const StyledButton = styled.button`
  border: none;
  background-color: var(--color-purple);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1rem;
`

export const StyledResume = styled.section `
  width: min(90%, 700px);
  margin: 0 auto;
  padding: 2rem;
`

export const StyledFinishButton = styled(StyledButton) `
  background-color: var(--color-red);
  display: block;
  margin: 0 auto;
`