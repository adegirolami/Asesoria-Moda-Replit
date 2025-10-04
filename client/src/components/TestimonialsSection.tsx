import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import carlaImage from "@assets/generated_images/Testimonial_photo_Carla_designer_64406423.png";
import sofiaStudentImage from "@assets/generated_images/Testimonial_photo_Sofia_student_1ca83497.png";

const testimonials = [
  {
    name: "Carla M.",
    age: 27,
    location: "Ciudad de México",
    role: "diseñadora gráfica",
    quote: "En 2 semanas conseguí 6 clientas y generé USD 450. Ahora cobro USD 80 por asesoría completa y trabajo desde casa. Nunca pensé que mi pasión por la moda podía convertirse en mi fuente de ingresos.",
    image: carlaImage,
    fallback: "CA",
    result: "+USD 450 en 2 semanas"
  },
  {
    name: "Sofía R.",
    age: 32,
    location: "Bogotá, Colombia",
    role: "estudiante de marketing",
    quote: "Tenía cero seguidores enfocados en moda. Seguí la guía paso a paso y en 3 semanas tenía 4 clientas pagando USD 60 cada una. La claridad que me dio fue increíble, ahora sé exactamente qué ofrecer y cómo venderlo.",
    image: sofiaStudentImage,
    fallback: "SO",
    result: "4 clientas en 3 semanas"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-4 text-foreground">
          Ellas ya están generando ingresos
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12">
          ⭐⭐⭐⭐⭐ 4.9/5 basado en 847 reseñas verificadas
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 space-y-4"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex items-center justify-between">
                <Quote className="w-8 h-8 text-primary/30" />
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  {testimonial.result}
                </div>
              </div>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 pt-4 border-t">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role} · {testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
