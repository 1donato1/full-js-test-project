#back-end-dockerfile
# Устанавливаем базовый образ
FROM node:14-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Экспонируем порт
EXPOSE 3001

# Запускаем приложение
CMD ["node", "index.js"]
