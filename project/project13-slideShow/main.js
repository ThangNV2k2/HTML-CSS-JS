var imgMain = document.querySelector('.img-wrap img')
var imgList = document.querySelectorAll('.img-list img')
var prev = document.querySelector('.control.prev i')
var next = document.querySelector('.control.next i')
var listDiv = document.querySelectorAll('.img-list div')

var currentIndex = 0;
function updateIndex(index) {
    listDiv[currentIndex].classList.remove('active')
    currentIndex = index
    imgMain.src = imgList[index].getAttribute('src')
    listDiv[index].classList.add('active')
}

imgList.forEach((img, index) => {
    img.addEventListener('click', function(e) {
        updateIndex(index)
        
    })
});

prev.addEventListener('click', function() {
    if(currentIndex == 0) {
        updateIndex(imgList.length - 1)
    }
    else {
        updateIndex(currentIndex-1)
    }
})

next.addEventListener('click', function() {
    if(currentIndex == imgList.length - 1) {
        updateIndex(0)
    }
    else {
        updateIndex(currentIndex+1)
    }
})