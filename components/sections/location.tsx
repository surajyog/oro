import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";

export function Location() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Contact & Location</h2>
          <p className="max-w-[700px] mx-auto text-slate-500 md:text-xl">
            We are conveniently located in the heart of the city with ample parking.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-bold text-xl mb-6">Send us a Message</h3>
                    <ContactForm />
                </div>
            </div>

            <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <MapPin className="h-5 w-5 text-blue-600" />
                            <h4 className="font-semibold">Visit Us</h4>
                        </div>
                        <address className="not-italic text-slate-600 pl-8">
                            123 Dental Avenue,<br />
                            Suite 101<br />
                            New York, NY 10001
                        </address>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-4">
                         <div className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-blue-600" />
                            <h4 className="font-semibold">Hours</h4>
                        </div>
                        <ul className="text-slate-600 pl-8 space-y-1 text-sm">
                            <li className="flex justify-between"><span>Mon - Fri:</span> <span>9:00 AM - 6:00 PM</span></li>
                            <li className="flex justify-between"><span>Saturday:</span> <span>10:00 AM - 4:00 PM</span></li>
                            <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
                        </ul>
                    </div>

                     <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-4 sm:col-span-2">
                         <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-blue-600" />
                            <h4 className="font-semibold">Contact Info</h4>
                        </div>
                        <div className="pl-8 flex flex-col sm:flex-row gap-6">
                            <a href="tel:+15551234567" className="text-slate-600 hover:text-blue-600 transition-colors">
                                (555) 123-4567
                            </a>
                            <a href="mailto:info@orodental.com" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                                <Mail className="h-4 w-4" /> info@orodental.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Map Embed */}
                <div className="bg-slate-200 w-full h-[300px] rounded-xl overflow-hidden shadow-sm relative">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184126139433!2d-73.9856566845941!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy"
                        className="grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
