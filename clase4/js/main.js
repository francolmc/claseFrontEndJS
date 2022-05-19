const usersList = [];

const getUsers = () => {
    drawTable(usersList);
}

const getUsersDestructuring = () => {
    usersList.forEach(item => {
        const {
            firstName
        } = item;
        alert(firstName);
    });
}

const addUser = (email, firstName, lastName) => {
    if(indexUser(email) !== -1) {
        alert('El email ingresado ya se encuentra registrado.')
    }
    else {
        usersList.push({
            email,
            firstName,
            lastName
        });
        getUsers();
        cleanInputs();
    }
}

const deleteUser = (email) => {
    const index = indexUser(email);
    if(index === -1) {
        alert('El usuario no existe')
    } else {
        if(confirm('Esta seguro?') === true) {
            usersList.splice(index, 1);
            getUsers();
        }
    }
}

const indexUser = (email) => {
    let index = -1;
    let indexCount = 0;
    usersList.forEach(item => {
        if(item.email === email) index = indexCount;
        indexCount++;
    })
    return index;

    // Esta nos retorna un valor boolean true cuando encuentra un valor
    // return usersList.some(item => item.email === email);
}

const editUser = (email) => {
    let user = usersList.find(filter => filter.email === email);
    if(!user) {
        alert('El usuario no existe.');
    }
    else {
        document.getElementById('email').value = user.email;
        document.getElementById('firstName').value = user.firstName;
        document.getElementById('lastName').value = user.lastName;
        editAction();
    }
}

const updateUser = (email, firstName, lastName) => {
    let index = indexUser(email);
    if(index === -1) {
        alert('El usuario no existe.');
    }
    else {
        usersList[index].firstName = firstName;
        usersList[index].lastName = lastName;

        getUsers();
        cleanInputs();
        editAction();
    }
}

const changeUpper = (control) => {
    control.value = control.value.toUpperCase();
}

const searchButton = (search) => {
    drawTable(usersList.filter(filter => 
        filter.email.toUpperCase().includes(search.toUpperCase()) ||
        filter.firstName.toUpperCase().includes(search.toUpperCase()) ||
        filter.lastName.toUpperCase().includes(search.toUpperCase())
        ));
}

const drawTable = (list) => {
    let htmlOut = '<table class="table">';
    htmlOut = htmlOut + '<tr>';
    htmlOut = htmlOut + '<th>Email</th><th>First name</th><th>Last name</th><th></th><th></th>';
    htmlOut = htmlOut + '</tr>';
    list.forEach(item => {
        htmlOut = htmlOut + '<tr>';
        htmlOut = htmlOut + `<td>${item.email}</td>`;
        htmlOut = htmlOut + `<td>${item.firstName}</td>`;
        htmlOut = htmlOut + `<td>${item.lastName}</td>`;
        htmlOut = htmlOut + `<td><input type="button" class="btn btn-warning btn-sm" value="edit" onclick="editUser('${item.email}')" /></td>`;
        htmlOut = htmlOut + `<td><input type="button" class="btn btn-danger btn-sm" value="delete" onclick="deleteUser('${item.email}')" /></td>`;
        htmlOut = htmlOut + '</tr>';
    });
    htmlOut = htmlOut + '</table>';
    document.getElementById('userTable').innerHTML = htmlOut;
}

const editAction = () => {
    document.getElementById('email').disabled = document.getElementById('email').disabled ? false : true;
    
    document.getElementById('addButton').style.display = document.getElementById('addButton').style.display === 'none' ? '' : 'none';
    document.getElementById('updateButton').style.display = document.getElementById('updateButton').style.display === '' ? 'none': '';
}

const cleanInputs = () => {
    document.getElementById('email').value = '';
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
}