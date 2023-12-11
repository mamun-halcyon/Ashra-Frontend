'use client';
import React, { useEffect, useState } from 'react';
import './page.scss';
import { API_URL } from '@/constant';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

async function getPages(slug: string) {
  const res = await fetch(`${API_URL}/frontend/pages/${slug} `);
  const data = await res.json();
  return data;
}

const CustomPage = ({ params: { slug } }: Props) => {
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPages(slug);
      setPageData(data.data);
    };
    fetchData();
  }, [slug]);

  return (
    <section className="custom">
      <div className="container">
        <h3 className="mb-4 font-gotham font-semibold">{pageData?.title}</h3>
        <div>
          <Image
            className="w-full"
            src="/assets/images/banner/BG.png"
            alt="custom"
            width={400}
            height={400}
          />
        </div>
        <div
          className=" font-gotham mt-5"
          dangerouslySetInnerHTML={{ __html: pageData?.content }}
        />
      </div>
    </section>
  );
};

export default CustomPage;
