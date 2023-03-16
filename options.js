exports.filters = {
    'json': (text, options) => {
        exports[options.varname] = JSON.parse(text);
        return '';
    },
};
exports.metadata = (villagers) => {
    let isLast = Array(11).fill(true);
    let classMap = new Map();
    villagers.slice().reverse().forEach((v) => {
        v.current = isLast[v.house];
        isLast[v.house] = false;
        if (!classMap.has(v.species))
            classMap.set(v.species, `S${classMap.size}`);
        v.speciesClass = classMap.get(v.species);
    });
    return classMap;
};
