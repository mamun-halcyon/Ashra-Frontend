import Banner from '@/components/banner';
import TopHeader from '@/components/header';

export default function Home() {
  return (
    <main>
      <section>
        <div className="container ">
          <TopHeader />
        </div>
        <Banner />
      </section>
    </main>
  );
}
