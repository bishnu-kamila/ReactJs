import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Responsive Webpage</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Welcome to Our Website</h2>
          <p className="text-lg text-gray-700">
            This is a simple responsive webpage built using React and Tailwind CSS. Resize the browser window or open it on different devices to see the layout adjust.
          </p>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Our Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h4 className="font-semibold">Web Design</h4>
                <p className="text-gray-600">Beautiful, responsive web designs that adapt to any screen size.</p>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h4 className="font-semibold">Web Development</h4>
                <p className="text-gray-600">Fast and scalable web applications built with modern technologies.</p>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h4 className="font-semibold">SEO Optimization</h4>
                <p className="text-gray-600">Improve your website's ranking and visibility on search engines.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 My Company. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
