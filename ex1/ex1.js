// Bài 1
const array = [];
let count = 0;

for (let i = 0; i < 10; i++) {

   let input = +prompt(`Nhập phần tử thứ ${i + 1}`);

   array.push(input);
}

for (let i = 0; i < array.length; i++) {
    if (array[i] >= 10) {
        count++;
    }
}

console.log("Mảng vừa nhập: ", array);
console.log("Số lượng phần tử >= 10", count);

// Bài 2
const arrayEx2 = [];

for (let i = 0; i < 10; i++) {

    let inputEx2 = +prompt(`Nhập phần tử thứ ${i + 1}`);

   arrayEx2.push(inputEx2);
}

let max = arrayEx2[0];

for (let i = 0; i < arrayEx2.length; i++) {
    if (arrayEx2[i] > max) {
        max = arrayEx2[i];
    }
}

console.log("Số lớn nhất trong mảng là:", max);

// Bài 3
const arrayEx3 = [];

for (let i = 0; i < 10; i++) {
    const input = Number.parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`), 10);
    arrayEx3.push(input);
}

let maxEx3 = arrayEx3[0];
let sumEx3 = 0;

for (let i = 0; i < arrayEx3.length; i++) {
    if (arrayEx3[i] > maxEx3) {
        maxEx3 = arrayEx3[i];
    }
    sumEx3 += arrayEx3[i];
}

const averageEx3 = sumEx3 / arrayEx3.length;

console.log("Mảng vừa nhập:", arrayEx3);
console.log("Giá trị lớn nhất trong mảng là:", maxEx3);
console.log("Giá trị trung bình của các phần tử là:", averageEx3);

// Bài 4: Đảo ngược các phần tử trong mảng
const arrayEx4 = [];
for (let i = 0; i < 10; i++) {
    arrayEx4.push(Number.parseInt(prompt(`Bài 4 - Nhập số nguyên thứ ${i + 1}:`), 10));
}
arrayEx4.reverse();
console.log("Bài 4 - Mảng sau khi đảo ngược:", arrayEx4);

// Bài 5: Đếm số nguyên âm (a, e, i, o, u) trong chuỗi
const textEx5 = prompt("Bài 5 - Nhập một chuỗi:");
const negativeIntegersEx5 = textEx5.match(/(^|[^\d.])-\d+(?![\d.])/g) || [];
console.log("Bài 5 - Số nguyên âm trong chuỗi là:", negativeIntegersEx5.length);

// Bài 6: Kiểm tra một số có nằm trong mảng hay không
const arrayEx6 = [];
for (let i = 0; i < 10; i++) {
    arrayEx6.push(Number.parseInt(prompt(`Bài 6 - Nhập số nguyên thứ ${i + 1}:`), 10));
}
const numberEx6 = Number.parseInt(prompt("Bài 6 - Nhập số cần tìm:"), 10);
if (arrayEx6.includes(numberEx6)) {
    console.log(`Number ${numberEx6} is in the array`);
} else {
    console.log(`Number ${numberEx6} is not in the array`);
}

// Bài 7: Sắp xếp mảng theo thứ tự giảm dần
const arrayEx7 = [];
for (let i = 0; i < 10; i++) {
    arrayEx7.push(Number.parseInt(prompt(`Bài 7 - Nhập số nguyên thứ ${i + 1}:`), 10));
}
arrayEx7.sort((a, b) => b - a);
console.log("Bài 7 - Mảng theo thứ tự giảm dần:", arrayEx7);

// Bài 8: Nối mảng b rồi đến mảng a vào mảng c
const arrayAEx8 = [];
const arrayBEx8 = [];
for (let i = 0; i < 10; i++) {
    arrayAEx8.push(Number.parseInt(prompt(`Bài 8 - Nhập phần tử thứ ${i + 1} của mảng a:`), 10));
}
for (let i = 0; i < 10; i++) {
    arrayBEx8.push(Number.parseInt(prompt(`Bài 8 - Nhập phần tử thứ ${i + 1} của mảng b:`), 10));
}
const arrayCEx8 = [...arrayBEx8, ...arrayAEx8];
console.log("Bài 8 - Mảng c (b nối với a):", arrayCEx8);
