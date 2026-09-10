// 15. Verifique se um usuário não está bloqueado.

let bloqueado = (prompt(`O usuário está bloqueado (S/N)?`) === "S");
if (!bloqueado) {
    console.log("Acesso permitido (Usuário não está bloqueado).");
} else {
    console.log("Acesso negado (Usuário bloqueado).");
}

