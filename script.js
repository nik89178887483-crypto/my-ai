const CLIENT_ID = '019c7bce-187a-7d6f-a5c9-763041abf994';   // Ваш Client ID
const CLIENT_SECRET = 'MDE5YzdiY2UtMTg3YS03ZDZmLWE1YzktNzYzMDQxYWJmOTk0OjQ4MTZhMjg3LWUyYzktNDMwMy1iNDliLWZhZWY3OGIwMjdjYQ==';                 // Ваш Authorization key (Client Secret)

// URL для получения токена и отправки сообщений
const TOKEN_URL = 'https://ngw.devices.sberbank.ru:9443/api/v2/oauth';
const CHAT_URL = 'https://gigachat.devices.sberbank.ru/api/v1/chat/completions';

// Базовая авторизация для получения токена (кодируем client_id:client_secret в base64)
const authString = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

// Флаг для отслеживания первого сообщения
let isFirstMessage = true;

// История сообщений (системный промпт можно изменить)
let messageHistory = [
    {
        role: "system",
        content: "Ты - дружелюбный ассистент по имени Ptenchik. Отвечай кратко, но информативно. Ты находишься в чате и помогаешь пользователям."
    }
];

// ----- Вспомогательные функции (оставляем как есть) -----
const addMessage = (content, isUser) => {
    const messagesDiv = document.getElementById('messages');
    const messageBox = document.createElement('div');
    messageBox.innerHTML = `<p class="${isUser ? 'message-user' : 'message-bot'}">${content}</p>`;
    messagesDiv.appendChild(messageBox);
    const scrollDiv = document.querySelector('.scroll');
    if (scrollDiv) {
        scrollDiv.scrollTop = scrollDiv.scrollHeight;
    }
};

const hideWelcomeMessage = () => {
    const dsElement = document.getElementById("ds");
    if (dsElement) {
        dsElement.style.display = "none";
    }
};

const showTypingIndicator = () => {
    const messagesDiv = document.getElementById('messages');
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = '<p class="message-bot typing">Печатает...</p>';
    messagesDiv.appendChild(typingDiv);
    const scrollDiv = document.querySelector('.scroll');
    if (scrollDiv) {
        scrollDiv.scrollTop = scrollDiv.scrollHeight;
    }
};

const removeTypingIndicator = () => {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
};

// ----- Функция получения Access Token (GigaChat) -----
async function getAccessToken() {
    // Генерируем уникальный идентификатор запроса (RqUID)
    // Используем crypto.randomUUID() (поддерживается в современных браузерах)
    const rqUID = crypto.randomUUID();
    
    const response = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'RqUID': rqUID,
            'Authorization': `Basic ${authString}`
        },
        body: new URLSearchParams({ scope: 'GIGACHAT_API_PERS' })
    });

    if (!response.ok) {
        throw new Error(`Ошибка получения токена: ${response.status}`);
    }
    const data = await response.json();
    return data.access_token;
}

// ----- Основная функция отправки сообщения (переделанная под GigaChat) -----
const sendMessage = async (event) => {
    event.preventDefault();
    const userInput = document.getElementById('userInput').value.trim();
    
    if (!userInput) return;
    
    // Если первое сообщение – скрываем приветствие
    if (isFirstMessage) {
        hideWelcomeMessage();
        isFirstMessage = false;
    }
    
    // Добавляем сообщение пользователя
    addMessage(userInput, true);
    messageHistory.push({ role: "user", content: userInput });
    
    showTypingIndicator();
    
    try {
        // Получаем свежий токен
        const token = await getAccessToken();

        const response = await fetch(CHAT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                model: 'GigaChat',            // или 'GigaChat-Pro'
                messages: messageHistory,
                temperature: 0.7,
                max_tokens: 1000
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const botResponse = data.choices[0].message.content;
        
        removeTypingIndicator();
        addMessage(botResponse, false);
        messageHistory.push({ role: "assistant", content: botResponse });
        
        // Ограничиваем историю последними 10 сообщениями (плюс system)
        if (messageHistory.length > 11) {
            const systemMessage = messageHistory[0];
            messageHistory = [systemMessage, ...messageHistory.slice(-10)];
        }
        
    } catch (error) {
        console.error("Ошибка при обращении к GigaChat:", error);
        removeTypingIndicator();
        
        let fallbackResponse = "Извините, сервис временно недоступен. Попробуйте позже.";
        // Проверяем, вставлены ли ключи
        if (!CLIENT_ID || CLIENT_ID === '019c7bce-187a-7d6f-a5c9-763041abf994' && CLIENT_SECRET === 'скопированный_ключ') {
            fallbackResponse = "⚠️ Пожалуйста, укажите ваш Client ID и Client Secret в коде.";
        }
        addMessage(fallbackResponse, false);
    }
    
    document.getElementById('userInput').value = '';
};

// ----- Обработчики событий (оставляем без изменений) -----
document.addEventListener('DOMContentLoaded', () => {
    const knButton = document.getElementById("kn");
    const dsElement = document.getElementById("ds");
    
    if (knButton && dsElement) {
        knButton.addEventListener('click', () => {
            dsElement.style.display = "none";
        });
    }
    
    const userInput = document.getElementById('userInput');
    if (userInput) {
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage(e);
            }
        });
    }
    
    // Проверяем наличие ключей
    if (!CLIENT_ID || CLIENT_ID === '019c7bce-187a-7d6f-a5c9-763041abf994' && CLIENT_SECRET === 'скопированный_ключ') {
        console.warn('⚠️ Внимание: Не указан Client ID или Client Secret GigaChat!');
        addMessage('⚠️ Для работы с искусственным интеллектом укажите ваш Client ID и Client Secret в файле script.js', false);
    } else {
        // Добавляем приветственное сообщение от бота
        addMessage('Привет! Я GigaChat. Спрашивай что угодно!', false);
    }
});

