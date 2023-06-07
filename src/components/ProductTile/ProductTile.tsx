import styles from './ProductTile.module.scss';
import { ImgHTMLAttributes } from 'react';
import { Button } from '@/components';

interface ProductTileProps {
  title: string;
  description: string;
  price: string;
  imageProps: ImgHTMLAttributes<HTMLElement>;
  onAddToCart: () => void;
}

export default function ProductTile({
  title,
  onAddToCart,
  description,
  price,
  imageProps,
}: ProductTileProps) {
  return (
    <div className={styles.root}>
      <img className={styles.img} {...imageProps} />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.price}>{price}</div>
        <Button type="button" onClick={onAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
