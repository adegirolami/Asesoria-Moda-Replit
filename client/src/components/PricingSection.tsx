import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

export default function PricingSection() {
  const handlePurchase = () => {
    console.log('Purchase button clicked');
    // TODO: Integrate with Hotmart payment gateway
  };

  return (
    <section id="pricing-section" className="py-16 md:py-24 bg-gradient-to-br from-[hsl(340,65%,92%)] via-[hsl(300,45%,88%)] to-[hsl(25,35%,90%)]">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
          Precio especial por tiempo limitado
        </h2>
        <Card className="p-8 md:p-12 text-center space-y-6">
          <div>
            <p className="text-lg text-muted-foreground mb-2">Valor real:</p>
            <p className="text-2xl md:text-3xl line-through opacity-60 text-foreground">USD 89</p>
          </div>
          <div>
            <p className="text-xl md:text-2xl text-primary mb-2">🔥 Oferta limitada</p>
            <p className="text-5xl md:text-6xl font-bold text-primary" data-testid="text-price">USD 14</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-destructive">
            <Clock className="w-5 h-5" />
            <p className="text-sm md:text-base">El precio promocional sube pronto</p>
          </div>
          <Button 
            size="lg" 
            className="w-full text-lg px-8 py-6 rounded-full shadow-lg"
            onClick={handlePurchase}
            data-testid="button-purchase"
          >
            Comprar ahora ✅
          </Button>
          <p className="text-sm text-muted-foreground">
            El pago se procesa de forma 100% segura a través de Hotmart en tu moneda local.
          </p>
        </Card>
      </div>
    </section>
  );
}
