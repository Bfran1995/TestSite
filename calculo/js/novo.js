const form = document.querySelector('#formulario'); /* O QuerySelector é uma poderosa ferramenta que permite selecionar elementos no DOM (Document Object Model) de uma página web*/
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const inputSexo = e.target.querySelector('#sexo');
    const inputIdade = e.target.querySelector('#idade');
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const sexo = Number(inputSexo.value);
    const idade = Number(inputIdade.value);
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);


    if (!sexo) {
        setResultado('Sexo invalido, digite 1 para masculino ou 2 para feminino', false);
        return;
    }

    if (!idade) {
        setResultado('Idade invalida', false);
        return;
    }

    if (!peso) {
        setResultado('Peso invalido', false);
        return;
    }                                   /* dentro de funcoes se usar o comando RETURN nada depois disso sera executado*/

    if (!altura) {
        setResultado('Altura invalida', false);
        return;
    }

    const calorie = getCalorie(sexo, idade, peso, altura);


});

/* acima eu preveni o envio do SUBIMIT 

const form = document.querySelector('#formulario') -> selecionei de onde criando uma variavel const

form.addEventListener('submit', function (e) {
    e.preventDefault()  -> submit eh oq eu quero evitar e criei a funcao (e) e junto dela add o e.preventDefault() para evitar o envio do submit vazio
    console.log('Evento Previnido'); -> coloquei apenas para ver no compilador q a funcao acima deu certo.
*/


const url = 'https://www.gsuplementos.com.br/bulking/?gad_source=1&gclid=CjwKCAjwp4m0BhBAEiwAsdc4aDgWL9vw-G-Ch-7htbitj2Aig1hxhJciMSp9R2DSYrRXL595BsGB_xoC-pIQAvD_BwE';
const url2 = 'https://www.gsuplementos.com.br/cutting?gad_source=1&gclid=CjwKCAjwp4m0BhBAEiwAsdc4aFYD1fNeWnz_wwW96IPjQCYdlYgQodAHI_JfLvDUlqcH7Rjnl1WCihoCGPMQAvD_BwE';
const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn-2');

function openInNewTab (url) {
    const aba = window.open(url, '_blank'); // '_blank' eh o atributo q define q sera aberto uma nova aba.
    aba.focus();
}

btn.addEventListener('click',() => {
    openInNewTab(url);


});

function openAnotherTab (url2) {
    const win = window.open(url2, '_blank');
    win.focus();

}

btn2.addEventListener('click',() => {
    openAnotherTab (url2);

});


function getCalorie(sexo, idade, peso, altura) {
    if (sexo === 1) {
        const calorie2 = 66 + (13.7 * peso) + (5.0 * altura) - (6.8 * idade);
        const msg = `Voce deve consumir ${calorie2.toFixed(2)} calorias diariamente.`

        setResultado(msg, true);
    }
    else if (sexo === 2) {

        const calorie2 = 665 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);

        const msg = `Voce deve consumir ${calorie2.toFixed(2)} calorias diariamente.`

        setResultado(msg, true);
    }


}



function criaP() {
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    p.classList.add('paragrafo-resultado');
    p.innerHTML = msg;
    resultado.appendChild(p);
}

