import React from 'react';
import './page.scss';
import Button from '@/components/button';

function Compare() {
  return (
    <section className="compare">
      <div className="container">
        {/*   <div className="header py-6">
          <div className="flex">
            <div className="w-[15%]"></div>
            <div className="w-[21%]">
              <h4 className=" font-gotham font-medium text-xs text-black">
                GH-8203M - Gazi Smiss Gas..
              </h4>
            </div>
            <div className="w-[21%]">
              <h4 className=" font-gotham font-medium text-xs text-black">
                GH-8203M - Gazi Smiss Gas..
              </h4>
            </div>
            <div className="w-[21%]">
              <h4 className=" font-gotham font-medium text-xs text-black">
                GH-8203M - Gazi Smiss Gas..
              </h4>
            </div>
            <div className="w-[21%]">
              <h4 className=" font-gotham font-medium text-xs text-black">
                GH-8203M - Gazi Smiss Gas..
              </h4>
            </div>
          </div>
        </div> */}

        <div className="mb-4 flex justify-between">
          <h3 className=" font-gotham font-medium text-base">Wishlist</h3>
          <Button className=" font-gotham font-medium text-sm px-4 py-1">
            Clear All
          </Button>
        </div>
        <div className="grid jobair">
          <div className="header"></div>
          <div className="header">
            <h4 className=" font-gotham font-medium text-xs text-black">
              GH-8203M - Gazi Smiss Gas..
            </h4>
          </div>
          <div className="header">
            <h4 className=" font-gotham font-medium text-xs text-black">
              GH-8203M - Gazi Smiss Gas..
            </h4>
          </div>
          <div className="header">
            <h4 className=" font-gotham font-medium text-xs text-black">
              GH-8203M - Gazi Smiss Gas..
            </h4>
          </div>
          <div className="header">
            <h4 className=" font-gotham font-medium text-xs text-black">
              GH-8203M - Gazi Smiss Gas..
            </h4>
          </div>
          <div className="flex p-3 pb-0">
            <div className="pt-3 px-2">
              <h3 className=" font-gotham font-medium text-xs text-black">
                Products Comparison
              </h3>
              <p className="font-gotham font-normal text-xs text-black mt-2">
                Find and select products tosee the differences and similarities
                between them
              </p>
            </div>
          </div>
          <h1>1023</h1>
          <h1>1023</h1>
          <h1>1023</h1>
        </div>
      </div>
    </section>
  );
}

export default Compare;
