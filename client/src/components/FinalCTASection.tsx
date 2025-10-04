import { Button } from "@/components/ui/button";

export default function FinalCTASection() {
  const handleFinalCTA = () => {
    window.open('https://pay.hotmart.com/C102237917S', '_blank');
  };

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-[hsl(340,65%,92%)] via-[hsl(300,45%,88%)] to-[hsl(25,35%,90%)]">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6 md:space-y-8">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground leading-tight">
          Tienes dos opciones: seguir viendo moda en redes sin resultados… o dar el paso y transformar tu pasión en un negocio real desde hoy.
        </h2>
        <Button 
          size="lg" 
          className="w-full sm:w-auto text-base md:text-lg px-8 md:px-12 py-5 md:py-6 rounded-full shadow-lg"
          onClick={handleFinalCTA}
          data-testid="button-cta-final"
        >
          Quiero empezar ya 🚀
        </Button>
      </div>
    </section>
  );
}
