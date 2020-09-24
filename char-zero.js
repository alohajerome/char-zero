
function filterZero(list) {
    let zero = ['0'];
    return _.some(_.intersection(list, zero));
}

console.log(hasZero(['foo', 'bar bar', 'baz baz 0']));
console.log(hasZero(['a', 'b', 'c', 'zero']))

