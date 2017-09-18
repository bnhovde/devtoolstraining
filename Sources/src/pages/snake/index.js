import q from '../../scripts/utilities/q/';
import { getMonsterById, getRandomMonster } from '../../scripts/api/monsters';


/**
 * @function MonsterApp
 * @version 0.0.1
 * @desc Get monster data and image from API
 */
const MonsterApp = () => {

    // DOM selectors
    const DOM = {
        monsterInput: q('#monster-id'),
        monsterTrigger: q('#monster-trigger'),
        monsterTriggerRandom: q('#monster-trigger-random'),
        imageEl: q('.monster__image'),
        nameEl: q('.monster__name'),
        typeEl: q('.monster__type'),
        actionsEl: q('.monster__actions'),
    };

    /**
     * @function bindEvents
     * @desc Adds eventlisteners
     * @param {node} trigger
     */
    function bindEvents() {
        DOM.monsterTrigger.addEventListener('click', buttonClicked);
        DOM.monsterTriggerRandom.addEventListener('click', randomButtonClicked);
    }

    /**
     * @function buttonClicked
     * @desc Get monster by user entered ID
     * @param {e} event
     */
    async function buttonClicked(e) {
        const id = parseInt(DOM.monsterInput.value, 10);
        const data = await getMonsterById(id);
        populateDom(data);
    }

    /**
     * @function randomButtonClicked
     * @desc Get random monster
     */
    async function randomButtonClicked() {
        const data = await getRandomMonster();
        populateDom(data);
    }

    /**
     * @function populateDom
     * @desc Populate the DOM with results
     * @param {data} data from API
     */
    function populateDom(data) {
        DOM.monsterInput.value = data.index;
        DOM.imageEl.src = data.image;
        DOM.nameEl.innerText = data.name;
        DOM.typeEl.innerText = data.type;
        DOM.actionsEl.innerHTML = data.actions
            .map(a => `<li><strong>${a.name}</strong> - ${a.desc}</li>`)
            .join('');
    }


    /**
     * @function init
     * @desc Initialises the app
     */
    function init() {

        // Attach click events
        bindEvents();

    };

    // Initialise!
    init();
};

MonsterApp();