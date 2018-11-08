import Vue from "vue"

Vue.filter('round', function(longNum) {
        return longNum.toFixed(2);
    })

Vue.filter('currency', function(num) {
        return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    })