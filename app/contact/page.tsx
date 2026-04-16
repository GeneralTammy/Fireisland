import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-sand">
      <Navbar />
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif uppercase tracking-widest text-ocean mb-4">Get In Touch</h1>
          <p className="text-ocean/60">We're here to help with all your Fire Island real estate needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 bg-white p-10 rounded-sm shadow-lg border border-ocean/5">
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-ocean/60">First Name</label>
                <input type="text" className="w-full border border-ocean/10 p-3 rounded-sm focus:border-sunset outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-ocean/60">Last Name</label>
                <input type="text" className="w-full border border-ocean/10 p-3 rounded-sm focus:border-sunset outline-none" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-ocean/60">Email Address</label>
                <input type="email" className="w-full border border-ocean/10 p-3 rounded-sm focus:border-sunset outline-none" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-ocean/60">Message</label>
                <textarea rows={5} className="w-full border border-ocean/10 p-3 rounded-sm focus:border-sunset outline-none resize-none"></textarea>
              </div>
              <button type="button" className="btn-primary md:col-span-2 py-4 uppercase tracking-widest font-bold">Send Message</button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-beach/30 p-8 rounded-sm border border-ocean/5">
              <h3 className="font-serif text-xl text-ocean mb-6 uppercase tracking-widest">Contact Info</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Phone className="text-sunset shrink-0" size={20} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-ocean/40 mb-1">Phone</p>
                    <p className="text-ocean font-medium">631-570-8942</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="text-sunset shrink-0" size={20} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-ocean/40 mb-1">Email</p>
                    <p className="text-ocean font-medium">hello@livingfireisland.com</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MapPin className="text-sunset shrink-0" size={20} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-ocean/40 mb-1">Office</p>
                    <p className="text-ocean font-medium">123 Bayview Walk, Ocean Beach, NY</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="text-sunset shrink-0" size={20} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-ocean/40 mb-1">Hours</p>
                    <p className="text-ocean font-medium">Daily: 9am - 6pm</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
