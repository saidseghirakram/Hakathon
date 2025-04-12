'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Links Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-white transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/rules" className="text-gray-300 hover:text-white transition-colors">
                  Rules
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutions Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Institutions</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">
                Ministry of Higher Education
              </li>
              <li className="text-gray-300">
                University Yahia Fares – Medea
              </li>
              <li className="text-gray-300">
                Business Incubator
              </li>
              <li className="text-gray-300">
                CATI / CDE Centers
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:support@codingmaster.dz" className="text-gray-300 hover:text-white transition-colors">
                  Email: support@codingmaster.dz
                </a>
              </li>
              <li>
                <a href="tel:+213555123456" className="text-gray-300">
                  Phone: +213 555 123 456
                </a>
              </li>
              <li className="text-gray-300">
                Location: Medea, Algeria
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 