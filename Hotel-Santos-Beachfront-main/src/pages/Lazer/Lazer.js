function animar() { 
    const btn = document.getElementById('btn-menu') 
    btn.classList.toggle('ativar') 
    menuDiv.classList.toggle('abrir') 
    btnAnimar.classList.toggle('ativo')
} 
const menuDiv = document.getElementById('menu-mobile') 
const btnAnimar = document.getElementById('btn-menu') 

menuDiv.addEventListener('click', animar) 
