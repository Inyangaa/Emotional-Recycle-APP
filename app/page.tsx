export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          Welcome to Zoer
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your Next.js application is ready!
        </p>
        <div className="space-x-4">
          <a
            href="/docs"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </a>
          <a
            href="/about"
            className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </main>
  )
}
