# Usamos la imagen base de Node.js con Alpine
FROM node:18-alpine

# Establecemos el directorio de trabajo en el contenedor
WORKDIR /app

# Copiamos los archivos package.json y package-lock.json para aprovechar la caché de Docker
COPY package*.json ./

# Instalamos las dependencias solo para producción
RUN npm install --production

# Copiamos el resto del código de la aplicación
COPY . .

# Construimos el proyecto (esto genera los archivos estáticos en dist/)
RUN npm run build

# Exponemos el puerto 3000, que es el puerto predeterminado para Astro
EXPOSE 3000

# Creamos un usuario no root (opcional, pero recomendado por razones de seguridad)
RUN adduser -D myuser
USER myuser

# Ejecutamos el servidor de Astro en producción (con el adaptador de Node.js)
CMD ["node", "dist/server/entry.mjs"]