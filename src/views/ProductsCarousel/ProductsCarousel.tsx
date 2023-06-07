'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { Children } from 'react';
import styles from './ProductsCarousel.module.scss';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  padding: 12,
  slidesToScroll: 1,
};

export default function ProductsCarousel({
  title,
  children,
  slickSettings,
}: any) {
  return (
    <div className={styles.root}>
      <h2>{title}</h2>
      <Slider {...{ ...settings, ...slickSettings }}>{children}</Slider>
    </div>
  );
}
