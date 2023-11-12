// Функция для вычисления значения функции Y(X)
function Y(X) {
  return X**2 + 0.5 - Math.sin(3 * X);
}

// Функция для вычисления значения характерной точки (2x^3 - 3)/(x^2 +1)
function characteristicPoint(X) {
  return (2 * X**3 - 3) / (X**2 + 1);
}

// Нахождение локального минимума функции
function findLocalMinimum(X0, h) {
  let X = X0;
  let Yprev = Y(X - h);
  let Ycurr = Y(X);
  let Ynext = Y(X + h);

  while (Ycurr > Yprev && Ycurr > Ynext) {
    X += h;
    Yprev = Ycurr;
    Ycurr = Ynext;
    Ynext = Y(X + h);
  }

  return X;
}

// Заданные значения
const X0 = 0; // Начальное значение X
const h = 0.1; // Шаг изменения аргумента

// Нахождение локального минимума функции
const localMinimum = findLocalMinimum(X0, h);

// Вычисление значений функции до достижения локального минимума
let X = X0;
while (X < localMinimum) {
  const Yval = Y(X);
  const characteristicPointVal = characteristicPoint(X);
  console.log(`X = ${X}, Y(X) = ${Yval}, Характерная точка = ${characteristicPointVal}`);
  X += h;
}
