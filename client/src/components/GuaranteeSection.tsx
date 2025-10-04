import { Lock } from "lucide-react";

export default function GuaranteeSection() {
  return (
    <section className="py-12 md:py-16 bg-accent">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center text-center md:text-left">
          <Lock className="w-12 h-12 text-accent-foreground flex-shrink-0" />
          <p className="text-lg md:text-xl text-accent-foreground" data-testid="text-guarantee">
            <strong>🔒 Garantía absoluta:</strong> prueba el ebook durante 7 días. Si no consigues claridad y tus primeros pasos hacia monetizar, te devolvemos el 100% de tu dinero, sin preguntas.
          </p>
        </div>
      </div>
    </section>
  );
}
