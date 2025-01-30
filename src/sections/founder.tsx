import Image from "next/image";

import DummyDP from "@/assets/img/dummy-dp.png";

const Founder = () => {
  return (
    <section className="mb-24 mt-48 flex w-full flex-col items-start justify-between gap-5 md:gap-0 xl:flex-row">
      <div className="flex w-full flex-col items-center justify-center gap-2.5 md:w-auto">
        <div className="flex items-center justify-center -space-x-5">
          <Image
            src={DummyDP}
            alt="dummy-dp"
            className="size-20 rounded-full border-[8px] border-brand-950"
          />
          <Image
            src={DummyDP}
            alt="dummy-dp"
            className="size-20 rounded-full border-[8px] border-brand-950"
          />
          <Image
            src={DummyDP}
            alt="dummy-dp"
            className="size-20 rounded-full border-[8px] border-brand-950"
          />
        </div>
        <span className="w-full pl-3 text-center text-[18px] uppercase leading-[20px] text-white md:text-left">
          founders
          <br />
          of digimark
        </span>
      </div>
      <p className="w-full text-center text-lg font-[600] capitalize leading-[1.1] tracking-[-0.055rem] text-white md:text-right md:text-3xl lg:text-[2.75rem]">
        Over the past 10 years, we&apos;ve
        <span className="md:pr-20" />
        <br />
        perfected our Design & Development game
        <br />
        and are eager to help passionate Founders
        <br />
        perfect theirs. Success is a team play, right?
        <br />
        Let&apos;s aim for the top together!
      </p>
    </section>
  );
};

export default Founder;
