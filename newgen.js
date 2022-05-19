// Список курсов
let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];


function filterPrices(requiredRange, courses) {
  /*Узнаем минимальное и максимальное значение цены,
    которое ищет пользователь
    для сравнения с ценами курсов*/
  let [minUserPrice, maxUserPrice] = requiredRange;

  /*Заменяем null в максимальных значениях,
    иначе при сравнении цен null заменится на 0
    и сравнение пройдет некорректно*/
  maxUserPrice = maxUserPrice ?? Infinity;

  return courses.filter((course) => {
     /*Узнаем минимальное и максимальное значение цены курсов*/
    let [minCoursePrice, maxCoursePrice] = course.prices;
    //Заменяем  в максимальных значениях
    maxCoursePrice = maxCoursePrice ?? Infinity;

    return minUserPrice <= maxCoursePrice && maxUserPrice >= minCoursePrice;
  });
}

function sortPrices(a, b) {

  let [minA, maxA] =  a.prices;;
  let [minB, maxB] = b.prices;;
  maxA = maxA ?? Infinity;
  maxB = maxB ?? Infinity;
  minA = minA ?? 0;
  minB = minB ?? 0;


  /*Сначала сравним минимальные значения и найдем минимальную цену.
    Если минимальные значения равны, 
    то найдем минимальную цену из максимальных значений*/
  return minA == minB ? maxA - maxB : minA - minB

}

let firstSetBefore = document.querySelector('#first-set-before');
let firstSetAfter = document.querySelector('#first-set-after');
let secondSetBefore = document.querySelector('#second-set-before');
let secondSetAfter = document.querySelector('#second-set-after');
let thirdBefore = document.querySelector('#third-set-before');
let thirdAfter = document.querySelector('#third-set-after');

let appropriateСourses = filterPrices(requiredRange1, courses);
console.log("Первая подборка курсов до сортировки:", appropriateСourses);
firstSetBefore.textContent = JSON.stringify(appropriateСourses,  null, '\t');

appropriateСourses = appropriateСourses.sort(sortPrices);
console.log("Первая подборка курсов после сортировки:", appropriateСourses);
firstSetAfter.textContent = JSON.stringify(appropriateСourses,  null, '\t');
console.log("---------------------------------------------------------------");

appropriateСourses = filterPrices(requiredRange2, courses);
console.log("Вторая подборка курсов до сортировки:", appropriateСourses);
secondSetBefore.textContent = JSON.stringify(appropriateСourses,  null, '\t');

appropriateСourses = appropriateСourses.sort(sortPrices);
console.log("Вторая подборка курсов после сортировки:", appropriateСourses);
secondSetAfter.textContent = JSON.stringify(appropriateСourses,  null, '\t');
console.log("---------------------------------------------------------------");

appropriateСourses = filterPrices(requiredRange3, courses);
console.log("Третья подборка курсов до сортировки:", appropriateСourses);
thirdBefore.textContent = JSON.stringify(appropriateСourses,  null, '\t');


appropriateСourses = appropriateСourses.sort(sortPrices);
console.log("Третья подборка курсов после сортировки:", appropriateСourses);
thirdAfter.textContent = JSON.stringify(appropriateСourses,  null, '\t');
console.log("---------------------------------------------------------------");
