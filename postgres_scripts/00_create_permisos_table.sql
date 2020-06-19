CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE permisos (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    id_persona VARCHAR(9) UNIQUE NOT NULL,
    region VARCHAR(50) NOT NULL,
    comuna VARCHAR(50) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    motivo SMALLINT NOT NULL,
    hora_emision VARCHAR(16) NOT NULL,
    valido_hasta VARCHAR(16) NOT NULL
);

CREATE TABLE motivos (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    codificacion SMALLINT NOT NULL,
    ventana SMALLINT NOT NULL,
    descripcion TEXT NOT NULL
);
