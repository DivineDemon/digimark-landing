import { CalendarDays } from "lucide-react";

const Contact = () => {
  return (
    <div
      className="mb-24 mt-48 flex w-full items-center justify-center"
      style={{
        filter: "url(#flt_tag)",
      }}
    >
      <div
        className="flex w-full flex-col items-center justify-center gap-5 overflow-hidden bg-white p-5 md:h-[500px] md:gap-7"
        style={{
          clipPath: "polygon(90% 0, 100% 25%, 100% 100%, 0 100%, 0 0)",
        }}
      >
        <span className="w-full text-center text-2xl font-[600] tracking-tight md:text-6xl md:leading-[60px]">
          Ready to discuss
          <br />
          your project with us?
        </span>
        <span className="w-full text-center text-sm text-gray-500 md:text-base">
          Let's talk about how we can craft a user experience that not
          <br />
          only looks great but drives real growth for your product.
        </span>
        <button className="flex items-center justify-center gap-5 rounded-full bg-brand-500 py-1.5 pl-10 pr-1.5">
          <span className="flex-1 text-left text-sm font-medium uppercase tracking-widest text-white">
            book a call
          </span>
          <div className="size-10 rounded-full bg-white p-2.5 text-brand-500">
            <CalendarDays className="size-full" />
          </div>
        </button>
      </div>
      <svg className="absolute">
        <defs>
          <filter id="flt_tag">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="flt_tag"
            />
            <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Contact;
