

let views = document.getElementsByClassName('image-container');

for (let i = 0; i < views.length; i++) {
    views[i].addEventListener('click', () => { views[i].setAttribute('style', views[i].clientWidth === 40 ? 'width:700px' : 'width:40px'); setOthers(views,i) })
    // if(i===0) {
    // views[i].setAttribute('style','width:700px')
    // setOthers(views,i)
    }



const setOthers = (elements,i) => {
    
    for(let j=0;j<elements.length ; j++)
    {
        if(j!==i)
        {
            elements[j].setAttribute('style','width:40px')
        }
    }

} 