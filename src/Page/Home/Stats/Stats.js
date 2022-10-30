import React from "react";
import CountUp from "react-countup";
const Stats = () => {
  return (
    <div className="px-5 py-12 mx-auto">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-rose-700 uppercase text-center">
        Our Summary
      </h1>
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div class="text-center md:border-r">
            <div class="flex justify-center text-4xl font-bold lg:text-5xl xl:text-6xl">
              <CountUp start={0} end={144} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p>K</p>
            </div>

            <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Downloads
            </p>
          </div>
          <div class="text-center md:border-r">
          <div class="flex justify-center text-4xl font-bold lg:text-5xl xl:text-6xl">
              <CountUp start={0} end={12.9} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p>K</p>
            </div>
            <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Subscribers
            </p>
          </div>
          <div class="text-center md:border-r">
          <div class="flex justify-center text-4xl font-bold lg:text-5xl xl:text-6xl">
              <CountUp start={0} end={48.3} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p>K</p>
            </div>
            <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Users
            </p>
          </div>
          <div class="text-center">
          <div class="flex justify-center text-4xl font-bold lg:text-5xl xl:text-6xl">
              <CountUp start={0} end={24} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p>K</p>
            </div>
            <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Cookies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
