let imgList = document.querySelectorAll('.img')
let btnList = document.querySelectorAll('.btn button')

btnList.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        let btnActive = document.querySelector('button.active')
        btnActive.classList.remove('active')
        e.target.classList.add('active')

        let type = e.target.getAttribute('type-food')
        imgList.forEach((img) => {
            let typeImg = img.getAttribute('type-food')
            if(type == 'all' || typeImg == type) {
                img.classList.remove('hide')
            } else {
                img.classList.add('hide')
            }
        })
    })
})