import Link from "next/link";
import React, { useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  interface contactType {
    email: string;
    subject: string;
    message: string;
  }

  const [loading, setLoading] = useState(false);

  const [contactData, setContactData] = useState<contactType>({
    email: "",
    subject: "",
    message: "",
  });
  const form = useRef<null | HTMLFormElement>(null);
  function handleSubmit(e: any) {
    e.preventDefault();
    if (typeof form !== null) {
      if (!contactData.subject || !contactData.email || !contactData.message) {
        toast.error("Please provide all the details!");
        return;
      }

      if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          contactData.email.toString()
        )
      ) {
        toast.error("Please provide a valid email id.");
        return;
      }

      try {
        fetch("/api/contact", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        });
        toast.success(
          "Your enquiry has been submitted successfully. We'll get back to you at our earliest.",
          { duration: 3000 }
        );
      } catch (e) {
        console.log(e);
        toast.error("Something went wrong. Please try again later.");
      }
    }
    setContactData({
      email: "",
      subject: "",
      message: "",
    });
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    console.log("hello from scrolltotop");
  };

  return (
    <div
      id="contact"
      className="text-white py-8 min-h-screen relative bg-gray-900"
    >
      <div className="z-50">
        <Toaster />
      </div>
      <div className="max-w-xl mx-auto w-11/12">
        <div className="relative ">
          <h2 className="md:text-3xl text-lg md:pt-12 pt-4 text-center font-bold border-b-2 border-white w-fit mx-auto">
            Get in Touch
          </h2>
          <div className="absolute top-0 left-0 right-0 bottom-0 text-center opacity-10 md:text-[6rem] text-[3rem]">
            Contact Me
          </div>
        </div>

        <section className="">
          <div className="py-8 lg:py-32 px-4 mx-auto max-w-screen-md">
            <form
              ref={form}
              name="contact"
              encType="multipart/form-data"
              className="space-y-8"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  value={contactData.email}
                  onChange={(e) =>
                    setContactData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  type="email"
                  autoComplete="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 "
                  placeholder="your mail"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-white "
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={contactData.subject}
                  onChange={(e) =>
                    setContactData((prev) => ({
                      ...prev,
                      subject: e.target.value,
                    }))
                  }
                  autoComplete="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="Let us know how I can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={contactData.message}
                  onChange={(e) =>
                    setContactData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary focus:border-primary"
                  placeholder="your Message"
                ></textarea>
              </div>
              <button
                // type="submit"
                onClick={handleSubmit}
                // className="py-3 px-5 text-sm font-medium text-center text-primary hover:text-white rounded-lg bg-white sm:w-fit hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-primary transition duration-500"
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none active:text-opacity-75 sm:w-auto"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
      <div className="absolute bottom-16 right-16 ">
        <Link
          className="bg-white rounded-full  text-primary px-5 py-3 text-xl font-extrabold cursor-pointer animate-bounce"
          href={"/#hero"}
        >
          &uarr;
        </Link>
      </div>
    </div>
  );
};

export default Contact;
