# 🔐 Guía de Configuración: Supabase Auth + RLS

Esta guía te muestra cómo configurar autenticación segura y restricciones de acceso para el panel de administración.

---

## 📋 Pasos de Configuración

### **1. Crear las Tablas en Supabase**

Ve a **SQL Editor** en tu proyecto de Supabase y ejecuta:

#### A. Tabla de contenido personalizado
```sql
-- Ejecuta: supabase-content-table.sql
CREATE TABLE IF NOT EXISTS app_content (
  id INTEGER PRIMARY KEY DEFAULT 1,
  content JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  updated_by TEXT,
  version INTEGER DEFAULT 1,
  CONSTRAINT single_row CHECK (id = 1)
);

ALTER TABLE app_content ENABLE ROW LEVEL SECURITY;
```

#### B. Políticas de seguridad
```sql
-- Ejecuta: supabase-auth-policies.sql
-- Eliminar políticas anteriores
DROP POLICY IF EXISTS "Anyone can read content" ON app_content;
DROP POLICY IF EXISTS "Anyone can update content" ON app_content;

-- Nueva política: Cualquiera puede leer
CREATE POLICY "Public can read content"
  ON app_content
  FOR SELECT
  TO public
  USING (true);

-- Nueva política: Solo autenticados pueden actualizar
CREATE POLICY "Authenticated users can update content"
  ON app_content
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
```

---

### **2. Crear Usuario Administrador**

**Opción A: Desde Supabase Dashboard (Recomendado)**

1. Ve a **Authentication** > **Users**
2. Haz clic en **Add User**
3. Rellena:
   - **Email**: `admin@tugremio.com` (o el que prefieras)
   - **Password**: Tu contraseña segura
   - **Auto Confirm User**: ✅ (marcar esto)
4. Haz clic en **Create User**

**Opción B: Registrarse desde la aplicación**

1. Ve a `http://localhost:5173/admin`
2. Haz clic en "¿No tienes cuenta? Regístrate"
3. Ingresa email y contraseña
4. Confirma el email (Supabase enviará un correo)
5. Luego inicia sesión

---

### **3. Restricciones de Seguridad Aplicadas**

#### ✅ Tabla `app_content`:
- **Lectura**: Cualquiera puede ver el contenido (usuarios normales)
- **Escritura**: Solo usuarios autenticados (admins)

#### ✅ Tabla `guild_interest`:
- **Inserción**: Cualquiera puede registrar su interés
- **Lectura**: Solo usuarios autenticados pueden ver todos los registros

---

### **4. Restringir a Emails Específicos (Opcional)**

Si quieres que **solo ciertos emails** puedan editar el contenido:

```sql
-- Reemplaza la política existente
DROP POLICY IF EXISTS "Authenticated users can update content" ON app_content;

CREATE POLICY "Only specific admins can update content"
  ON app_content
  FOR ALL
  TO authenticated
  USING (
    auth.jwt() ->> 'email' IN (
      'admin@tugremio.com',
      'otro-admin@tugremio.com'
    )
  )
  WITH CHECK (
    auth.jwt() ->> 'email' IN (
      'admin@tugremio.com', 
      'otro-admin@tugremio.com'
    )
  );
```

**Ventajas:**
- Solo los emails listados pueden editar contenido
- Otros usuarios autenticados no tienen permisos de edición
- Fácil agregar o quitar admins modificando la lista

---

## 🔑 Uso del Panel Admin

### **Iniciar Sesión:**
1. Ve a: `http://localhost:5173/admin`
2. Ingresa tu email y contraseña
3. Haz clic en **Iniciar Sesión**

### **Editar Contenido:**
1. Selecciona idioma (Español/English)
2. Edita el JSON directamente
3. Haz clic en **Guardar Cambios**
4. Los cambios se sincronizan con Supabase
5. Todos los usuarios ven el contenido actualizado

### **Cerrar Sesión:**
- Haz clic en el botón **Cerrar Sesión** en la parte superior

---

## 🛡️ Seguridad Implementada

### **Nivel 1: Autenticación con Supabase**
- ✅ Email + contraseña
- ✅ Tokens JWT seguros
- ✅ Sesiones gestionadas por Supabase
- ✅ No se guardan contraseñas en el código

### **Nivel 2: Row Level Security (RLS)**
- ✅ Políticas a nivel de base de datos
- ✅ Verificación automática en cada query
- ✅ No se puede bypassear desde el frontend

### **Nivel 3: Restricción por Email (Opcional)**
- ✅ Solo emails específicos permitidos
- ✅ Fácil de gestionar
- ✅ Sin código adicional

---

## 📊 Resumen de Permisos

| Acción | Usuario Anónimo | Usuario Autenticado | Admin Específico |
|--------|----------------|---------------------|------------------|
| Ver contenido | ✅ | ✅ | ✅ |
| Editar contenido | ❌ | ✅ | ✅ |
| Ver registros de interés | ❌ | ✅ | ✅ |
| Registrar interés | ✅ | ✅ | ✅ |

Con restricción por email:
- "Usuario Autenticado" = ❌ (no puede editar)
- "Admin Específico" = ✅ (puede editar)

---

## 🔧 Troubleshooting

### Error: "Supabase no está configurado"
- Verifica que `.env` tenga `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`
- Reinicia el servidor de desarrollo

### Error: "Email o contraseña incorrectos"
- Verifica el email y contraseña
- Si te registraste desde la app, confirma el email primero

### Error: "No tienes permisos para actualizar"
- Verifica que el usuario esté autenticado
- Si usas restricción por email, verifica que tu email esté en la lista
- Revisa las políticas RLS en Supabase

### La sesión no persiste
- Supabase maneja las sesiones automáticamente
- Si cierras el navegador, puedes necesitar iniciar sesión nuevamente

---

## ✅ Verificación Final

1. ✅ Tablas creadas en Supabase
2. ✅ Políticas RLS configuradas
3. ✅ Usuario admin creado
4. ✅ `.env` configurado con credenciales de Supabase
5. ✅ Servidor reiniciado después de modificar `.env`
6. ✅ Puedes iniciar sesión en `/admin`
7. ✅ Puedes editar y guardar contenido
8. ✅ Los cambios son visibles para todos los usuarios

---

## 🚀 Producción

Para deployar en producción:

1. **Cambiar URL del sitio en Supabase:**
   - Ve a **Authentication** > **URL Configuration**
   - Agrega tu dominio de producción a **Site URL**

2. **Configurar Email Templates:**
   - Ve a **Authentication** > **Email Templates**
   - Personaliza los emails de confirmación y recuperación

3. **Revisar políticas RLS:**
   - Asegúrate de que solo admins específicos puedan editar

4. **Configurar variables de entorno:**
   - En tu plataforma de hosting (Vercel, Netlify, etc.)
   - Agrega `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`

---

¿Necesitas ayuda? Revisa la documentación de Supabase: https://supabase.com/docs/guides/auth
