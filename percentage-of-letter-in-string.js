var percentageLetter = function(s, letter) {
    let sArr = s.split('');
    const sObj = sArr.reduce((acc, cur) => {
        if (cur in acc) {
            acc[cur]++;
        } else {
            acc[cur] = 1;
        }
        return acc;
    }, {});
    let porcentaje = Math.floor(sObj[letter]/(s.length) * 100);
    console.log(porcentaje);
    if (porcentaje) {
        return porcentaje
    } else {
        return 0;
    }
};