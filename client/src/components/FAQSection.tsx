import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Necesito experiencia previa?",
    answer: "No, está diseñada para principiantes."
  },
  {
    question: "¿Puedo empezar solo con mi celular?",
    answer: "Sí, no necesitas nada más."
  },
  {
    question: "¿Hace falta invertir en ropa cara?",
    answer: "No, aprenderás a trabajar con lo que tus clientas ya tienen."
  },
  {
    question: "¿Qué pasa si no consigo clientes rápido?",
    answer: "Incluye estrategias probadas de monetización en 48h."
  },
  {
    question: "¿Puedo hacerlo aunque trabaje tiempo completo?",
    answer: "Sí, puedes avanzar a tu propio ritmo."
  },
  {
    question: "¿Qué pasa si no me siento segura frente a la cámara?",
    answer: "El ebook incluye estrategias para mostrarte de forma auténtica y sin presión."
  }
];

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
          Preguntas frecuentes
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border rounded-md px-6"
              data-testid={`accordion-faq-${index}`}
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
