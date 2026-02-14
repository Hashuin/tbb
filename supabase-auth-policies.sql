-- ============================================
-- POLÍTICAS DE SEGURIDAD PARA SUPABASE AUTH
-- ============================================

-- 1. Eliminar políticas anteriores (si existen)
DROP POLICY IF EXISTS "Anyone can read content" ON app_content;
DROP POLICY IF EXISTS "Anyone can update content" ON app_content;

-- 2. Crear nueva política: Cualquiera puede leer
CREATE POLICY "Public can read content"
  ON app_content
  FOR SELECT
  TO public
  USING (true);

-- 3. Crear nueva política: Solo usuarios autenticados pueden actualizar
CREATE POLICY "Authenticated users can update content"
  ON app_content
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- 4. Verificar que RLS esté habilitado
ALTER TABLE app_content ENABLE ROW LEVEL SECURITY;

-- ============================================
-- CONFIGURACIÓN DE USUARIOS ADMIN
-- ============================================

-- Opción 1: Crear un usuario admin manual (recomendado para empezar)
-- Ve a: Authentication > Users > Add User
-- Email: admin@tugremio.com
-- Password: (tu contraseña segura)
-- Confirmar automáticamente el email

-- Opción 2: Restringir aún más - solo emails específicos
-- Descomentar las siguientes líneas para permitir solo ciertos emails:

/*
DROP POLICY IF EXISTS "Authenticated users can update content" ON app_content;

CREATE POLICY "Only admin can update content"
  ON app_content
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'email' IN ('admin@tugremio.com', 'otro-admin@tugremio.com'))
  WITH CHECK (auth.jwt() ->> 'email' IN ('admin@tugremio.com', 'otro-admin@tugremio.com'));
*/

-- ============================================
-- ACTUALIZAR TABLA guild_interest (Opcional)
-- ============================================

-- Si también quieres restringir quién puede ver los registros:

-- Eliminar políticas anteriores
DROP POLICY IF EXISTS "Anyone can read interest" ON guild_interest;
DROP POLICY IF EXISTS "Anyone can insert interest" ON guild_interest;

-- Cualquiera puede registrar su interés (anónimo)
CREATE POLICY "Anyone can insert interest"
  ON guild_interest
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Solo usuarios autenticados pueden ver todos los registros
CREATE POLICY "Authenticated users can read interest"
  ON guild_interest
  FOR SELECT
  TO authenticated
  USING (true);

-- Usuarios anónimos solo pueden ver sus propios registros (si quieres)
-- (Requeriría agregar un campo user_id o session_id)
