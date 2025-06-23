export default async function Page() {
  const projects = [
    {
      name: "EagleOps Peer Evaluation",
      video: "/EagleOps.mp4", // Replace this with your actual video filename in /public
      skills: ["Django", "Python", "HTML", "CSS", "Render"],
      description:
        "I worked on a team to develop a full-stack web application in Django to streamline peer evaluations for academic or team settings. Integrated Google OAuth for user authentication and account access, implemented SQL databases to manage user and admin data, set up automated email notifications for evaluation reminders and status updates, and collaborated on a user-friendly interface to improve usability and engagement.",
      link: "https://github.com/CSCI3356-Spring2025/EagleOps#",
      msg: "Click here to view the code on GitHub🔗"
    },
    {
      name: "BConnect",
      video: "/BConnect.mp4",
      skills: ["Figma", "Market Research", "Team Collaboration"],
      description:
        "In my Entrepreneurial Management class, I joined a team of 5 to develop a startup idea, conduct market research, and built a MVP. I led the design of the UX/UI for a campus events app using Figma, creating multiple page layouts and interactive prototypes. My team conducted market research to inform design decisions, improving user engagement.",
        link: "https://www.figma.com/proto/3Vpi7hzkwGvKfRebvMcaFU/BConnect?node-id=82-142&p=f&t=as0xskGuSy5F6ZXW-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
        msg: "Click here to view BConnect on Figma🔗"
    },
    {
        name: "Critical Review Essay: How Has AI Made Us Reevaluate What it Means to Be Human?",
        image: "/Essay.png",
        skills: ["Research", "Critical Thinking", "Writing"],
        description:
            "Written for my Technology and Culture class, this essay explores human interaction with AI. As AI has advanced in its ability to replicate human emotions and interactions, it is important to explore what sets us apart from the machines we've created.",
        link: "/Critical Review Essay.pdf",
        msg: "Click here to view the essay📄"
    },
    {
        name: "This website!",
        image: "/React.png",
        skills: ["React", "Next.js", "Tailwind CSS", "HTML"],
        description:
            "I taught myself React through a LinkedIn Learning course, and was able to use React along with my prior knowledge of HTML and CSS to build this website. I learned how to style pages using Tailwind CSS, embed videos and links, create clean image presentations, and use Email.js to create a functional contact form.",
        link: "https://github.com/sj-fleming/SarahFlemingWebsite",
        msg: "Click here to view the code on GitHub🔗"
    }
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
                
                {/* Video or Image */}
                <div className="flex-shrink-0 w-full md:w-1/3">
                  {project.video ? (
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
                    <h3 className="font-medium">Skills Used:</h3>
                    <ul className="list-disc list-inside text-sm">
                      {project.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm">{project.description}</p>
                  <a href= {project.link} target="_blank" rel="noopener noreferrer">
                    <button 
                        className="bg-[#F9F5F2] hover:bg-[#726D81] text-[#22223B] font-semibold py-2 px-4 rounded shadow mt-6">
                        {project.msg}
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
