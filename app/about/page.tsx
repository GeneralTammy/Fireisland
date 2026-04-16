import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-sand">
      <Navbar />
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" 
              className="scrapbook-image w-full h-[600px] object-cover"
              referrerPolicy="no-referrer"
              alt="About Us"
            />
            <div className="absolute -bottom-8 -right-8 bg-beach p-8 border-4 border-white shadow-xl max-w-xs">
              <h3 className="font-hand text-2xl text-sunset mb-2">Local Expertise</h3>
              <p className="text-ocean/80 text-sm">We've been living and working on Fire Island for over 20 years.</p>
            </div>
          </div>
          <div className="space-y-8">
            <h1 className="text-5xl font-serif uppercase tracking-widest text-ocean">Our Story</h1>
            <p className="text-ocean/80 leading-relaxed text-lg">
              Living Fire Island Homes was born out of a deep love for this unique stretch of sand. We believe that Fire Island isn't just a place to visit—it's a way of life. 
            </p>
            <p className="text-ocean/80 leading-relaxed text-lg">
              Our team is composed of year-round residents and long-time summer homeowners who understand the nuances of each community, from the quiet walks of Saltaire to the vibrant energy of Ocean Beach.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="font-serif text-3xl text-sunset mb-2">20+</h4>
                <p className="text-ocean/60 text-xs uppercase tracking-widest font-bold">Years Experience</p>
              </div>
              <div>
                <h4 className="font-serif text-3xl text-sunset mb-2">500+</h4>
                <p className="text-ocean/60 text-xs uppercase tracking-widest font-bold">Homes Sold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
