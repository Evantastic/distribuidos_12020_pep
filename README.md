# PEP Sistemas Distribuidos 1er Semestre 2020
## Requisitos
### Software
* `docker`.
* `docker-compose`.
* `artillery.js` para las pruebas de estres.
La version de `docker` en la que se desarrollo corresponde a la version `19.03.12`, mientras que la version de `docker-compose` corresponde a `1.26.0`. Es importante que `docker-compose` soporte archivos version `3.4`.
### Variables de entorno
En el mismo directorio que el archivo `docker-compose.yml`, deben haber dos archivos en los cuales se definen variables de entorno.
```bash
#backend.env
PGUSER=#usuario de postgres
PGHOST=postgres
PGPASSWORD=#contrasena de postgres
PGDATABASE=#nombre de la base de datos
PGPORT=5432
EXPRESSPORT=3000
NODE_ICU_DATA=/app/node_modules/full-icu
```
```bash
#postgres.env
POSTGRES_PASSWORD=#contrasena de postgres
POSTGRES_USER=#usuario de postgres
POSTGRES_DB=#nombre de la base de datos
```
## Arquitectura
*Aca iria una imagen*
## Catacteristicas de un sistema distribuido

