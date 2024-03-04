import dynamic from "next/dynamic";
const VideoCard = dynamic(() => import("@/components/video-card"));
import "./page.scss";
import Link from "next/link";
import { RiArrowDropRightLine } from "react-icons/ri";
import Image from "next/image";
import { API_URL } from "@/constant";
import { IVideoApiResponse } from "@/types/video";
import axios from "axios";
import { IBanner } from "@/types/banner";
import ServerPagination from "@/components/pagination/pagination";

async function adBanner() {
  try {
    const response = await fetch(`${API_URL}/banners/video`, {
      // cache: "no-store",
      next: {
        revalidate: 3600,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch banner video");
    }

    const data = await response.json();
    return data?.data?.data[0];
  } catch (error) {
    console.log("video ads banner" + error);
  }
}

async function getVideos(page: number = 1, limit: number = 12) {
  const url = `${API_URL}/frontend/videos?limit=${limit}&page=${page} `;
  const res = await fetch(url, {
    next: {
      revalidate: 3600,
    },
  });
  const data = await res.json();
  return data;
}

async function Videos({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 12;
  const adsBanner: IBanner = await adBanner();
  const videos: IVideoApiResponse = await getVideos(page, limit);
  /* const [showTitle, setShowTitle] = useState<string>("Show");
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [adsBanner, setAdsBanner] = useState<IBanner>({} as IBanner); */

  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_URL}/videos?page=${page}&limit=${limit}`
        );
        const data = await response.json();
        setCount(data.data?.count);
        setVideos(data.data?.rows);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page, limit]); */

  /*  useEffect(() => {
    dispatch(getProducts({}));
  }, []); */
  /* useEffect(() => {
    adBanner();
  }, []);

  const incrementPage = () => {
    setPage(page + 1);
  };

  const decrementPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };
 */
  /*  const handleShow = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const clickedElement = event.target as HTMLLIElement;
    const innerText = clickedElement.innerText;
    setShowTitle(`Show ${innerText}`);
    setLimit(innerText);
  }; */

  return (
    <main>
      <section>
        <div className="container">
          <div className="md:flex items-center font-gotham font-normal text-sm mt-3 mb-3 hidden ">
            <Link href={"/"}>Home</Link>
            <RiArrowDropRightLine className=" text-xl" />
            <Link href={"/videos"}> Videos </Link>
          </div>
        </div>
      </section>

      <section className="md:mt-8 md:mb-5 mt-3 mb-2">
        {adsBanner?.image && (
          <div className="container">
            <Link href={"/"}>
              <Image
                className="w-full"
                src={"/assets/images/ads/Group 9.png"}
                width={400}
                height={300}
                alt="ads"
              />
            </Link>
          </div>
        )}
      </section>

      <div className="videos-section">
        <section>
          <div className="container px-2 md:px-0">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
              {videos.data.rows.map((video, index) => (
                <VideoCard key={index} url={video.url} title={video.title} />
              ))}
            </div>
          </div>
        </section>
        <div className="container">
          <ServerPagination
            showTitle={`Show ${limit}`}
            page={page}
            totalPage={Math.ceil(videos.data?.count / limit)}
          />
        </div>
      </div>
    </main>
  );
}

export default Videos;
