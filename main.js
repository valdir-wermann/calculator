const screen = document.querySelector('#screen span');

const add = (n) => {
    if ((RegExp('[.+-/*]').test(t()[t().length-1]) && RegExp('[.+-/*]').test(n)) || (t().length == 0 && RegExp('[.+-/*]').test(n))) {
        return alert("Invalid Input!");
    }
    changeText(t() + n)
}
const calc = () => {
    if (t().split(/[.+-/*]/g).length == 1) return changeText(t());
    changeText(round(eval(t() != "" ? t() : '0'), 2));
}
const del = () => {
    changeText(t().slice(0, t().length-1))
}
const clearT = () => {
   changeText("");
}

const round = (numb, decimal) => {
    numb = numb.toString();
    if (numb.indexOf('.') < 0) return numb;
    return numb.slice(0, numb.indexOf('.')+1+decimal)
}
const t = () => screen.innerText;
const changeText = (txt) => screen.innerText = txt;