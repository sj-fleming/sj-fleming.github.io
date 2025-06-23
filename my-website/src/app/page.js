import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import * as React from 'react';
import CustomTimeline from "@/components/timeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#22223B] bg-[radial-gradient(circle_at_center,_#2a2a4f,_#22223B)] p-8">
      <h1 className="text-3xl font-bold mb-4 text-[#F9F5F2] pt-3 pl-15">Sarah J. Fleming</h1>
        <div className="flex flex-wrap items-start justify-between p-4 pt-10 max-w-7xl mx-auto w-full"
              style={{ columnGap: '7vw' }}>

          <div className="flex flex-col items-center">
            {/* Profile Image */}
            <div
            className="w-[400px] h-[450px] rounded-md bg-cover bg-center select-none pointer-events-none"
            style={{backgroundImage: "url('/assets/images/376A0314.jpg')"}}
            />

            {/* Social Media Links */}
            <div className="flex gap-7 mt-4 text-[#F9F5F2] text-4xl pt-5">
              <a href="/contact" aria-label="Email" rel="noopener noreferrer">
                <FaEnvelope className="hover:text-[#726D81] transition" />
              </a>
              <a href="https://github.com/sj-fleming" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-[#726D81] transition" />
              </a>
              <a href="https://www.linkedin.com/in/sarahj-fleming/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-[#726D81] transition" />
              </a>
              <a href="https://instagram.com/sjf.photo" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-[#726D81] transition" />
              </a>
            </div>

            {/* Resume Link */}
            <a href="/FlemingResume.pdf" download>
              <button 
                className="bg-[#F9F5F2] hover:bg-[#726D81] text-[#22223B] font-semibold py-2 px-4 rounded shadow mt-6">
                Download my resume here!
              </button>
            </a>
          </div>
          

          {/* Bio */}
          <div className="flex-1 min-w-[300px] text-left text-[#F9F5F2] text-xl">
            <p>Hello! My name is Sarah Fleming and I'm a rising senior at Boston College studying Computer Science and minoring in Management and Leadership.
              I'm passionate about using technology and collaboration to solve real-world problems and create meaningful impact. 
            </p>
            <br />
            <p>I have extensive experience in Java from my tenure as a Teaching Assistant for Computer Science II. 
            I've also worked on several projects using Python, C, Verilog, React, and SQL. Currently, I am working as an Undergraduate Research Fellow for the BC Computer Science Department.
            I am working with Professor Finocchiaro on a machine learning research project that explores the use of embeddings to smooth loss functions for evaluating ML models. Through this research opportunity, I am gaining experience with Python, PyTorch, 
            and Pandas while learning about Deep Learning and neural networks.
            I'm actively seeking software engineering opportunities starting in Fall 2025. If you're interested in connecting, feel free to reach out via the Contact page.
            </p>
            <br />
            <p>
            Outside of CS, I also serve as the Photo Editor for <em>The Heights</em>, Boston College's
            independent student newspaper. Check out some of my projects and photography on this site!
            </p>
          </div>
      </div>
      <h2 className="text-2xl mb-4 text-[#F9F5F2] pt-18 pl-15">Latest Updates:</h2>
      <CustomTimeline />
     
    </main>
  );
}
