import React from "react";

function First_image() {
  return (
    <div className="flex mt-1 imge ">
      <div className="w-3/6">
        <img
          src="https://template.hasthemes.com/daxone/daxone/assets/images/slider/hm1-single-1.png"
          width="500"
          alt=""
        />
      </div>

      <div className="h-auto w-3/6 pt-17	">
        <h1 className="text-7xl color mb-20 mt-5">30% Off</h1>
        <h1
          className="font-bold text-6xl
"
        >
          comfort chair
        </h1>
        <p className="text-black text-2xl pt-2">
          collection from daxon & get 30% discount
        </p>
        <button type="button" className="btn btn-outline-danger mt-3 pl-4 pr-4">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default First_image;
