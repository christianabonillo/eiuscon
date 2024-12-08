function rcompareIdentifiers(a, b) {
    if (a === b) {
        return 0;
    }

    const anum = Number.isNaN(Number(a)) ? a : Number(a);
    const bnum = Number.isNaN(Number(b)) ? b : Number(b);

    if (typeof anum === 'number' && typeof bnum === 'number') {
        return bnum - anum;
    }

    if (typeof anum === 'string' && typeof bnum === 'string') {
        return bnum.localeCompare(anum);
    }

    return typeof anum === 'number' ? -1 : 1;
}

// Example usage:
const identifiers = ['1.10', '1.2', '1.3', '2.0', '10.0'];
identifiers.sort(rcompareIdentifiers);
console.log(identifiers); // Expected output: [ '10.0', '2.0', '1.3', '1.2', '1.10' ]
