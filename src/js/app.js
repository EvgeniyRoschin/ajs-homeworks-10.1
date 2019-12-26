export default team = {
    person1: {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
   },
   person2: {
        name: 'Пучник',
        type: 'Powman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
   },
   person3: {
        name: 'Ручник',
        type: 'Rowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
   },
};

team[Symbol.iterator] = function() {
    let current = 1;
    let last = 3;
    
    return {
      next() {
        if (current <= last) {
          return {
            done: false,
            value: team[`person${current++}`],
          };
        } else {
            return {
              done: true
            };
        }
      }
    }
};

for (let num of team) {
    console.log(num);
}