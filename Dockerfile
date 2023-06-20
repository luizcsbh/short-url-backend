# Define a imagem base
FROM node:14

# Cria e define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todo o código-fonte para o diretório de trabalho
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner for executado
CMD ["npm", "run", "start"]
