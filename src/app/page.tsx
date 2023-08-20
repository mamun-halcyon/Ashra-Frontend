import Banner from '@/components/banner';
import TopHeader from '@/components/header';
import ServiceCard from '@/components/service-card';
import './page.scss';
import { serviceCardData } from '@/static/serviceCard';

export default function Home() {
  return (
    <main>
      <section>
        <div className="container ">
          <TopHeader />
        </div>
      </section>
      <section>
        <Banner />
      </section>
      <section className="service">
        <div className="container">
          <div className="grid grid-cols-4 gap-4">
            {serviceCardData.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </div>
      </section>
      <section className="explore">
        <div className="container">
          <div className="grid grid-cols-4 items-center gap-4">
            {serviceCardData.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
