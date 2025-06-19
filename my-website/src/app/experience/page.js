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
                        <div className="flex justify-between items-baseline flex-wrap">
                            <p className="font-medium"><span className="font-semibold">Boston College</span> – B.S. Computer Science | Minor in Management and Leadership</p>
                            <p className="text-sm text-[#A99EA7]">Fall 2022 – Spring 2026 (expected)</p>
                        </div>
                    <p className="text-sm text-[#A99EA7] italic">Chestnut Hill, MA • GPA 3.8</p>
                    <p className="text-[#A99EA7] pt-2">Course Highlights: Software Engineering, Algorithms, Computer Systems, Logic and Computation, Randomness and Computation, Fundamentals of Operations Research, Entrepreneurial Management, Differential Equations</p>
                    <p className="text-[#A99EA7] pt-2">Study Abroad: Art and Architecture in Vienna, Austria, immersive learning in art history and design thinking</p>
                   </div>
                </div>
                </section>

                {/* Experience Section */}
                <section>
                <h2 className="text-2xl mb-2 border-b">Experience</h2>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between items-baseline flex-wrap">
                            <p className="font-medium">Machine Learning Undergraduate Research Fellow</p>
                            <p className="text-sm text-[#A99EA7]">June 2025 – Present</p>
                        </div>
                        <p className="text-sm text-[#A99EA7]">Boston College Computer Science Department • Chestnut Hill, MA</p>
                        <ul className="list-disc list-inside mt-1 text-[#A99EA7]">
                            <li className="relative pl-5 text-[#A99EA7] indent-[-1rem] pl-8">Collaborated with a faculty advisor in their research on model calibration in multiclass classification settings, focusing on smoothing discrete prediction properties to improve ML model loss and calibration.</li>
                            <li className="relative pl-5 text-[#A99EA7] indent-[-1rem] pl-8 pt-2">Implemented and trained neural networks in PyTorch to make predictions based on given data sets.</li>
                            <li className="relative pl-5 text-[#A99EA7] indent-[-1rem] pl-8 pt-2"> Gained expertise in model evaluation, including plotting loss surfaces, analyzing prediction distributions, and reviewing academic literature on calibration, probabilistic forecasting, and surrogate losses.</li>
                        </ul>
                    </div>
                      <div>
                        <div className="flex justify-between items-baseline flex-wrap">
                            <p className="font-medium pt-5">Photo Editor</p>
                            <p className="text-sm text-[#A99EA7]">Dec 2023 – Present</p>
                        </div>
                        <p className="text-sm text-[#A99EA7]">The Heights, Inc. • Chestnut Hill, MA</p>
                        <ul className="list-disc list-inside mt-1 text-[#A99EA7]">
                            <li className="relative pl-5 text-[#A99EA7] indent-[-1rem] pl-8">
                                Editorial team for Boston College’s independent student newspaper and a registered nonprofit.
                            </li>
                            <li className="relative pl-5 text-[#A99EA7] indent-[-1rem] pl-8 pt-2">
                                Leading a team of 20 photographers to cover 10-15 news stories on campus a week.
                            </li>
                            <li className="relative pl-5 text-[#A99EA7] indent-[-1rem] pl-8 pt-2"> 
                                Ideating creative solutions to bring stories to life and engage with thousands of readers.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex justify-between items-baseline flex-wrap">
                            <p className="font-medium pt-5">Marketing Lead</p>
                            <p className="text-sm text-[#A99EA7]">May 2024 – May 2025</p>
                        </div>
                        <p className="text-sm text-[#A99EA7]">Boston College Women in Computer Science • Chestnut Hill, MA</p>
                        <ul className="list-disc list-inside mt-1 text-[#A99EA7]">
                            <li className="relative pl-5 text-[#A99EA7] indent-[-1rem] pl-8">
                                Leveraging creativity and skills in graphic design and photography to redefine the kind of promotional
content published; increased social media engagement by 200%.
                            </li>
                            <li className="relative pl-5 text-[#A99EA7] indent-[-1rem] pl-8 pt-2">
                                Collaborating with the Career Center and student organizations to expand reach and better serve members.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex justify-between items-baseline flex-wrap">
                            <p className="font-medium pt-5">Teaching Assistant</p>
                            <p className="text-sm text-[#A99EA7]">Aug 2023 – Dec 2024</p>
                        </div>
                        <p className="text-sm text-[#A99EA7]">Boston College Computer Science Department • Chestnut Hill, MA</p>
                        <ul className="list-disc list-inside mt-1 text-[#A99EA7]">
                            <li className="relative pl-5 text-[#A99EA7] indent-[-1rem] pl-8">
                                Expanding skills in Java and data structures by implementing innovative approaches to engage a discussion section of 15 students with the class material.
                            </li>
                            <li className="relative pl-5 text-[#A99EA7] indent-[-1rem] pl-8 pt-2">
                                Problem-solving one-on-one with students during office hours, meeting grading deadlines, and providing feedback on weekly assignments.
                            </li>
                        </ul>
                    </div>
                </div>
                </section>

                {/* Skills Section */}
                <section>
                <h2 className="text-2xl mb-2 border-b">Skills</h2>
                <p className="text-[#A99EA7]">Git, Java, C, Python, Verilog, SQL, React, PyTorch, Pandas, HTML, CSS, JavaScript, Linux, Adobe Suite, LaTeX, Figma</p>
                </section>

                {/* Awards Section */}
                <section>
                <h2 className="text-2xl mb-2 border-b">Awards</h2>
                    { /* Award 1 */ }
                    <div className="flex justify-between items-baseline flex-wrap">
                        <p>Monsignor Eugene Walsh Award for Excellence in Mathematics</p>
                        <p className="text-sm text-[#A99EA7]">2022</p>
                    </div>
                    <p className="text-sm italics text-[#A99EA7]">Bishop Ireton High School</p>
                    <p className="text-[#A99EA7] pb-10">Recognized for exceptional achievement and contributions to mathematics among high school peers.</p>
                     { /* Award 2 */ }
                    <div className="flex justify-between items-baseline flex-wrap">
                        <p>Aspirations in Technology Virginia Affiliate Honorable Mention</p>
                        <p className="text-sm text-[#A99EA7]">2021</p>
                    </div>
                    <p className="text-sm italics text-[#A99EA7]">National Center for Women & Information Technology</p>
                    <p className="text-[#A99EA7] pb-10">Awarded for leading various Computer Science clubs throughout high school and sharing a passion for IT.</p>
            </section>
            </div>
        </main>
    )
}