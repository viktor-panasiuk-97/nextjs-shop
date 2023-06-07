// TODO: Move product tiles to views
'use client';

import { Intro } from '@/views';
import ProductsCarousel from '@/views/ProductsCarousel';
import { Container, ProductTile } from '@/components';

export default function Page() {
  return (
    <>
      <Intro />
      <section>
        <Container>
          <ProductsCarousel
            title="Best of Air Max "
            slickSettings={{ slidesToShow: 4 }}
          >
            {[1, 2, 3, 4, 5].map((_, i) => (
              <ProductTile
                key={i}
                imageProps={{ src: 'images/product1.jpg' }}
                title="Nike Air Max Pulse"
                description="Women's Shoes"
                price="₹ 13 995"
                onAddToCart={() => {
                  alert('Add');
                }}
              />
            ))}
          </ProductsCarousel>
        </Container>
      </section>
    </>
  );
}
