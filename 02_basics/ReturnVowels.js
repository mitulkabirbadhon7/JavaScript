function returnVowelsCount(str) {

    let str1 = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < str1.length; i++) {

        if (str1[i] === 'a' || str1[i] === 'e' || str1[i] === 'i' || str1[i] === 'o' || str1[i] === 'u') {
            count++;
        }


    }
    return count;
}

console.log(returnVowelsCount("aeiou"));

const countVowels = (str) => {
     let str1 = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < str1.length; i++) {

        if (str1[i] === 'a' || str1[i] === 'e' || str1[i] === 'i' || str1[i] === 'o' || str1[i] === 'u') {
            count++;
        }


    }
    return count;
}
console.log(countVowels("aeiou"));
