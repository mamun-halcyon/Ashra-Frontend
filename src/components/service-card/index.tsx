import Image from 'next/image';
import './index.scss';
import Link from 'next/link';

interface IService {
  title: string;
  subTitle: string;
  image: number;
}
interface IProps {
  service: IService;
}
const ServiceCard: React.FC<IProps> = ({ service }) => {
  return (
    <Link href={'/'}>
      <div
        className={`service-card flex justify-center flex-wrap items-center my-[40px]`}
      >
        <Image
          className="mr-2.5"
          src={`/assets/images/service/service${service.image}.png`}
          width={44}
          height={53}
          alt="service"
        />
        <div>
          <h4 className=" font-gotham font-medium text-sm md:text-xl">
            {service.title}
          </h4>
          <h6 className=" font-gotham font-medium text-base">
            {service.subTitle}
          </h6>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
