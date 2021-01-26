// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// const atTheOldToad = {
//   potions: [
//     { name: "Зелье скорости", price: 460 },
//     { name: "Дыхание дракона", price: 780 },
//     { name: "Каменная кожа", price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Зелье ${potionName} уже есть в инвентаре!`;
//     }

//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Зелья ${potionName} нет в инвентаре!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Зелья ${oldName} нет в инвентаре!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
// };

const atTheOldToad = {
  potions: [
    { name: "Зелье скорости", price: 460 },
    { name: "Дыхание дракона", price: 780 },
    { name: "Каменная кожа", price: 520 },
  ],

  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    const { potions } = this;

    for (const potion of potions) {
      const { name } = potion;

      if (name === potionName.name) {
        return `Зелье ${potionName} уже есть в инвентаре!`;
      }
    }
    potions.push(potionName);

              // ИЛИ
    
    // if (this.potions.includes(potionName)) {
    //   return `Зелье ${potionName} уже есть в инвентаре!`;
    // }
    // this.potions.push(potionName);
  },
  removePotion(potionName) {
    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1) {
      const { name } = potions[i];
      if (name === potionName) {
        // console.log(i);
        return potions.splice(i, 1);
        // i--; // если нужно чтоб были одинаковые зелья, i-- не дает удалить второе одинаковое
        //  return console.log(`Зелья ${potionName} удалено`);
      }
    }
    return `Зелья ${potionName} нет в инвентаре!`;
  },

  updatePotionName(oldName, newName) {
    const { potions } = this;

    for (const potion of potions) {
      if (potion.name === oldName) {
        return (potion.name = newName);
      }
    }
    return `Зелья ${oldName} нет в инвентаре!`;
  },
};

console.table(atTheOldToad.getPotions());

// atTheOldToad.addPotion({ name: "Невидимка", price: 620 });
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Зелье силы", price: 270 });
// console.table(atTheOldToad.getPotions());
// atTheOldToad.removePotion("Дыхание дракона"); //[ { name: 'Зелье скорости', price: 460 }, { name: 'Каменная кожа', price: 520 } ].
// atTheOldToad.removePotion("Зелье скорости"); //[ { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
// console.table(atTheOldToad.getPotions());

// atTheOldToad.updatePotionName("Дыхание дракона", "Полиморф");
//[ { name: 'Зелье скорости', price: 460 }, { name: 'Полиморф', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
// atTheOldToad.updatePotionName("Каменная кожа", "Зелье неуязвимости");
//[ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Зелье неуязвимости', price: 520 } ]
// console.table(atTheOldToad.getPotions());
