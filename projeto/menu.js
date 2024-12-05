/*cria uma variavel que guarda tooos os 'item-menu'*/
var menu_item = document.querySelectorAll('.item-menu')

function selecao_link(){
    /*remove a classe ativo de um item
     que eu não  foi clicado e adicona em um que foi clicado*/
    menu_item.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menu_item.forEach((item)=>
    item.addEventListener('click', selecao_link)
)


var btnExpandir = document.querySelector('#btn_expandir')
var menuLateral = document.querySelector('.menu-lateral')

btnExpandir.addEventListener('click',function(){
    menuLateral.classList.toggle('expandir')
})
