function gerarSenha() {
    const numeros = "0123456789";
    const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const extras = "abcdefghijklmnopqrstuvwxyz";

    let senha = [];

    // 3 números obrigatórios
    for (let i = 0; i < 3; i++) {
        senha.push(
            numeros[Math.floor(Math.random() * numeros.length)]
        );
    }

    // 2 letras maiúsculas obrigatórias
    for (let i = 0; i < 2; i++) {
        senha.push(
            maiusculas[Math.floor(Math.random() * maiusculas.length)]
        );
    }

    // 1 caractere extra
    senha.push(
        extras[Math.floor(Math.random() * extras.length)]
    );

    // Embaralhar
    for (let i = senha.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [senha[i], senha[j]] = [senha[j], senha[i]];
    }

    // Mostrar nas 6 caixinhas
    for (let i = 0; i < 6; i++) {
        document.getElementById(`c${i + 1}`).textContent = senha[i];
    }
}

// Gera uma senha ao abrir
gerarSenha();