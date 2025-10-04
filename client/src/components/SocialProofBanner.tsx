export default function SocialProofBanner() {
  return (
    <section className="py-8 bg-primary/5 border-y border-primary/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary" data-testid="stat-students">3,200+</p>
            <p className="text-sm md:text-base text-muted-foreground mt-1">Alumnas activas</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary" data-testid="stat-rating">4.9/5</p>
            <p className="text-sm md:text-base text-muted-foreground mt-1">⭐ 847 reseñas</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary" data-testid="stat-income">USD 500+</p>
            <p className="text-sm md:text-base text-muted-foreground mt-1">Ingreso promedio/mes</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary" data-testid="stat-hours">48h</p>
            <p className="text-sm md:text-base text-muted-foreground mt-1">Para tu 1ra asesoría</p>
          </div>
        </div>
      </div>
    </section>
  );
}
