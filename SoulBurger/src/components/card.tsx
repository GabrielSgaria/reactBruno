interface CardProps {
    nome: string
    endereco: {
        rua: string
        numero: number
        bairro: string
        cidade: string
        estado: string
        cep: string
      }
    telefone: string
}

export function Card({nome, endereco, telefone}:CardProps) {
    return (
        <div className="soul-1">
            <div className="info">
              <h1>{nome}</h1>
              <p>{endereco.rua},{endereco.numero} - {endereco.bairro}</p>
              <p>{telefone}</p>
            </div>
            <div className="cardapio">
              <a href="/">Cardápio</a>
            </div>
        </div>
    )
}