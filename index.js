class Pokemon {
    constructor(name, hitPoints, attackDamage, type = 'normal', move = 'tackle') {
        this.name = name;
        this.type = type;
        this.hitPoints = hitPoints;
        this.attackDamage = attackDamage;
        this.move = move;
    }
}

module.exports = Pokemon;
