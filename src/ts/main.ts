// main.ts

import callbackGif from "../img/callback.gif";
import collapseGif from "../img/collapse.gif";
import likerGif from "../img/liker.gif";
import heartPng from "../img/heart.png";

document.addEventListener("DOMContentLoaded", () => {
  const collapseBtn = document.querySelector(".collapse-button");
  const collapseContainer = document.querySelector(".collapse-container");
  const imgCallback = document.querySelector(
    ".callback-img",
  ) as HTMLImageElement;
  const imgCollapse = document.querySelector(
    ".collapse-img",
  ) as HTMLImageElement;
  const imgLiker = document.querySelector(".liker-img") as HTMLImageElement;
  const imgHeart = document.querySelectorAll<HTMLImageElement>(".heart-img");

  // Функция для добавления гифки
  function addGif(img: HTMLImageElement, gif: string) {
    if (img) img.src = gif;
  }

  // Добавляем гифки
  addGif(imgCallback, callbackGif);
  addGif(imgCollapse, collapseGif);
  addGif(imgLiker, likerGif);
  imgHeart.forEach((img) => addGif(img, heartPng));

  // Первое задание: показ и скрытие
  if (collapseBtn && collapseContainer) {
    collapseBtn.addEventListener("click", () => {
      collapseContainer.classList.toggle("collapsed");
      collapseBtn.classList.toggle("collapsed");
    });
  }

  // Второе задание: Callback Chat* (задача со звёздочкой)
  const chatButton = document.querySelector(".chat-button") as HTMLDivElement;
  const callbackContent = document.querySelector(
    ".callback-content",
  ) as HTMLDivElement;
  const closeBtn = document.querySelector(".close-btn") as HTMLButtonElement;
  const textArea = document.querySelector(
    "#callback-message",
  ) as HTMLTextAreaElement;

  if (chatButton && callbackContent && closeBtn) {
    const callbackForm = callbackContent.querySelector(
      ".callback-form",
    ) as HTMLFormElement;

    callbackForm.addEventListener("submit", (event) => {
      event.preventDefault();
      callbackContent.classList.remove("active");
      chatButton.classList.remove("hidden");
    });

    chatButton.addEventListener("click", () => {
      chatButton.classList.add("hidden");
      callbackContent.classList.add("active");
      textArea.focus();
    });
    closeBtn.addEventListener("click", () => {
      chatButton.classList.remove("hidden");
      callbackContent.classList.remove("active");
    });
  }

  // Третье задание: Liker* (задача со звёздочкой)
  const likeButton = document.querySelector(
    ".like-button",
  ) as HTMLButtonElement;
  const likeContainer = document.querySelector(
    ".like-container",
  ) as HTMLDivElement;

  if (!likeButton || !likeContainer) {
    console.error("Не найдены элементы like-button или like-container.");
  } else {
    const heartPaths: string[] = [
      "heart-path-1",
      "heart-path-2",
      "heart-path-3",
      "heart-path-4",
    ];

    likeButton.addEventListener("click", () => {
      // Создаем новый элемент-сердечко
      const heart: HTMLImageElement = document.createElement("img");
      heart.src = heartPng;
      heart.className = "heart";

      // Выбираем случайную траекторию из массива
      console.log(Math.floor(Math.random() * heartPaths.length));
      const randomPath: string =
        heartPaths[Math.floor(Math.random() * heartPaths.length)];
      heart.style.animationName = randomPath;

      likeContainer.appendChild(heart);

      // Ждем окончания анимации и удаляем сердечко
      heart.addEventListener("animationend", () => {
        heart.remove();
      });
    });
  }
});
