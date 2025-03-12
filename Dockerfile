FROM cypress/included:latest

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем все файлы проекта
COPY . .

# Команда по умолчанию при запуске контейнера
CMD ["npm", "run", "test:with-report"]