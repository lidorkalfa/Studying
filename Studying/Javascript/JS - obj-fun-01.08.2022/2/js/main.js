const myTriangle = {

    sqr: function (num) {
        return num ** 2;
    },

    sum: function(num1, num2){
        return num1+num2;
    },

    isRightAngle:function(num1, num2, num3){
        return this.sum(this.sqr(num1), this.sqr(num2) === this.sqr(num3))
    },

};