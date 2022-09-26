function januaryDays(firstWeekDay) {
  let indexOfFirstweekDay = weekDays.indexOf(firstWeekDay);
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
  for (let i = 0; i <= 31; i++) {
    month.push(i);
    console.log(
      i + ' января ' + weekDays[(month[i] + indexOfFirstweekDay) % 7]
    );
  }
}

januaryDays('Вторник');
