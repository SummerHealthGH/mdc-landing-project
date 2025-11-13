import React from "react";
import CardItem from "./CardItem";
import type { TrainingSection } from "../data/educationTrainingData";

const Section: React.FC<TrainingSection> = ({ title, id, items }) => {
  return (
    <section id={id} className="space-y-6">
      <div className="border-b-2 border-[#0A3D62] pb-4">
        <h2 className="text-2xl font-bold text-[#0A3D62]">{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Section;
