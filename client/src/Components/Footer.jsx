import { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className="main-footer mt-24 sm:mt-32 lg:mt-48 bg-gray-900 text-white py-12">
        <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left px-6 sm:px-12 lg:px-44 gap-12 lg:gap-96">

          {/* Left Section */}
          <div className="left-footer w-full lg:w-80 uppercase">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Got questions or suggestions?
            </h1>
          </div>

          {/* Right Section */}
          <div className="right-footer font-sans text-lg sm:text-xl">
            <p className="capitalize">Reach out via email:</p>
            <p className="font-medium text-blue-400">hello@reallygreatsite.com</p>
          </div>

        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
