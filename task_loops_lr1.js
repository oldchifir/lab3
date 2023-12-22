function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let n = 10, s, sum = 0;
let a = new Array(0); //создаёт массив без элементов, но с заданной длиной.

n = 10; //prompt('n=')
for (let i = 0; i < n; i++) {
    a[i] = getRandomArbitrary(1, 100); //prompt('a(' + (i + 1) + ')=')
}
console.log(a)
a = [
    46.18720676186671,
    47.71742857247005,
    82.68889383072977,
    58.45189542220895,
    66.98370882503288,
    42.986863840580384,
    7.1456604103508266,
    81.89170920525459,
    24.024386722682365,
    26.31003492533074

]
for (let i = 0; i < n; i++) {
    s = Math.trunc(a[i]); //возвращает целую часть числа путём удаления всех дробных знаков.
    console.log('[a(' + (i + 1) + ')] =', s);
    sum += Number(s);
}

console.log('Sum =', sum);