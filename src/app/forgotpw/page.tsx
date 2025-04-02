import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 sm:p-8 dark:bg-gray-800">
        <form className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
            Reset your password
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Enter your email and we'll send you a link to reset your password.
          </p>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Send reset link
          </button>
          <div className="text-center text-sm font-medium text-gray-500 dark:text-gray-300">
            Remember your password?{" "}
            <Link 
              href="/login" 
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Sign in here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}