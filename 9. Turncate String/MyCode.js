function turnCate(str, num) {
    if (num >= str.length) return str;
    if (num <= 3) return str.slice(0, num) + "...";
    return str.slice(0, num-3) + "...";
}

console.log(turnCate("Edho akan menjadi full stack developer", 11));