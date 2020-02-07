var budgetController = (function () {


})();



var uiController = (function () {

    return {
        getinput: function () {

        }
    }
})();



var appController = (function (budgetCtrl, uiCtrl) {

    var ctrlAddItem = function () {
        // 1. Capture field input data
        // 2. Add item to budget controller
        // 3. Add item to UI
        // 4. Calculate budget
        // 5. Display new budget in UI
        console.log('it works');
    };

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }


    })

})(budgetController, uiController);