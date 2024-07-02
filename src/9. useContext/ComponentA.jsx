import React, {useState, createContext} from 'react';
import ComponentB from './ComponentB';

export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("John");

  return (
    <div className='box'>
        <h1>ComponentA</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value={{user}}>
            <ComponentB user={user}/>
        </UserContext.Provider>
    </div>
  )
}

export default ComponentA

//* UseContext() = É um hook que permite a você passar dados através da árvore de componentes sem ter que passar props manualmente em cada nível.
// UseEffect() = É um hook que permite a você executar efeitos colaterais em componentes funcionais.
// UseState() = É um hook que permite a você adicionar o estado do React a componentes funcionais.
// UseReducer() = É um hook que permite a você gerenciar o estado de componentes funcionais.
// UseRef() = É um hook que permite a você criar referências mutáveis em componentes funcionais.
// UseMemo() = É um hook que permite a você memorizar valores computados.
// UseCallback() = É um hook que permite a você memorizar funções.
// UseLayoutEffect() = É um hook que permite a você executar efeitos colaterais em componentes funcionais, mas sincronizado com a renderização.
// UseImperativeHandle() = É um hook que permite a você acessar o nó DOM filho de um componente funcional.
// UseDebugValue() = É um hook que permite a você exibir rótulos de depuração para hooks customizados.