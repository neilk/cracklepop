[...Array(101).keys()]
    .splice(1)
    .map(n =>
        [[3, 'Crackle'], [5, 'Pop']]
            .map(([modulus, label]) =>
                ([n, display]) => [
                    n,
                    n % modulus
                        ? display
                        : isNaN(display)
                            ? display + label
                            : label
                ]
            )
            .reduce((pair, fn) => fn(pair), [n, n])
    )
    .forEach(([_, display]) => console.log(display.toString()));