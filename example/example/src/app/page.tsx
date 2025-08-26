// app/page.tsx
export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-slate-300">
      <section className="bg-white rounded-2xl shadow-md p-7 w-96">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-4">
          <p className="text-sm text-slate-500">Tue Feb 18 2025</p>
          <time className="text-xs text-slate-400">9:31:25 p.m.</time>
        </header>

        {/* Title */}
        <h2 className="text-lg font-semibold text-blue-900 mb-2">
          List Tailwind
        </h2>

        {/* Weekdays */}
        <nav className="flex justify-between text-slate-500 text-sm mb-2">
          <span>s</span><span>m</span><span>t</span>
          <span>w</span><span>t</span><span>f</span><span>s</span>
        </nav>

        {/* Dates */}
        <nav className="flex justify-between text-slate-800 text-sm mb-6">
          <span>24</span><span>25</span><span>26</span>
          <span>27</span><span>28</span><span>29</span><span>30</span>
        </nav>

        {/* Task List */}
        <ul className="space-y-3">
          <li className="flex items-center justify-between bg-slate-100 rounded-lg p-2">
            <span className="flex items-center space-x-2 text-green-600 line-through">
              <span className="w-5 h-5 flex items-center justify-center bg-green-500 text-white rounded-full">✔</span>
              <span>take out the trash</span>
            </span>
            <time className="text-sm font-medium text-slate-600">9:00 AM</time>
          </li>

          <li className="flex items-center justify-between bg-slate-100 rounded-lg p-2">
            <span className="flex items-center space-x-2 text-green-600 line-through">
              <span className="w-5 h-5 flex items-center justify-center bg-green-500 text-white rounded-full">✔</span>
              <span>do homework</span>
            </span>
            <time className="text-sm font-medium text-slate-600">12:00 PM</time>
          </li>

          <li className="flex items-center justify-between bg-slate-100 rounded-lg p-2">
            <span className="flex items-center space-x-2 text-slate-600">
              <span className="w-5 h-5 border-2 bg-white border-slate-300 rounded-full"></span>
              <span>go to grocery store</span>
            </span>
            <time className="text-sm font-medium text-slate-600">1:00 PM</time>
          </li>

          <li className="flex items-center justify-between bg-slate-100 rounded-lg p-2">
            <span className="flex items-center space-x-2 text-slate-600">
              <span className="w-5 h-5 border-2 border-slate-300 rounded-full"></span>
              <span>run 5 kilometers</span>
            </span>
            <time className="text-sm font-medium text-slate-600">4:20 PM</time>
          </li>

          <li className="flex items-center justify-between bg-slate-100 rounded-lg p-2">
            <span className="flex items-center space-x-2 text-slate-600">
              <span className="w-5 h-5 border-2 border-slate-300 rounded-full"></span>
              <span>load the dishwasher</span>
            </span>
            <time className="text-sm font-medium text-slate-600">9:00 PM</time>
          </li>

          <li className="flex items-center justify-between bg-slate-100 rounded-lg p-2">
            <span className="flex items-center space-x-2 text-slate-600">
              <span className="w-5 h-5 border-2 border-slate-300 rounded-full"></span>
              <span>Take out the trash</span>
            </span>
            <time className="text-sm font-medium text-slate-600">9:00 AM</time>
          </li>
        </ul>
      </section>
    </main>
  );
}
