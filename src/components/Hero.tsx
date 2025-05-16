
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
//import {mockup} from '@/assets/mockup.png';
const Hero = () => {
  return (
    <section className="hero-gradient text-white py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Bienvenue sur RamaroFish.
              <br />
              <span className="block mt-2">
                Votre assistant intelligent pour l'aquaculture en eau douce à Madagascar
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Une application dédiée aux producteurs de Tilapia et Carpe pour une aquaculture durable
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/ramaro-fish-app.apk" download>
                <Button variant="outline" className="border-white text-white bg-white/10 flex items-center gap-2 ">
                  <ArrowRight size={16} />
                  Télécharger pour android
                </Button>
              </a>
            </div>
          </div>
          <div className="md:w-2/5">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-2 shadow-2xl">
                <img 
                  src="/mockup.png" 
                  alt="RamaroFish App" 
                  className="rounded-2xl w-full max-w-[300px] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
