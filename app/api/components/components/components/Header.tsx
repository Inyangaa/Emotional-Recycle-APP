export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">Zoer</h1>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2">
              Home
            </a>
            <a href="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2">
              About
            </a>
            <a href="/contact" className="text-gray-900 hover:text-blue-600 px-3 py-2">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
