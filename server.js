const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static('public'));

// Маршрут для главной страницы
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

// Маршрут для страницы аналитики
app.get('/analytics', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'analytics.html'));
});

// Перехватываем некорректные пути и перенаправляем на страницу ошибки
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'error.html'));
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});