
# Bot de Discord Básico

Este es proyecto creado con la librería [Discord.JS](https://discord.js.org/#/) y [NodeJS](https://nodejs.org/es/)

## Feedback

Si tiene alguna idea para mejorar el proyecto, por favor avíseme por mensaje directo en [IG: @francobalich](https://www.instagram.com/francobalich)

## Instalación

Para instalar el proyecto con npm debe usar alguno de los siguientes comandos:

```bash
  npm install .
  npm i .
```

## Uso

Para usar este proyecto debe:

    1)	Duplicar el archivo .envExample y renombrarlo como .env
    2)	Crear una aplicación de Discord en https://discord.com/developers/applications
    3)	Se tiene que copiar el Token del bot y agregarlo en el archivo .env en TOKEN
    4)	Luego se tiene que ir a la pestaña de OAuth2 y se asignan los permisos que va a tener tu bot (Como sugerencia: Administrador)
    5)	Se tienen que generar un link y acceder al mismo para agregar el bot a un servidor Discord
    6)	Comprobar que las opciones “Presence Intent”, “Server Members Intent” y “Message Content Intent” estén activadas desde la configuración del bot.

Debe ejecutar el siguiente comando para iniciar el proyecto.

```bash
  npm run start
```

## Modo desarrollo

Para ejecutar el proyecto en modo desarrollo

```bash
  npm run dev
```

## Ejecutar EsLint

Para ejecutar EsLint y dar formato al codigo

```bash
  npm run lint
```

## Autor

- [@francobalich](https://www.github.com/francobalich)
