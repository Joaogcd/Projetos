let res = document.getElementById("res")

function um(){
    res.innerHTML += Number(1)
}

function dois(){
    res.innerHTML += Number(2)
}

function tres(){
    res.innerHTML += Number(3)
}



function soma(n1, n2){
    return n1 + n2
}

let n11 = (res.value)
let n22 = 5
var total = soma(n11, n22)

function igual(){
    res.innerHTML = (total)
}