const inputBox1 = document.getElementById("input-box1");
const inputBox2 = document.getElementById("input-box2");
const inputFile = document.getElementById("input-file");
const listContainer1 = document.getElementById("list-container1");
const listContainer2 = document.getElementById("list-container2");

function addTask() {
    if (inputBox1.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox1.value;
        listContainer1.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox1.value = "";
    saveData();
}

function addEquipment() {
    if (inputBox2.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox2.value;
        listContainer2.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox2.value = "";
    saveData();
}

listContainer1.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

listContainer2.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer1.innerHTML);
    localStorage.setItem("data", listContainer2.innerHTML);
}

function showTask() {
    listContainer1.innerHTML = localStorage.getItem("data");
}
showTask();

function showTask() {
    listContainer2.innerHTML = localStorage.getItem("data");
}
showTask();

function processData() {
    if (inputFile.value === '') {
        alert("You must upload a document!");
    }
    inputFile.value = "";
    criarTarefas();
}

// Data atual
const dataAtual = new Date();

// Formatar a data como dia/mês/ano
const dia = String(dataAtual.getDate()).padStart(2, '0');
const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
const ano = dataAtual.getFullYear();

// Combinar em um formato legível
const dataFormatada = `${dia}/${mes}/${ano}`;

// Inserir a data no elemento HTML
document.getElementById("data").textContent = dataFormatada;