// Url base da API Spring Boot para buscar as tarefas do usuário de ID 1.
const url = "http://localhost:8080/tasks/user/1"

// Função responsável por ocultar o ícone de carregamento.
function hideLoader(){

    // Busca o elemento HTML com o ID "loading" e altera seu estilo de exibição para ocultá-lo.
    document.getElementById("loader").style.display = "none";

}

// Função responsável por construir o HTML da tabela e preenchê-lo com as tarefas.
function show(tasks){
    // Cria uma string contendo o cabeçalho da tabela utiliando Template Literals.
    let tab =`
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Descrição</th>
            <th scope="col">Usuário</th>
            <th scope="col">User ID</th>
        </tr>
    </thead>
    `;

    // Itera sobre cada tarefa no array de tarefas recebido como parâmetro.
    for(let task of tasks){
        // Para cada tarefa, adiciona uma linha à tabela com os dados da tarefa.
        tab += `
        <tr>
            <th scope="row">${task.id}</th>
            <td>${task.description}</td>
            <td>${task.user.name}</td>
            <td>${task.user.id}</td>
        </tr>
        `;
    }

    // Injeta a string acumulada diretamente na tabela através do ID 'tasks'.
    document.getElementById("tasks").innerHTML = tab;
    // Chama a função getAPI para buscar os dados da API.
    async function getAPI(url) {

        // Faz uma requisição GET para a URL da API utilizando a função fetch.
        const response = await fetch(url,{method:"GET"});

        // Converte a resposta da requisição para JSON.
        var data = await response.json();

        // Chama a função show para exibir os dados da API na tabela.
        if(response){
            hideLoader();
        }
    }
}
getAPI(url);