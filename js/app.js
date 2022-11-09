// js to index.html
const containerCards = document.querySelector('.curse-container')

// const fetchCursos = async () => {
//     const rawData = await fetch('http://localhost:5050/cursos/');
//     const response = await rawData.json();
//     return response;
// }

const fetchCursos = async () => {
    const url = `http://localhost:5050/cursos/`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

const cursos = await fetchCursos();

const createCards = (curso) => {

        const a = document.createElement('a');
        a.classList.add('curse');
        a.id = curso.sigla.toLowerCase();

        const img = document.createElement('img');
        img.src = curso.icone;

        const span = document.createElement('span');
        span.classList.add('curse-text');
        span.textContent = curso.sigla

        a.append(img) // a -> img
        a.append(span) // a --> span
        
        containerCards.append(a)

        a.addEventListener('click', (event) => {
            const id = a.id;

            localStorage.setItem('cursoID', id); // valor salvo no browser

            location.href = 'html/secondpage.html'
        })

}

cursos.forEach(createCards)


// pegar o valor do localStorage
// const valor = localStorage.getItem('cursoID')