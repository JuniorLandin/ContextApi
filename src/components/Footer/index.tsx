import { UserContext } from "../../contexts/user"
import { useContext } from "react"

export function Footer(){

  const {qtdAlunos, somaQtdAlunos} = useContext(UserContext)

  return(
    <footer>
      <hr />
      <h2>Footer</h2>
      <h4>Alunos online na plataforma: {qtdAlunos}</h4>

      <button onClick={() => somaQtdAlunos()}>
        Novo Aluno
      </button>
    </footer>
  )
}