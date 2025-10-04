import { Card } from "@/components/ui/card";

const steps = [
  {
    emoji: "👠",
    number: 1,
    title: "Aprende fundamentos de la asesoría de imagen",
    description: "Domina los conceptos esenciales de estilo, morfología y colorimetría"
  },
  {
    emoji: "📱",
    number: 2,
    title: "Diseña servicios simples y atractivos",
    description: "Crea ofertas de asesoría que tus clientas quieran comprar"
  },
  {
    emoji: "💰",
    number: 3,
    title: "Muéstralo en redes y consigue clientes reales",
    description: "Publica tu oferta y empieza a recibir consultas en 48 horas"
  }
];

export default function MethodologySection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
          Metodología en 3 pasos
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="p-8 text-center space-y-4"
              data-testid={`card-step-${index}`}
            >
              <div className="text-6xl mb-4">{step.emoji}</div>
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto">
                {step.number}
              </div>
              <h3 className="font-semibold text-lg text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
