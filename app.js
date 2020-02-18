var arr = [1, 3, 5, 7];
var count = 0;
function greater_than_y (y) {
    for (let i=0;i<arr.length;i++) {
        if (arr[i]>y) count++;
    };
    console.log(count)
};
greater_than_y(2);