import { API_ROOT } from "@/constant";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";


const UserInfo = () => {
    const { login } = useAppSelector((state) => state.login);
    return (
        <div className="md:col-span-3 mx-10 md:mx-0 col-span-12 flex flex-col justify-center items-center primary-bg  h-[200px]">
              <div className="shadow rounded-full p-4 w-24 h-24 white-bg">
                {login?.user?.image ? (
                  <Image
                    className="w-full rounded-full"
                    src={`${API_ROOT}/images/user/${login.user.image}`}
                    width={80}
                    height={80}
                    alt="profile"
                  />
                ) : (
                  <Image
                    className="w-full rounded-full"
                    src={"/assets/images/icon/profile.png"}
                    width={80}
                    height={80}
                    alt="profile"
                  />
                )}
              </div>
              <div className="">
                <h3 className="font-gotham font-medium text-base md:text-lg text-white text-center">
                  {login?.user?.name}
                </h3>
                <p className="font-gotham font-normal text-sm md:text-base text-white mt-1 text-center">
                  {login?.user?.email}
                </p>
              </div>
            </div>
    );
};

export default UserInfo;