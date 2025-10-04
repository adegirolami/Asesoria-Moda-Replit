import { Button } from "@/components/ui/button";
import ebookImage from "@assets/generated_images/3D_ebook_mockup_with_fashion_elements_80a0df8a.png";

export default function HeroSection() {
  const handleCTA = () => {
    window.open('https://pay.hotmart.com/C102237917S', '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(340,65%,92%)] via-[hsl(300,45%,88%)] to-[hsl(25,35%,90%)] py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left space-y-4 md:space-y-6">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Empieza a vivir de tu pasión: arma tu negocio digital de asesoría de imagen
            </h1>
            <p className="text-base md:text-xl text-foreground/80 leading-relaxed">
              Un plan simple, claro y probado para monetizar tu talento por la moda usando solo tu celular y tus redes. Sin necesidad de experiencia previa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full shadow-lg"
                onClick={handleCTA}
                data-testid="button-cta-hero"
              >
                Comienza tu asesoría en 48h - USD 14
              </Button>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">
              📥 Acceso inmediato · ✅ Garantía 7 días · 🔒 Pago seguro
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src={ebookImage} 
              alt="Ebook Conviértete en Asesora de Imagen" 
              className="w-full max-w-md rounded-lg"
              data-testid="img-hero-ebook"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
