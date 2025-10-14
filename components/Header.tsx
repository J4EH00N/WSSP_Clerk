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
            <a
              className="text-gray-300 hover:text-white mr-4"
              href="./dashboard"
            >
              Dashboard
            </a>
            <a
              className="text-gray-300 hover:text-white mr-4"
              href="./settings"
            >
              Settings
            </a>
            <SignedOut>
              <SignInButton>
                <button className="text-gray-300 hover:text-white mr-4">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="text-gray-300 hover:text-white mr-4">
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
              <Link
                href="/courses"
                className="text-gray-300 hover:text-white mr-4"
              >
                {' '}
                Courses{' '}
              </Link>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>
    </div>
  )
}
