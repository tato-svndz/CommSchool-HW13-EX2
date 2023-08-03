let min = prompt('Enter a Minimum Number:');
let max = prompt('Enter a Maximum Number:');
let result = '';
for (let i = min; i <= max; i++) {
    if (i % 2 == 0) {
        result += ` ${i}`;
    }
}
alert('Here are All The Even Numbers in That Range: ' + result);