import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Layout } from "../Layout";
import { useAppDispatch, useAppSelector } from '../hooks';
import { onAddData } from "../store";
import { StyledArticle, StyledForm, StyledButton, StyledDiv, StyledFieldset, StyledCheckbox } from './Views.styles';


export const Commons = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data } = useAppSelector( state => state.collect );
  
  const [formValue, setFormValue] = useState<string>(data.floor);
  
  const onInputChanged = ({ target }:React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(target.value);
  }
  
  const onSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    dispatch( onAddData({...data, commons: formValue}));
    navigate("/resumen");
  }
  
  return (
    <Layout>
      <StyledArticle>
        <StyledForm
          onSubmit={onSubmit}
          grid
        >

          <StyledFieldset>
            <StyledCheckbox
              type="radio"
              id="bbq"
              name="commons"
              value="Zona BBQ"
              onChange={onInputChanged}
            />
            <label htmlFor="bbq">Zona BBQ</label>
          </StyledFieldset>
          <StyledFieldset>
            <StyledCheckbox
              type="radio"
              id="common"
              name="commons"
              value="Salón comunal"
              onChange={onInputChanged}
            />
            <label htmlFor="">Salón comunal</label>
          </StyledFieldset>
          <StyledFieldset>
            <StyledCheckbox
              type="radio"
              id="games"
              name="commons"
              value="Parque de juegos"
            />
            <label htmlFor="">Parque de juegos</label>
          </StyledFieldset>
  
          <StyledDiv>
            <StyledButton
              type="submit"
            >
              Resumen
            </StyledButton>
          </StyledDiv>
  
  
        </StyledForm>
      </StyledArticle>
    </Layout>
    
  )
}

