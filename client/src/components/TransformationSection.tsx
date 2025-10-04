import { Check } from "lucide-react";

const benefits = [
  "Identificar estilos y tipologías",
  "Crear looks y guardarropas estratégicos",
  "Usar la colorimetría de forma práctica",
  "Vender asesorías simples online",
  "Publicar tu primera oferta en 48 horas"
];

export default function TransformationSection() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-serif text-2xl md:text-4xl font-semibold text-center mb-6 md:mb-8 text-foreground">
          Promesa de transformación
        </h2>
        <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex gap-3 items-start"
              data-testid={`item-benefit-${index}`}
            >
              <Check className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm md:text-lg text-foreground">{benefit}</p>
            </div>
          ))}
        </div>
        <p className="text-lg md:text-2xl font-bold text-center text-foreground mt-8 md:mt-12">
          En menos de 48 horas podrás publicar tu primera oferta de asesoría online y empezar a recibir consultas reales.
        </p>
      </div>
    </section>
  );
}
