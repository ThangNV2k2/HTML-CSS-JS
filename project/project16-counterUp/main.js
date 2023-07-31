let facebook = document.querySelector('.facebook h1')
let youtube = document.querySelector('.youtube h1')
let tiktok = document.querySelector('.tiktok h1')

function count(el, to) {
    let cnt = 0
    let time = 123
    let step = Math.ceil(to / time)
    let counting = setInterval(() => {
        cnt += step
        if(cnt >= to ) {
            el.innerText = to
            clearInterval(counting)
        } else {
            el.innerText = cnt
        }
    }, 1)
}

count(facebook, 3300)
count(youtube, 1000)
count(tiktok, 99000)