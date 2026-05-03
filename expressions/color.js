var v = 100;
var o = 0;
var i = [0,0];

var f = (time+o) * v;
var t = [i[0]+f, i[1]+f];
var d = thisLayer.sourceRectAtTime();
var s = thisLayer.transform.scale;
var lw = d.width *(s[1]/100);
var lh = d.height*(s[0]/100);
var w = thisComp.width - lw;
var h = thisComp.height - lh;

var c = [Math.floor(t[0]/w), Math.floor(t[1]/h)];
var hue = ((c[0] + c[1]) * 60) % 360;

// تابع تبدیل HSL به RGB
function hslToRgb(h, s, l) {
    h = h / 360;
    var r, g, b;
    if (s == 0) {
        r = g = b = l;
    } else {
        var hue2rgb = function(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        };
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }
    return [r, g, b, 1];
}

hslToRgb(hue, 1, 0.5);
