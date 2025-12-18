export const makeCards = (prefix, pairs) =>
    pairs.map(([front, back, topic], index) => ({
        id: `${prefix}-${index + 1}`,
        front,
        back,
        ...(topic ? { topic } : {}),
    }));
