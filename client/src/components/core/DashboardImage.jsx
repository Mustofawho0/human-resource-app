import {
  FaAmazon,
  FaApple,
  FaDocker,
  FaEbay,
  FaFedex,
  FaPlaystation,
} from 'react-icons/fa';
import { SiIntel, SiPrisma } from 'react-icons/si';

export const DashboardImage = () => {
  return (
    <section className="p-6  text-gray-800">
      <div className="container p-4 mx-auto text-center">
        <h2 className="text-4xl font-bold">Trusted by the Industry Leaders</h2>
      </div>
      <div className="container flex flex-wrap justify-center mx-auto text-gray-600">
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <FaAmazon className="fill-current w-14 h-14" />
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <FaApple className="fill-current w-14 h-14" />
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <FaDocker className="fill-current w-14 h-14" />
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <FaEbay className="fill-current w-14 h-14" />
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <FaFedex className="fill-current w-14 h-14" />
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <SiIntel className="fill-current w-14 h-14" />
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <FaPlaystation className="fill-current w-14 h-14" />
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <SiPrisma className="fill-current w-14 h-14" />
        </div>
      </div>
    </section>
  );
};
