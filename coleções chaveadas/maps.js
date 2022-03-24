function getAdmins(map) {
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz','Admin');
usuarios.set('Clarice','Admin');
usuarios.set('Júnior','User');
usuarios.set('Vini','Admin');

console.log(getAdmins(usuarios));