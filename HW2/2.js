/**
Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [
{
product: "Apple iPhone 13",
reviews: [
{
id: "1",
text: "Отличный телефон! Батарея держится долго.",
},
{
id: "2",
text: "Камера супер, фото выглядят просто потрясающе.",
},
],
},
{
product: "Samsung Galaxy Z Fold 3",
reviews: [
{
id: "3",
text: "Интересный дизайн, но дорогой.",
},
],
},
{
product: "Sony PlayStation 5",
reviews: [
{
id: "4",
text: "Люблю играть на PS5, графика на высоте.",
},
],
},
];

Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения. */

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            { id: "1", text: "Отличный телефон! Батарея держится долго." },
            { id: "2", text: "Камера супер, фото выглядят просто потрясающе." },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            { id: "3", text: "Интересный дизайн, но дорогой." },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            { id: "4", text: "Люблю играть на PS5, графика на высоте." },
        ],
    },
];

// Функция для отображения отзывов
function displayReviews() {
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = ''; // Очищаем контейнер перед отображением
    initialData.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productTitle = document.createElement('div');
        productTitle.classList.add('product-title');
        productTitle.textContent = product.product;
        productDiv.appendChild(productTitle);

        product.reviews.forEach(review => {
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review');
            reviewDiv.textContent = review.text;
            productDiv.appendChild(reviewDiv);
        });

        reviewContainer.appendChild(productDiv);
    });
}

// Функция для добавления отзыва
function addReview(productName, text) {
    if (text.length < 50 || text.length > 500) {
        throw new Error('Длина отзыва должна быть от 50 до 500 символов.');
    }
    const newReview = {
        id: (initialData.reduce((maxId, product) => Math.max(maxId, ...product.reviews.map(r => parseInt(r.id))), 0) + 1).toString(),
        text: text
    };
    // Находим продукт по имени и добавляем отзыв
    const product = initialData.find(p => p.product === productName);
    if (product) {
        product.reviews.push(newReview);
    }
    displayReviews(); // Обновляем отображение отзывов
}

// Обработчик события для кнопки
document.getElementById('submitReview').addEventListener('click', () => {
    const productSelect = document.getElementById('productSelect');
    const reviewInput = document.getElementById('reviewInput');
    const selectedProduct = productSelect.value;
    const reviewText = reviewInput.value.trim();

    try {
        if (!selectedProduct) {
            throw new Error('Пожалуйста, выберите телефон.');
        }
        addReview(selectedProduct, reviewText);
        reviewInput.value = ''; // Очищаем текстовое поле после добавления
    } catch (error) {
        alert(error.message); // Показываем сообщение об ошибке
    }
});

// Инициализация
displayReviews();