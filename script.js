function getColor() {
    document.getElementById("colorHex").innerHTML = 'HEX : ' + document.getElementById("inputColor").value;
    document.getElementById("colorRGB").innerHTML = 'RGB : '+ hexToRgb(document.getElementById("inputColor").value);
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
    return 'RGB('+r+','+g+','+b+')'; 
}