'use strict';

var app = new Vue({
    el: "#product",
    data : {
        device: "gpu",
        type: "10",

        products :{
            "10" : {
                width : 2450,
                height : 2600,
                length : 3000,
                asic : 288,
                gpu : 864
            },
            "20" : {
                width : 2440,
                height : 2600,
                length : 6060,
                asic : 576,
                gpu : 1728
            },
            "40" : {
                width : 2440,
                height : 2600,
                length : 12190,
                asic : 1152,
                gpu : 3456
            }
        }
    },
    computed : {
        product : function(){
            return {
                width : this.products[this.type].width,
                height : this.products[this.type].height,
                length : this.products[this.type].length,
                asic : this.products[this.type].asic,
                gpu : this.products[this.type].gpu
            };
        },
        options : function () {
            return this.type === "full"? true : false;
        },
        count : function () {
            return  this.device === "gpu"? this.products[this.type].gpu : this.products[this.type].asic;
        },
        foot_10 : function () {
            return this.type === "10"? "active" : "";
        },
        foot_20 : function () {
            return this.type === "20" ? "active" : "";
        },
        foot_40 : function () {
            return this.type === "40" ? "active" : "";
        }
    }
});