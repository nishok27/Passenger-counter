
var count=0

function increment() {
    count+=1
    document.getElementById("count-el").textContent=count    
}

function decrement() {
    count += -1
    document.getElementById("count-el").textContent=count    
}
function save() {
    var saveEl=document.getElementById("save-el")
    saveEl.textContent += count + " - "
    document.getElementById("count-el").textContent = 0

}
