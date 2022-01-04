const listArea = document.querySelector('.fourthPage')
const list = document.querySelector('.listBooks')
const screenWidth = window.screen.width

function listing(){
    if(event.clientX>(screenWidth/7)){
        if(list.classList.contains('defaultList')){
            list.classList.remove('defaultList')
        }
        list.classList.add('rightList')
    }
    else{
        if(list.classList.contains('rightList')){
            list.classList.remove('rightList')
        }
        list.classList.add('defaultList')
    }
}
function listingDelete(){
    if(list.classList.contains('rightList')){
        list.classList.remove('rightList')
    }
    list.classList.add('defaultList')
}
listArea.addEventListener('mousemove',listing)
listArea.addEventListener('mouseout',listingDelete)
