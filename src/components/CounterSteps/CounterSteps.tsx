import { useAppSelector } from '../../hooks';

import { ButtonModal, StyledCounter, StyledDiv } from './CounterSteps.styles';
import { useAppDispatch } from '../../hooks';
import { onOpenModal } from '../../store';

export const CounterSteps = () => {

  const { index } = useAppSelector( state => state.collect );
  const dispatch = useAppDispatch();

  const onModal = () => {
    dispatch(onOpenModal())
  }

  return (
    <StyledDiv>
      <ButtonModal
        onClick={onModal}
      >
        open
      </ButtonModal>
      <StyledCounter>Paso <span>{ index }</span> / 5</StyledCounter>
    </StyledDiv>
  )
}
