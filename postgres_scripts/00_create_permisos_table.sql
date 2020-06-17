CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE permisos (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    id_persona CHAR(9) UNIQUE NOT NULL,
    region CHAR(50) NOT NULL,
    comuna CHAR(50) NOT NULL,
    direccion CHAR(50) NOT NULL,
    motivo CHAR(2) NOT NULL,
    hora_emision TIMESTAMP DEFAULT now()
)

