var calc = document.getElementById("num");
var tab = document.getElementById("flista");
var valor = JSON.parse(localStorage.getItem('tarefas')) || [];

function carregarTarefas() {
    tab.innerHTML = '';
    valor.forEach((n, index) => {
        var div = document.createElement('div');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `check-${index}`;

        var label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = n;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remover';
        deleteButton.onclick = function() {
            removerTarefa(div, index);
        };

        div.appendChild(checkbox);
        div.appendChild(label);
        div.appendChild(deleteButton);

        tab.appendChild(div);
    });
}

function adicionar() {
    var n = calc.value;
    if (n) {
        valor.push(n);

        var div = document.createElement('div');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `check-${valor.length - 1}`;

        var label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = n;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remover';
        deleteButton.onclick = function() {
            removerTarefa(div, valor.indexOf(n));
        };

        div.appendChild(checkbox);
        div.appendChild(label);
        div.appendChild(deleteButton);

        tab.appendChild(div);

        localStorage.setItem('tarefas', JSON.stringify(valor));

        calc.value = '';
        calc.focus();
    } else {
        alert("Insira um texto");
    }
}

function removerTarefa(div, index) {
    valor.splice(index, 1);
    tab.removeChild(div);

    localStorage.setItem('tarefas', JSON.stringify(valor));
}

function apagarHistorico() {
    valor = [];
    localStorage.removeItem('tarefas');
    tab.innerHTML = '';
}

window.onload = function() {
    carregarTarefas();
};
