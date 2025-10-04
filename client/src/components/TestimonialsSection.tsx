import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import carlaImage from "@assets/generated_images/Testimonial_photo_Carla_designer_64406423.png";
import sofiaStudentImage from "@assets/generated_images/Testimonial_photo_Sofia_student_1ca83497.png";

const testimonials = [
  {
    name: "Carla",
    age: 27,
    role: "diseñadora gráfica",
    quote: "Nunca pensé que podía cobrar por esto, pero a la semana ya tenía mis primeras clientas.",
    image: carlaImage,
    fallback: "CA"
  },
  {
    name: "Sofía",
    age: 32,
    role: "estudiante",
    quote: "La guía me dio claridad y confianza para empezar en redes.",
    image: sofiaStudentImage,
    fallback: "SO"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
          Testimonios
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 space-y-4"
              data-testid={`card-testimonial-${index}`}
            >
              <Quote className="w-8 h-8 text-primary/30" />
              <p className="text-lg text-foreground italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 pt-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}, {testimonial.age} años</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
