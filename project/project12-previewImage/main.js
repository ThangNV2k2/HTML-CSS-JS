var upload = document.querySelector('#myfile')
var preview = document.querySelector('.preview')
var error = document.querySelector('.error')

upload.addEventListener('change', function(e) {
    var file = upload.files[0]
    if(!file) return
    else if (!file.name.endsWith('.jpg')) {
        error.innerText = "Hình ảnh phải được định dạng .jpg"
        return
    } else 
        error.innerText = ""

    if(file.size / (1024 * 1024) > 2.4) {
        error.innerText = "Kích thước file phải nhỏ hơn 2.4MB"
        return
    }
    else {
        error.innerText = ""
        var img = document.createElement('img')
        img.src = URL.createObjectURL(file)
        preview.appendChild(img)
    }
})