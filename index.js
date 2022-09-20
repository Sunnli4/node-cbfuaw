// run `node index.js` in the terminal

let month = [];
let weekDays = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];
let offset = 5;
for (i = 0; i < 31; i++) {
  month.push(i);
  console.log(i + 1 + ' января ' + weekDays[(month[i] + offset) % 7]);
}
