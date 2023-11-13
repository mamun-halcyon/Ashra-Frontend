import dynamic from 'next/dynamic';
const BlogCard = dynamic(() => import('@/components/blog-card'));
import Link from 'next/link';
import { RiArrowDropRightLine } from 'react-icons/ri';
import './page.scss';
import Pagination from '@/components/pagination';
import Image from 'next/image';
import { IResponseBlog } from '@/types/blog';

async function getBlogs(page: number = 1, limit: number = 12) {
  const url = `http://localhost:5000/api/v1/frontend/blogs?limit=${limit}&page=${page}, { next: { revalidate: 3600 } }`;
  const res = await fetch(url);
  const data = res.json();
  return data;
}

async function Blogs({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 10;
  const blogs: IResponseBlog = await getBlogs(page, limit);
  console.log(blogs);

  /* const [page, setPage] = useState(1);
  const [showTitle, setShowTitle] = useState<string>('Show');


/*   const incrementPage = () => {
    setPage(page + 1);
  };

  const decrementPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const handleShow = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const clickedElement = event.target as HTMLLIElement;
    const innerText = clickedElement.innerText;
    setShowTitle(`Show ${innerText}`);
  }; */

  return (
    <main>
      <section>
        <div className="container">
          <div className="flex items-center font-gotham font-normal text-sm mt-3 mb-3">
            <Link href={'/'}>Home</Link>
            <RiArrowDropRightLine className=" text-xl" />
            <Link href={'/blogs'}> Blogs </Link>
          </div>
        </div>
      </section>

      <section className="mt-8 mb-5">
        <div className="container">
          <Image
            className="w-full"
            src={'/assets/images/ads/Group 9.png'}
            width={400}
            height={300}
            alt="ads"
          />
        </div>
      </section>
      <section className="blog">
        <div className="container  px-2 md:px-0">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {blogs.data?.rows.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
          {/* <Pagination
            page={page}
            incrementPage={incrementPage}
            decrementPage={decrementPage}
            showTitle={showTitle}
            handleShow={handleShow}
          /> */}
        </div>
      </section>
    </main>
  );
}

export default Blogs;
