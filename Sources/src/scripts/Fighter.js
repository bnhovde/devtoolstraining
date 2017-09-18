/**
 * @function Fighter
 * @version 0.0.1
 * @desc fighter module
 */
class Fighter {

    /**
     * @function constructor
     * @desc Fighter constructor
     * @param {int} id
     */
    constructor(id) {
        this.id = id;
        this.name = 'test';
        this.monsters = [];
    }

    /**
     * @function addMonster
     * @desc Adds a new monster to fighter
     */
    addMonster(id) {
        this.monsters.push(id);
    };
};

// module exports
export default Fighter;