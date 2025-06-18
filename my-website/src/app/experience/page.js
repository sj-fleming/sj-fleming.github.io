export default async function Page(){
    return (
        <main className="min-h-screen p-8">
            <div className = "max-w-4xl mx-auto space-y-10">
                <h1 className="text-3xl font-bold mb-4 pt-3 pb-5">Experience</h1>
            
                {/* Education Section */}
                <section>
                <h2 className="text-2xl mb-2 border-b">Education</h2>
                <div className="space-y-2">
                    <div>
                    <p className="font-medium">University Name – Degree</p>
                    <p className="text-sm text-[#A99EA7]">City, State • YYYY – YYYY</p>
                    </div>
                    {/* Add more education items here */}
                </div>
                </section>

                {/* Experience Section */}
                <section>
                <h2 className="text-2xl mb-2 border-b">Experience</h2>
                <div className="space-y-4">
                    <div>
                    <p className="font-medium">Job Title – Company Name</p>
                    <p className="text-sm text-[#A99EA7]">City, State • YYYY – YYYY</p>
                    <ul className="list-disc list-inside mt-1 text-[#A99EA7]">
                        <li>Responsibility or achievement one</li>
                        <li>Responsibility or achievement two</li>
                    </ul>
                    </div>
                    {/* Add more experience items here */}
                </div>
                </section>

                {/* Skills Section */}
                <section>
                <h2 className="text-2xl mb-2 border-b">Skills</h2>
                <ul className="list-disc list-inside text-[#A99EA7]">
                    <li>JavaScript / TypeScript</li>
                    <li>React / Next.js</li>
                    <li>Tailwind CSS</li>
                    {/* Add more skills here */}
                </ul>
                </section>

                {/* Projects Section */}
                <section>
                <h2 className="text-2xl mb-2 border-b">Projects</h2>
                <div className="space-y-4">
                    <div>
                    <p className="font-medium">Project Title</p>
                    <p className="text-sm text-[#A99EA7]">Tech Used: React, Node.js, PostgreSQL</p>
                    <p className="text-[#A99EA7]">Brief description of the project and what you did.</p>
                    </div>
                    {/* Add more projects here */}
                </div>
                </section>

                {/* Awards Section */}
                <section>
                <h2 className="text-2xl mb-2 border-b">Awards</h2>
                <ul className="list-disc list-inside text-[#A99EA7]">
                    <li>Award Name – Issuing Organization (Year)</li>
                    {/* Add more awards here */}
                </ul>
            </section>
            </div>
        </main>
    )
}