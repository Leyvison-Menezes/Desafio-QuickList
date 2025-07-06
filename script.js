const form = document.querySelector("form")
const ul = document.querySelector("ul")
const li = document.querySelector("li")
const mensagem = document.getElementById('remove-msg');

var checkBoxes = document.querySelectorAll(".custom-checkBox")
var removeItem = document.querySelectorAll(".remove")

console.log(checkBoxes)
console.log(removeItem)

form.onsubmit = (event) =>{
    event.preventDefault()

    const itemId = document.getElementById("itemName").value.trim();
    if (itemId === '') return;
    addItemToList(itemId)

    ativarCheckboxes()
    removeItemToList()    

    document.getElementById("itemName").value = ""
}

function addItemToList(itemName){
    const item = document.createElement("li")

    const itemDiv = document.createElement("div")
    const itemP = document.createElement("p")
    const itemImg = document.createElement("img")
    const itemImgBin = document.createElement("img")

    itemDiv.className = "custom-checkBox"
    itemImgBin.className = "remove"
    
    itemP.textContent = itemName
    itemImg.src = "assets/selected.svg"
    itemImgBin.src = "assets/bin.svg"

    itemDiv.append(itemImg)

    item.append(itemDiv)
    item.append(itemP)
    item.append(itemImgBin)

    ul.append(item)
}
function ativarCheckboxes() {
  checkBoxes = document.querySelectorAll('.custom-checkBox');
  removeItemToList()

  checkBoxes.forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
      this.classList.toggle('checked');
    });
  });
}

function removeItemToList(){
    removeItem = document.querySelectorAll(".remove")
    removeItem.forEach(function(bin){
        bin.addEventListener('click', function() {

          mensagem.classList.add('show')
          setTimeout(() => {
            mensagem.classList.remove('show');
            this.parentElement.remove()
          }, 500)
            
        })
    })
}


