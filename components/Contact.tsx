"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  const [state, handleSubmit] = useForm("mvonzoyp");
  if (state.succeeded) {
    router.push("/submitted");
  }

  return (
    <section id="contact" className="min-h-screen bg-[url('../public/hero-bg.svg')] bg-cover bg-no-repeat py-20 px-4">
      <h2 className="projects-txt relative block text-center text-3xl font-bold uppercase">Contact</h2>

      <form
        method="POST"
        action="https://formspree.io/f/mvonzoyp"
        onSubmit={handleSubmit}
        className="container my-20 bg-white p-8 shadow-lg md:w-8/12 lg:w-6/12"
      >
        <div className="mb-6">
          <label htmlFor="email" className="mb-2 block text-sm font-bold text-gray-900">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="block w-full rounded border-none bg-gray-100 p-4 text-sm text-gray-900 focus:border-red-600 focus:ring-red-500"
            placeholder="youremail@example.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mb-6">
          <label className="mb-2 block text-sm font-bold text-gray-900">Message</label>
          <textarea
            rows={8}
            id="message"
            name="message"
            className="block w-full rounded border-none bg-gray-100 p-4 text-sm text-gray-900 focus:border-red-600 focus:ring-red-500"
            placeholder="Let's work together!"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <div className="mb-6 flex w-full">
          <button
            type="submit"
            className={
              state.submitting
                ? "w-full cursor-not-allowed rounded bg-red-300 px-8 py-4 text-white transition duration-150 lg:w-auto"
                : "w-full cursor-pointer rounded bg-red-600 px-8 py-4 text-white transition duration-150 hover:bg-red-700 lg:w-auto"
            }
            disabled={state.submitting}
          >
            {state.submitting ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
