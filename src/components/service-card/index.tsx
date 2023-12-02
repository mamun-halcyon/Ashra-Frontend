import Image from 'next/image';
import './index.scss';
import Link from 'next/link';
import { API_ROOT } from '@/constant';

interface IService {
  title: string;
  subtitle: string;
  image: number;
  url: string;
}
interface IProps {
  service: IService;
}
const ServiceCard: React.FC<IProps> = ({ service }) => {
  return (
    <Link href={service.url}>
      <div
        className={`service-card flex justify-center flex-wrap items-center md:my-[40px] my-2`}
      >
        <div className="image">
          <Image
            className="mr-2.5"
            src={`${API_ROOT}/images/key-point/${service.image}`}
            width={44}
            height={53}
            alt="service"
          />
        </div>
        <div className="text">
          <h4 className=" font-gotham font-medium text-sm md:text-xl">
            {service.title}
          </h4>
          <h6 className=" font-gotham font-medium text-base">
            {service.subtitle}
          </h6>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
