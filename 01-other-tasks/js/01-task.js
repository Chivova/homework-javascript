import users from './data/users.js';

const usersListRef = document.querySelector('.users-list');

const makeUserCard = ({ name, email, age, friends }) => {
  // console.log(user);
  const userItemRef = document.createElement('li');
  userItemRef.classList.add('user-item');

  const userNameRef = document.createElement('h2');
  userNameRef.textContent = name;

  const userEmailRef = document.createElement('p');
  userEmailRef.textContent = email;

  const userAgeRef = document.createElement('p');
  userAgeRef.textContent = `Age: ${age} years`;

  const userFriendsRef = document.createElement('p');
  userFriendsRef.textContent = `Friends: ${friends}`;

  userItemRef.append(userNameRef, userEmailRef, userAgeRef, userFriendsRef);

  return userItemRef;
};

const elements = users.map(makeUserCard);
usersListRef.append(...elements);
