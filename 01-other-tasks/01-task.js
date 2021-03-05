import users from './users.js';

const user = {
  id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
  name: 'Moore Hensley',
  email: 'moorehensley@indexia.com',
  eyeColor: 'blue',
  friends: ['Sharron Pace'],
  isActive: false,
  balance: 2811,
  skills: ['ipsum', 'lorem'],
  gender: 'male',
  age: 37,
};
{
  /* <li>
  <h2>Имя</h2>
  <p>Email</p>
  <p>friends</p>
  <p>age</p>
</li>; */
}

const userItemTef = document.createElement('li');
userItemTef.classList.add('user-item');
console.log(userItemTef);

const userNameRef = document.createElement('h2');
userNameRef.textContent = user.name;
console.log(userNameRef);

const userEmailRef = document.createElement('p');
userEmailRef.textContent = user.email;
console.log(userEmailRef);

const userFriendsRef = document.createElement('p');
userFriendsRef.textContent = user.friends;
console.log(userFriendsRef);

const userAgeRef = document.createElement('p');
userAgeRef.textContent = `Age: ${user.age} years`;
console.log(userAgeRef);

// const makeUserCard = user => { };
