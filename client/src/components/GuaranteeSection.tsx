import { Lock } from "lucide-react";

export default function GuaranteeSection() {
  return (
    <section className="py-12 md:py-16 bg-accent">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center text-center md:text-left">
          <Lock className="w-16 h-16 text-accent-foreground flex-shrink-0" />
          <div>
            <p className="text-xl md:text-2xl font-bold text-accent-foreground mb-2">
              🔒 Garantía de satisfacción 100% - Sin riesgo
            </p>
            <p className="text-base md:text-lg text-accent-foreground" data-testid="text-guarantee">
              Prueba el ebook completo durante 7 días. Si no consigues total claridad sobre cómo lanzar tu asesoría y dar tus primeros pasos hacia monetizar, te devolvemos el 100% de tu dinero. Solo envía un email - sin preguntas, sin complicaciones. El riesgo es totalmente nuestro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
