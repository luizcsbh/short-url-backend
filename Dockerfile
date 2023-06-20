# Define a imagem base
FROM node:14

# Cria e define o diret�rio de trabalho dentro do cont�iner
WORKDIR /app

# Copia o package.json e package-lock.json para o diret�rio de trabalho
COPY package*.json ./

# Instala as depend�ncias do projeto
RUN npm install

# Copia todo o c�digo-fonte para o diret�rio de trabalho
COPY . .

# Exp�e a porta 3000
EXPOSE 3000

# Comando para iniciar a aplica��o quando o cont�iner for executado
CMD ["npm", "run", "start"]
