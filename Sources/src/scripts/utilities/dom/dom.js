/**
 * buildFighterMarkup
 */
const buildFighterMarkup = (fighters) => {
  const wrapper = document.createElement('ul');

  for (let fighter of fighters) {
      let li = document.createElement('li');
      const image = new Image(200, 200);
      const button = document.createElement('button');
      const contentWrapper = document.createElement('div');
      const buttonText = document.createTextNode("Recruit monster");
      const monsterWrapper = document.createElement('ul');

      // Generate monsters list
      const monsters = fighter.monsters.map(monster => {
        const monsterLi = document.createElement('li');
        const monsterImage = document.createElement('img');
        const monsterName = document.createTextNode(monster.name);
        monsterImage.src = monster.image;
        monsterLi.appendChild(monsterName);
        monsterLi.appendChild(monsterImage);
        return monsterLi;
      })

      for (let monster of monsters) {
        monsterWrapper.appendChild(monster);
      }

      // Append id's and classes
      li.id = fighter.id;
      li.className = 'fighter';
      contentWrapper.className = 'fighter__contents';
      monsterWrapper.className = 'fighter__monsters';

      // Append other attributes
      image.src = fighter.image || 'https://i.pinimg.com/736x/2d/d2/22/2dd2225ced4dfc57e8fbe55eeda6561b--ninja-art-the-ninja.jpg';
      button.appendChild(buttonText);

      // Add elements to li
      contentWrapper.appendChild(image);
      contentWrapper.appendChild(document.createTextNode(fighter.name));
      contentWrapper.appendChild(button);
      li.appendChild(contentWrapper);
      li.appendChild(monsterWrapper);
      wrapper.appendChild(li);
  }

  return wrapper;
}

export {
  buildFighterMarkup
}