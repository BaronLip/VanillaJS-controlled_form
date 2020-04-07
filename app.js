let user = {}

const handleChange = (event) => {
    event.preventDefault();
    
    let key = event.target.id;
    let value = event.target.value;

    user[key] = value;

    console.log(user);
}

const handleSubmit = (event) => {
    event.preventDefault();
    // One way to do it:
    // let name = document.getElementById("name").value;
    // let email = document.getElementById("email").value;
    
    // user.name = name;
    // user.email = email;

    // Better way to do it:

    alert(`This is the ${user.name} and the ${user.email}`);
}