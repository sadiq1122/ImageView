

const setOthers = (elements, i) => {
    for (let j = 0; j < elements.length; j++) {
        if (j !== i) {
            elements[j].setAttribute('style', 'width:40px')
        }
    }

} 
let views = document.getElementsByClassName('image-container');
setOthers(views, 1)
for (let i = 0; i < views.length; i++) {
    views[i].addEventListener('click', () => { views[i].setAttribute('style', views[i].clientWidth === 40 ? 'width:700px' : 'width:40px'); setOthers(views, i) })
}

