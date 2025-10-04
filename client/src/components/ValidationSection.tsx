import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

const validationPoints = [
  "No sabes cómo empezar a ofrecer asesorías.",
  "Crees que necesitas un título o experiencia previa.",
  "Publicas en redes pero no consigues clientes.",
  "Te frustra no tener una guía clara.",
  "Sientes que la moda es tu pasión pero no sabes cómo convertirla en trabajo."
];

export default function ValidationSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
          Esto es para ti si...
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {validationPoints.map((point, index) => (
            <Card 
              key={index} 
              className="p-6 flex gap-4 items-start"
              data-testid={`card-validation-${index}`}
            >
              <X className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <p className="text-base md:text-lg text-foreground">{point}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
