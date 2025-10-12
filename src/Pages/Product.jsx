import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Breadcrum } from '../Components/Breadcrum/Breadcrum';
import { useParams } from 'react-router-dom';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';

export const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((item) => item.id === Number(productId));
  // console.log(product);

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
    </div>
  )
}
