"use client";

import React from "react";
import Announcement from "./Annoucement";
import QuickAccess from "./QickAccess";

const BothSection = () => {
  return (
    <section className="bg-[#F5FAFD] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <Announcement />
        <QuickAccess />
      </div>
    </section>
  );
};

export default BothSection;
