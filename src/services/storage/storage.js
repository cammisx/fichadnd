function gerarCodigoMesa() {
  return Math.random().toString(36).substring(2, 8).toUpperCase()
}

export function criarUsuario(dados) {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
  usuarios.push(dados)
  localStorage.setItem('usuarios', JSON.stringify(usuarios))
}

export function buscarUsuario(nick, senha) {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
  return usuarios.find(u => u.nick === nick && u.senha === senha)
}

export function criarMesa(mesa) {
  const mesas = JSON.parse(localStorage.getItem('mesas')) || []
  mesas.push(mesa)
  localStorage.setItem('mesas', JSON.stringify(mesas))
}

export function buscarMesaPorCodigo(codigo) {
  const mesas = JSON.parse(localStorage.getItem('mesas')) || []
  return mesas.find(m => m.codigo === codigo)
}

export function gerarMesaParaMestre(nomeMesa, mestreNick) {
  const codigo = gerarCodigoMesa()
  const mesa = {
    id: Date.now(),
    nome: nomeMesa,
    codigo,
    mestre: mestreNick,
    jogadores: []
  }

  criarMesa(mesa)
  return mesa
}
