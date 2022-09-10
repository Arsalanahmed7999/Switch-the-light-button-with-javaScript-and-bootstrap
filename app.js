let onBtn = document.querySelector('.on')
let offBtn = document.querySelector('.off')
let image = document.querySelector('.image')

onBtn.addEventListener('click', ()=>{
    image.src = 'lighton.png'
})

offBtn.addEventListener('click', ()=>{
    image.src = 'lightoff.png'
})