function createStates() {
    const states = [
        'Acre',
        'Alagoas',
        'Amapá',
        'Amazonas',
        'Bahia',
        'Ceará',
        'Distrito Federal',
        'Espírito Santo',
        'Goías',
        'Maranhão',
        'Mato Grosso',
        'Mato Grosso do Sul',
        'Minas Gerais',
        'Pará',
        'Paraíba',
        'Paraná',
        'Pernambuco',
        'Piauí',
        'Rio de Janeiro',
        'Rio Grande do Norte',
        'Rio Grande do Sul',
        'Rondônia',
        'Roraíma',
        'Santa Catarina',
        'São Paulo',
        'Sergipe',
        'Tocantins'
    ];
    const selectStates = document.querySelector('#state')
    for (element of states) {
        const newState = document.createElement('option');
        newState.value = element;
        newState.innerText = element;
        selectStates.appendChild(newState)
    }
}

function stopDefAction(evt) {
    evt.preventDefault();
    const date = document.getElementById('start-date').DatePickerX.init();
    date.getValue()
}

window.onload = function () {
    createStates();
    const submit = getElementById('submit');
    submit.addEventListener('click', stopDefAction)
}