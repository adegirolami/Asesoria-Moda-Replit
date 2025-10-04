import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import authorImage from "@assets/generated_images/Professional_author_headshot_Sofia_aa4d1eb7.png";

export default function AuthorSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
          Sobre la autora
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <Avatar className="w-40 h-40 flex-shrink-0">
            <AvatarImage src={authorImage} alt="Sofía - Autora" />
            <AvatarFallback>SF</AvatarFallback>
          </Avatar>
          <div className="space-y-4 text-center md:text-left">
            <p className="text-lg md:text-xl text-foreground leading-relaxed" data-testid="text-author-bio">
              Soy Sofía, llevo más de 10 años trabajando con marcas y clientes en el mundo digital. Creé esta guía porque vi a muchas personas con talento en moda que no sabían cómo monetizarlo. Ahora puedes hacerlo de forma clara, práctica y rápida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
