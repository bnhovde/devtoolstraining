/**
 * @function Fighter
 * @version 0.0.1
 * @desc fighter module
 */
class Fighter {

    /**
     * @function constructor
     * @desc Fighter constructor
     * @param {object} data - Person data
     */
    constructor(data) {
        this.id = data._id;
        this.name = data.name;
        this.image = data.image;
        this.monsters = [];
    }

    /**
     * @function addMonster
     * @desc Adds a new monster to fighter
     */
    addMonster(monster) {
        this.monsters.push(monster);
    };
};

// module exports
export default Fighter;