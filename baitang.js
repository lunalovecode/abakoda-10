var numStools = readline();
var heights = readline().split(" ");
var nums = heights.map(a => parseInt(a));
var nums2 = nums;

function isConsecutive(arr) {
    var a = arr.slice(1).map(function (n,i) {
        return n - arr[i];
    });
    var consec = a.every(value => value === 1);
    return consec;
}


if (isConsecutive(nums.sort((a,b) => a - b))) {
    print("Yes");
    print(nums[nums.length - 1] + 1);
} else {
    //go through the possible values
    //if value i is added to the array, will it be consecutive?
    //if it is, print "Yes" and i
    //if not, do it again with the next i value
    //if after every recursion there is no match, print "No"
    for (var i = 0; i < nums[nums.length - 1]; i++) {
        var recursions = 0;
        nums2.push(i);
        if (isConsecutive(nums2)) {
            print("Yes");
            print(i);
        } else {
            print("No");
        }
    }
}
