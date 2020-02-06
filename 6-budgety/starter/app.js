var budgetController = (function () {
    var x = 23;
    var add = function (a) {
        return x + a;
    };

    return {
        publicTest: function (b) {
            return (add(b));
        }
    };
})();


var uiController = (function () {


})();


var controller = (function (budgeCtrl, uiCtrl) {
    var z = budgeCtrl.publicTest(7);

    return {
        publicMethod: function () {
            console.log(z);
        }
    }

})(budgetController, uiController);