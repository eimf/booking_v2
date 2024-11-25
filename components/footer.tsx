import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-gold-500/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-cormorant text-2xl mb-6 gold-gradient">
              Tableau de Katia
            </h3>
            <p className="text-gray-400 text-sm">
              Luxury hair salon offering premium services in an elegant setting.
            </p>
          </div>
          
          <div>
            <h4 className="font-cormorant text-xl mb-6">Contact</h4>
            <div className="space-y-4">
              <p className="flex items-center text-gray-400 text-sm">
                <Phone className="h-4 w-4 mr-2 text-gold-400" />
                +1 (956) 123-4567
              </p>
              <p className="flex items-center text-gray-400 text-sm">
                <Mail className="h-4 w-4 mr-2 text-gold-400" />
                info@tableaudekatia.com
              </p>
              <p className="flex items-center text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mr-2 text-gold-400" />
                6421 N Bentsen Road, McAllen, TX, 78501
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-cormorant text-xl mb-6">Hours</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Monday - Friday: 9am - 8pm</p>
              <p>Saturday: 9am - 6pm</p>
              <p>Sunday: 10am - 4pm</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-cormorant text-xl mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/tableaudekatia/?hl=en"
                className="text-gold-400 hover:text-gold-500 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gold-400 hover:text-gold-500 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gold-500/20 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Tableau de Katia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}