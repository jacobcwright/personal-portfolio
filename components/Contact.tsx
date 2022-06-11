import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaGithub,
} from "react-icons/fa";

function ContactPage() {
  return (
    <div className="bg-[#293241] w-screen md:h-screen h-auto">
      <div className="flex justify-around items-center mx-20 md:flex-row flex-col">
        {/* textual content */}
        <div className="md:w-1/2 w-full md:p-10 my-10 md:my-0  flex-col">
          <h1 className="text-4xl font-semibold text-white ">Get In Touch</h1>
          <p className="text-gray-300 font-semibold text-sm my-5">
            Fill out the form I will try to get back to you as soon as possible.
          </p>
          <div id="contact" className="flex-col my-20 gap-5 flex">
            <div className="flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
              <BsTelephoneFill className="text-xl text-gray-500  group-hover:text-white" />
              <p className="text-gray-500 text-base font-semibold group-hover:text-white">
                385-695-9800
              </p>
            </div>
            <div className="flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
              <GrMail className="text-xl text-gray-500  group-hover:text-white" />
              <p className="text-gray-500 text-base font-semibold group-hover:text-white">
                jacob.wright.ut@gmail.com
              </p>
            </div>
            <div className="flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
              <HiLocationMarker className="text-xl text-gray-500  group-hover:text-white" />
              <p className="text-gray-500 text-base font-semibold group-hover:text-white">
                Salt Lake City, Utah
              </p>
            </div>
          </div>

          <div className="flex gap-8  justify-center md:justify-start ">
            <FaInstagram className="text-2xl text-white hover:text-blue-700 cursor-pointer" />
            <FaTwitter className="text-2xl text-white hover:text-blue-700 cursor-pointer" />
            <FaYoutube className="text-2xl text-white hover:text-blue-700 cursor-pointer" />
            <FaPinterest className="text-2xl text-white hover:text-blue-700 cursor-pointer" />
            <FaGithub className="text-2xl text-white hover:text-blue-700 cursor-pointer" />
          </div>
        </div>
        {/* Contact form */}
        <div className="bg-white p-12 rounded-lg shadow-md">
          <form>
            <div className="grid xl:grid-cols-2 xl:gap-10">
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="First Name "
                required={true}
              />

              <input
                type="text"
                name="last_name"
                id="last_name"
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Last Name "
                required={true}
              />
            </div>
            <input
              type="email"
              name="email"
              className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email "
              required={true}
            />
            <input
              type="text"
              name="subject"
              className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Subject "
              required={true}
            />

            <div className="flex justify-center">
              <textarea
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlTextarea1"
                rows={3}
                placeholder="Your message"
                required={true}
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                alert(
                  "Thank you for your message!\n I will implement this as soon as possible"
                );
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
