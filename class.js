class Support {
    name;
    designation = 'support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a Session');
    }
}

const amir = new Support('amir', 'india');
const khan = new Support('khan', 'varat');

// console.log(amir);
// console.log(khan);

amir.startSession();
khan.startSession();





