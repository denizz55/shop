"use client";
import { useEffect } from 'react';
import { useDispatch } from 'react';
import { useSelector } from 'react';
import axios from 'axios';

const fetchProducts = () => async dispatch => {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  dispatch({ type: 'SET_PRODUCTS', payload: data });
};

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id));
    }
  }, [id, dispatch]);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <h1>{product?.title}</h1>
        <p>{product?.description}</p>
        <p>${product?.price}</p>
    </div>
  );
}
