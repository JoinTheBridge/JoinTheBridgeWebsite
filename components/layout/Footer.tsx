"use client";

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">BRIDGE</h3>
            <p className="text-sm leading-relaxed">
              Building Resilience in Development, Growth, and Education. 
              Empowering communities through free educational programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/programs" className="hover:text-accent-500 transition-colors">Programs</Link></li>
              <li><Link href="/about" className="hover:text-accent-500 transition-colors">About Us</Link></li>
              <li><Link href="/impact" className="hover:text-accent-500 transition-colors">Our Impact</Link></li>
              <li><Link href="/get-involved" className="hover:text-accent-500 transition-colors">Get Involved</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-accent-500 transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-accent-500 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-accent-500 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-accent-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-accent-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@bridge-nonprofit.org" className="hover:text-accent-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm">
              <a href="mailto:contact@bridge-nonprofit.org" className="hover:text-accent-500 transition-colors">
                contact@bridge-nonprofit.org
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {currentYear} BRIDGE. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Made with <span className="text-red-500">❤</span> by students, for students
          </p>
        </div>
      </div>
    </footer>
  );
}
