[![Netlify Status](https://api.netlify.com/api/v1/badges/60604f2b-d425-4b1e-b1e8-a849cdbc0666/deploy-status)](https://app.netlify.com/sites/chat-laichat/deploys)
<br>
# Спринт 2
Создание базового класса Block и реализация компонентов на его основе.

Проект использует TypeScript, подлючены линтеры. Разработан класс для реализации HTTP запросов.
В качестве менеджера шаблонов используется Handlebars. Для уменьшения кодовой базы и оптимизации
использования стилей применяется PostCSS с необходимым набором плагинов: mixins, vars, etc.
## Макет
https://www.figma.com/file/v3haT7KaSGqkewYixjvLSb/Chat_external_link?node-id=0-1&t=SmifkUxdtoNfPshG-0

## Готовая сборка на Netlify
- https://chat-laichat.netlify.app/ - Индекс
- https://chat-laichat.netlify.app/sign-in - Страница входа
- https://chat-laichat.netlify.app/sign-up - Страница регистрации
- https://chat-laichat.netlify.app/chat - Страница чатов
- https://chat-laichat.netlify.app/user-settings - Страница настроек пользователя
- https://chat-laichat.netlify.app/404 - Страница 404
- https://chat-laichat.netlify.app/500 - Страница 500

## Ветка деплоя
deploy

## Запуск в dev режиме
npm run dev

## Сборка проекта
npm run build

## Локальный запуск готового проекта
npm run start
