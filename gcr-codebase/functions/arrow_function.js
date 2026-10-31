// Object using arrow function
let user = {
    name: "Rahul",

    showName: () => {
        console.log(this.name);
    }
};

user.showName();

// Object using normal function
let user2 = {
    name: "Rahul",

    showName: function() {
        console.log(this.name);
    }
};

user2.showName();