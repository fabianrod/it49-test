# Mashcole Property Management

Proyecto Next.js con Tailwind CSS para Mashcole Property Management, Inc.

## Instalación

Primero, instala las dependencias:

```bash
npm install
# o
yarn install
# o
pnpm install
```

## Desarrollo

Ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Estructura del Proyecto

```
├── app/
│   ├── globals.css      # Estilos globales con Tailwind
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página principal
├── components/
│   ├── Header.tsx       # Componente del header
│   ├── HeroSection.tsx  # Sección hero
│   ├── QuoteModules.tsx # Módulos de quote
│   ├── OfficesSection.tsx # Sección de oficinas
│   └── FindRentals.tsx  # Sección de rentals
├── public/              # Archivos estáticos
└── package.json
```

## Build para Producción

```bash
npm run build
npm start
```

## Tecnologías

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
