
const Fish = { id: 58, name: 'king Hilsha', price: '9000', phone: '0171755555555', address: 'barisal shodor', dress: 'silver' };

// const phone = Fish.phone;
// const price = Fish.price;
// const dress = Fish.dress;

const { phone, price, id, dress, name } = Fish;

// console.log(phone, price,);
// console.log(phone, dress);
// console.log(phone, id);
// console.log(phone, name);
// console.log(phone);


const company = {
    name: 'GP',
    ceo: {
        id: 1,
        name: 'ajmol',
        food: 'fuska'
    },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react'
    }
};

// const work = company.web.work;
// const framework = company.web.framework;

const { work, framework } = company.web;
const { food } = company.ceo;
console.log(work, framework, food);



