// Функция возвращает простое текстовое сообщение
exports.handler = async function(event, context) {
    return {
      statusCode: 200,
      body: "Hello, World! This is a Netlify Function."
    };
  };