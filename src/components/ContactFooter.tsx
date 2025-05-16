
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const ContactFooter = () => {
  return (
    <footer id="contact">
      <div className="bg-white py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Notre équipe est disponible pour répondre à toutes vos questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">contact@ramarofish.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Téléphone</h3>
                  <p className="text-gray-600">+261 34 12 34 567</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Adresse</h3>
                  <p className="text-gray-600">123 Rue de l'Aquaculture, Antananarivo, Madagascar</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <Button className="w-full">Envoyer le message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary text-white py-6 px-6 md:px-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 RamaroFish. Tous droits réservés.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white/80">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white/80">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white/80">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
