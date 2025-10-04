import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Necesito experiencia previa en moda o asesoría de imagen?",
    answer: "No. Esta guía está diseñada específicamente para principiantes. Te enseñamos desde los fundamentos básicos hasta cómo vender tu primera asesoría, sin asumir conocimiento previo."
  },
  {
    question: "¿Por qué USD 14 si antes costaba USD 89?",
    answer: "Estamos en precio de lanzamiento promocional para conseguir más testimonios y casos de éxito. Una vez alcancemos nuestra meta de 500 copias vendidas, el precio volverá a USD 89. Aprovecha ahora mientras dura la oferta."
  },
  {
    question: "¿Puedo empezar solo con mi celular y sin inversión adicional?",
    answer: "Sí, absolutamente. Solo necesitas tu celular para tomar fotos, crear contenido y comunicarte con clientas. No requieres cámara profesional, vestuario especial ni inversión en ropa cara."
  },
  {
    question: "¿En qué formato viene el ebook? ¿Podré verlo en mi celular?",
    answer: "Recibes un PDF descargable compatible con cualquier dispositivo (celular, tablet, computadora). Lo recibes por email inmediatamente después de la compra y es tuyo para siempre."
  },
  {
    question: "Ya intenté vender en redes antes y no funcionó. ¿Por qué sería diferente ahora?",
    answer: "Esta guía te muestra exactamente QUÉ ofrecer, CÓMO presentarlo y DÓNDE encontrar tus primeras clientas. Muchas personas publican sin una estrategia clara. Te damos el paso a paso específico que ya funcionó para más de 2,500 mujeres."
  },
  {
    question: "¿Puedo hacerlo aunque trabaje tiempo completo?",
    answer: "Sí. Puedes implementar el plan de 48 horas en tus tiempos libres (fines de semana, noches). Una vez lanzada tu oferta, manejas tus horarios de asesorías según tu disponibilidad."
  },
  {
    question: "¿Qué pasa si no me siento segura frente a la cámara?",
    answer: "El ebook incluye estrategias para mostrarte de forma auténtica sin presión. Además, muchas asesorías exitosas se hacen por chat, fotos y mensajes de voz, sin necesidad de videos en vivo."
  },
  {
    question: "¿Hace falta invertir en ropa cara o tener un guardarropa extenso?",
    answer: "No. Aprenderás a trabajar con lo que tus clientas YA tienen en su closet. El valor está en tu conocimiento para combinar y optimizar, no en comprar ropa nueva."
  },
  {
    question: "¿Qué pasa si no consigo clientes rápido?",
    answer: "La guía incluye estrategias probadas de monetización en 48h y un plan de acción específico. Si sigues el método y no ves resultados en 7 días, te devolvemos el 100% de tu dinero, sin preguntas."
  },
  {
    question: "¿Recibiré actualizaciones o soporte?",
    answer: "Sí. Recibes acceso de por vida al ebook y todas las actualizaciones futuras sin costo adicional. Aunque es una guía de autoaprendizaje, incluimos recursos adicionales descargables."
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
