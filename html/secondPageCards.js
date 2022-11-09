const containerCards = document.querySelector('.cards-container')

const curso = localStorage.getItem('cursoID')

const fetchAlunos = async (siglaCurso) => {
    const rawData = await fetch(`http://localhost:5050/cursoAlunos/${siglaCurso}`);
    const response = await rawData.json();
    return response;
}

const { alunos } = await fetchAlunos(curso)
// console.log(alunos);

// console.log(alunos)
// funcao -> pegar o container dos cards / criar uma div para conter as informacoes / dentro da div -> criar uma tag de img para a foto do estudante / criar uma tag de span para o nome do estudante / adicionar os dois elementos na div e adiciona a div no container

// const createCards = (alunos = [])=>{
    // const container = document.querySelector('.card-container')
//     alunos.forEach(alunos=>{
//         const div = document.createElement('div')
//         div.classList.add('cards')

//         const fotoAluno = document.createElement('img')
//         fotoAluno.src = alunos.foto
      
//             fotoAluno.classList.add('foto-aluno')

//         const nomeAluno = document.createElement('span')
//         nomeAluno.textContent = alunos.nome
//         nomeAluno.classList.add('nome-aluno')

//         div.appendChild(fotoAluno)
//         div.appendChild(nomeAluno)

//         container.appendChild(div)


//     })
// }

const createCards = (aluno) => {
    const container = document.querySelector('.card-container')

    const div = document.createElement('div')
    div.classList.add('card')

    if (aluno.status.toLowerCase() === 'cursando') {
        div.classList.add('cursando')
    } else if (aluno.status.toLowerCase() === 'finalizado') {
        div.classList.add('finalizado')
    }

    const fotoAluno = document.createElement('img')
    fotoAluno.src = aluno.foto  
    fotoAluno.classList.add('foto-aluno')

    const nomeAluno = document.createElement('span')
    nomeAluno.textContent = aluno.nome
    nomeAluno.classList.add('nome-aluno')

    div.appendChild(fotoAluno)
    div.appendChild(nomeAluno)

    container.appendChild(div)
}

alunos.forEach(createCards)

const filtroStatus = document.querySelector('.select-status');
let valorFiltroStatus = document.querySelector('.select-status').value;

filtroStatus.addEventListener('change', () => {
    valorFiltroStatus = document.querySelector('.select-status').value;
    console.log(valorFiltroStatus);
})