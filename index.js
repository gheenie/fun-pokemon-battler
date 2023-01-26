class Pokemon {
  constructor(name, hitPoints, attackDamage, type = "normal", move = "tackle") {
    this.name = name;
    this.type = type;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = move;
  }

  isEffectiveAgainst(pokemon) {
    if (this.type === "normal") {
      return true;
    }
    return false;
  }

  isWeakto(pokemon) {
    if (this.type === "normal") {
      return false;
    }
    return true;
  }

  takeDamage(num) {
    this.hitPoints -= num;
  }

  useMove() {
    console.log(
      `Pokemon${this.name} used ${this.attackDamage} Pokemon${this.name}'s moves`
    );
    return this.attackDamage;
  }

  hasFainted() {
    if (this.hitPoints <= 0) {
      return true;
    }
    return false;
  }
}

class FirePokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, move = "tackle") {
    super(name, hitPoints, attackDamage, "fire", move);
  }
  isEffectiveAgainst(pokemon) {
    if (pokemon.type === "grass") {
      return true;
    }
    return false;
  }

  isWeakto(pokemon) {
    if (pokemon.type === "water") {
      return true;
    }
    return false;
  }
}

class WaterPokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, move = "tackle") {
    super(name, hitPoints, attackDamage, "water", move);
  }
  isEffectiveAgainst(pokemon) {
    if (pokemon.type === "fire") {
      return true;
    }
    return false;
  }

  isWeakto(pokemon) {
    if (pokemon.type === "grass") {
      return true;
    }
    return false;
  }
}

class GrassPokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, move = "tackle") {
    super(name, hitPoints, attackDamage, "grass", move);
  }
  isEffectiveAgainst(pokemon) {
    if (pokemon.type === "water") {
      return true;
    }
    return false;
  }

  isWeakto(pokemon) {
    if (pokemon.type === "fire") {
      return true;
    }
    return false;
  }
}

class Charmander extends FirePokemon {
  constructor(name, hitPoints, attackDamage) {
    super(name, hitPoints, attackDamage, "ember");
  }
}

class Squirtle extends WaterPokemon {
  constructor(name, hitPoints, attackDamage) {
    super(name, hitPoints, attackDamage, "water gun");
  }
}

class Bulbasaur extends GrassPokemon {
  constructor(name, hitPoints, attackDamage) {
    super(name, hitPoints, attackDamage, "vine whip");
  }
}

class Rattata extends Pokemon {}

module.exports = [
  Pokemon,
  FirePokemon,
  WaterPokemon,
  GrassPokemon,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
];
