import { openOrderTableSlice } from '@/store/reducers/openOrderTableSlice';
import useAppDispatch from '@/store/hooks/useAppDispatch';
import { useCallback } from 'react';
import useAppSelector from '@/store/hooks/useAppSelector';

const { onEditPrice } = openOrderTableSlice.actions;

export const useOnEditPrice = () => {
  const dispatch = useAppDispatch();

  return useCallback(
    (editableRowId: string) => {
      dispatch(onEditPrice(editableRowId));
    },
    [dispatch]
  );
};

export const useEditableRowsList = () =>
  useAppSelector((state) => state.openOrderTableReducer.editableRows);
