# Prista – Mini-Jira Personal

Prista es un proyecto fullstack experimental inspirado en Jira, diseñado para **gestión de tareas, proyectos y clientes**. Sirve como **laboratorio de aprendizaje** para probar frameworks y librerías modernas en un entorno real.

---

## Tecnologías utilizadas

### Backend

* NestJS
* Prisma ORM
* PostgreSQL
* JWT Authentication
* Docker para contenedores de base de datos

### Frontend

* React + TypeScript
* TailwindCSS + shadcn/ui
* React Query (TanStack Query)
* Vite como bundler

### Herramientas adicionales

* Docker & Docker Compose
* Postman / Insomnia para pruebas de API
* Jest para testing backend

---

## Estructura del proyecto

```
backend/  → NestJS + Prisma + Docker
frontend/ → React + TypeScript + shadcn/ui + TailwindCSS
```

---

## Funcionalidades principales

### Backend

* CRUD de Users, Clients, Projects y Tasks
* Relación entre entidades (Tasks asignadas a Users, Projects o Clients)
* Autenticación con JWT y roles (`user` / `admin`)
* Preparado para filtrado, paginación y búsqueda avanzada
* Middleware y Guards para control de permisos (en desarrollo)

### Frontend

* Login / Registro de usuarios
* Layout modular: sidebar, topbar y páginas por sección
* Páginas principales: Dashboard, Tasks, Clients, Projects y Users
* Integración con React Query para consumo de API
* Funcionalidades extra: alertas, editor de texto en tareas y drag & drop opcional

---

## Configuración y ejecución

### Backend

1. Copiar variables de entorno:

```bash
cp .env.example .env
```

2. Instalar dependencias:

```bash
pnpm install
```

3. Ejecutar migraciones y generar cliente Prisma:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

4. Iniciar servidor en modo desarrollo:

```bash
npm run start:dev
```

### Frontend

1. Instalar dependencias:

```bash
pnpm install
```

2. Iniciar servidor de desarrollo:

```bash
pnpm dev
```

---

## Objetivos del proyecto

* Servir como **sandbox experimental** para probar nuevas librerías y frameworks.
* Aprender y aplicar buenas prácticas en **arquitectura fullstack**.
* Probar integración de herramientas modernas de frontend y backend.
* Crear un entorno modular escalable para futuros proyectos personales o profesionales.