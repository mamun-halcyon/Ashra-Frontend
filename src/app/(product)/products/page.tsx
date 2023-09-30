import ProductCard from '@/components/card';
import Title from '@/components/title';
import { productsData } from '@/static/products';
import Image from 'next/image';
import './page.scss';

function Page() {
  return (
    <div className="all-products">
      <div className="container">
        <div className="image mb-12">
          <Image
            className="w-full"
            src={'/assets/images/banner/categorybanner.png'}
            alt="banner"
            width={400}
            height={400}
          />
        </div>

        <section>
          <div className="container">
            <div className="mb-12">
              <Title title="Gas Stove" href="/category/gas-stove" />
              <div className="grid grid-cols-5 gap-1">
                {[...productsData].slice(0, 10).map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
              </div>
            </div>
            <div className="mb-12">
              <Title title="Kitchen Hood" href="/category/kitchen-hood" />
              <div className="grid grid-cols-5 gap-1">
                {[...productsData].slice(0, 10).map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
              </div>
            </div>
            <div className="mb-12">
              <Title title="RICE COOKER" href="/category/kitchen-hood" />
              <div className="grid grid-cols-5 gap-1">
                {[...productsData].slice(0, 10).map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
              </div>
            </div>
            <div>
              <Title title="Digital Scale" href="/category/digital-scale" />
              <div className="grid grid-cols-5 gap-1">
                {[...productsData].slice(0, 10).map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
