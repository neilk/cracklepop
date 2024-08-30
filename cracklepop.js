[...Array(101).keys()]
    .splice(1)
    .map(index => [index, index])
    .map(pair =>
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
            .reduce((item, fn) => fn(item), pair)
    )
    .forEach(pair => console.log(pair[1]));