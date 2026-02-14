-- Tabla para almacenar el contenido personalizado de la aplicación
-- Solo habrá 1 fila activa (id=1) que se actualiza desde el panel admin

CREATE TABLE IF NOT EXISTS app_content (
  id INTEGER PRIMARY KEY DEFAULT 1,
  content JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  updated_by TEXT,
  version INTEGER DEFAULT 1,
  CONSTRAINT single_row CHECK (id = 1)
);

-- Índice para búsquedas rápidas
CREATE INDEX IF NOT EXISTS idx_app_content_updated ON app_content(updated_at DESC);

-- Habilitar Row Level Security
ALTER TABLE app_content ENABLE ROW LEVEL SECURITY;

-- Política: Cualquiera puede leer el contenido
CREATE POLICY "Anyone can read content"
  ON app_content
  FOR SELECT
  TO public
  USING (true);

-- Política: Cualquiera puede insertar/actualizar (puedes restringir esto después con autenticación)
CREATE POLICY "Anyone can update content"
  ON app_content
  FOR ALL
  TO public
  USING (true)
  WITH CHECK (true);

-- Insertar fila inicial vacía (opcional)
-- INSERT INTO app_content (id, content) VALUES (1, '{}'::jsonb)
-- ON CONFLICT (id) DO NOTHING;
