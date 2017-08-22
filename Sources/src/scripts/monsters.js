import 'whatwg-fetch';

function loadMonster(id) {
    fetch(`http://www.dnd5eapi.co/api/monsters/${id}`)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log('parsed json', json);
        }).catch(function(ex) {
            console.log('parsing failed', ex);
        })
}

function populateMonsters(id) {
    if (typeof id !== 'number' || isNaN(id)) {
        console.warn(`${id} is a ${typeof id}, not a number`);
        return false;
    }
    if (id > 325 || id < 1) {
        console.warn(`${id} is not between 1 and 325, you goof!`);
        return false;
    }

    console.log(`Getting monster with ID: ${id}`);
    return loadMonster(id);
}

export {
    populateMonsters
}