import q from './scripts/utilities/q/';
import { getMonsterById, getRandomMonster } from './scripts/monsters';

// DOM selectors
const triggerButton = q('#trigger');
const randomButton = q('#random-trigger');
const monsterId = q('#monster-id');

// Click events
triggerButton.addEventListener('click', buttonClicked);
randomButton.addEventListener('click', randomButtonClicked);

// Functions
async function buttonClicked(e) {
    const id = parseInt(monsterId.value, 10);
    const data = await getMonsterById(id);
    populateDom(data);
}

async function randomButtonClicked() {
    const data = await getRandomMonster();
    populateDom(data);
}

function populateDom(data) {
    const imageEl = q('.monster__image');
    const nameEl = q('.monster__name');
    const typeEl = q('.monster__type');
    const actionsEl = q('.monster__actions');

    imageEl.src = data.image;
    nameEl.innerText = data.name;
    typeEl.innerText = data.type;
    actionsEl.innerHTML = data.actions
        .map(a => `<li><strong>${a.name}</strong> - ${a.desc}</li>`)
        .join('');
}