let userData = {
    name : "",
    email : "",
    messege : ""
}

document.querySelector('form').addEventListener('change', (e) => {
    let {name, value} = e.target;
    userData[name] = value;
});

document.querySelector('form')
.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(userData);
    const eBody = `
    <b>User Name :</b> ${userData.name}
    <br/>
    <b>User Email :</b> ${userData.email}
    <br/>
    <b>User Messege :</b> ${userData.messege}
    `
    Email.send({
        SecureToken : "caca8967-0cd4-458e-8247-c3e32ebc5d1f",
        To : 'baunabuddhadev2021@gmail.com',
        From : "baunabuddhadev2021@gmail.com",
        Subject : "Mail From Contact Form...",
        Body : eBody
    }).then((messege) => {
        if(messege === 'OK') {
            Swal.fire({
                title: "Welcome!",
                text: "Message send successfully!",
                icon: "success"
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: 'Try some time later.'
            });
        }
    })
});