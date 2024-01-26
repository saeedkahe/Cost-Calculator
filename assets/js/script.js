const activeLi = document.querySelectorAll('.explain>ul li')
const LiTypeOfPackage = document.querySelector('.LiTypeOfPackage')
const UlTypeOfPackage = document.querySelector('.type-of-package>ul')
const UlTypeOfService = document.querySelector('.type-of-service>ul')
const LiTypeOfService = document.querySelector('.LiTypeOfService')
const distanceOfserive = document.querySelector('.distance>input')
const CustomerName = document.querySelector('.CustomerName>input')
const mainofSummary = document.querySelector('.mainOfSummary>div>ul')
const CustomerAddress = document.querySelector('.CustomerAddress>input')
const heightValue = document.querySelector('.Height>input')
const widthValue = document.querySelector('.Width>input')
const depthValue = document.querySelector('.Depth>input')
let valueOfService = 0
let valueOfPackage = 0
let distance = 10
let Customer = ''
let Address = ''
let Height = 5
let Width = 40
let Depth = 20
let total = 0

// <!-- ......................        write by saeed kahe    .............................. -->



// <!-- ................................. kaheh.saeed97@gmail.com..................................... -->
let distanceScroll = ()=>{
    distance = Number(distanceOfserive.value)
    document.querySelector('.distance>span:nth-of-type(2)').innerHTML = `${distance} Miles`
    mainofSummary.querySelector('li:nth-of-type(9)>span:nth-of-type(2)').innerHTML = `${distance} Miles`
}
distanceOfserive.addEventListener('change', () => {
    distanceScroll()
})
distanceOfserive.addEventListener('mousemove', () => {
    distanceScroll()
})

const dropDown = document.querySelectorAll('.type-of-package>ul>li')

dropDown.forEach(function (item, index) {
    dropDown[0].addEventListener('click', function () {
        item.classList.toggle('dropDownLi')
    })
    dropDown[index].onclick = function () {
        const li = item.innerHTML

    }
})
LiTypeOfPackage.addEventListener('click', () => {
    UlTypeOfPackage.classList.toggle('activeLi')
})
UlTypeOfPackage.querySelectorAll('li').forEach((item) => {
    item.addEventListener('click', (e) => {
        LiTypeOfPackage.innerHTML = e.target.innerHTML
        valueOfPackage = e.target.value
        UlTypeOfPackage.classList.remove('activeLi')
        mainofSummary.querySelector('li:nth-of-type(7)>span:nth-of-type(2)').innerHTML = `$ ${valueOfPackage} `
    })
})
LiTypeOfService.addEventListener('click', () => {
    UlTypeOfService.classList.toggle('activeLi')
})
UlTypeOfService.querySelectorAll('li').forEach((item) => {
    item.addEventListener('click', (e) => {
        LiTypeOfService.innerHTML = e.target.innerHTML
        valueOfService = e.target.value
        UlTypeOfService.classList.remove('activeLi')
        mainofSummary.querySelector('li:nth-of-type(8)>span:nth-of-type(2)').innerHTML = `$ ${valueOfService} `
    })
})
CustomerName.addEventListener('input', () => {
    if (CustomerName.value.length < 26) {
        mainofSummary.querySelector('li:nth-of-type(2)>span:nth-of-type(2)').innerHTML = CustomerName.value
    } else {
        CustomerName.value = mainofSummary.querySelector('li:nth-of-type(2)>span:nth-of-type(2)').innerHTML
        CustomerName.style.border = '1px solid #bbbbbbbd'
    }
})
CustomerAddress.addEventListener('input', () => {
    if (CustomerAddress.value.length < 100) {
        mainofSummary.querySelector('li:nth-of-type(3)>textarea').innerHTML = CustomerAddress.value
    } else {
        CustomerAddress.value = mainofSummary.querySelector('li:nth-of-type(3)>textarea').innerHTML
        CustomerAddress.style.border = '1px solid #bbbbbbbd'
    }
})
heightValue.addEventListener('input', () => {
    if (heightValue.value == 0) {
        heightValue.setAttribute('placeholder', 'cant Use Zero For First Number')
        heightValue.value = ''
    }
    if (heightValue.value <= 250) {
        heightValue.style.border = '1px solid #bbbbbbbd'
        mainofSummary.querySelector('li:nth-of-type(4)>span:nth-of-type(2)').innerHTML = `${heightValue.value} `

    } else {
        border = '1px solid red'
        heightValue.setAttribute('placeholder', 'Max 250 Centimeters')
        heightValue.style.border = '1px solid red'
        heightValue.value = ''
    }
})
widthValue.addEventListener('input', () => {
    if (widthValue.value == 0) {
        widthValue.setAttribute('placeholder', 'cant Use Zero For First Number')
        widthValue.value = ''
    }
    if (widthValue.value <= 100) {
        widthValue.style.border = '1px solid #bbbbbbbd'
        mainofSummary.querySelector('li:nth-of-type(5)>span:nth-of-type(2)').innerHTML = `${widthValue.value} `

    } else {
        border = '1px solid red'
        widthValue.setAttribute('placeholder', 'Max 100 Centimeters')
        widthValue.style.border = '1px solid red'
        widthValue.value = ''
    }
})
depthValue.addEventListener('input', () => {
    if (depthValue.value == 0) {
        depthValue.setAttribute('placeholder', 'cant Use Zero For First Number')
        depthValue.value = ''
    }
    if (depthValue.value <= 100) {
        depthValue.style.border = '1px solid #bbbbbbbd'
        Depth = Math.floor((depthValue.value) * 1.32)
        mainofSummary.querySelector('li:nth-of-type(6)>span:nth-of-type(2)').innerHTML = `${depthValue.value} `

    } else {
        border = '1px solid red'
        depthValue.setAttribute('placeholder', 'Max 100 Centimeters')
        depthValue.style.border = '1px solid red'
        depthValue.value = ''
    }
})
function _total() {
    total = (valueOfPackage + valueOfService + (Number(widthValue.value) * 1.32) + (Number(heightValue.value) * 1.32) + (Number(depthValue.value) * 1.32) + Number(distance * 5))
    mainofSummary.querySelector('li:nth-of-type(10)>span:nth-of-type(2)').innerHTML = `$ ${Math.floor(total)} `
}

document.querySelector('.mainOfDelivery').addEventListener('click', () => {
    _total()
})
document.querySelector('.mainOfDelivery').addEventListener('change', () => {
    _total()
})
// <!-- ......................        write by saeed kahe    .............................. -->



// <!-- ................................. kaheh.saeed97@gmail.com..................................... -->

