import { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <nav className="bg-white border-b sticky  top-0 z-50 border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Heading / Logo */}
          <div className="text-3xl font-bold text-gray-900">
            CodePrep
          </div>

          {/* Desktop Navigation */}
          <div className="hidden text-md  md:flex items-center gap-8">
            
              <NavLink
              to={'/'}
              end
                className={({isActive})=>isActive?"text-black font-semibold hover:text-lg":"text-gray-600 hover:text-black font-medium  transition-colors"}
              >
                Dashboard
              </NavLink>
              <NavLink
              to={'/coding'}
              
                className={({isActive})=>isActive?"text-black font-semibold hover:text-lg":"text-gray-600 hover:text-black font-medium transition-colors"}
              >
                Coding
              </NavLink>
              <NavLink
              to={'/dsa'}
              
              className={({isActive})=>isActive?"text-black hover:text-lg font-semibold":"text-gray-600 hover:text-black font-medium transition-colors"}
              >
                Dsa
              </NavLink>
              <NavLink
              to={'/interview'}
              
                className={({isActive})=>isActive?"text-black hover:text-lg font-semibold":"text-gray-600 hover:text-black font-medium transition-colors"}
              >
                Interview
              </NavLink>
           
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-black"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-3">
            <div className="flex flex-col gap-1">
             <NavLink
             end
              to={'/'}
               onClick={()=>setIsOpen(false)}
              className={({isActive})=>isActive?"text-black font-semibold":"text-gray-600 hover:text-black font-medium transition-colors"}
              >
                Home
              </NavLink>
              <NavLink
              to={'/coding'}
               onClick={()=>setIsOpen(false)}
               className={({isActive})=>isActive?"text-black font-semibold":"text-gray-600 hover:text-black font-medium transition-colors"}
              >
                Coding
              </NavLink>
              <NavLink
              to={'/dsa'}
               onClick={()=>setIsOpen(false)}
                className={({isActive})=>isActive?"text-black font-semibold":"text-gray-600 hover:text-black font-medium transition-colors"}
              >
                Dsa
              </NavLink>
              <NavLink
              to={'/interview'}
              onClick={()=>setIsOpen(false)}
                className={({isActive})=>isActive?"text-black font-semibold":"text-gray-600 hover:text-black font-medium transition-colors"}
              >
                Interview
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
