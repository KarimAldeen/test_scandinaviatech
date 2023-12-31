import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { setProductData } from './Slice/productSlice';

import { useEffect } from 'react';

export const useProductData = () => {
  const Product = useSelector((state: RootState) => state.Product.value);
  const dispatch = useDispatch();
   useEffect(() => {
  dispatch(setProductData([]));
  }, [dispatch]);
  return { Product, dispatch };
};

