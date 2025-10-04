# Landing Page - Ebook Asesoría de Imagen

## Descripción del Proyecto
Landing page de alta conversión para vender el ebook "Conviértete en Asesora de Imagen y Monetiza tus Redes". Precio: USD 14 (oferta limitada, antes USD 89).

## Stack Tecnológico
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + Shadcn UI components
- **Routing**: Wouter
- **State Management**: TanStack Query
- **Backend**: Express.js (servidor estático)

## Características Principales

### Optimizaciones de Conversión Implementadas
1. **Headline con resultados específicos**: "Lanza tu primera asesoría en 48h y genera USD 500-1,500 al mes"
2. **Prueba social cuantificada**: +3,200 alumnas, 4.9/5 estrellas, 847 reseñas
3. **Testimonios con métricas reales**: Resultados específicos en USD y tiempo
4. **Autoridad fortalecida**: Credenciales de autora con +2,500 alumnas entrenadas
5. **Urgencia concreta**: Contador regresivo, 47 copias limitadas
6. **CTAs orientados a resultados**: "Comienza tu asesoría en 48h - USD 14"
7. **FAQs expandidos**: 10 preguntas que manejan objeciones clave
8. **Garantía sin riesgo**: Devolución 100% en 7 días, sin preguntas

### Secciones de la Landing Page
1. Hero con badge de prueba social y CTA principal
2. Banner de estadísticas sociales (4 métricas clave)
3. Validación (puntos de dolor del cliente)
4. Oportunidad de mercado
5. Promesa de transformación
6. Metodología en 3 pasos
7. Contenido incluido en la guía
8. Testimonios con resultados cuantificados
9. Sobre la autora (antes de pricing para establecer credibilidad)
10. Pricing con urgencia y bonos
11. Garantía de satisfacción 100%
12. FAQs (10 preguntas)
13. CTA final con dilema de decisión

## Estructura del Proyecto
```
client/
├── src/
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── SocialProofBanner.tsx
│   │   ├── ValidationSection.tsx
│   │   ├── OpportunitySection.tsx
│   │   ├── TransformationSection.tsx
│   │   ├── MethodologySection.tsx
│   │   ├── IncludedSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── AuthorSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── GuaranteeSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── FinalCTASection.tsx
│   │   ├── ui/ (Shadcn components)
│   │   └── examples/ (Component demos)
│   ├── pages/
│   │   └── Home.tsx
│   └── App.tsx
```

## Funcionalidad Interactiva
- **Smooth scroll**: Los CTAs del hero y final llevan al usuario a la sección de pricing
- **Accordion FAQs**: 10 preguntas expandibles/colapsables
- **Mobile-first**: Diseño completamente responsivo
- **Hover states**: Botones e interacciones optimizadas

## Diseño Visual
- **Colores**: Paleta femenina aspiracional (rosados, lilas, nudes)
- **Tipografía**: Playfair Display (serif elegante) + Inter (sans-serif limpio)
- **Espaciado**: Generoso para facilitar lectura y conversión
- **Emojis estratégicos**: Mejoran engagement visual

## Siguiente Paso: Integración de Pago
Pendiente: Integrar pasarela de pago Hotmart para procesar compras reales.

## Comandos
- `npm run dev`: Inicia el servidor de desarrollo
- Workflow "Start application" ya configurado

## Notas de Diseño
- Se siguieron principios de copywriting persuasivo y optimización de conversión
- Uso estratégico de urgencia, escasez, prueba social y autoridad
- Diseño alineado con design_guidelines.md
