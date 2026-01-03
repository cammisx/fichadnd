export function salvarSessao(nick) {
  localStorage.setItem('usuario_logado', nick)
}

export function buscarSessao() {
  return localStorage.getItem('usuario_logado')
}

export function limparSessao() {
  localStorage.removeItem('usuario_logado')
}
