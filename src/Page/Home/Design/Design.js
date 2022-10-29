import React from "react";

const Design = ({ des }) => {
  return (
    <div>
      <div>
        <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
          <div class="relative flex items-end overflow-hidden rounded-xl">
            <img className="w-full h-72" src={des.img} alt="wallpaper" />
            <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <span class="ml-1 text-sm text-slate-400">4.9</span>
            </div>
          </div>

          <div class="mt-1 p-2 text-center">
            <h2 class="text-slate-700 text-2xl font-semibold">{des.name}</h2>
            <p class="mt-1 text-sm text-slate-400">
              Italy, Europe,bangladesh,USA,Any city
            </p>
            <p class="text-lg font-bold text-orange-500 ">Prize:${des.price}</p>

            <div>
            <button className="btn btn-outline btn-sm">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
