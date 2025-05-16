
import { Database, BarChart, Cloud, FileText, Settings, Smartphone } from "lucide-react";

const services = [
  {
    icon: <Database className="w-10 h-10 text-primary" />,
    title: "Accès à l'information",
    description: "Base de données fiable pour prendre les décisions quotidiennes éclairées sur votre exploitation"
  },
  {
    icon: <BarChart className="w-10 h-10 text-primary" />,
    title: "Statistiques piscicoles",
    description: "Données régionales et nationales sur la production de Tilapia et Carpe"
  },
  {
    icon: <Cloud className="w-10 h-10 text-primary" />,
    title: "Conditions météo locales",
    description: "Prévisions météorologiques pour anticiper et planifier vos activités locales"
  },
  {
    icon: <FileText className="w-10 h-10 text-primary" />,
    title: "Informations environnementales et réglementaires",
    description: "Conditions idéales d'élevage et informations sur les obligations légales locales"
  },
  {
    icon: <Settings className="w-10 h-10 text-primary" />,
    title: "Automatisation de gestion de ferme",
    description: "Module d'intelligence artificielle pour optimiser chaque étape de votre production"
  },
  {
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    title: "Application mobile intuitive",
    description: "Interface simple et accessible pour gérer votre production où que vous soyez"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des outils complets pour optimiser votre exploitation aquacole
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-blue-50 p-6 rounded-lg transition-all hover:shadow-md"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
