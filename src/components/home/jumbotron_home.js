import React from "react";
import SupportChatPage from './supportchat';
import { CardActions} from '@mui/material';
const jumbotron_home = () => {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>

  

      <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative mt-20">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Simplify Your Document Workflow with DataSign
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            Discover the power of electronic signatures and document management.
            DataSign makes it easy to sign, send, and manage your documents
            securely anywhere, anytime.
          </p>
          <form className="w-full max-w-md mx-auto">
            <label
              htmlFor="default-email"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Email sign-up
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                {/* SVG icon */}
              </div>
              <input
                type="email"
                id="default-email"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email here..."
                required
              />
              
              <button
                type="submit"
                style={{ backgroundColor: "#3182ce" }} // Directly setting the background color
                className="text-white absolute end-2.5 bottom-2.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div className="fixed bottom-10 right-4">
          <CardActions sx={{ justifyContent: 'flex-end' }}>
           <SupportChatPage />
          </CardActions>
        </div>
      </section>

      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <a
              href="#"
              class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
            >
              <svg
                class="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 14"
              >
                <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
              </svg>
              New Feature
            </a>
            <h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
              Elevate Your Document Signing Experience
            </h1>
            <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
              Embrace the digital revolution with DataSign. Our platform
              empowers you to sign, manage, and store documents efficiently,
              transforming the way you handle paperwork.
            </p>
            <a
              href="#"
              class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Read more
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <a
                href="#"
                class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"
              >
                <svg
                  class="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                </svg>
                New Integration
              </a>
              <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                Seamless Third-Party Integrations
              </h2>
              <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Enhance your workflow with DataSign's advanced integration
                features, connecting you effortlessly with numerous third-party
                applications.
              </p>
              <a
                href="#"
                class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
              >
                Read more
                <svg
                  class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <a
                href="#"
                class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
              >
                <svg
                  class="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                  />
                </svg>
                Enhanced Security
              </a>
              <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                Unmatched Document Security
              </h2>
              <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                DataSign's top-tier security protocols ensure your documents are
                always safe, giving you peace of mind in every transaction.
              </p>
              <a
                href="#"
                class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
              >
                Read more
                <svg
                  class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default jumbotron_home;
