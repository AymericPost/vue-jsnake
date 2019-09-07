export function coordsForIndex(i, xMax, yMax) {
    if(i == 0) return `1-${yMax}`;
    
    let x = 1;
    let y = yMax;

    while(i > 0) {
        if(x < xMax) x++;
        else {
            x = 1;
            y--;
        }
        i--;
    }

    return `${x}-${y}`;
}