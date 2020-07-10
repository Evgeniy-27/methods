export default class Character {
    constructor(properties) {
        this.name = properties.name,
            this.type = properties.type,
            this.health = 100,
            this.level = 1,
            this.attack = properties.attack,
            this.defence = properties.defence

        if (typeof this.name !== 'string' || (this.name.length < 2) || (this.name.length > 10)) {
            throw new Error(`НЕ правильно введено имя: ${this.name}`);
        }

        const arrType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (arrType.indexOf(this.type) == -1) {
            throw new Error(`НЕ правильно введён тип: ${this.type}`);
        }
    }

    levelUp() {
        if (this.health > 0) {
            this.level++;
            this.health = 100;
            this.attack *= 1.2;
            this.defence *= 1.2;
        } else {
            throw new Error('нельзя повысить левел умершего');
        }
    }

    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}

class Bowman extends Character {
    constructor(properties) {
        super(properties);
        this.attack = 25;
        this.defence = 25;
    }
}
const bowman = new Bowman({ name: 'Bow', type: 'Bowman' });

class Swordsman extends Character {
    constructor(properties) {
        super(properties);
        this.attack = 40;
        this.defence = 10;
    }
}
const swordsman = new Swordsman({ name: 'Sword', type: 'Swordsman' })

class Magician extends Character {
    constructor(properties) {
        super(properties);
        this.attack = 10;
        this.defence = 40;
    }
}
const magician = new Magician({ name: 'Magic', type: 'Magician' })

class Undead extends Character {
    constructor(properties) {
        super(properties);
        this.attack = 25;
        this.defence = 25;
    }
}
const undead = new Undead({ name: 'Und', type: 'Undead' })

class Zombie extends Character {
    constructor(properties) {
        super(properties);
        this.attack = 40;
        this.defence = 10;
    }
}
const zombie = new Zombie({ name: 'Zomb', type: 'Zombie' })

class Daemon extends Character {
    constructor(properties) {
        super(properties);
        this.attack = 10;
        this.defence = 40;
    }
}
const daemon = new Daemon({ name: 'Dae', type: 'Daemon' })

 console.log(bowman);
 bowman.levelUp()
// console.log(swordsman);
// console.log(magician);
// console.log(daemon);
// console.log(undead);
// console.log(zombie);