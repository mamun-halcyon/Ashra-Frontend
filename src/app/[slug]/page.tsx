'use client';
import React, { useEffect, useState } from 'react';
import './page.scss';
import { API_URL } from '@/constant';

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
        <h5>{pageData?.title}</h5>
        <div
          className=" font-gotham"
          dangerouslySetInnerHTML={{ __html: pageData?.content }}
        />
      </div>
    </section>
  );
};

export default CustomPage;
