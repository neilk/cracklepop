[...Array(101).keys()]
    .splice(1)
    .map(n =>
        [[5, 'Pop'], [3, 'Crackle']]
            .map(([modulus, label]) =>
                ([index, display]) => [
                    index,
                    index % modulus
                        ? display
                        : isNaN(display)
                            ? label + display
                            : label
                ]
            )
            .reduce((item, fn) => fn(item), [n, n])
    )
    .forEach(([_, display]) => console.log(display));