let productsDiv =  document.getElementById("products")

// call data từ file json
fetch("./Data/data.json")
  .then((response) => {
    // convert file json thành promise
    return response.json();
  })
  .then((productList) => {
    // lấy data từ promise về
    // gán data đó vào hàm
    renderItem(productList)
  });

function renderItem(productList) {
  // lấy dữ liệu data là con của product list
  const {data} = productList;

  // vòng lặp để lấy tất cả dữ liệu từ data render ra màn hình
  for (let i = 0; i < data.length; i++) {
    // tạo cho id proect 1 thẻ div là cart con của products
    let cart_container = document.createElement("div");
    // thêm class card vào element và ăn theo css
    cart_container.classList.add("card")

    let img_container = document.createElement("img");
    img_container.src = data[i].image;
    img_container.classList.add("img-container")

    cart_container.appendChild(img_container)

    // thêm giá trị con vào products
    productsDiv.appendChild(cart_container)
  }
} 


// bài tập: render name, price, button thêm giỏ hàng

// bài tập 2: thêm trang login, register

// bài tập 3: làm trang about us

// face 1 data json cho about us

// trong data của about us: img, title, deck-shop, descriptiton

