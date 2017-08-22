import 'whatwg-fetch';
import { getRandomInt } from './utilities/math/';

const MONSTER_LIMIT = 325;

function fetchImage(query) {
    return fetch(`https://api.qwant.com/api/search/images?count=1&q=${query}`)
        .then(response => response.json())
        .then(json => json.data)
        .catch(ex => {
            console.log('parsing failed', ex);
        })
}

function fetchMonster(id) {
    return fetch(`http://www.dnd5eapi.co/api/monsters/${id}`)
        .then(response => response.json())
        .then(json => json)
        .catch(ex => {
            console.log('parsing failed', ex);
        })
}

async function loadMonster(id) {
    const monster = await fetchMonster(id);
    const image = await fetchImage(monster.name);
    monster.image = image.result.items[0].thumbnail;
    console.info('Data: ', monster);
    return monster;
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