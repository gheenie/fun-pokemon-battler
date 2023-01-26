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

module.exports = [
    Pokemon,
    FirePokemon,
    WaterPokemon,
    GrassPokemon
];
