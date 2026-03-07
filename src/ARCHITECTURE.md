# Arquitectura del frontend

Este proyecto sigue una estructura por capas (inspirada en arquitectura hexagonal) adaptada a React.

## Capas y responsabilidades

- `src/domain/`: entidades y puertos del negocio (sin dependencias de React o Supabase).
- `src/application/`: casos de uso que orquestan puertos de dominio.
- `src/infrastructure/`: adaptadores concretos (Supabase, localStorage, APIs).
- `src/presentation/`: vistas y componentes de UI.
- `src/app/`: configuracion global de app (routing, composicion).
- `src/content/`: contenido estatico y helpers de contenido/clases.
- `src/shared/`: utilidades transversales y helpers puros.

## Estado actual (marzo 2026)

- Modulo `interest` migrado por capas:
  - `src/domain/interest`
  - `src/application/interest`
  - `src/infrastructure/interest`
- Rutas de seccion extraidas a `src/app/routing/sectionRoutes.ts`.
- Vistas principales separadas en `src/presentation/views/*`.
- Contenido estatico extraido de `App.tsx` a `src/content/appContent.ts`.
- Constantes/helpers de clases extraidos a `src/content/classBreeds.ts`.
- Tipos compartidos de contenido centralizados en `src/domain/content/types.ts`.

## Flujo principal

1. `App.tsx` actua como composition root y wiring de dependencias.
2. `application` ejecuta casos de uso sobre puertos de `domain`.
3. `infrastructure` resuelve esos puertos con implementaciones concretas.
4. `presentation` renderiza y despacha acciones de usuario.
5. `content` provee la base estatica de textos/estructuras para las vistas.

## Integracion de Supabase

- Configuracion en `src/lib/supabase.ts`:
  - Crea cliente solo si existen `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`.
  - Expone `isSupabaseConfigured` para fallback seguro.
- Persistencia de intereses via `SupabaseInterestRepository` (`guild_interest`).
- Autenticacion admin y carga de contenido custom en `App.tsx`.
- Fallback activo:
  - Si Supabase no esta configurado, no se crea cliente y la app sigue con rutas locales.
  - Contenido custom cae a `localStorage` cuando aplica.

## Convenciones

- `domain` no importa `infrastructure` ni `presentation`.
- `application` depende solo de `domain`.
- `infrastructure` implementa puertos de `domain`.
- `presentation` consume casos de uso de `application`.
- Evitar persistencia directa en componentes salvo wiring/control en el composition root.

## Siguientes mejoras sugeridas

1. Seguir reduciendo logica de transformacion dentro de `App.tsx` hacia servicios/hooks de presentacion.
2. Introducir validacion de esquema para `app_content` (runtime) antes de hidratar estado.
3. Ampliar pruebas de integracion para flujo con y sin Supabase.
