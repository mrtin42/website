'use client'

import formSubmit from "@/utils/act/formSubmit";
import { toast } from "sonner";

  const process = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const promise = formSubmit(data);
    toast.promise(promise, {
      loading: 'Sending message...',
      success: (res) => {
        return res.message;
      },
      error: (err) => {
        return err.message || 'Failed to send message. Please try again later.';
      },
    })
  }

export default function Form() {
  return (
    <form onSubmit={process} className="self-center">
      <div className="flex flex-row gap-2 mb-1">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="block w-full bg-transparent border border-white text-white font-semibold py-2 px-4 focus:outline-none rounded-lg focus:ring-2 focus:ring-blue-400 transition-colors mb-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="block w-full bg-transparent border border-white text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors mb-2"
          required
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="block w-full bg-transparent border border-white text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors mb-2"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="block w-full bg-transparent border border-white text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors mb-2"
        rows={8}
        required
      ></textarea>
      <button
        name="submit"
        type="submit"
        className="block w-full border-mdv text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors mb-2"
      >
        send
      </button>
    </form>
  )
}