import 'whatwg-fetch';

function fetch(id) {
    return fetch(`http://www.dnd5eapi.co/api/monsters/${id}`)
        .then(response => response.json())
        .then(json => json)
        .catch(ex => {
            console.log('parsing failed', ex);
        })
}

async function loadMonster(id) {
    const monster = await fetch(id);
    const image = await fetchImage(monster.name);
    monster.image = image.result.items[0].thumbnail;
    console.info('Data: ', monster);
    return monster;
}

function getFighterById(id) {
    console.info(`Getting fighter with ID: ${id}`);
    return loadMonster(id);
}

function getRandomFighter() {
    const id = getRandomInt(1, MONSTER_LIMIT);

    console.info(`Getting random fighter with ID: ${id}`);
    return loadMonster(id);
}

export {
    getFighterById,
    getRandomFighter
}