# Клиентская часть приложения MatchMe - аналог тиндера в Telegram Web App 

MatchMe - это TG Web App для знакомств с регистрацией по Telegram ID. Сделан по аналогии с Тиндером / VK Знакомства. \
Внутри приложение есть страница регистрации (данные о юзере и фотографии), просмотр анкет со свайпами, мои лайки, чаты, настройки).

## 🌐 Ссылка на проект
[Маркетинговый сайт](https://matchmesite.ru) — сайт с описанием и демонстрацией проекта \
[Бот в телеграм](https://t.me/MatchMeDatingbot) — нажмите, чтобы посмотреть проект в действии.

## 🛠 Использованные технологии

- **Frontend:** React, TypeScript, SCSS
- **Backend:** Node.js, Express.js, MongoDB
- **Библиотеки:** Axios, Mongoose, Socket.io

## 🚀 Как запустить

Следуйте этим шагам, чтобы запустить проект локально:

1. Клонируйте репозиторий:
   
   ```bash
   git clone https://github.com/nikita-shalamov/matchme-client.git
   ```
2. Перейдите в папку проекта:
   
   ```bash
   cd project
   ```
3. Установите зависимости:
   
   ```bash
   npm install
   ```
4. Создайте файл .env в корне проекта и добавьте необходимые переменные окружения:
   
   ```plaintext
   VITE_BASE_URL=your_server_requests_url
   ```
5. Запустите проект
   
   ```bash
   npm run dev
   ```
*6. Если сервер еще не запущен, то запустите его - https://github.com/nikita-shalamov/matchme-server
