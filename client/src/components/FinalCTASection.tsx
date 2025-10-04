import { Button } from "@/components/ui/button";

export default function FinalCTASection() {
  const handleFinalCTA = () => {
    console.log('Final CTA clicked - scroll to purchase');
    document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[hsl(340,65%,92%)] via-[hsl(300,45%,88%)] to-[hsl(25,35%,90%)]">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
          Tienes dos opciones: seguir viendo moda en redes sin resultados… o dar el paso y transformar tu pasión en un negocio real desde hoy.
        </h2>
        <Button 
          size="lg" 
          className="text-lg px-12 py-6 rounded-full shadow-lg animate-pulse hover:animate-none hover:scale-105 transition-transform"
          onClick={handleFinalCTA}
          data-testid="button-cta-final"
        >
          Quiero empezar ya 🚀
        </Button>
      </div>
    </section>
  );
}
