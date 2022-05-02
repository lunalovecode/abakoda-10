var numStools = readline();
var heights = readline().split(" ").map(a => parseInt(a));
var previous = 0;
var added = 0;
var possible = true;

for (var i = 0; i < heights.length; i++) {
	if (i === 0) {
		previous = heights[i];
		continue;
	}

	if (previous + 1 === heights[i]) {
		previous = heights[i];
		continue;
	}

	if (added !== 0) {
		print("No");
		possible = false;
		break;
	}

	added = previous + 1;

	if (added + 1 === heights[i]) {
		previous = heights[i];
		continue;
	} else {
		print("No");
		possible = false;
		break;
	}

}

if (possible) {
	print("Yes");
	if (added === 0) {
		print(heights[i - 1] + 1);
	} else {
		print(added);
	}
}