import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import authorImage from "@assets/generated_images/Professional_author_headshot_Sofia_aa4d1eb7.png";

export default function AuthorSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
          Quién creó esta guía
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <Avatar className="w-40 h-40 flex-shrink-0">
            <AvatarImage src={authorImage} alt="Sofía - Autora" />
            <AvatarFallback>SF</AvatarFallback>
          </Avatar>
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-serif font-semibold text-foreground">Sofía Torres</h3>
            <p className="text-primary font-semibold">Consultora de Imagen Profesional · Mentora de +2,500 mujeres emprendedoras</p>
            <p className="text-base md:text-lg text-foreground leading-relaxed" data-testid="text-author-bio">
              Llevo más de 10 años trabajando con marcas de moda y clientes en el mundo digital. He entrenado a más de 2,500 mujeres que han transformado su pasión por la moda en negocios rentables.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              Creé esta guía porque vi a demasiadas mujeres con talento genuino que no sabían cómo dar el primer paso para monetizar. Esta metodología ya ha ayudado a cientos de principiantes a lanzar su primera asesoría en menos de 48 horas y generar sus primeros ingresos.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              <div className="bg-muted px-4 py-2 rounded-md">
                <p className="text-sm font-semibold text-foreground">+2,500 alumnas</p>
              </div>
              <div className="bg-muted px-4 py-2 rounded-md">
                <p className="text-sm font-semibold text-foreground">10+ años experiencia</p>
              </div>
              <div className="bg-muted px-4 py-2 rounded-md">
                <p className="text-sm font-semibold text-foreground">847 reseñas 5★</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
