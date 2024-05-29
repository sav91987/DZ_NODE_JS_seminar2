const rootsFinder = (a, b, c) => {
  const D = b * b - 4 * a * c;

  if (D > 0) {
    const x1 = (-b - Math.sqrt(D)) / (2 * a);
    const x2 = (-b + Math.sqrt(D)) / (2 * a);
    console.log(`Уравнение ${a}x^2 + ${b} + ${c} имеет корни: 
    корень 1 равен ${x1}
    корень 2 равен ${x2}`);
  } else if (D === 0) {
    const x = -b / (2 * a);
    console.log(`Уравнение ${a}x^2 + ${b} + ${c} имеет корень ${x}`);
  } else {
    console.log(`Нет корней`);
  }
};

module.exports = { rootsFinder };
