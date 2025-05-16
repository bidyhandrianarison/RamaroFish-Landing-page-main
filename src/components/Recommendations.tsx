
import { Calendar, Clock, AlertTriangle, BarChart } from "lucide-react";

const recommendations = [
  {
    icon: <Calendar className="w-6 h-6 text-primary" />,
    title: "Espèce recommandé",
    description: "Notre système analyse votre environnement et vos moyens pour vous recommander l'espèce idéale à élever pour une rentabilité optimale."
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Planification temporelle",
    description: "Notre système analyse votre environnement et vos moyens pour vous recommander l'espèce idéale à élever pour une rentabilité optimale."
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-primary" />,
    title: "Adaptation aux contraintes",
    description: "Des solutions alternatives innovantes sont proposées en cas de limites de ressources pour maintenir votre productivité"
  },
  {
    icon: <BarChart className="w-6 h-6 text-primary" />,
    title: "Suivi + Estimation",
    description: "Suivez l'évolution de votre production et recevez l'estimation précise de votre productivité future basée sur des modèles avancées"
  }
];

const Recommendations = () => {
  return (
    <section id="recommandations" className="py-20 px-6 md:px-12 bg-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recommandations intelligentes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Notre intelligence artificielle vous guide dans chaque étape de votre production
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {recommendations.map((item, index) => (
            <div 
              key={index} 
              className="flex mb-6 bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary"
            >
              <div className="mr-4 mt-1">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
