[...Array(101).keys()]
    .splice(1)
    .map(i => [i, i])
    .map(p =>
        [[5, 'Pop'], [3, 'Crackle']]
            .map(([modulus, label]) =>
                ([i, display]) => [i, i % modulus ? display : isNaN(display) ? label + display : label])
            .reduce((y, f) => f(y), p)
    )
    .forEach(p => console.log(p[1]));