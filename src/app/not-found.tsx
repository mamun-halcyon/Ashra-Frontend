import Link from "next/link";
import "./not-found.scss";
import Image from "next/image";

export default function Custom404() {
  return (
    <>
      <section className="not-found dark:bg-gray-900 ">
        <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
          <div className="flex flex-col items-center max-w-sm mx-auto text-center">
            <Image
              className="w-[400px] h-[200px]"
              width={200}
              height={200}
              alt="404"
              src={"/assets/images/404/illustration.svg"}
              property="true"
            />
            <Link className="px-2 py-1 back-btn text-[#fff]" href={"/"}>
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
