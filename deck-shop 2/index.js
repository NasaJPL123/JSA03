let productsDiv = document.getElementById("products");
fetch("/deck-shop 2/Data/data.json")
  .then((response) => {
    return response.json();
  })
  .then((productList) => {
    renderItem(productList);
  });

function renderItem(productList) {
  const { data } = productList;

  for (let i = 0; i < data.length; i++) {
    let cart_container = document.createElement("div");
    cart_container.classList.add("card");

    let img_container = document.createElement("img");
    img_container.src = data[i].image;
    img_container.classList.add("img-container");

    cart_container.appendChild(img_container);

    let container = document.createElement("div");
    container.classList.add("container");

    let h5 = document.createElement("h5");
    h5.textContent = data[i].name;

    let h6 = document.createElement("h6");
    h6.innerHTML = `<b>Price: </b>${data[i].price}đ`;

    let button = document.createElement("button");
    button.textContent = "Thêm vào giỏ hàng";
    button.onclick = function () {
      addToCart(data[i].name);
    };

    container.appendChild(h5);
    container.appendChild(h6);
    container.appendChild(button);

    cart_container.appendChild(container);

    productsDiv.appendChild(cart_container);
  }
}


// bài tập: render name, price, button thêm giỏ hàng

// bài tập 2: thêm trang login, register

// bài tập 3: làm trang about us

// face 1 data json cho about us

// trong data của about us: img, title, deck-shop, descriptiton

