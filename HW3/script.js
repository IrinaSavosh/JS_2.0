document.addEventListener("DOMContentLoaded", () => {
  const addReviewBtn = document.getElementById("add-review-btn");
  const productNameInput = document.getElementById("product-name");
  const productReviewInput = document.getElementById("product-review");
  const productList = document.getElementById("product-list");
  const reviewsList = document.getElementById("reviews-list");
  const productReviewsSection = document.getElementById("product-reviews");
  const backToProductsBtn = document.getElementById("back-to-products");
  const currentProductSpan = document.getElementById("current-product");

  // Все отзывы из LocalStorage
  const getReviews = () => JSON.parse(localStorage.getItem("reviews")) || {};

  // Сохранение отзывов в LocalStorage
  const saveReviews = (reviews) =>
    localStorage.setItem("reviews", JSON.stringify(reviews));

  // Показать отзывы о каком-то продукте
  const showProductReviews = (product) => {
    const reviews = getReviews();
    const productReviews = reviews[product] || [];

    // Контейнер для отзывов под продуктом
    let reviewsContainer = document.getElementById(`reviews-${product}`);
    if (!reviewsContainer) {
      reviewsContainer = document.createElement("div");
      reviewsContainer.id = `reviews-${product}`;
      reviewsContainer.className = "reviews-container";
      // Добавление контейнера после списка продуктов
      const productLi = document.querySelector(`li[data-product="${product}"]`);
      if (productLi) {
        productLi.after(reviewsContainer);
      }
    }

    // Очищение и заполнение контейнера отзывами
    reviewsContainer.innerHTML = `
    <h4>Отзывы о "${product}":</h4>
    <ul class="reviews-list"></ul>
`;

    const reviewsList = reviewsContainer.querySelector(".reviews-list");

    productReviews.forEach((review, index) => {
      const li = document.createElement("li");
      li.className = "review-item";
      li.innerHTML = `
        <span class="review-text">${review}</span>
        <button class="delete-btn" data-index="${index}">Удалить</button>
    `;

      // Обработчик для кнопки удаления
      const deleteBtn = li.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation(); //всплытие события, остановка
        deleteReview(product, index);
      });

      reviewsList.appendChild(li);
    });
  };

  // Удаления отзыва
  const deleteReview = (product, index) => {
    const reviews = getReviews();
    reviews[product].splice(index, 1);

    if (reviews[product].length === 0) {
      delete reviews[product];
      // Удаление контейнера с отзывами, если отзывов больше нет
      const reviewsContainer = document.getElementById(`reviews-${product}`);
      if (reviewsContainer) {
        reviewsContainer.remove();
      }
      // Если это был последний отзыв о продукте, то продукт удаляется
      const productLi = document.querySelector(`li[data-product="${product}"]`);
      if (productLi) {
        productLi.remove();
      }
    }

    saveReviews(reviews);
    showProductReviews(product); // Вызов отображения отзывов
    updateProductList(); // Обновление списка продуктов
  };

  // Обновление списка продуктов
  const updateProductList = () => {
    const reviews = getReviews();
    productList.innerHTML = "";
    Object.keys(reviews).forEach((product) => {
      const li = document.createElement("li");
      li.setAttribute("data-product", product);
      li.className = "product-item";
      li.innerHTML = `
        <span class="product-name">${product}</span>
        <button class="show-reviews-btn">Показать отзывы</button>
    `;

      // Обработчик для кнопки "Показать отзывы"
      const showReviewsBtn = li.querySelector(".show-reviews-btn");
      showReviewsBtn.addEventListener("click", () => {
        const reviewsContainer = document.getElementById(`reviews-${product}`);
        if (reviewsContainer) {
          reviewsContainer.classList.toggle("hidden");
          showReviewsBtn.textContent = reviewsContainer.classList.contains(
            "hidden"
          )
            ? "Показать отзывы"
            : "Скрыть отзывы";
        } else {
          showProductReviews(product);
          showReviewsBtn.textContent = "Скрыть отзывы";
        }
      });

      productList.appendChild(li);
    });
  };

  // Добавить отзыв
  addReviewBtn.addEventListener("click", () => {
    const productName = productNameInput.value.trim();
    const productReview = productReviewInput.value.trim();

    if (!productName || !productReview) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    const reviews = getReviews();
    if (!reviews[productName]) {
      reviews[productName] = [];
    }
    reviews[productName].push(productReview);
    saveReviews(reviews);
    productNameInput.value = "";
    productReviewInput.value = "";
    updateProductList();
  });

  // Назад к списку продуктов
  backToProductsBtn.addEventListener("click", () => {
    productReviewsSection.classList.add("hidden");
    productList.parentElement.classList.remove("hidden");
  });

  // старт
  updateProductList();
});
