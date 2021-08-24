
class teamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}


class Support extends teamMember {
    groupeSupportTime;
    designation = 'support Web Dev';
    constructor(name, address, time) {
        super(name, address);
        this.groupeSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a Session');
    }
}

class StudentCare extends teamMember {
    name;
    designation = 'Student Care Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildARouting(student) {
        console.log(this.name, 'A Routing For', student);
    }
}


class neptuneDev extends teamMember {
    codeEditor;
    designation = 'Neptune App Dev';
    constructor(name, address, codeEditor) {
        super(name, address);
        this.codeEditor = codeEditor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}


const amir = new Support('amir', 'india', 11);
const khan = new Support('khan', 'varat', 3);

const alia = new StudentCare('Alia Bhatt', 'Mumbai');
const ash = new neptuneDev('Ash', 'mumbai', 'android Studio');

ash.releaseApp('1.4.5');
console.log(ash.name);

// console.log(ash);
// console.log(amir);


