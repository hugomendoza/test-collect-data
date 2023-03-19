import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Layout } from "../Layout";
import { useAppDispatch, useAppSelector } from '../hooks';
import { onAddData, onNewStep } from "../store";
import { StyledArticle, StyledForm, StyledButton, StyledDiv, StyledInput, StyledWarning } from './Views.styles';

export const Floor = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data } = useAppSelector( state => state.collect );
  
  const [warning, setWarning] = useState(false);
  const [formValue, setFormValue] = useState<string>(data.floor);
  
  const onInputChanged = ({ target }:React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(target.value);
  }
  
  const onSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if ( formValue > "50" || formValue.length <= 0 ) {
      setWarning(true)
      return false;
    };
  
    dispatch( onNewStep () );
    dispatch( onAddData({...data, floor: formValue}));
    navigate("/zonas-comunes");
  }
  
  return (
    <Layout>
      <StyledArticle>
        <StyledForm onSubmit={onSubmit}>
  
          <StyledInput
            type="number"
            placeholder="Ingresa el número de piso de tu apartamento"
            value={ formValue }
            onChange={ onInputChanged }
          />
  
          {
            warning &&
            <>
              <StyledWarning>Campo obligatorio</StyledWarning>
              <StyledWarning>Solo se admite hasta el piso 50</StyledWarning>
            </>
          }
  
          <StyledDiv>
            <StyledButton
              type="submit"
            >
              Siguiente
            </StyledButton>
          </StyledDiv>
  
  
        </StyledForm>
      </StyledArticle>
    </Layout>
    
  )
}

