export const makeCards = (prefix, pairs) =>
    pairs.map(([front, back], index) => ({
        id: `${prefix}-${index + 1}`,
        front,
        back,
    }));

