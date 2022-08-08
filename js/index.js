const refs={
    balanceList: document.querySelector('.balance__list'),
}
refs.balanceList.addEventListener('click', e=>{
    
    if(e.target.classList.contains('balance__caption')){
        e.target.classList.toggle('active')
        e.target.nextElementSibling.classList.toggle('visible')
    }
})