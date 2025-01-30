const Copyright = () => {
  return (
    <div className="flex w-full items-center justify-between pb-5 pt-6 text-xs font-bold text-white">
      <span className="w-full text-center md:w-auto md:text-left">
        &copy;&nbsp;{new Date().getFullYear()}&nbsp;Digimark Developers. All
        rights reserved
      </span>
      <div className="hidden items-center justify-center gap-5 md:flex">
        <span className="transition-all duration-200 hover:underline">
          Manage cookies
        </span>
        <span className="transition-all duration-200 hover:underline">
          Terms and conditions
        </span>
        <span className="transition-all duration-200 hover:underline">
          Privacy policy
        </span>
      </div>
    </div>
  );
};

export default Copyright;
