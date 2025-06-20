'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Page() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )

      .then(
        () => {
          setStatus('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus('Failed to send message.');
        }
      );
  };

  return (
    <main className="min-h-screen p-8">
      <div className="border-2 border-white rounded-lg p-4 shadow-md flex flex-col items-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 pt-3">Contact Me!</h1>
        <form ref={form} onSubmit={sendEmail} className="w-full space-y-4">
          <div>
            <label className="block text-sm font-medium">Name:</label>
            <input
              type="text"
              name="user_name"
              required
              className="mt-1 block w-full rounded-md border border-[#726D81] shadow-sm focus:ring-[#726D81] focus:border-[#726D81]"
            placeholder='Your name'
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email:</label>
            <input
              type="email"
              name="user_email"
              required
              className="mt-1 block w-full rounded-md border border-[#726D81] shadow-sm focus:ring-[#726D81] focus:border-[#726D81]"
                placeholder='Your name'
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Subject:</label>
            <input
              type="text"
              name="subject"
              className="mt-1 block w-full rounded-md border border-[#726D81] shadow-sm focus:ring-[#726D81] focus:border-[#726D81]"
                placeholder='Subject of your message'
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message:</label>
            <textarea
              name="message"
              rows={6}
              required
              className="mt-1 block w-full rounded-md border border-[#726D81] shadow-sm focus:ring-[#726D81] focus:border-[#726D81]"
            placeholder='Your message'
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#F9F5F2] hover:bg-[#726D81] text-[#22223B] font-semibold py-2 px-6 rounded shadow"
            >
              Submit
            </button>
            {status && <p className="mt-2 text-sm text-gray-600">{status}</p>}
          </div>
        </form>
      </div>
    </main>
  );
}
