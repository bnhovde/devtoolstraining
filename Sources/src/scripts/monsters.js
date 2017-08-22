import 'whatwg-fetch';
import { getRandomInt } from './utilities/math/';

const MONSTER_LIMIT = 325;

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

function getMonsterById(id) {
    if (typeof id !== 'number' || isNaN(id)) {
        console.warn(`${id} is a ${typeof id}, not a number`);
        return false;
    }
    if (id > MONSTER_LIMIT || id < 1) {
        console.warn(`${id} is not between 1 and ${MONSTER_LIMIT}, you goof!`);
        return false;
    }

    console.info(`Getting monster with ID: ${id}`);
    return loadMonster(id);
}

function getRandomMonster() {
    const id = getRandomInt(1, MONSTER_LIMIT);

    console.info(`Getting random monster with ID: ${id}`);
    return loadMonster(id);
}

export {
    getMonsterById,
    getRandomMonster
}