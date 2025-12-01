# **📌 Roadmap de desarrollo: Prista (Mini-Jira)**

## 1️⃣ Preparación del proyecto

* [ ] Inicializar repositorio Git (`git init`)
* [x] Crear estructura de carpetas:

  ```
  backend/  (NestJS + Prisma)
  frontend/ (React + shadcn/ui)
  ```
* [x] Configurar `.env` para backend:

  * `DATABASE_URL` para Prisma/PostgreSQL
  * JWT_SECRET, PORT, etc.
* [x] Configurar Docker:

  * PostgreSQL contenedor listo
  * pgAdmin opcional para visualización

  docker run --name prista-postgres \
  -e POSTGRES_PASSWORD=raulopadev \
  -e POSTGRES_DB=prista \
  -p 5432:5432 \
  -d postgres

---

## 2️⃣ Backend – NestJS + Prisma

### a) Configuración básica

* [ ] Instalar NestJS, Prisma, @prisma/client
* [ ] Crear `PrismaService` para inyección en módulos
* [ ] Configurar módulo `AppModule` con PrismaService

### b) Modelos y migraciones

* [ ] `User` → nombre, email, password, role, tasks
* [ ] `Client` → nombre, email, projects, tasks
* [ ] `Project` → nombre, clientId, tasks
* [ ] `Task` → title, description, status, priority, projectId?, assignedToId?, clientId
* [ ] Ejecutar migración inicial (`npx prisma migrate dev --name init`)

### c) Autenticación y roles

* [ ] JWT Authentication con Passport
* [ ] Middleware/Guard para roles (`user` / `admin`)
* [ ] Registro y login de usuarios

### d) CRUD básico

* [ ] Users → listar, crear, editar, eliminar (solo admin)
* [ ] Clients → CRUD completo
* [ ] Projects → CRUD completo
* [ ] Tasks → CRUD completo + asignación a usuarios/proyectos/clientes

### e) Funcionalidades extra

* [ ] Filtrado y paginación en Tasks
* [ ] Búsqueda por cliente, proyecto, status, prioridad
* [ ] Notificaciones básicas (console o email simulado)

---

## 3️⃣ Frontend – React + shadcn/ui

### a) Configuración básica

* [ ] Crear proyecto Vite + React + TypeScript
* [ ] Configurar TailwindCSS + shadcn/ui
* [ ] Configurar React Query / TanStack Query para llamadas al backend

### b) Autenticación

* [ ] Login / Registro
* [ ] Guardar token JWT en localStorage o cookies

### c) Layout

* [ ] Sidebar con navegación: Dashboard, Tasks, Clients, Projects, Users (solo admin)
* [ ] Topbar con usuario logueado y logout

### d) Páginas principales

* [ ] Dashboard → resumen de tareas, proyectos y clientes
* [ ] Tasks → lista, filtro, crear/editar/delete
* [ ] Clients → lista, crear/editar/delete
* [ ] Projects → lista, crear/editar/delete
* [ ] Users → solo admin

### e) Funcionalidades extra

* [ ] Notificaciones / alerts en UI
* [ ] Integrar un editor de texto para descripción de Tasks
* [ ] Drag & drop para cambiar estado de Tasks (opcional)

---

## 4️⃣ Integraciones opcionales

* [ ] Stripe → pagos, si quieres mostrar “planes” de usuario
* [ ] API externa → ejemplo AI para notas inteligentes o etiquetas automáticas
* [ ] Dashboard de analytics → gráficos con Recharts o similar

---

## 5️⃣ Testing y QA

* [ ] Pruebas unitarias backend (Jest)
* [ ] Pruebas de endpoints (Postman o Insomnia)
* [ ] Pruebas de frontend (React Testing Library)

---

## 6️⃣ Deploy y portfolio

* [ ] Docker-compose final para backend + PostgreSQL
* [ ] Hosting frontend en Vercel/Netlify
* [ ] Hosting backend en Railway/Render/Heroku
* [ ] Documentar endpoints y arquitectura
* [ ] Capturas y videos para portfolio
