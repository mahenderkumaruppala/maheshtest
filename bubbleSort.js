arr = [45,3,98,5,102,33,40,6];
var swapp;
var n = arr.length-1;
var x = arr;
do {
	swapp = false;
	for (var i=0; i < n; i++)
	{
		if (x[i] > x[i+1])
		{
		   var temp = x[i];
		   x[i] = x[i+1];
		   x[i+1] = temp;
		   swapp = true;
		}
	}
	n--;
} while (swapp);
console.log(x);
