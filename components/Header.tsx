import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <nav className="bg-red-900 py-4">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div className="text-white font-bold text-lg">My App</div>
          <div className="flex items-center">
            <a href="./dashboard">Dashboard</a>
            <span className="text-gray-400 mx-2">|</span>
            <a href="./settings">Settings</a>
            <span className="text-gray-400 mx-2">|</span>
            <SignedOut>
              <SignInButton>
                <button className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link
                href="/repos"
                className="text-gray-300 hover:text-white mr-4"
              >
                Repos{' '}
              </Link>

              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>
    </div>
  )
}
