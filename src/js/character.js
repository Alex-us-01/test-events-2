// import { enemy, enemyDeath } from './game';

// const arena = document.getElementsByClassName('game-arena')[0];

// const clickOnGoblin = (event) => {
//   const goblinTarget = event.target.closest('.game-cell');
//   const goblinImg = goblinTarget.querySelector('.enemy');

//   if (goblinImg === enemy) {
//     enemy.remove();
//     goblinTarget.insertAdjacentElement('afterbegin', enemyDeath);
//     const pointsCount = document.getElementById('points-count');
//     pointsCount.textContent = 1 + Number(pointsCount.textContent);
//   }
// };

// arena.addEventListener('click', clickOnGoblin);

// export function makeEnemyDeath(img) {
//   const image = document.createElement('img');
//   image.src = img;
//   image.className = 'enemy-death';
//   image.id = 'enemy-death-face';
//   return image;
// }

// export function makeEnemy(img) {
//   const image = document.createElement('img');
//   image.src = img;
//   image.className = 'enemy';
//   image.id = 'enemy-face';
//   return image;
// }

export function makeEnemyDeath(img) {
  const image = document.createElement('img');
  image.src = img;
  image.className = 'enemy-death';
  image.id = 'enemy-death-face';
  return image;
}

export function makeEnemy(img) {
  const image = document.createElement('img');
  image.src = img;
  image.className = 'enemy';
  image.id = 'enemy-face';
  return image;
}

export function setupClickHandler(enemy, enemyDeath) {
  const arena = document.getElementsByClassName('game-arena')[0];
  
  const clickOnGoblin = (event) => {
    const goblinTarget = event.target.closest('.game-cell');
    const goblinImg = goblinTarget.querySelector('.enemy');

    if (goblinImg === enemy) {
      enemy.remove();
      goblinTarget.insertAdjacentElement('afterbegin', enemyDeath);
      const pointsCount = document.getElementById('points-count');
      pointsCount.textContent = 1 + Number(pointsCount.textContent);
    }
  };

  if (arena) {
    arena.addEventListener('click', clickOnGoblin);
  }
}
