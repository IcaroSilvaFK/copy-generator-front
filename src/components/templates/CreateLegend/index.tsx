import { Container } from './styles'

export function CreateLegend() {
  return (
    <Container>
      <header>
        <h3>Crie uma legenda para suas postagens no Instagram</h3>
      </header>

      <form>
        <div>
          <label>Nos diga um pouco sobre o que você está postando</label>
          <textarea placeholder="Por exemplo: Foto de um hambúrguer com 2 carnes de 180g acompanhado de uma coca-cola de 350ml e batatas fritas..." />
        </div>
        <footer>
          <button>Gerar minha legenda</button>
        </footer>
      </form>
    </Container>
  )
}
