import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Layout } from "../Layout";
import { useAppDispatch, useAppSelector } from '../hooks';
import { onAddData, onNewStep } from "../store";
import { StyledArticle, StyledForm, StyledButton, StyledDiv, StyledInput, StyledWarning } from './Views.styles';

export const Mail = () => {
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data } = useAppSelector( state => state.collect );
  
  const [warning, setWarning] = useState(false);
  const [formValue, setFormValue] = useState<string>(data.mail);


  const isValidEmail = (email:string):boolean => {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  const onInputChanged = ({ target }:React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(target.value);
  }
  
  const onSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if ( !isValidEmail(formValue) ) {
      setWarning(true)
      return false;
    };
  
    dispatch( onNewStep () );
    dispatch( onAddData({...data, mail: formValue}));
    navigate("/direccion");
  }
  
  return (
    <Layout>
      <StyledArticle>
        <StyledForm onSubmit={onSubmit}>
  
          <StyledInput
            type="text"
            placeholder="Ingresa tu correo electrónico"
            value={ formValue }
            onChange={ onInputChanged }
          />
  
          {
            warning &&
            <StyledWarning>Ingresa un correo válido</StyledWarning>
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

