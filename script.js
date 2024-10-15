//LISTA DE TAREFAS ONDE O USUARIO PODE ADICIONAR, REMOVER E DAR UM CHEK NA TAREFA
var calc = document.getElementById("num");
var tab = document.getElementById("flista");
var valor = [];

function adicionar() {
    var n = calc.value;
    if (n) {
        valor.push(n); // Adiciona o texto ao array

         // Cria um novo elemento <div> para o checkbox e o texto
        var div = document.createElement('div');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `check-${valor.length}`; // ID único para o checkbox

        var label = document.createElement('label');
        label.htmlFor = checkbox.id; // Associa o label ao checkbox
        label.textContent = n; // Define o texto do label como a string

        div.appendChild(checkbox); // Adiciona o checkbox ao div
        div.appendChild(label); // Adiciona o label ao div
        tab.appendChild(div); // Adiciona o div ao container

        calc.value = ''; // Limpa o campo de entrada
        calc.focus(); // Coloca o foco novamente no campo de entrada
    } else {
             alert("Insira um texto");
    }
}

function apagarHistorico() {
    valor = []; // Limpa o array
    tab.innerHTML = ''; // Limpa o conteúdo do <div> com os checkboxes
}