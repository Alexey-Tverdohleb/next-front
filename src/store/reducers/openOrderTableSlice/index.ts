import { createSlice } from '@reduxjs/toolkit';

type IStateType = {
  editableRows: Array<string>;
};

const initialState: IStateType = {
  editableRows: [],
};

export const openOrderTableSlice = createSlice({
  name: 'open-order-table',
  initialState,
  reducers: {
    onEditPrice: (state, { payload }) => {
      const rowsIds = new Set(state.editableRows);

      if (rowsIds.has(payload)) {
        rowsIds.delete(payload);
      } else {
        rowsIds.add(payload);
      }

      return {
        ...state,
        editableRows: Array.from(rowsIds.values()),
      };
    },
  },
});

export const openOrderTableReducer = openOrderTableSlice.reducer;
