const arrayExample1 = () => {
    let users = ['fmorales', 'acastro', 'froncalla'];

    for(i = 0; i < 3; i++) {
        alert(users[i]);
    }
}

const arrayExample2 = () => {
    let users = ['fmorales', 'acastro', 'froncalla'];

    users.forEach(item => {
        alert(item);
    });
}

const arrayExample3 = () => {
    let users = ['fmorales', 'acastro', 'froncalla'];

    users.forEach(item => alert(item));
}

const arrayExample4 = () => {
    let users = ['fmorales', 'acastro', 'froncalla'];

    let users2 = users.map(item => {
        if(item !== 'fmorales')
            return 'usuario bloqueado';
        return item;
    });

    users2.forEach(item => alert(item));
}

const arrayExample5 = () => {
    let users = ['fmorales', 'acastro', 'froncalla'];

    // agregar un elemento al array
    users.push('lmorales');

    users.forEach(item => alert(item));
}

const arrayExample6 = () => {
    let users = ['fmorales', 'acastro', 'froncalla'];

    // agregar un elemento al array
    let users2 = [...users, 'lmorales'];

    users2.forEach(item => alert(item));
}

const arrayExample7 = () => {
    let users = ['fmorales', 'acastro', 'froncalla', 'lmorales'];

    // eliminar elemento de un array

    // eliminar el ultimo elemento del array
    users.pop();

    // elimina el primer elemento del array
    users.shift();

    // elimina un elemento por su indice (index)
    users.splice(1);

    users.forEach(item => alert(item));
}

const arrayExample8 = () => {
    let users = ['fmorales', 'acastro', 'froncalla', 'lmorales'];

    let users2 = users.filter(filter => !filter.includes('morales'));

    users2.forEach(item => alert(item));
}