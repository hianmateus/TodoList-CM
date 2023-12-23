
/* Opcacidade na tela */

function Open(params) {
    const maskOpen = document.querySelector('.maskOpen')

    maskOpen.style.opacity = 0

    let i = 0
    while (i < 1000) {
        i++
    }

    if (i > 999) {
        maskOpen.style.zIndex = -1
    }
    
    
}

Open()

/* Abrindo Menu */

function OpenMenuMonths(params) {
    const Menu = document.querySelector('.SelectMenu')

    if (Menu.style.zIndex < 0) {

        Menu.style.zIndex = 2
    } else {
        Menu.style.zIndex = -2
    }
    
}

function CloseMenuMonths(params) {
    let Menu = document.querySelector('.SelectMenu')
    let styleMenu = window.getComputedStyle(Menu)
    let MenuZindex = parseInt(styleMenu.getPropertyValue('zIndex'))

    if (MenuZindex > 0) {
        MenuZindex = -2
    }
    
}

/* Monstrando trabalhos*/

const WoData = document.querySelector('.formwork1')
const WoName = document.querySelector('.formwork2')
const WoLaminas = document.querySelector('.formwork3')
const WoTesouras = document.querySelector('.formwork4')
const formObs = document.getElementById('formObs')



function ShowWork(params) {
    const allLi = document.querySelectorAll('li')

    allLi.forEach( (li, index) => {

        li.addEventListener('click', e => {
            li.querySelector(".mask").style.display = "flex"
            
        })
    })
    

}
function BackW(params) {
    const allLi = document.querySelectorAll('li')
    
    allLi.forEach( (li, index) => {

        li.addEventListener('click', e => {
            li.querySelector(".mask").style.display = "none"
            
        })
    })
}
function CloseWork(position) {
    const allLi = document.querySelectorAll('li')
    
    allLi.forEach( (li, index) => {

        li.addEventListener('click', e => {
            li.querySelector(".mask").style.display = "none"
            
        })
    })

    mylisttask[position].checked = !mylisttask[position].checked

    showtasks()
}

function deletetask(position) {
    mylisttask.splice(position, 1)

    showtasks()
}


/* Criando trabalhos*/

const ipData = document.querySelector('.forminput1')
const ipName = document.querySelector('.forminput2')
const ipLaminas = document.querySelector('.forminput3')
const ipTesouras = document.querySelector('.forminput4')
const workObs = document.getElementById('workObs')

const AddButton = document.querySelector('.AddButton')
const BackButton = document.querySelector('.formBack2')
const ButtonCreateWork = document.querySelector('.formCheck2')

const WorkList = document.querySelector('.WorkList')


const mask2 = document.querySelector('.mask2')

function OpenFormWork(params) {
    mask2.style.display = "flex"
}
function Back(params) {
    mask2.style.display = "none"

    ipData.value = ''
    ipName.value = ''
    ipLaminas.value = ''
    ipTesouras.value = ''
    workObs.value = ''
}

let mylisttask = []

function CreateWork(params) {
    mask2.style.display = "none"    

    mylisttask.push({
        checked: false,
        Data: ipData.value,
        Name: ipName.value,
        Laminas: ipLaminas.value,
        Tesouras: ipTesouras.value,
        Obs: workObs.value
    })

    console.log(mylisttask)

    ipData.value = ''
    ipName.value = ''
    ipLaminas.value = ''
    ipTesouras.value = ''
    workObs.value = ''

    showtasks()

}

/* Funçao que mostra itens na tela */

function showtasks(params) {
    let newli = ``

    mylisttask.forEach((item, position) => {

        newli = newli + `<li class="li">
        <div class="BoxWork ${item.checked && "done"}" onclick="ShowWork()">
            <div class="box-principal">
                <button class="image-camera"> <i class='bx bxs-camera'></i> </button>
                <div class="box-inputs">
                    <input class="Client-input ${item.checked && "idone"}" type="text" value="${item.Data}" readonly>
                    <input class="Client-input ${item.checked && "idone"}" type="text" value="${item.Name}" readonly>
                </div>
            </div>
            <button class="trash" onclick="deletetask(${position})"> <i class='bx bxs-trash-alt'></i> </button>
        </div>

        <div class="mask">
                    <div class="form">
                        <div class="formBoxPrincipal">
                            <button class="formImage"><i class='bx bxs-camera'></i></button>
                            <div class="forminputs">
                                <input class="formwork1" placeholder="Data" type="text" value="${item.Data}">
                                <input class="formwork2" placeholder="Nome" type="text" value="${item.Name}">
                                <input class="formwork3" placeholder="Laminas" type="text" value="${item.Laminas}">
                                <input class="formwork4" placeholder="Tesouras" type="text" value="${item.Tesouras}">
                            </div>
                        </div>
                
                        <textarea class="formObs" name="formObs" id="formObs" cols="30" rows="10" >${item.Obs}</textarea>
                
                        <div class="formButtons">
                            <button class="formBack" onclick="BackW()" ><i class='bx bx-arrow-back'></i></button>
                            <button class="formCheck" onclick="CloseWork(${position})" ><i class='bx bx-check'></i></button>
                        </div>
                    </div>
                </div>
        
    </li>
    
    `
    })
    
    WorkList.innerHTML = newli
}


AddButton.addEventListener('click', OpenFormWork)
BackButton.addEventListener('click', Back)
ButtonCreateWork.addEventListener('click', CreateWork)


/* <li>
                    <div class="BoxWork" >
                        <div class="box-principal">
                            <button class="image-camera"> <i class='bx bxs-camera'></i> </button>
                            <div class="box-inputs">
                                <input class="Client-input" type="text" value="" readonly>
                                <input class="Client-input" type="text" value="" readonly>
                            </div>
                        </div>
                        <button class="trash"> <i class='bx bxs-trash-alt'></i> </button>
                    </div>
                    
                </li>
                
                <div class="mask">
                    <div class="form">
                        <div class="formBoxPrincipal">
                            <button class="formImage"><i class='bx bxs-camera'></i></button>
                            <div class="forminputs">
                                <input class="formwork1" placeholder="Data" type="text" value="">
                                <input class="formwork2" placeholder="Nome" type="text" value="">
                                <input class="formwork3" placeholder="Laminas" type="text" value="">
                                <input class="formwork4" placeholder="Tesouras" type="text" value="">
                            </div>
                        </div>
                
                        <textarea class="formObs" name="formObs" id="formObs" cols="30" rows="10" value="" ></textarea>
                
                        <div class="formButtons">
                            <button class="formBack"><i class='bx bx-arrow-back'></i></button>
                            <button class="formCheck" ><i class='bx bx-check'></i></button>
                        </div>
                    </div>
                </div> */