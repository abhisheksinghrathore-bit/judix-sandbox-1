import React from 'react';

// SVG components for icons to remove external dependency
const TwitterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 8.118a4.108 4.108 0 100 8.216 4.108 4.108 0 000-8.216zm0 6.616a2.508 2.508 0 110-5.016 2.508 2.508 0 010 5.016zM16.949 6.868a1.396 1.396 0 100 2.792 1.396 1.396 0 000-2.792z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const PhoneIcon = () => (
    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
    </svg>
);


const Footer = () => {
  return (
    <footer className="bg-[#0F2D37] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo and Tagline */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-5xl font-thin tracking-wider">Judix</h2>
              <p className="mt-2 text-sm text-gray-300">Simplifying Legal Complexity with AI</p>
            </div>
            <p className="text-xs text-gray-400 mt-8 md:mt-0">Judix Labs @ 2025. All rights reserved.</p>
          </div>

          {/* Column 2: Product Links */}
          <div>
            <h3 className="font-semibold text-lg">Product</h3>
            <ul className="mt-4 space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white">Legal Research</a></li>
              <li><a href="#" className="hover:text-white">AI Workspace</a></li>
              <li><a href="#" className="hover:text-white">Document Intelligence</a></li>
              <li><a href="#" className="hover:text-white">Case Management</a></li>
            </ul>
          </div>
          
          {/* Column 3: CTA, Social, and Newsletter */}
          <div className="space-y-8">
            <button className="flex items-center justify-center w-full max-w-xs px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
              Request a callback
              <PhoneIcon />
            </button>

            <div>
              <h3 className="font-semibold text-lg">Follow Us</h3>
              <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-gray-300 hover:text-white"><TwitterIcon /></a>
                  <a href="#" className="text-gray-300 hover:text-white"><InstagramIcon /></a>
                  <a href="#" className="text-gray-300 hover:text-white"><LinkedinIcon /></a>
              </div>
            </div>

            <div>
              <form>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full max-w-xs px-4 py-3 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <button 
                  type="submit"
                  className="w-full max-w-xs mt-3 px-6 py-3 bg-[#2EB394] text-white font-bold rounded-lg hover:bg-[#259178] transition-colors"
                >
                  Join us today !!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;