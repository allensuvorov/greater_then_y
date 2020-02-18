var count = 0;
function greater_than_y (y, arr) {
    for (let i=0;i<arr.length;i++) {
        if (arr[i]>y) count++;
    };
    console.log(count)
};

var x = 2;
var user_arr = [1, 3, 5, 7];

greater_than_y(x, user_arr);