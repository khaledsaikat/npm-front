var $ = require('jquery')
window.$ = $
window.jQuery = $
require('bootstrap')

var tooltip = $(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

module.export = tooltip
