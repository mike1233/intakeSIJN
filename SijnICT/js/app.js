
function counter(value){

    clearDivs()
    const outcome = validator(value)
    let numberCount

    if(outcome){
        numberCount = value
    }
    else{
        numberCount = 0
    }

    for(let i = 1; i <= numberCount; i++){
        //console.log(i);
        let a = i % 3
        let b = i % 5
        // geef de waarde van de lets a, b en de iteratie (i) mee aan de compare functie
        let res = writeBoth(a, b, i)

        // als de iteratie een veelvoud van 3 en 5 is wordt true returned anders is het false

        if (res == false){
            writeSijn(a, i)
            // schrijft "sijn" op als de waarde van i een veelvoud is van 3, als dat niet zo is doet hij niks

            writeIct(b, i)
            // schrijft "ict" op als de waarde van i een veelvoud is van 5, als dat niet zo is doet hij niks
        }

    }
}

function clearDivs(){
    document.getElementById("sijn").innerHTML = ""
    document.getElementById("ict").innerHTML = ""
    document.getElementById("sijnict").innerHTML = ""
}

function validator(a){
    let content = document.getElementById("validator")
    content.innerHTML = ""
    if(a < 3){
        let insert = document.createElement("div")
        let className = document.createAttribute("class")
        className.value = "alert alert-danger"
        let roleName = document.createAttribute("role")
        roleName.value = "alert"
        insert.setAttributeNode(className, roleName)
        insert.innerHTML = "Getal moet groter zijn dan 2"
        content.appendChild(insert)
        return false
    }
    return true
}

function writeSijn(a, i){
    if(a == 0){
        let res

        if(i == 69){
            res = i + " (͡• ͜ʖ ͡•)"
            console.log(res)
        }
        else{
            res = i + " SIJN" 
            console.log(res)
        }

        let content = document.getElementById("sijn")
        let insert = createMyElement(res)
        content.appendChild(insert)  
    }
}

function writeIct(b, i){
    if(b == 0){
        let res = i + " ICT"
        console.log(res)
        let content = document.getElementById("ict")
        let insert = createMyElement(res)
        content.appendChild(insert)
    }
}

function writeBoth(a, b, i){
    if(a == b && a == 0 && b == 0){
        let res = i + " SIJNICT"
        console.log(res)
        let content = document.getElementById("sijnict")
        let insert = createMyElement(res)
        content.appendChild(insert)
        return true
    }
    return false
}

function createMyElement(res){
    let name = document.createAttribute("class")
    name.value = "list-group-item"
    let insert = document.createElement("li")
    insert.setAttributeNode(name)
    insert.innerHTML = res
    return insert
}