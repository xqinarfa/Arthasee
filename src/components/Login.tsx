import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen w-full bg-black relative flex items-center justify-center p-4 sm:p-8 overflow-hidden font-sans">
      
      {/* 1. Global Background */}
      {/* Background Video */}
      <img
        src="/assets/mechanic-bg.png"
        alt="Mechanic Shop Background"
        className="absolute top-0 left-0 w-full h-full object-cover scale-[1.05] pointer-events-none"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm pointer-events-none"></div>

      {/* 2. Main Center Card */}
      <div className="z-10 relative flex flex-col md:flex-row w-full max-w-260 min-h-[650px] bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-200 p-2 md:p-3 overflow-hidden">
        
        {/* 3. Left Side (Video Mask Area) */}
        <div className="w-full md:w-[45%] h-[250px] md:h-auto bg-[#0c0c0e] rounded-[2rem] overflow-hidden relative shrink-0">
          <img
            src="/assets/mechanic-bg.png"
            alt="Mechanic Shop Background"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        </div>

        {/* 4. Right Side (Form Area) */}
        <div className="w-full md:w-[55%] relative p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          
          {/* Decorative blurred circle */}
          <div className="absolute top-0 left-0 w-64 h-64 blur-[80px] bg-gradient-to-br from-[#FF512F] to-[#F09819] opacity-20 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-10 z-10 relative">
            <h1 className="text-[40px] font-semibold tracking-tight text-gray-900 leading-tight">Welcome back</h1>
            <p className="text-sm text-gray-500 mt-2">Sign in to your account</p>
          </div>
          
          {/* Social Buttons */}
          <div className="flex flex-col gap-3 mb-8 z-10 relative">
            <button className="flex items-center justify-between w-full bg-gray-50 border border-gray-200 rounded-[1.25rem] p-4 group hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Continue with Google</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </button>
            
            <button className="flex items-center justify-between w-full bg-gray-50 border border-gray-200 rounded-[1.25rem] p-4 group hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-black" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-sm font-medium text-gray-700">Continue with X</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </button>
          </div>
          
          {/* Divider */}
          <div className="flex items-center gap-4 mb-8 z-10 relative">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200"></div>
            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">OR</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200"></div>
          </div>
          
          {/* Email Input Group */}
          <div className="relative z-10 group">
            <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-[1.25rem] p-2 transition-all focus-within:bg-white focus-within:border-gray-300 focus-within:shadow-sm hover:border-gray-300">
              <div className="flex flex-col pl-4 flex-1 justify-center h-full">
                <label className="text-[11px] text-gray-500 font-medium mb-0.5 select-none cursor-text">Email</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 w-full"
                />
              </div>
              
              {/* Submit Button */}
              <button 
                className="relative w-[52px] h-[52px] flex-shrink-0 group/btn cursor-pointer outline-none border-none bg-transparent p-0"
                type="submit"
                aria-label="Submit"
              >
                {/* Glowing blur background */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-spin transition-opacity duration-500 blur-[8px]"
                     style={{ background: 'conic-gradient(from 0deg, #00c6ff, #0072ff, #ff007a, #ff8a00, #00c6ff)' }}
                ></div>

                {/* Conic gradient border */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-[0px] w-full h-full group-hover/btn:animate-spin transition-transform duration-500"
                       style={{ background: 'conic-gradient(from 0deg, #00c6ff, #0072ff, #ff007a, #ff8a00, #00c6ff)' }}
                  ></div>
                  
                  {/* Inner black button */}
                  <div className="absolute inset-[2px] bg-black rounded-full flex items-center justify-center z-10 group-hover/btn:shadow-[inset_0_2px_10px_rgba(255,255,255,0.25)] transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-white transform group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </button>
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-auto pt-10 text-center z-10 relative">
            <span className="text-sm text-gray-500">Don't have an account? </span>
            <a href="#" className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] to-[#F09819] hover:opacity-80 transition-opacity">
              Sign up
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
