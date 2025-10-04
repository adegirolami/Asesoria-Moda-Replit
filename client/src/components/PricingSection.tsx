import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function PricingSection() {
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutos en segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          return 45 * 60; // Reinicia a 45 minutos cuando llega a 0
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handlePurchase = () => {
    window.open('https://pay.hotmart.com/C102237917S', '_blank');
  };

  return (
    <section id="pricing-section" className="py-16 md:py-24 bg-gradient-to-br from-[hsl(340,65%,92%)] via-[hsl(300,45%,88%)] to-[hsl(25,35%,90%)]">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-4 text-foreground">
          Acceso inmediato - Precio promocional
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Solo 47 copias disponibles a este precio especial
        </p>
        <Card className="p-8 md:p-12 text-center space-y-6">
          <div>
            <p className="text-lg text-muted-foreground mb-2">Valor del programa completo:</p>
            <p className="text-2xl md:text-3xl line-through opacity-60 text-foreground">USD 89</p>
          </div>
          <div>
            <p className="text-xl md:text-2xl text-primary mb-2">🔥 Precio de lanzamiento - HOY</p>
            <p className="text-5xl md:text-6xl font-bold text-primary" data-testid="text-price">USD 14</p>
            <p className="text-sm text-muted-foreground mt-2">Ahorras USD 75 (84% de descuento)</p>
          </div>
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
            <div className="flex items-center justify-center gap-2 text-destructive mb-2">
              <Clock className="w-5 h-5" />
              <p className="text-sm md:text-base font-semibold">Esta oferta expira en:</p>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-destructive font-mono">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </p>
            <p className="text-xs text-muted-foreground mt-2">Después el precio vuelve a USD 89</p>
          </div>
          <Button 
            size="lg" 
            className="w-full text-lg px-8 py-6 rounded-full shadow-lg animate-pulse hover:animate-none hover:scale-105 transition-transform"
            onClick={handlePurchase}
            data-testid="button-purchase"
          >
            Sí, quiero acceso inmediato por USD 14
          </Button>
          <p className="text-sm text-foreground font-medium">
            📥 Recibes el ebook instantáneamente en tu email
          </p>
          <p className="text-xs text-muted-foreground">
            Pago 100% seguro procesado por Hotmart · Aceptamos todas las tarjetas y métodos locales
          </p>
          <div className="pt-4 border-t">
            <p className="text-sm font-semibold text-foreground mb-2">✅ Esto es lo que recibes HOY:</p>
            <div className="text-sm text-left space-y-1 text-muted-foreground">
              <p>✓ Ebook completo paso a paso (PDF descargable)</p>
              <p>✓ 3 plantillas de publicaciones listas para usar</p>
              <p>✓ Guía de precios y paquetes de servicio</p>
              <p>✓ Plan de acción de 48 horas</p>
              <p>✓ Acceso inmediato y para siempre</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
