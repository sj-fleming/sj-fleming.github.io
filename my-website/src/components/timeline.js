import React from "react";

const timelineData = [
  {
    date: "May 2025",
    description:
      "Began working as an Undergraduate Research Fellow, researching Machine Learning loss functions under Professor Finocchiaro.",
  },
  {
    date: "May 2025",
    description: "Article published for The Heights.",
  },
  {
    date: "March 2025",
    description: "Presented final project for Deep Learning course.",
  },
];

export default function CustomTimeline() {
  return (
    <div className="relative flex flex-col items-start py-10 pl-10">
      {/* Absolute vertical line aligned with the dots */}
      <div className="absolute top-12 bottom-0 left-[calc(26%-1rem)] w-px bg-[#F9F5F2]" />

      {timelineData.map((item, index) => (
        <div
          key={index}
          className="flex w-full max-w-4xl mb-12 items-start relative"
        >
          {/* Date on left */}
          <div className="w-1/4 pr-4 text-right text-[#F9F5F2] font-semibold">
            {item.date}
          </div>

          {/* Dot (left aligned with the line) */}
          <div className="w-4 h-4 bg-[#F9F5F2] rounded-full absolute left-[calc(26.5%-1rem)] mt-1 z-10" />

          {/* Description on right */}
          <div className="w-3/4 pl-8 text-[#F9F5F2] text-left">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
}
