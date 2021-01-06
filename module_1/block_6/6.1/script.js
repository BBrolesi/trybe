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

function isValidDate(date){
    const splited = date.split('/');
    const day = splited[0];
    const month = splited[1];
    const year = splited[2];

    if(day < 1 || day > 31){
        return false;
    }
    if(month < 1 || month > 12){
        return false;
    }
    if(year < 0){
        return false;
    }
    
}
window.onload = function () {
    createStates();
}