Vue.createApp({
    data() {
        return {
            name: "Anders B",
            teacher: { name: "Michael H", age: 29 },
            weekdays: ["Monday", "Tuesday", "Wednesday"],
            cars: [
                { make: "Volvo", model: "Amazon" },
                { make: "Audi", model: "A8" },
                { make: "VW", model: "Polo" }
            ],
            counter: 0,
            myNumber: 0,
            inputMessage: "",
            outputMessage: "",
            checked: false,
            anotherMessage: "Hello",
            myNumber: 0
        }
    },
    methods: {
        reverse() { // side effects
            this.outputMessage = this.inputMessage.split('').reverse().join('')
        },
        reverseProperFunction(message) { // proper function, no side effects
            return message.split('').reverse().join('')
        },
        updateCounter() { // side effects
            this.counter++
        },
        next(n) { return n + 1 }
    }
}).mount("#app")