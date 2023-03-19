import { Aside, CounterSteps } from "../components";
import { StyledMain, StyledSection } from './Layout.styles';

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

export const Layout = ({children}:LayoutProps) => {
  return (
    <StyledMain>
      <StyledSection>
        {children}
        <CounterSteps />
      </StyledSection>
      <Aside />
    </StyledMain>
  )
}
