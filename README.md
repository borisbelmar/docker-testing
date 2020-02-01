# Docker Testing

Pequeño proyecto donde montamos un servidor de prueba de Express y Mongo.

# Solo usando Dockerfile

Una vez clonado el repositorio, debemos ejecutar:

```shell
docker build -t express .
docker run --name -d mongodb mongo
docker network create expressmongo
docker network --attachable expressmongo
docker network connect expressmongo mongodb
docker run -d -p 3000:3000 --rm --name express --env MONGODB_URI=mongodb://mongodb:27017/test express
docker network connect expressmongo express
```
Con esto, nuestra aplicación de express + mongo está disponibilizada en el puerto 3000 de la máquina.

Para bindear el directorio de trabajo y que tus cambios se reflejen en tiempo real dentro de la app, debe usar la siguiente opción en el comando run
```shell
-v tudirectorio:/usr/app
```
#### Usando Docker Compose

Es aún más fácil, ejecuta el siguiente comando en tu directorio de trabajo:

```shell
docker-compose up
```