"use client";

import { ArrowDown } from "lucide-react";

const ExploreBtn = () => {
  return (
    <button type="button" className="mt-7 mx-auto border  bg-white/10 p-2 rounded hover:bg-white/20 cursor-pointer">
      <a href="#events" className="flex gap-2">
        Explore Events <span><ArrowDown /></span>
      </a>
    </button>
  );
};

export default ExploreBtn;
