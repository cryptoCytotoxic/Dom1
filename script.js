document.addEventListener("DOMContentLoaded", () => {
  const listProducts = document.querySelector(".list-products");
  const totalPriceElem = document.querySelector(".total");

  function updateTotal() {
    let total = 0;
    listProducts.querySelectorAll(".card-body").forEach(cardBody => {
      const priceText = cardBody.querySelector(".unit-price").textContent.trim();
      const price = parseFloat(priceText.replace(" $", ""));
      const qty = parseInt(cardBody.querySelector(".quantity").textContent);
      total += price * qty;
    });
    totalPriceElem.textContent = total + " $";
  }

  listProducts.addEventListener("click", (e) => {
    const target = e.target;
    const cardBody = target.closest(".card-body");
    if (!cardBody) return;

    const qtyElem = cardBody.querySelector(".quantity");
    let qty = parseInt(qtyElem.textContent);

    if (target.classList.contains("fa-plus-circle")) {
      qtyElem.textContent = qty + 1;
      updateTotal();
    }

    if (target.classList.contains("fa-minus-circle")) {
      if (qty > 0) {
        qtyElem.textContent = qty - 1;
        updateTotal();
      }
    }

    if (target.classList.contains("fa-trash-alt")) {
      cardBody.remove();
      updateTotal();
    }

    if (target.classList.contains("fa-heart")) {
      target.classList.toggle("liked");
    }
  });

  updateTotal();
});
