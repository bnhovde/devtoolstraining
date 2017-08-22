import q from './scripts/utilities/q/';
import { populateMonsters } from './scripts/monsters';

// populateMonsters(3); // 27

// Append click event to button
const triggerButton = q('#trigger');
triggerButton.addEventListener('click', buttonClicked);

function buttonClicked(e) {
    const monsterId = q('#monster-id');
    const id = parseInt(monsterId.value, 10);
    populateMonsters(id)
}