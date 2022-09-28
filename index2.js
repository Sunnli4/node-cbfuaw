function januaryDays(firstWeekDay) {
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
  let indexOfFirstweekDay = weekDays.indexOf(firstWeekDay);
  for (let i = 0; i < 31; i++) {
    month.push(i);
    console.log(
      `${month[i] + 1}  января  ${
        weekDays[(month[i] + indexOfFirstweekDay) % 7]
      }`
    );
  }
}

januaryDays('Вторник');
