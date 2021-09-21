exports.filters = {
    'json': (text, options) => {
        global.$vars = typeof global.$vars === 'undefined' ?
            new Object : global.$vars;
        global.$vars[options.varname] = JSON.parse(text);
        return '';
    },
};
