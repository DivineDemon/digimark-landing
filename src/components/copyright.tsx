import MaxWidthWrapper from "./max-width-wrapper";

const Copyright = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <MaxWidthWrapper>
        <div className="flex w-full items-center justify-between pb-5 pt-6 text-xs font-bold text-white">
          <span>
            &copy;&nbsp;{new Date().getFullYear()}&nbsp;Digimark Developers. All
            rights reserved
          </span>
          <div className="flex items-center justify-center gap-5">
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
      </MaxWidthWrapper>
    </div>
  );
};

export default Copyright;
