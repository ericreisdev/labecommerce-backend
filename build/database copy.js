"use strict";
// Entendido!
Object.defineProperty(exports, "__esModule", { value: true });
exports.obterTodosUsuarios = exports.adicionarUsuario = void 0;
// Em vez de usar os nomes "createUser" e "getAllUsers", vou criar funções com nomes diferentes, mas que tenham a mesma lógica.
// 1. **adicionarUsuario:** Vai ser a função que adiciona um novo usuário à lista de usuários.
// ```typescript
const adicionarUsuario = (identificador, nomeCompleto, enderecoEmail, senhaAcesso) => {
    const usuarioNovo = {
        id: identificador,
        name: nomeCompleto,
        email: enderecoEmail,
        password: senhaAcesso,
        createdAt: new Date().toISOString()
    };
    users.push(usuarioNovo);
    return "Usuário adicionado com êxito!";
};
exports.adicionarUsuario = adicionarUsuario;
// ```
// 2. **obterTodosUsuarios:** Vai ser a função que recupera todos os usuários da lista.
// ```typescript
const obterTodosUsuarios = () => {
    return users;
};
exports.obterTodosUsuarios = obterTodosUsuarios;
// ```
// Essencialmente, a lógica é a mesma do exercício original. Você cria um novo objeto usuário baseado nos parâmetros fornecidos e adiciona esse objeto ao array de usuários. Para recuperar a lista de usuários, você simplesmente retorna o array de usuários. A diferença aqui é apenas nos nomes das funções e variáveis, para que você possa entender o conceito sem copiar diretamente o código.
//# sourceMappingURL=database%20copy.js.map