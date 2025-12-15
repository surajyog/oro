import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Stethoscope } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-50 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
                <Stethoscope className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold text-white">Oro Dental</span>
            </Link>
            <p className="text-slate-400 text-sm">
              Providing modern, compassionate dental care for the whole family. Your smile is our passion.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="#hero" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="#why-us" className="hover:text-blue-400 transition-colors">Why Us</Link></li>
              <li><Link href="#team" className="hover:text-blue-400 transition-colors">Team</Link></li>
              <li><Link href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>General Dentistry</li>
              <li>Cosmetic Dentistry</li>
              <li>Orthodontics</li>
              <li>Dental Implants</li>
              <li>Teeth Whitening</li>
              <li>Emergency Care</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Oro Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
