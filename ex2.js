// Bài 1: Đảo ngược các ký tự trong mảng
const charArrayEx1 = ['c', 's', 'c', '2', '6', '1'];
const value1 = charArrayEx1.splice(3, 1, '1');
charArrayEx1.splice(5, 1, 'value1[0]');
let reserveArray = charArrayEx1.reverse();
console.log("Bài 1 - Chuỗi sau khi đảo ngược:", reserveArray.join(""));

// Bài 2: Đếm các ký tự số trong mảng ký tự
const charArrayEx2_2 = ['a', '1', 'b', '2', '0', 'c'];
let digitCountEx2_2 = 0;
for (let i = 0; i < charArrayEx2_2.length; i++) {
    if (charArrayEx2_2[i] >= '0' && charArrayEx2_2[i] <= '9') {
        digitCountEx2_2++;
    }
}
console.log("Bài 2 - Số ký tự số trong mảng là:", digitCountEx2_2);

// Bài 3: Đếm số ký tự trong chuỗi
const textEx2_3 = prompt("Bài 3 - Nhập một chuỗi:");
console.log("Bài 3 - Số ký tự trong chuỗi là:", textEx2_3.length);

// Bài 4: Kiểm tra hai chuỗi có giống nhau không
const textEx2_4a = prompt("Bài 4 - Nhập chuỗi thứ nhất:");
const textEx2_4b = prompt("Bài 4 - Nhập chuỗi thứ hai:");
if (textEx2_4a === textEx2_4b) {
    console.log("Bài 4 - Hai chuỗi giống nhau");
} else {
    console.log("Bài 4 - Hai chuỗi không giống nhau");
}

// Bài 5: Thay ký tự '-' bằng '_'
const textEx2_5 = prompt("Bài 5 - Nhập các ký tự của mảng (không có dấu cách):");
const charArrayEx2_5 = textEx2_5.split("");
for (let i = 0; i < charArrayEx2_5.length; i++) {
    if (charArrayEx2_5[i] === '-') {
        charArrayEx2_5[i] = '_';
    }
}
console.log("Bài 5 - Mảng sau khi thay thế:", charArrayEx2_5);
