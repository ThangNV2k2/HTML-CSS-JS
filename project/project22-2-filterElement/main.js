let btnList = document.querySelectorAll('.btn button')
let imgs = document.querySelector('.img-list')
let listImg = [
    {
        img : 'img/dessert1.jpg',
        type_food : 'dessert'
    },
    {
        img : 'img/drinks1.jpg',
        type_food : 'drinks'
    },
    {
        img : 'img/drinks2.jpg',
        type_food : 'drinks2'
    },
    {
        img : 'img/drinks3.jpg',
        type_food : 'drinks'
    },
    {
        img : 'img/meat1.jpg',
        type_food : 'meat'
    },
    {
        img : 'img/meat2.jpg',
        type_food : 'meat'
    },
    {
        img : 'img/salad1.jpg',
        type_food : 'salad'
    },
    {
        img : 'img/salad2.jpg',
        type_food : 'salad'
    },
]
let create = function(s) {
    listImg.forEach(img => {
        if(img.type_food == s || s == 'all') {
            let boximg = document.createElement('div')
            boximg.classList.add('img')
            boximg.innerHTML = `<img src="${img.img}" alt="">`
            imgs.appendChild(boximg)
        }
    })
}
btnList.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        imgs.innerHTML = ''
        let btnActive = document.querySelector('button.active')
        btnActive.classList.remove('active')
        e.target.classList.add('active')
        let type = e.target.getAttribute('type-food')
        create(type)
    })
})
create('all')