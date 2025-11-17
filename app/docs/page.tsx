export default function Docs() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Documentation</h1>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Getting Started</h2>
            <p className="text-gray-700 mb-4">
              Welcome to the Zoer documentation. Here you'll find everything you need to get started.
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>npm install</code>
            </pre>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Development</h2>
            <p className="text-gray-700 mb-4">
              Run the development server:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>npm run dev</code>
            </pre>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Build</h2>
            <p className="text-gray-700 mb-4">
              Create a production build:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>npm run build</code>
            </pre>
          </div>
        </div>
      </div>
    </main>
  )
}
