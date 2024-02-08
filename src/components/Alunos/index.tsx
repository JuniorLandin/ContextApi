import { Nome } from "../Nome"
import { UserContext } from "../../contexts/user"
import { useContext } from "react"

export function Alunos(){

  const {qtdAlunos, mudaNome} = useContext(UserContext)

  return(
    <div>
      <p>Quantidade de alunos: {qtdAlunos}</p>
      <button onClick={() => mudaNome("Junimmm", 30)}>
        Mudar Nome
      </button>

      <br/>
      <br/>
      <Nome/>
    </div>
  )
}