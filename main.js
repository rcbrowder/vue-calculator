var main = new Vue({
    el: '#main',
    data: {
        currentValue: 0,
        previousValue: 0,
        operator: '',
        tapeRegister: []
    },
    methods: {

        numericButtonPress(digit) {
            if (this.operator == '=') {
                this.previousValue = 0;
            }
            this.currentValue = this.currentValue * 10 + digit;
        },

        operatorButtonPress(operatorKey) {
            if (this.operator != '') {
                this.operate();
            }
            else {
                this.previousValue = this.currentValue;
            }
            this.currentValue = 0;
            this.operator = operatorKey;
        },


        operate() {
            if (this.operator == '+') {
                this.previousValue += this.currentValue;
            }
            else if (this.operator == '-') {
                this.previousValue -= this.currentValue;
            }
            else if (this.operator == '*') {
                this.previousValue *= this.currentValue;
            }
            else if (this.operator == '/') {
                this.previousValue /= this.currentValue;
            }
            else if (this.operator == '=') {
                this.previousValue = this.currentValue;
            }

            this.currentValue = 0;
            this.operator = '';
        },

        clear: function() {
            this.previousValue = 0;
            this.currentValue = 0;
            this.operator = ''
        }
    },

    computed: {
        displayValue() {
            return this.previousValue ? 
        this.currentValue ?
        this.currentValue : this.previousValue
        : this.currentValue
        }
    }
});
