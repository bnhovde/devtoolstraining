import q from './scripts/utilities/q/';
import { getMonsterById, getRandomMonster } from './scripts/monsters';


/**
 * @function MonsterApp
 * @version 0.0.1
 * @desc Get monster data and image from API
 */
const MonsterApp = () => {

    // DOM selectors
    const DOM = {
        triggerButton: q('#trigger'),
        randomButton: q('#random-trigger'),
        monsterId: q('#monster-id'),
    };

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


    /**
     * @function init
     * @desc Initialises the app
     */
    function init() {

        // Attach click events
        triggerButton.addEventListener('click', buttonClicked);
        randomButton.addEventListener('click', randomButtonClicked);
    };

    // Initialise!
    init();
};

MonsterApp();