import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, CheckCircle2, Home as HomeIcon } from "lucide-react";

export default function Manage() {
  return (
    <div className="min-h-screen bg-sand">
      <Navbar />
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h1 className="text-5xl font-serif uppercase tracking-widest text-ocean">Property Management</h1>
            <p className="text-ocean/80 leading-relaxed text-lg">
              Owning a home on Fire Island should be all about the relaxation, not the logistics. We handle everything from winterization to rental turnover, so you can just enjoy the beach.
            </p>
            <div className="space-y-4">
              {[
                "Weekly property inspections",
                "Rental turnover & cleaning",
                "Maintenance & emergency repairs",
                "Winterization & spring opening",
                "Guest screening & check-in"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-ocean/70">
                  <CheckCircle2 className="text-sunset" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <button className="btn-primary px-10 py-4 uppercase tracking-widest font-bold">Inquire About Management</button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80" 
              className="scrapbook-image w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
              alt="Management"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <ShieldCheck size={40} />, title: "Secure", desc: "Your home is monitored 24/7 by our local team." },
            { icon: <HomeIcon size={40} />, title: "Maintained", desc: "We keep your property in pristine condition year-round." },
            { icon: <CheckCircle2 size={40} />, title: "Profitable", desc: "Maximize your rental income with our expert marketing." }
          ].map((card, i) => (
            <div key={i} className="bg-white p-10 rounded-sm border border-ocean/5 text-center space-y-4 shadow-sm">
              <div className="text-sunset flex justify-center">{card.icon}</div>
              <h3 className="font-serif text-2xl text-ocean uppercase tracking-widest">{card.title}</h3>
              <p className="text-ocean/60 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
