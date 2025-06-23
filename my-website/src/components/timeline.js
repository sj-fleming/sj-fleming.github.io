import React from "react";

const timelineData = [
  {
    date: "May 2025",
    description:
      "Began working as an Undergraduate Research Fellow, researching Machine Learning loss functions under Professor Finocchiaro.",
  },
  {
    date: "May 2025",
    description: (
      <>
        Article published for <em>The Heights</em>,{" "}
        <a
          href="https://www.bcheights.com/2025/06/04/dave-matthews-band-closes-out-boston-calling-with-an-epic-two-hour-set/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400 transition-colors duration-200"
        >
          &quot;Dave Matthews Band Closes Out Boston Calling With an Epic Two-Hour Set&quot;
        </a>
      </>
    ),
  },
  {
    date: "May 2025",
    description: "Presented final project, EagleOps Peer Assessments for Software Engineering course.",
  },
  {
    date: "December 2024",
    description: (
      <>
      Elected as Photo Editor for the 107th board of<em>The Heights</em>. {" "} 
      </>
    )
  },
  {
    date: "June 2024",
    description: "Completed a study abroad program on Art and Architecture in Vienna, Austria."
  },
  {
    date: "December 2023",
    description: (
      <>
      Elected as Assistant Photo Editor for the 106th board of<em>The Heights</em>. {" "} 
      </>
    )
  }
];


export default function CustomTimeline() {
  return (
    <div className="relative flex flex-col items-start py-10 pl-10">
      
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
