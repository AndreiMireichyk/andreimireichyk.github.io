'use strict';

var app = new Vue({
    el: "#product",
    data : {
        device: "gpu",
        type: "empty"
    },
    computed : {
        options : function () {
            return this.type === "full"? true : false;
        },
        count : function () {
            return  this.device === "gpu"? 27 : 9;
        },
        price_full : function () {
            return this.type === "full"? "active" : "";
        },
        price_empty : function () {
            return this.type === "empty"? "active" : "";
        }
    }
});