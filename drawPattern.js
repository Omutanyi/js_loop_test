const drawPattern = function (n) {
    for (var i = n; i >= 1; i--) {
        var str = "";
        for (var j = 1; j <= i; j++) {
            if (j === i) {
                str += "X" + " ";
                while (j !== n) {
                    for (let x = 0; x < n - j; j++) {
                        str += "0" + " ";
                    }
                    break;
                }
            } else {
                str += "0" + " ";
            }
        }
        console.log(str);
    }
}

// Range representing number of columns and rows to produce 
const n = 3

drawPattern(n)
