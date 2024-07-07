#front-end-dockerfile
# Стадия сборки
FROM node:14-alpine as build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Собираем приложение
RUN npm run build

# Стадия продакшн
FROM nginx:alpine

# Копируем собранные файлы из предыдущей стадии
COPY --from=build /app/build /usr/share/nginx/html

# Экспонируем порт
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
