
import { useAppSelector, useAppDispatch } from "../hooks";
import { useNavigate } from "react-router-dom";

import { onClearData } from "../store";
import { StyledArticle } from "../components/Aside/Aside.styles";
import { StyledFinishButton, StyledResume } from "./Views.styles";

export const Resume = () => {

  const dispatch = useAppDispatch();
  const { data } = useAppSelector( state => state.collect );
  const navigate = useNavigate();

  const onClean = () => {
    dispatch(onClearData())
    navigate("/");
  }

  return (
    <StyledResume>
      <StyledArticle>
        <h3>Nombre:</h3>
        <p>{data.name}</p>
      </StyledArticle>

      <StyledArticle>
        <h3>Correo:</h3>
        <p>{data.mail}</p>
      </StyledArticle>

      <StyledArticle>
        <h3>Direccion:</h3>
        <p>{data.address}</p>
      </StyledArticle>
      
      <StyledArticle>
        <h3>Número de piso:</h3>
        <p>{data.floor}</p>
      </StyledArticle>

      <StyledArticle>
        <h3>Zonas comunes:</h3>
        <p>{data.commons}</p>
      </StyledArticle>

      <StyledFinishButton onClick={onClean}>
        Finalizar
      </StyledFinishButton>

    </StyledResume>
  )
}
