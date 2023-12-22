//1 пользователь вводит некую строку, является ли оно целым неотрицательным числом или логическим значением
//2 пользователь вводит некое слово, проверить является ли оно полиндромом или нет
//split join revers - нельзя
// 3 схема поправить

let word = "1213";
console.log(word.length);
let flag = true;
for (let i = 0; i <= word.length - 1; i++) {
    console.log(word[i], word[word.length - i - 1]);
    if (word[i] != word[word.length - i - 1]) {
        flag = false;
    }
}
console.log("Слово является полиндромом: ", flag);
//-------------------------------------------
