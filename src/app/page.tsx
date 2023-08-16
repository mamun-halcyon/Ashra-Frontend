import Banner from '@/components/banner';
import TopHeader from '@/components/header';

export default function Home() {
  return (
    <main>
      <section>
        <div className="w-4/5 mx-auto">
          <TopHeader />
        </div>
        <Banner />
      </section>
    </main>
  );
}
