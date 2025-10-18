import { GraduationCap, Bell, BookOpen, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">EduMate</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#chat" className="text-gray-700 hover:text-blue-600 transition-colors">AI Assistant</a>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Your Smart School Companion</h1>
          <p className="text-xl text-gray-700 mb-8">EduMate helps you stay on top of classes, assignments, and learning — all in one place.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:-translate-y-0.5">
            Get Started
          </button>
        </div>
      </header>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About EduMate</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            EduMate is your personal AI-powered school assistant — here to help you organize, study, and stay ahead.
            Whether it's managing notes, reminders, or quick help with concepts, EduMate's got you covered.
          </p>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Features</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Reminders</h3>
              <p className="text-gray-600">Keep track of your schoolwork and never miss a deadline again.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Class Notes</h3>
              <p className="text-gray-600">Store and access your notes neatly and easily, anytime.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Study Help</h3>
              <p className="text-gray-600">Ask questions and get help — right when you need it.</p>
            </div>
          </div>

          <div className="text-center">
            <a href="#chat">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-500 transition-all hover:shadow-lg hover:-translate-y-0.5">
                Go to AI Assistant
              </button>
            </a>
          </div>
        </div>
      </section>

      <section id="chat" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Chat Assistant (Coming Soon)</h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-2xl border-2 border-dashed border-gray-300">
            <p className="text-center text-gray-600 text-lg">
              This is where the EduMate AI will live. Soon you'll be able to chat, ask questions, and get real-time school help.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-8 px-4">
        <p className="text-center text-gray-400">© 2025 EduMate. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
