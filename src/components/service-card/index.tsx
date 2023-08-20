import Image from 'next/image';
import './index.scss';

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
    <div className={`service-card flex justify-center items-center py-[72px]`}>
      <Image
        className="mr-2.5"
        src={`/assets/images/service/service${service.image}.png`}
        width={44}
        height={53}
        alt="service"
      />
      <div>
        <h4 className=" font-gotham font-bold text-xl">{service.title}</h4>
        <h6 className=" font-gotham font-bold text-base">{service.subTitle}</h6>
      </div>
    </div>
  );
};

export default ServiceCard;
