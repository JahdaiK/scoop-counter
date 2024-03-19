let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let singleBtn = document.getElementById("single-btn")
let doubleBtn = document.getElementById("double-btn")
let saveBtn = document.getElementById("save-btn")
let count = 0

function single(){
    count += 1
    countEl.textContent = count
}
function double(){
    count += 2
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count =0
}
