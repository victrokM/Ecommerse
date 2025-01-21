FROM node:20-alpine3.16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /core-ecommerce

# Copia el archivo package.json y pnpm-lock.yaml para instalar dependencias primero
COPY package.json pnpm-lock.yaml ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código del proyecto
COPY . .

# Construye la aplicación
RUN npm run build && \
    npm prune --production

# Expone el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]