var circle = {
    radius : 5, // <-프로퍼티

    // 원의 지름
    getDiameter : function() {
        return 2 * this.radius;
    }
};

console.log(circle.getDiameter());