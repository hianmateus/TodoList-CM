
/* Monstrando trabalhos*/

const WoData = document.querySelector('.formwork1')
const WoName = document.querySelector('.formwork2')
const WoLaminas = document.querySelector('.formwork3')
const WoTesouras = document.querySelector('.formwork4')
const formObs = document.getElementById('formObs')



function ShowWork(params) {
    const li = document.querySelectorAll('li')
    const mask1 = document.getElementById('mask')

    li.forEach( (li, index) => {

        li.addEventListener('click', e => {
            li.querySelector(".maskNone").classList.remove("maskNone")
            li.classList.add('maskFlex')
        })
    })
    

}
function BackW(params) {
    let mask1 = document.getElementById('mask')
    
    mask1.classList.remove('maskFlex')
    mask1.classList.add('maskNone')
}
function CloseWork(params) {
    let mask1 = document.getElementById('mask')
    
    mask1.classList.remove('maskFlex')
    mask1.classList.add('maskNone')
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
        key: Math.random(),
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
function showtasks(params) {
    let newli = ``

    mylisttask.forEach((item, position) => {

        newli = newli + `<li>
        <div class="BoxWork" onclick="ShowWork()">
            <div class="box-principal">
                <button class="image-camera"> <i class='bx bxs-camera'></i> </button>
                <div class="box-inputs">
                    <input class="Client-input" type="text" value="${item.Data}" readonly>
                    <input class="Client-input" type="text" value="${item.Name}" readonly>
                </div>
            </div>
            <button class="trash" onclick="deletetask(${position})"> <i class='bx bxs-trash-alt'></i> </button>
        </div>

        <div id="mask" class="maskNone">
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
                            <button class="formCheck" onclick="CloseWork()" ><i class='bx bx-check'></i></button>
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