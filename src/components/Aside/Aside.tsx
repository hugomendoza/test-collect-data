import { useAppDispatch, useAppSelector } from '../../hooks';
import { onCloseModal } from '../../store';

import { StyledAside, StyledArticle, StyledAlert, StyledContainer, StyledClose } from './Aside.styles';

export const Aside = () => {

  const { data, openModal } = useAppSelector( state => state.collect );
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(onCloseModal());
  }


  return (
    <StyledAside open={openModal}>
      <StyledContainer>
        
        <StyledClose onClick={onClose}>
          X
        </StyledClose>

        {
          data.name 
          ? <StyledArticle>
              <h3>Nombre:</h3>
              <p>{data.name}</p>
            </StyledArticle>
          : <StyledAlert>
              <h3>Completa el fomulario</h3>
            </StyledAlert>
        }

        {
          data.mail &&
            <StyledArticle>
              <h3>Correo:</h3>
              <p>{data.mail}</p>
            </StyledArticle>
        }

        {
          data.address &&
            <StyledArticle>
              <h3>Direccion:</h3>
              <p>{data.address}</p>
            </StyledArticle>
        }

        {
          data.floor &&
          <StyledArticle>
            <h3>Número de piso:</h3>
            <p>{data.floor}</p>
          </StyledArticle>
        }

        {
          data.commons &&
          <StyledArticle>
            <h3>Zonas comunes:</h3>
            <p>{data.commons}</p>
          </StyledArticle>
        }
      </StyledContainer>
    </StyledAside>
  )
}
