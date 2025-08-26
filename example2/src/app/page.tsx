import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#E8E8E8]">
      <article className="bg-white rounded-3xl shadow-lg w-[950px] h-[700px] flex overflow-hidden">
        
        {/* Ilustración izquierda */}
        <aside className="w-[45%] flex items-center justify-center p-2">
          <div className="bg-[#E8E8E8] rounded-3xl flex items-center justify-center w-full h-full overflow-visible relative">
            <Image
              src="/mi-fondo.png"
              alt="Ilustración login"
              width={600}
              height={520}
              className="max-w-none object-contain absolute left-[54%] -translate-x-1/2 drop-shadow-xl"
              style={{ zIndex: 2 }}
            />
          </div>
        </aside>

        {/* Formulario derecho */}
        <section className="w-[55%] p-8 flex flex-col justify-center items-center relative">
          
          {/* Enlace superior */}
          <header className="absolute right-0 top-0 mt-4 mr-8 z-10 text-sm text-gray-500">
            Don’t have an account?
            <a href="#" className="ml-1 text-black font-bold hover:underline">
              Sign up
            </a>
          </header>

          <h2 className="text-4xl font-black mb-3 text-black w-full max-w-[340px]">Sign in</h2>
          <p className="text-[11px] text-gray-900 mb-3 font-semibold w-full max-w-[340px]">
            Sign in with Open account
          </p>

          {/* Botones sociales */}
          <nav className="flex gap-2 mb-6 w-full max-w-[340px]">
            <button className="flex-1 border border-gray-200 rounded-lg py-1 flex items-center justify-center hover:bg-gray-50 transition text-xs">
              <Image src="/google.png" alt="Google" width={20} height={20} className="mr-2" />
              <span className="font-medium text-gray-700 text-xs">Google</span>
            </button>
            <button className="flex-1 border border-gray-200 rounded-lg py-1 flex items-center justify-center hover:bg-gray-50 transition text-xs">
              <Image src="/apple.png" alt="Apple" width={40} height={30} className="mr-2" />
              <span className="font-medium text-gray-700 text-xs">Apple ID</span>
            </button>
          </nav>

          <hr className="w-full max-w-[340px] border-t border-gray-200 mb-6" />
          <p className="text-[11px] text-gray-900 mb-4 font-semibold w-full max-w-[340px]">
            Or continue with email address
          </p>

          {/* Formulario */}
          <form className="space-y-2 w-full max-w-[340px]">
            {/* Campo email */}
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 bg-[#E8E8E8]">
              <svg className="w-5 h-5 text-gray-400 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8a2 2 0 11-4 0 2 2 0 014 0zM11 15a2 2 0 100-4 2 2 0 000 4zm5-7a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="tam@ui8.net"
                className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 text-xs"
                required
              />
            </div>

            {/* Campo contraseña */}
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 bg-[#E8E8E8]">
              <svg className="w-5 h-5 text-gray-400 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 text-xs"
                required
              />
            </div>

            {/* Botón final */}
            <button type="submit" className="w-full bg-blue-600 text-white rounded-lg py-2 font-semibold text-xs hover:bg-blue-700 transition mt-2">
              Start trading
            </button>
          </form>
        </section>
      </article>
    </main>
  );
}

