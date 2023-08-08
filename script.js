let tarefasData = [];

async function getTarefas() {
    try {
        const response = await fetch('http://localhost:3000/tarefas');
        tarefasData = await response.json();

        const selectTarefas = document.getElementById('selectTarefas');
        tarefasData.forEach(tarefa => {
            const option = document.createElement('option');
            option.value = tarefa.id;
            option.textContent = tarefa.titulo;
            selectTarefas.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
    }
}

// Chamando a função para buscar e apresentar os títulos das tarefas no select
getTarefas();

function concluir() {
    const tarefaSelecionadaId = selectTarefas.value;

    if (!tarefaSelecionadaId) {
        window.alert('Por favor, selecione uma tarefa para concluir.');
        return; // Retorna para evitar a execução da lógica de exclusão e atualização
    }

    fetch(`http://localhost:3000/tarefas/${tarefaSelecionadaId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            // Atualiza os dados de tarefas e o select
            tarefasData = tarefasData.filter(tarefa => tarefa.id !== parseInt(tarefaSelecionadaId));
            atualizarSelectTarefas();
        } else {
            console.error('Erro ao excluir tarefa:', response.statusText);
        }
    })
    .catch(error => console.error('Erro ao excluir tarefa:', error));
}

function atualizarSelectTarefas() {
    const selectTarefas = document.getElementById('selectTarefas');
    selectTarefas.innerHTML = '';

    tarefasData.forEach(tarefa => {
        const option = document.createElement('option');
        option.value = tarefa.id;
        option.textContent = tarefa.titulo;
        selectTarefas.appendChild(option);
    });
}

function adicionar() {
    const novoTitulo = document.getElementById('textTitulo').value;
    const novaPrioridade = document.getElementById('selectPrioridade').value;

    if (!novoTitulo) {
        window.alert('Por favor, insira um título para adicionar uma tarefa.');
        return;
    }

    fetch('http://localhost:3000/tarefas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titulo: novoTitulo,
            prioridade: novaPrioridade
        })
    })
    .then(response => {
        if (response.ok) {
            // Update the tarefasData array
            return response.json();
        } else {
            console.error('Erro ao adicionar tarefa:', response.statusText);
        }
    })
    .then(newTask => {
        tarefasData.push(newTask); // Add the new task to the array
        atualizarSelectTarefas();   // Update the select options
        // Clear the input fields
        document.getElementById('textTitulo').value = '';
        document.getElementById('selectPrioridade').value = 'Baixa';
    })
    .catch(error => console.error('Erro ao adicionar tarefa:', error));
}