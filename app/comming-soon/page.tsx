import { NextPage } from 'next'
import Link from 'next/link';
interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-comingsoonPurple-500 via-comingsoonPurple-600 to-comingsoonPurple-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="w-[150%] h-[150%] bg-gradient-to-r from-comingsoonPurple-400 to-comingsoonPurple-600 opacity-30 animate-pulse rounded-full blur-3xl -top-96 -left-96"></div>
        <div className="w-[120%] h-[120%] bg-gradient-to-r from-comingsoonPurple-300 to-comingsoonPurple-700 opacity-50 animate-pulse delay-2000 rounded-full blur-3xl -bottom-96 -right-96"></div>
      </div>

      {/* Coming Soon Text */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl sm:text-8xl font-bold text-white animate-bounce">
          Coming Soon
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-white opacity-75">
          We are working hard to launch something amazing!
        </p>

        {/* Email Signup */}
        {/* <div className="mt-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-comingsoonPurple-500"
          />
          <button className="ml-4 px-6 py-2 bg-comingsoonPurple-600 text-white rounded-lg shadow-md hover:bg-comingsoonPurple-700 focus:outline-none focus:ring-2 focus:ring-comingsoonPurple-500">
            Notify Me
          </button>
        </div> */}

        {/* Return to Home Button */}
        <div className="mt-8">
          <Link href="/">
            <span className="px-6 py-2 bg-white text-comingsoonPurple-700 font-bold rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-comingsoonPurple-500">
              Return to Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page

