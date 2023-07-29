let mockData = fetch('https://fakestoreapi.com/products')
.then(res => {
    return res.json()
})
.then(data => {
    let products = document.querySelector('.container .products')
    let loading = document.querySelector('.products h5')
    loading.remove()
    data.forEach(element => {
        let newProduct = document.createElement('div')
        newProduct.classList.add('product')
        newProduct.innerHTML = `
        <div class="img-product">
        <img src="${element.image}" alt="">
        </div>
        <div class="info-product">
            <h5>${element.title}</h5>
            <span>${element.price}$</span>
        </div>
        `
        products.appendChild(newProduct)
    });
})
// Tìm kiếm 
let search = document.querySelector('.box-input input')
search.addEventListener('input', function(e) {
    let products = document.querySelectorAll('.products .product')
    let txtSearch = e.target.value.trim().toLowerCase()
    products.forEach(item => {
        if(item.innerText.toLowerCase().includes(txtSearch)) {
            item.classList.remove('hide')
            // console.log(item)
        }
        else {
            item.classList.add('hide')
        }
    })
})