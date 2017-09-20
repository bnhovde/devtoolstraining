import q from '../../scripts/utilities/q/';
import findParent from '../../scripts/utilities/findParent/';
import Fighter from '../../scripts/fighter';
import { buildFighterMarkup } from '../../scripts/utilities/dom/';
import { initPeople, getRandomPerson } from '../../scripts/api/people';
import { getRandomMonster } from '../../scripts/api/monsters';


/**
 * @function Dashboard
 * @version 0.0.1
 * @desc Get monster data and image from API
 */
const Dashboard = () => {

    let fighters = [];

    // DOM selectors
    const DOM = {
        fighterButton: q('#create-fighter-button'),
        startBattleButton: q('#commence-battle-button'),
        monsterButton: q('#add-monster-button'),
        outputEl: q('#fighters'),
    };

    /**
     * @function bindEvents
     * @desc Adds eventlisteners
     */
    function bindEvents() {
        DOM.fighterButton.addEventListener('click', createFighter);
        DOM.startBattleButton.addEventListener('click', startBattle);
        DOM.outputEl.addEventListener('click', addMonster);
    }

    /**
     * @function updateDOM
     * @desc Print all current fighters to the DOM
     */
    function updateDOM(e) {
        const markup = buildFighterMarkup(fighters);

        DOM.outputEl.innerHTML = '';
        DOM.outputEl.appendChild(markup);
    }

    /**
     * @function createFighter
     * @desc Add a new fighter to the arena
     * @param {event} event - mouseevent
     */
    function createFighter(e) {
        const person = getRandomPerson();
        const fighter = new Fighter(person);
        fighters.push(fighter);
        updateDOM();
    }

    /**
     * @function addMonster
     * @desc Add a new monster to a fighter
     * @param {event} event - mouseevent
     */
    async function addMonster(e) {
        const fighterWrapper = findParent('li', e.target);
        const targetFighter = fighters.find(f => f.id === fighterWrapper.id);
        const randomMonster = await getRandomMonster();
        targetFighter.monsters.push(randomMonster);
        updateDOM();
    }

    /**
     * @function startBattle
     * @desc Add a new monster to a fighter
     * @param {event} event - mouseevent
     */
    function startBattle() {

        const winner = fighters.reduce((winner, challenger) => {
            const challengerScore = challenger.monsters.reduce((sum, monster) => {
                return sum + monster.hit_points
            }, 0);
            const challengerObj = {
                name: challenger.name,
                score: challengerScore,
            }
            return challengerScore > winner.score ? challengerObj : winner;
        }, { name: 'test', score: 0 });

        alert(`And the winner is: ${winner.name}`)
        DOM.outputEl.innerHTML = '';
        fighters = [];
    }


    /**
     * @function init
     * @desc Initialises the app
     */
    function init() {

        // Load people
        initPeople();

        // Attach click events
        bindEvents();

    };

    // Initialise!
    init();
};

Dashboard();