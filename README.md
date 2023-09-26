# mobx-react-introducao
O MobX é uma biblioteca de gerenciamento de estados para aplicações JavaScript, entre elas está o React. É uma biblioteca extremamente simples que adiciona uma forma fácil de lidar com estados na sua aplicação utilizando do conceito de observáveis, atualizando também valores computados.
O conceito de observáveis pode ser entendido ao pensar que o computador está toda hora de olho na variável, onde sempre que ela for alterada, ele notifica todos os componentes que a estão utilizando para atualizarem seu estado para o novo recém identificado.

### Estado:
Se refere ao estado atual da aplicação, tal qual é guardado de forma centralizada que pode ser acessada diretamente por qualquer componente que precisar. Este dado pode ser de qualquer tipo JavaScript, incluindo arrays e objetos, podendo ser usado com estruturas de dados simples e complexas.

### Ações:
São as funções que modificam o estado. Elas representam as mudanças de estados e também podem ser acionadas por interações de usuário, requisições ou qualquer outro evento que afete o estado da aplicação.

### Derivações:
São valores que atualizam automaticamente baseados no estado da aplicação. Existem dois tipos:
#### Reações (Reactions): 
Funções que são executadas automaticamente sempre que alguma das observáveis mudar. Utilizadas normalmente como efeitos de segundo plano em resposta à mudança de estados. Reações podem ser ativadas por qualquer mudança de estado, executadas assim que a mudança ocorrer.
#### Valores computados (Computed values): 
São valores que são calculados de acordo com o estado da aplicação. Assim que alguma das observáveis for alterada, o valor é calculado novamente.

Inicialmente precisamos criar o projeto, na pasta destino executamos o comando:
```
npx create-react-app exemplo-mobx
```
Depois disso, precisamos instalar as dependências mobx e mobx-react ao projeto:
```
npm install mobx
npm install mobx-react
```
Por fim, para iniciar a aplicação:	
```
npm start
```

