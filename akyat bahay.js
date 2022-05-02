var r = readline().split(" ");
var rNums = r.map(a => parseInt(a));

function isConsecutive(arr) {
    var a = arr.slice(1).map(function (n,i) {
        return n - arr[i];
    });
    var consec = a.every(value => value === 1);
    return consec;
}

if (isConsecutive(rNums.sort())) {
    print("Yes");
} else {
    print("No");
}
