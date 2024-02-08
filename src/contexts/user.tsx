import { ReactNode, createContext, useState } from "react";

interface UserProviderProps {
  children: ReactNode;
}
type UserContextData = {
  aluno: string;
  qtdAlunos: number;
  mudaNome: (nome: string, alunos: number) => void;
  somaQtdAlunos: () => void;
}

export const UserContext = createContext({} as UserContextData)

function UserProvider({children}: UserProviderProps) {

  const [aluno, setAluno] = useState("Junior Landin")
  const [qtdAlunos, setQtdAlunos] = useState(40)

  function mudaNome(nome: string, alunos: number) {
    setAluno(nome)
    setQtdAlunos(alunos)
  }

  function somaQtdAlunos(){
    setQtdAlunos(qtdAlunos + 1)
  }

  return(
    <UserContext.Provider value={{aluno, qtdAlunos, mudaNome, somaQtdAlunos}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider