$(function() {
    $('.dropdown').dropdown({
        clearable: true,
        onChange: function(value) {
            $('.card').show();
            $(`.card:not(.${(value == 'V') ? 'teal' : value})`).hide();
        },
    });
});
