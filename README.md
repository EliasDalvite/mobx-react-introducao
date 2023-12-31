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

O exemplo criado é um formulário com cadastro de usuários, onde primeiramente criamos uma classe para o objeto que queremos armazenar, o qual chamamos de MobxObj.js, onde foram mapeadas as variáveis em relação ao seu objetivo dentro do objeto.

Também foi criado o arquivo ListaObj, uma constante que retorna todos os usuários cadastrados no objeto. É importante destacar o uso da anotação observer, a mesma faz parte da biblioteca mobx-react e é usada para transformar componentes React em componentes observáveis. Isso significa que o componente irá "observar" os observáveis MobX e automaticamente se atualizar quando esses observáveis forem modificadas.

Também é criado um componente para um formulário, onde o mesmo também utiliza da anotação observer, seguindo o mesmo princípio.

Aproveitei para demonstrar como o objeto se comporta com as rotas vistas anteriormente em aula, onde é confirmado que tudo funciona corretamente.

Comparações com o REDUX:
### Aprendizado: 
MobX é considerado mais simples do que o Redux, onde a maioria dos desenvolvedores JavaScript tendem a ser mais proficientes com orientação a objetos, tornando o processo de aprendizado mais fácil, já que o Redux mistura arquitetura Flux e princípios de functional programming.

### Debugging: 
O Redux oferece boas ferramentas de desenvolvimento, incluindo time travel (voltar no tempo!!). Enquanto isso o MobX deixa a desejar pois conta com uma maior abstração para funcionar.

### Estrutura dos dados: 
Redux utiliza objetos básicos do JavaScript para guardar os estados, o que permite que as mudanças sejam monitoradas manualmente. Já o MobX usa de dados observáveis para rastrear as mudanças, assim, muitos preferem o MobX por conta da conveniência do seu uso.

### Mutabilidade: 
Redux tem seu estado imutável, enquanto os valores dos estados do MobX são mutáveis, sejam eles primitivos ou complexos.
