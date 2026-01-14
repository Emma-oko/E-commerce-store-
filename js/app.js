const cart = [];
const cartItems = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");
const cartCountEl = document.getElementById("cart-count");

/* ADD TO CART */
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
      const card = button.closest(".product-card");
          const id = card.dataset.id;
              const name = card.dataset.name;
                  const price = Number(card.dataset.price);

                      const item = cart.find(p => p.id === id);

                          if (item) {
                                item.qty++;
                                    } else {
                                          cart.push({ id, name, price, qty: 1 });
                                              }

                                                  updateCart();
                                                    });
                                                    });

                                                    /* UPDATE CART */
                                                    function updateCart() {
                                                      cartItems.innerHTML = "";
                                                        let total = 0;
                                                          let count = 0;

                                                            cart.forEach(item => {
                                                                total += item.price * item.qty;
                                                                    count += item.qty;

                                                                        const div = document.createElement("div");
                                                                            div.className = "cart-item";
                                                                                div.innerHTML = `
                                                                                      <span>${item.name} (${item.qty})</span>
                                                                                            <div>
                                                                                                    <button onclick="changeQty('${item.id}', 1)">+</button>
                                                                                                            <button onclick="changeQty('${item.id}', -1)">-</button>
                                                                                                                  </div>
                                                                                                                      `;
                                                                                                                          cartItems.appendChild(div);
                                                                                                                            });

                                                                                                                              totalPriceEl.textContent = total.toLocaleString();
                                                                                                                                cartCountEl.textContent = count;
                                                                                                                                }

                                                                                                                                function changeQty(id, change) {
                                                                                                                                  const item = cart.find(p => p.id === id);
                                                                                                                                    if (!item) return;

                                                                                                                                      item.qty += change;
                                                                                                                                        if (item.qty <= 0) {
                                                                                                                                            const index = cart.indexOf(item);
                                                                                                                                                cart.splice(index, 1);
                                                                                                                                                  }

                                                                                                                                                    updateCart();
                                                                                                                                                    }

                                                                                                                                                    /* IMAGE SLIDER */
                                                                                                                                                    document.querySelectorAll(".product-card").forEach(card => {
                                                                                                                                                      const images = card.dataset.images.split(",");
                                                                                                                                                        let index = 0;
                                                                                                                                                          const img = card.querySelector("img");

                                                                                                                                                            card.querySelector(".next").onclick = () => {
                                                                                                                                                                index = (index + 1) % images.length;
                                                                                                                                                                    img.src = "assets/images/" + images[index];
                                                                                                                                                                      };

                                                                                                                                                                        card.querySelector(".prev").onclick = () => {
                                                                                                                                                                            index = (index - 1 + images.length) % images.length;
                                                                                                                                                                                img.src = "assets/images/" + images[index];
                                                                                                                                                                                  };
                                                                                                                                                                                  });