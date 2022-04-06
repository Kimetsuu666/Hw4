"use strict";

let height = +prompt("Высота ёлки?");

const star = '**',
      space = ' ';

let start,
    starLine = '*',
    result = '',
    starNumber = 1,
    spaceWidth = height;

if (height > 24) {
    alert("Максимальный размер для нормалнього отображения: 24");
} else {
    for (let i = 1; i <= height; i++) {
        start = '';
        spaceWidth--;

        for ( let k = 0; k < spaceWidth; k++ ){
            start += space;
        }

        result += start;

        if (starNumber !== 1 && starNumber === i) {
            starLine += star;
        }

        result += starLine + '\n';
        starNumber++;

    }

    alert(result);
}
