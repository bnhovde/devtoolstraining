import sanityClient from '@sanity/client';
import q from '../../scripts/utilities/q/';
import Fighter from '../../scripts/fighter';

const client = sanityClient({
  projectId: 'l3oee2le',
  dataset: 'production',
});


/**
 * @function Dashboard
 * @version 0.0.1
 * @desc Get monster data and image from API
 */
const Dashboard = () => {

    const fighters = [];

    // DOM selectors
    const DOM = {
        fighterButton: q('#create-fighter-button'),
        monsterButton: q('#add-monster-button'),
        outputEl: q('#fighters'),
    };

    /**
     * @function bindEvents
     * @desc Adds eventlisteners
     */
    function bindEvents() {
        DOM.fighterButton.addEventListener('click', createFighter);
    }

    /**
     * @function updateDOM
     * @desc Print all current fighters to the DOM
     */
    function updateDOM(e) {
        const ul = document.createElement('ul');

        for (let fighter of fighters) {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(fighter.name));
            ul.appendChild(li);
        }

        DOM.outputEl.innerHTML = '';
        DOM.outputEl.appendChild(ul);
    }

    /**
     * @function createFighter
     * @desc Get monster by user entered ID
     * @param {event} event - mouseevent
     */
    async function createFighter(e) {
        const query = '*[_type == "person"]'
        const data = await client.fetch(query);

        const fighter = new Fighter(data);
        fighters.push(fighter);
        updateDOM();
    }

    /**
     * @function addMonster
     * @desc Get monster by user entered ID
     * @param {event} event - mouseevent
     */
    async function addMonster(e) {
        const fighter = new fighter;
        console.log('fighter', fighter);
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

Dashboard();