# Arquitectura del Proyecto

## Estructura de Carpetas

```
/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
│
├── components/            # Componentes React
│   ├── layout/            # Componentes de layout
│   │   ├── Header/        # Header modularizado
│   │   │   ├── Header.tsx
│   │   │   ├── HeaderButtons.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── MobileMenu.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/          # Secciones de la página
│   │   ├── HeroSection.tsx
│   │   ├── QuoteModules.tsx
│   │   ├── OfficesSection.tsx
│   │   └── FindRentals.tsx
│   │
│   └── ui/                # Componentes UI reutilizables
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Icon.tsx
│
├── lib/                   # Utilidades y constantes
│   ├── constants.ts       # Constantes del proyecto
│   ├── types.ts           # Tipos TypeScript compartidos
│   └── utils.ts           # Funciones utilitarias
│
└── public/                # Archivos estáticos
    └── images/            # Imágenes organizadas
        ├── logo.svg
        └── property-management-angeles.png
```

## Principios de Arquitectura

### 1. Separación de Responsabilidades
- **Layout**: Componentes estructurales (Header, Footer)
- **Sections**: Secciones específicas de la página
- **UI**: Componentes reutilizables y genéricos
- **Lib**: Lógica de negocio, constantes y utilidades

### 2. Componentización
- Cada componente tiene una responsabilidad única
- Componentes pequeños y enfocados
- Reutilización de componentes UI

### 3. Gestión de Estado y Datos
- Constantes centralizadas en `lib/constants.ts`
- Tipos TypeScript compartidos en `lib/types.ts`
- Sin estado global innecesario (usa estado local de React)

### 4. Estilos
- Tailwind CSS para estilos utilitarios
- Colores del tema definidos en `tailwind.config.js`
- Clases reutilizables a través de componentes UI

### 5. Imágenes
- Todas las imágenes en `public/images/`
- Uso de Next.js `Image` para optimización
- Rutas centralizadas en `lib/constants.ts`

## Componentes UI

### Button
Componente de botón reutilizable con variantes:
- `primary`: Botón principal (azul oscuro)
- `secondary`: Botón secundario (amarillo)
- `outline`: Botón con borde
- `ghost`: Botón transparente

### Card
Componente de tarjeta con variantes:
- `default`: Tarjeta básica con sombra
- `elevated`: Tarjeta con sombra más pronunciada
- `gradient`: Para gradientes personalizados

### Icon
Componente de iconos SVG:
- `location`: Icono de ubicación
- `phone`: Icono de teléfono
- `chevron-down`: Flecha hacia abajo
- `menu`: Menú hamburguesa
- `close`: Cerrar

## Constantes

Todas las constantes están centralizadas en `lib/constants.ts`:
- Colores del tema
- Items de navegación
- Información de contacto
- Rutas de imágenes

## Mejores Prácticas Implementadas

1. ✅ **Componentización**: Componentes pequeños y reutilizables
2. ✅ **TypeScript**: Tipos definidos para mejor seguridad de tipos
3. ✅ **Next.js Image**: Optimización automática de imágenes
4. ✅ **Tailwind CSS**: Estilos utilitarios y configuración centralizada
5. ✅ **Separación de concerns**: Layout, UI, y lógica separados
6. ✅ **Constantes centralizadas**: Fácil mantenimiento y actualización
7. ✅ **Accesibilidad**: Atributos ARIA y semántica HTML correcta

## Próximos Pasos Recomendados

1. Instalar dependencias opcionales para mejor funcionalidad:
   ```bash
   npm install clsx tailwind-merge
   ```
   Luego actualizar `lib/utils.ts` para usar estas librerías.

2. Agregar tests unitarios para componentes críticos
3. Implementar Storybook para documentación de componentes
4. Agregar validación de formularios si se implementan
5. Considerar un sistema de diseño más robusto si el proyecto crece
