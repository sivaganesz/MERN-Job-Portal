import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Section 1: About */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Job Portal</h3>
            <p className="text-sm">
              Connecting talent with opportunity. Your go-to platform for finding the perfect job or the best talent.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/jobs" className="hover:underline">Browse Jobs</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/faq" className="hover:underline">FAQs</a></li>
            </ul>
          </div>

          {/* Section 3: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:support@jobportal.com" className="hover:underline">support@jobportal.com</a></li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Job Street, WorkCity</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Job Portal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
