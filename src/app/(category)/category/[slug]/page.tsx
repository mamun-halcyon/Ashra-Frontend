import FilterBox from '@/components/filterbox';
import Link from 'next/link';
import React from 'react';
import { RiArrowDropRightLine } from 'react-icons/ri';

function Category() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="flex items-center font-gotham font-normal text-sm mt-3 mb-5">
            <Link href={'/'}>Home</Link>
            <RiArrowDropRightLine className=" text-xl" />
            <Link href={'/bathware'}> Home Appliance </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-6 gap-4">
            <div className="">
              <FilterBox title="Category">
                <ul>
                  <li>
                    <Link
                      className=" font-gotham font-normal text-xs"
                      href={'/category/gas-stove'}
                    >
                      Gas Stove
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" font-gotham font-normal text-xs"
                      href={'/category/gas-stove'}
                    >
                      Kitchen Hood
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" font-gotham font-normal text-xs"
                      href={'/category/gas-stove'}
                    >
                      Cookware
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" font-gotham font-normal text-xs"
                      href={'/category/gas-stove'}
                    >
                      Digital Scale
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" font-gotham font-normal text-xs"
                      href={'/category/gas-stove'}
                    >
                      Kitchen Appliance
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" font-gotham font-normal text-xs"
                      href={'/category/gas-stove'}
                    >
                      Cooker
                    </Link>
                  </li>
                </ul>
              </FilterBox>
            </div>
            <div className="col-span-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              architecto possimus odit aut cumque sint tempora veniam magnam
              quae placeat incidunt necessitatibus, repellendus consequuntur
              dignissimos aliquam, non repudiandae laboriosam autem quidem?
              Facilis mollitia laboriosam saepe tempore aspernatur. Laudantium,
              dolores! Debitis doloribus veritatis neque dolores aut cumque
              officiis earum esse obcaecati sequi tempora praesentium saepe
              corrupti laborum temporibus, sed cum. Possimus voluptate nisi
              nobis. Et possimus consequatur pariatur dolor voluptas quidem
              ullam consectetur id, a nemo vero eveniet dolorem, aperiam optio
              soluta eum. Laudantium itaque qui ab ex voluptatibus adipisci,
              quisquam iure quaerat excepturi quibusdam facilis distinctio
              libero repellendus id rerum ullam deserunt vel dolorem aspernatur
              mollitia, delectus omnis! Vitae, ullam molestias ipsam sint nihil
              quis accusamus rerum fugit sequi, eos facilis assumenda doloremque
              unde odit sapiente deserunt quibusdam consequatur. Expedita,
              possimus hic debitis beatae recusandae modi numquam, sapiente
              fugiat officiis at provident atque quo necessitatibus aliquid eius
              iste voluptatibus aut blanditiis ipsum magnam laborum? Facere
              doloremque vero ab illo repudiandae odio nulla mollitia natus,
              tenetur, iste totam, consectetur eligendi exercitationem dolorem
              quibusdam non rem. Placeat nulla enim magnam sapiente dolorum
              vitae ipsa illum rem fugiat commodi? Quibusdam tempora nobis ullam
              maiores mollitia earum, quo aperiam ea ratione natus facere
              corrupti asperiores explicabo consectetur. Tenetur a nemo dolorum
              neque aliquid laudantium porro id voluptatibus recusandae veniam
              beatae voluptatem enim, error incidunt illo. Dolor commodi,
              explicabo illo nisi atque numquam nostrum expedita itaque dolorum
              sapiente quisquam totam adipisci similique aperiam modi tempore.
              Officiis necessitatibus similique vitae temporibus. Corrupti
              consequatur numquam ab quia dolorem, doloribus ducimus totam,
              laborum quibusdam, vel a. Non veniam debitis error architecto quod
              facere totam autem vitae, beatae optio molestiae voluptas et
              aliquid harum maxime suscipit numquam eius perferendis nihil
              tenetur? Amet soluta saepe, architecto quasi deserunt id maiores
              ut distinctio ratione necessitatibus atque quod temporibus
              doloribus eius unde modi commodi harum vero nulla quia ullam, quae
              molestiae! Nostrum corporis voluptate nesciunt iusto aut unde! Eos
              dicta odit cupiditate provident iste quaerat dolore quo culpa rem
              quasi voluptatibus officia animi fugiat nemo esse quod ipsum
              ullam, ex corrupti tempora. Nam officiis in similique, illum vel
              suscipit ab incidunt harum quisquam unde dolor exercitationem
              nesciunt ipsum pariatur fugiat, eveniet iste dicta dolorum ipsa
              facilis magnam ea quis minima mollitia! Assumenda, ipsa. Quasi
              natus explicabo aliquid repellat asperiores officia ipsa, nulla
              praesentium eum, dicta, nesciunt cumque odio adipisci tenetur
              perferendis consequatur assumenda nemo debitis? Quibusdam cum
              accusantium vel quos illum blanditiis quis sunt ad vitae quidem
              hic aperiam est ea aut facilis enim, assumenda, aspernatur
              pariatur dolorem labore! Vel fugit, laudantium ullam corporis a
              sint aut odit rerum veritatis quos quo natus culpa cumque adipisci
              qui sapiente. Autem a facilis perspiciatis labore id! Quidem nemo
              sed deserunt officia? Quod id magnam placeat autem natus ut
              exercitationem maxime mollitia repudiandae culpa doloremque
              maiores velit, eum aliquam vel ipsam odio dolor, deserunt ducimus,
              facilis ea debitis sapiente nulla. Neque impedit provident beatae
              quis ipsa illum earum sit dolor voluptas minima esse, deleniti
              optio maiores quam fugiat explicabo tempore laboriosam, excepturi
              perspiciatis minus pariatur.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Category;
