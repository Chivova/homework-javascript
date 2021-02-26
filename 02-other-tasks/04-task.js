// 4 - Метод Array.prototype.flatMap
// Собрать в allTopics массив всех предметов всех курсов используя flatMap.
// Используя Array.prototype.filter выполнить фильтрацию,
// оставив в uniqueTopics только уникальные элементы.

const courses = [
  {
    name: 'Basic HTML+CSS',
    topics: ['VSCode', 'HTML', 'CSS', 'GitHub Desktop', 'GitHub'],
  },
  {
    name: 'Intermediate HTML+CSS',
    topics: ['VSCode', 'Terminal', 'Git', 'GitHub', 'HTML', 'CSS'],
  },
  {
    name: 'Basic JavaScript',
    topics: [
      'VSCode',
      'Type system',
      'Loops',
      'Functions',
      'Conditions',
      'Classes',
      'DOM',
      'Git',
      'GitHub',
    ],
  },
  {
    name: 'Intermediate JavaScript',
    topics: [
      'VSCode',
      'NPM',
      'Bundlers',
      'Transpiling',
      'Promises',
      'AJAX',
      'Git',
      'GitHub',
    ],
  },
];

// const allTopics = courses.reduce((acc, course) => {
//   acc.push(...course.topics);

//   return acc;
// }, []);

// const allTopics = courses.reduce(
//   (acc, course) => [...acc, ...course.topics],
//   []
// );

const allTopics = courses.flatMap((course) => course.topics);
// console.log(allTopics);

const uniqueTopics = allTopics.filter(
  (course, index, arr) => arr.indexOf(course) === index // --> https://www.youtube.com/watch?v=NhlyqaLGGk8&feature=youtu.be --> 1:14
);
// console.log(uniqueTopics);

// Если элементы повторяются убараем все

const itemsWithoutDoubles = allTopics.filter(
  (course, _index, arr) => arr.indexOf(course) === arr.lastIndexOf(course)
);
// console.log(itemsWithoutDoubles);

// Выполнить рефакторинг используя цепочку методов flatMap и filter.

const allTopicsWithChain = courses
  .flatMap((course) => course.topics)
  .filter((course, index, arr) => arr.indexOf(course) === index);

console.log(allTopicsWithChain);
