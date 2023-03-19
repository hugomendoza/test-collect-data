import { createSlice } from "@reduxjs/toolkit";

interface DataProps {
  index: number;
  data: Data;
  openModal: boolean
}

interface Data  {
  name: string;
  address: string;
  mail: string;
  floor: string;
  commons: string;
}

export const collectSlice = createSlice({
  name: "collect",
  initialState: {
    index: 1,
    data: {},
    openModal: false
  } as DataProps ,
  reducers: {
    onNewStep: ( state ) => {
      state.index += 1;
    },
    onAddData:(state, {payload}) => {
      state.data = payload;
    },
    onClearData:(state) => {
      state.data = {
        name: "",
        address: "",
        mail: "",
        floor: "",
        commons: "",
      },
      state.index = 1
    },
    onOpenModal:(state) => {
      state.openModal = true;
    },
    onCloseModal:(state) => {
      state.openModal = false;
    }
  }
}) ;

export const {
  onNewStep,
  onAddData,
  onClearData,
  onOpenModal,
  onCloseModal
} = collectSlice.actions

