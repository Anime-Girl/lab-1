function hexToCMYK(hex) {
    var computedC = 0;
    var computedM = 0;
    var computedY = 0;
    var computedK = 0;

    if (hex.charAt(0) != "#") {
        return '';
    }

    hex = (hex.charAt(0) == "#") ? hex.substring(1, 7) : hex;

    if (hex.length != 6) {
        return '';
    }
    if (/[0-9a-f]{6}/i.test(hex) != true) {
        return '';
    }

    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);

    // BLACK
    if (r == 0 && g == 0 && b == 0) {
        computedK = 1;
        return '0 0 0 1';
    }

    computedC = 1 - (r / 255);
    computedM = 1 - (g / 255);
    computedY = 1 - (b / 255);

    var minCMY = Math.min(computedC, Math.min(computedM, computedY));

    computedC = (computedC - minCMY) / (1 - minCMY);
    computedC = computedC.toString().slice(0, 5);
    computedM = (computedM - minCMY) / (1 - minCMY);
    computedM = computedM.toString().slice(0, 5);
    computedY = (computedY - minCMY) / (1 - minCMY);
    computedY = computedY.toString().slice(0, 5);
    computedK = minCMY;
    computedK = computedK.toString().slice(0, 5);

    return (computedC + " " + computedM + " " + computedY + " " + computedK);
}

export default hexToCMYK;