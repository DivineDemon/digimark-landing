import Image from "next/image";

import DummyDP from "@/assets/img/dummy-dp.png";

const Founder = () => {
  return (
    <section className="mb-24 mt-48 flex w-full items-start justify-between">
      <div className="flex flex-col items-center justify-center gap-2.5">
        <div className="flex items-center justify-center -space-x-5">
          <Image
            src={DummyDP}
            alt="dummy-dp"
            className="size-24 rounded-full border-[8px] border-brand-950"
          />
          <Image
            src={DummyDP}
            alt="dummy-dp"
            className="size-24 rounded-full border-[8px] border-brand-950"
          />
          <Image
            src={DummyDP}
            alt="dummy-dp"
            className="size-24 rounded-full border-[8px] border-brand-950"
          />
        </div>
        <span className="w-full pl-3 text-left text-lg uppercase !leading-[20px] text-white">
          founders
          <br />
          of digimark
        </span>
      </div>
      <p className="w-full text-right text-[2.75rem] font-[600] capitalize leading-[1.1] tracking-[-0.055rem] text-white">
        Over the past 10 years, we&apos;ve
        <span className="pr-20" />
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
