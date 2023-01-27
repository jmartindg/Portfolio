"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MessageSent from "../../public/message_sent.svg";

const Page = () => {
  const router = useRouter();

  // Redirect to home page after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 5000);
  }, [router]);

  return (
    <section className="container flex min-h-screen flex-col items-center justify-center px-4">
      <section className="mb-10">
        <Image src={MessageSent} className="w-52 md:w-64" alt="Message Sent!" priority />
      </section>
      <section className="text-center">
        <h1 className="text-2xl font-black md:text-3xl">Thanks for messaging me!</h1>
        <p className="pt-3">I will get back to you as soon as possible. Returning you to home page.</p>
      </section>
    </section>
  );
};

export default Page;
