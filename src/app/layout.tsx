import type { Metadata } from "next";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import "./global.scss";
import ReduxProvider from "@/redux/provider";
import TopHeader from "@/components/header";
const Navbar = dynamic(() => import("@/components/navbar"));
import MegaMenu from "@/components/megamenu";
import { API_ROOT, API_URL } from "@/constant";
import { HomeApiResponse } from "@/types/home";
import Popup from "@/components/popup";
const Footer = dynamic(() => import("@/components/footer"));

const Gotham = localFont({
  src: [
    {
      path: "../fonts/Gotham-Book.otf",
      weight: "400",
      style: "book",
    },
    {
      path: "../fonts/Gotham-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/Gotham-Thin.otf",
      weight: "100",
      style: "thin",
    },
    {
      path: "../fonts/Gotham-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../fonts/Gotham-Light.otf",
      weight: "300",
      style: "light",
    },
  ],
  variable: "--font-gotham",
  preload: true,
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
  preload: true,
});


async function getData() {
  const res = await fetch(`${API_URL}/home-page`, {
    // cache: "no-store",
    next: {
      revalidate: 3600,
    },
  });

  /* if (!res.ok) {
    throw new Error("Failed to fetch data");
  } */

  return res.json();
}

async function getCategories() {
  const res = await fetch(`${API_URL}/categories?page=1&limit=100`, {
    cache: "no-store",
  });

  /*  if (!res.ok) {
    throw new Error("Failed to fetch data");
  } */

  return res.json();
}

// Load Help items
async function getMenus(position: string) {
  const res = await fetch(`${API_URL}/menus/${position}`, {
    cache: "no-store",
  });

  /*  if (!res.ok) {
    throw new Error("Failed to fetch data");
  } */

  return res.json();
}
export async function generateMetadata(): Promise<Metadata> {
  const homeData: HomeApiResponse = await getData();
  return {
    metadataBase: new URL('https://gazifrontend.vercel.app/'),
    title: "Halcyon",
    description: "Halcyon Digital",
    // title: homeData.homePage.meta_title,
    // description: homeData.homePage.meta_description,
    authors: [
      { name: "Halcyon Digital", url: "https://halcyonbd.com" },
      { name: "Mamun", url: "https://mamunur-rashid-portfolio.netlify.app/" },
    ],
    openGraph: {
			// title:homeData.homePage.meta_title,
			// description:homeData.homePage.meta_description,
      title: "Halcyon",
      description: "Halcyon Digital",
			images: [{
        url:`/favicon.ico`,
        // url:`${API_ROOT}/images/setting/${homeData?.setting?.favicon}`,
        width: 800,
        height: 600,
      },],
		},
    icons: [{ rel: 'icon', url:`/favicon.ico` }],
    // icons: [{ rel: 'icon', url: `${API_ROOT}/images/setting/${homeData?.setting?.favicon}` }],
  };
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const globalData: HomeApiResponse = await getData();
  const footerMenus = await getMenus("help");
  const categories = await getCategories();

  return (
    <html lang="en">
      <body className={`${Gotham.variable} ${poppins.variable}`}>
        <main>
          <ReduxProvider>
            <TopHeader
              homeData={globalData.homePage}
              menus={footerMenus.data}
            />
            <Navbar logo={globalData?.setting?.logo} />
            <MegaMenu menus={categories?.data?.rows} />
            {children}
            {globalData?.setting?.active_popup && (
              <Popup popup_url={globalData?.setting?.popup_image as string} />
            )}
            <Footer globalData={globalData} />
            <ToastContainer />
          </ReduxProvider>
        </main>
      </body>
    </html>
  );
}
