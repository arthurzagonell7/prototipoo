async function cadastrar(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const data = { email, senha }

    const response = await fetch('http://localhost:3030/usuarios/cadastrar', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const results = await response.json();
    console.log(results)
    if (results.success) {
        alert(results.message)

        window.location.href = "./index.html";
    } else {
        alert(alert.message)
    }


}
