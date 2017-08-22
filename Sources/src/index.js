import q from './scripts/utilities/q/';
import { getMonsterById, getRandomMonster } from './scripts/monsters';

// populateMonsters(3); // 27

// Append click events
const triggerButton = q('#trigger');
triggerButton.addEventListener('click', buttonClicked);

const randomButton = q('#random-trigger');
randomButton.addEventListener('click', randomButtonClicked);

function buttonClicked(e) {
    const monsterId = q('#monster-id');
    const id = parseInt(monsterId.value, 10);
    getMonsterById(id)
}

function randomButtonClicked() {
    getRandomMonster()
}