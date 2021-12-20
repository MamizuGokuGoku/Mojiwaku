$('.textbox').on("keypress", function (event) { return leaveOnlyNumber(event); });
function leaveOnlyNumber(e) {
    var st = String.fromCharCode(e.which);
    if ("0123456789".indexOf(st, 0) < 0) { return false; }
    return true;
}

$('#kyusu, #jisu').keyup(function (event) { return calcYokohaba(event); });
function calcYokohaba(e) {
    var kyusu = Number($('#kyusu').val());
    var jisu = Number($('#jisu').val());
    var yokohaba = null;
    if (kyusu > 0 && jisu > 0) {
        yokohaba = kyusu * jisu * 0.25;
        $('#yokohaba').val(yokohaba);
    }
}

$('#kyusu, #hasu, #gyosu').keyup(function (event) { return calcTatehaba(event); });
function calcTatehaba(e) {
    var kyusu = Number($('#kyusu').val());
    var hasu = Number($('#hasu').val());
    var gyosu = Number($('#gyosu').val());
    var tatehaba = null;
    if (kyusu > 0 && hasu > 0 && gyosu > 0) {
        tatehaba = (hasu * (gyosu - 1) + kyusu) * 0.25;
        $('#tatehaba').val(tatehaba);
    }
}