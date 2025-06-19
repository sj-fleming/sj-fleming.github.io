export default async function Page() {
  const projects = [
    {
      name: "EagleOps Peer Evaluation",
      video: "/EagleOps.mp4", // Replace this with your actual video filename in /public
      skills: ["React", "Next.js", "Tailwind CSS"],
      description:
        "A brief description of the project that highlights key features, purpose, and your role.",
      link: "https://github.com/CSCI3356-Spring2025/EagleOps#"
    },
    {
      name: "Project Two",
      image: "/project2.png",
      skills: ["Node.js", "Express", "MongoDB"],
      description:
        "Another project with an overview of technologies used and functionality.",
        link: ""
    },
    // Add more projects as needed
  ];

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-2 border-white rounded-lg p-4 shadow-md"
            >
              <h2 className="text-xl font-semibold mb-4">{project.name}</h2>
              <div className="flex flex-col md:flex-row gap-4">
                
                {/* Video (only for first project) or Image */}
                <div className="flex-shrink-0 w-full md:w-1/3">
                  {index === 0 && project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-auto rounded"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-auto rounded"
                    />
                  )}
                </div>

                {/* Skills and Description */}
                <div className="flex-grow space-y-2">
                  <div>
                    <h3 className="font-medium text-gray-700">Skills Used:</h3>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {project.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm text-gray-700">{project.description}</p>
                  <a href= {project.link}>
                    <button 
                        className="bg-[#F9F5F2] hover:bg-[#726D81] text-[#22223B] font-semibold py-2 px-4 rounded shadow mt-6">
                        Click here to view the code on GitHub🔗
                    </button>
                </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
