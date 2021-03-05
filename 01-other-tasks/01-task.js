import users from './data/users.js';

{
  /* <li>
  <h2>Имя</h2>
  <p>Email</p>
  <p>friends</p>
  <p>age</p>
</li>; */
}

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

  userItemRef.append(
    userNameRef,
    userEmailRef,
    userEmailRef,
    userAgeRef,
    userFriendsRef
  );

  return userItemRef;
};

const elements = users.map(makeUserCard);
usersListRef.append(...elements);
