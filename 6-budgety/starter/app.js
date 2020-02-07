var budgetController = (function () {


})();



var uiController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value'
    };

    return {
        getinput: function () {
            return {
                type: document.querySelector(domStrings.inputType).value, // inc or exp
                description: document.querySelector(domStrings.inputDescription).value,
                value: document.querySelector(domStrings.inputValue).value
            }
        },

        getDOMstrings: function () {
            return DOMstrings
        }
    };
})();



var appController = (function (budgetCtrl, uiCtrl) {

    var ctrlAddItem = function () {
        // 1. Capture field input data
        var input = uiCtrl.getinput();
        console.log(input)
        // 2. Add item to budget controller

        // 3. Add item to UI
        // 4. Calculate budget
        // 5. Display new budget in UI
    };

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }


    })

})(budgetController, uiController);