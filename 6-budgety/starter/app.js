var budgetController = (function () {

    var Expense = function (id, desc, value) {
        this.id = id;
        this.desc = desc;
        this.value = value
    };

    var Income = function (id, desc, value) {
        this.id = id;
        this.desc = desc;
        this.value = value
    };

    var budgetData = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function (type, description, val) {
            var newItem, ID;
            ID = data.allItems[type][data.allItems[type].length - 1];

            if (type === 'exp') {
                newItem = new Expense(ID, description, val);
            } else {
                newItem = new Income(ID, description, val);
            }

            data.allItems[type].push(newItem);
            return newItem;
        }
    };

})();



var uiController = (function () {

    // An object to hold a reference point for any DOM selectors
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };

    return {
        getinput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },

        getDOMstrings: function () {
            return DOMstrings
        }
    };
})();



var appController = (function (budgetCtrl, uiCtrl) {

    var setupEventListeners = function () {
        var DOM = uiCtrl.getDOMstrings();

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function () {
        // 1. Capture field input data
        var input = uiCtrl.getinput();
        console.log(input)
        // 2. Add item to budget controller

        // 3. Add item to UI
        // 4. Calculate budget
        // 5. Display new budget in UI
    };

    return {
        init: function () {
            console.log('Initializing...');
            setupEventListeners();
        }
    }

})(budgetController, uiController);

appController.init();