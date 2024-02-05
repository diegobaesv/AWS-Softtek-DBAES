<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# AWS Softtek DBAES (Lambdas, Dynamo)

Este proyecto fue realizado con la finalidad de demostrar el consumo de SWAPI y Dynamodb usando Serverless Framework

## Instalación

### Serverless Framework CLI

Documentación: https://www.serverless.com/framework/docs/getting-started.

Para instalar de forma global, ejecutar el siguiente comando:
```
npm install -g serverless
```

### Instalar depedencias

Para instalar las dependencias, ejecutar el siguiente comando:

```
npm install
```

## Configuración de AWS CLI

### Generar Clave de Acceso y Clave Secreta

En el panel de adminsitración de AWS, generar las credenciales *Clave de Acceso* y *Clave Secreta*

### Configurar Clave de Acceso y Clave Secreta

Ejecutar el siguiente comando: 

```
aws configure
```

Luego ingresar las claves solicitadas

## Pruebas unitarias JEST

Para ejecutar las pruebas unitarias ejecutar el siguiente comando:

```
npm run test
```

## Despliegue

Debido a que se está usando Typescript en el proyecto se deberá usar el siguiente comando:

```
npm run deploy
```

## Endpoints

Listar Peliculas
- GET - https://w2qqtaky8i.execute-api.us-east-1.amazonaws.com/swapi/peliculas

Obtener Pelicula
- GET - https://w2qqtaky8i.execute-api.us-east-1.amazonaws.com/swapi/peliculas/{id}

Listar Usuarios
- GET - https://w2qqtaky8i.execute-api.us-east-1.amazonaws.com/dynamo/usuarios

Crear Usuario
- POST - https://w2qqtaky8i.execute-api.us-east-1.amazonaws.com/dynamo/usuarios

## Postman

Url documentación POSTMAN:
- https://documenter.getpostman.com/view/11492663/2s9Ykq5f83


