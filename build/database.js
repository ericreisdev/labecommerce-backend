"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = exports.users = void 0;
exports.users = [{
        id: 'u001',
        name: 'Tati',
        email: 'tati@gmail.com',
        password: 'vavinho123',
        createdAt: new Date().toISOString()
    },
    {
        id: 'u002',
        name: 'Eric',
        email: 'eric@gmail.com',
        password: 'jadinha123',
        createdAt: new Date().toISOString()
    }
];
exports.products = [{
        id: 'p001',
        name: 'Nintendo Switch',
        price: 1340,
        description: 'O melhor portátil que existe',
        imageUrl: 'https://drive.google.com/file/d/10cKfJtuoiej-BNIDBRwIdGgxV_UEVWXV/view?usp=drive_link'
    },
    {
        id: 'p002',
        name: 'PlayStation 4',
        price: 2919,
        description: 'O melhor console que existe',
        imageUrl: 'https://drive.google.com/file/d/10dQN7pDn7Hjw-rEw7jJ2UtNl2CSB8-HW/view?usp=drive_link'
    }];
const createUser = (id, name, email, password) => {
    const newUser = {
        id: id,
        name: name,
        email: email,
        password: password,
        createdAt: new Date().toISOString()
    };
    exports.users.push(newUser);
    return 'Cadastro realizado com sucesso';
};
const getAllUsers = () => {
    return exports.users;
};
const createProduct = (id, name, price, description, imageUrl) => {
    const newProduct = {
        id: id,
        name: name,
        price: price,
        description: description,
        imageUrl: imageUrl,
    };
    exports.products.push(newProduct);
    return 'Produto criado com sucesso';
};
const getAllProducts = () => {
    return exports.products;
};
const searchProductsByName = (searchName) => {
    const filteredProducts = exports.products.filter((item) => {
        return item.name.toLowerCase().includes(searchName.toLowerCase());
    });
    return filteredProducts;
};
// console.log(createUser('021', 'Logan', 'wolverine@xmen.com', 'jeangreys2'), getAllUsers());
// console.log(createProduct('021', 'Adamantium 2.0', 2000000000, 'The impossible cut', 'https://drive.google.com/file/d/13x6_Z0hVvrR9TOjaGMVMdKYSMTqIKn2p/view?usp=drive_link'), getAllProducts());
console.table(searchProductsByName('Nintendo Switch'));
//# sourceMappingURL=database.js.map