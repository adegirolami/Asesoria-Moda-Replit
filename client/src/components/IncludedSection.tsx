import { BookOpen, Shirt, FileText, Camera, Clock } from "lucide-react";

const includedItems = [
  { icon: BookOpen, text: "Ebook completo paso a paso" },
  { icon: Shirt, text: "Guías prácticas de estilo, morfología y colorimetría" },
  { icon: FileText, text: "Ejercicios y ejemplos fáciles de aplicar" },
  { icon: Camera, text: "Estrategias digitales para vender asesorías" },
  { icon: Clock, text: "Mini plan de acción en 48h" }
];

export default function IncludedSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
          Lo que incluye la guía
        </h2>
        <div className="space-y-6">
          {includedItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex gap-4 items-center p-4 rounded-md hover-elevate"
                data-testid={`item-included-${index}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg text-foreground">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
