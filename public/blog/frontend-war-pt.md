# React vs Angular: A Guerra Errada do Frontend

Se você passou tempo suficiente trabalhando com frontend, provavelmente já viu essa discussão.

Desenvolvedores React dizem que Angular é pesado.

Desenvolvedores Angular dizem que React é incompleto.

Conferências, vídeos, posts e discussões intermináveis foram construídos em torno dessa comparação.

Depois de trabalhar profissionalmente com ambos, cheguei a uma conclusão um pouco impopular:

Grande parte dessa discussão não importa.

Não porque React e Angular sejam iguais.

Eles não são.

Mas porque a tecnologia que mais impactou minha carreira, a qualidade do meu código e minha capacidade de construir software não foi React nem Angular.

Foi TypeScript.

## O Debate dos Frameworks

Desenvolvedores frontend adoram discutir frameworks.

É compreensível.

Frameworks são visíveis.

Eles moldam a forma como trabalhamos todos os dias.

Influenciam arquitetura, testes, gerenciamento de estado e até estratégias de deploy.

React e Angular abordam esses problemas de maneiras muito diferentes.

React oferece uma base relativamente pequena e espera que cada equipe monte sua própria pilha de ferramentas.

Angular entrega um ecossistema mais completo desde o início.

As duas abordagens possuem vantagens.

React oferece flexibilidade.

Angular oferece consistência.

O interessante é que os maiores problemas que encontrei em aplicações reais raramente foram causados por uma dessas filosofias.

Eles surgiram de estruturas de dados mal definidas, contratos frágeis e tipagem insuficiente.

Em outras palavras:

Não eram problemas de framework.

Eram problemas de tipos.

## O Verdadeiro Custo da Falta de Tipagem

As aplicações frontend mais complexas em que trabalhei não eram difíceis por causa da renderização.

Eram difíceis por causa dos dados.

Milhares de campos.

Centenas de contratos de API.

Regras de negócio complexas.

Múltiplos times alterando a mesma base de código simultaneamente.

Nessa escala, o desafio passa a ser entender informação.

Não desenhar botões.

É aí que TypeScript muda tudo.

Uma aplicação bem tipada cria uma linguagem compartilhada entre desenvolvedores.

Documenta intenções.

Revela erros mais cedo.

Reduz a quantidade de contexto que cada pessoa precisa carregar na cabeça.

Quanto maior a aplicação, mais valiosas essas garantias se tornam.

## O React Antes e Depois do TypeScript

Uma das razões pelas quais React ficou muito mais agradável de usar ao longo dos anos não foi o React em si.

Foi o TypeScript.

Hoje é comum encontrar aplicações React com:

- props tipadas
- respostas de API tipadas
- hooks tipados
- estado tipado
- utilitários tipados

```ts
type User = {
  id: string;
  name: string;
};

function UserCard({ user }: { user: User }) {
  return <h2>{user.name}</h2>;
}
```

Parece simples.

Até que o projeto tenha centenas de componentes.

Nesse momento, essas pequenas definições se tornam infraestrutura.

Não foi o framework que trouxe essa segurança.

Foi o TypeScript.

## A Vantagem Secreta do Angular

Angular frequentemente recebe crédito por coisas que, na prática, são vantagens do TypeScript.

Formulários fortemente tipados.

Serviços tipados.

Injeção de dependência tipada.

APIs tipadas.

Angular abraça esses padrões de forma excelente.

Mas a verdadeira força vem da linguagem por trás deles.

```ts
@Injectable()
export class UserService {
  getUser(id: string): Observable<User> {
    return this.http.get<User>(`/users/${id}`);
  }
}
```

A confiança não vem do Angular.

Ela vem da certeza sobre os dados que entram e saem do sistema.

Angular apenas incentiva essa disciplina.

## O Que as Empresas Realmente Precisam

Uma startup com três desenvolvedores possui necessidades diferentes de uma empresa de saúde com dez anos de plataforma.

React costuma se destacar quando flexibilidade é prioridade.

Angular costuma se destacar quando consistência é prioridade.

Nenhum dos dois é objetivamente melhor.

Eles apenas foram otimizados para contextos diferentes.

O problema começa quando confundimos preferência pessoal com verdade técnica.

## A Fase da Maturidade

Existe um momento na carreira em que você para de se importar em vencer discussões sobre frameworks.

Você começa a se importar com manutenção.

As perguntas mudam.

O código é compreensível?

Refatorações são seguras?

Deploys são previsíveis?

Novos desenvolvedores conseguem contribuir rapidamente?

TypeScript influencia essas respostas muito mais do que a maioria das escolhas de framework.

## O Futuro Compartilhado

O curioso é que React e Angular ficaram mais parecidos ao longo do tempo.

Os dois adotam arquiteturas baseadas em componentes.

Os dois investem fortemente em experiência de desenvolvimento.

Os dois caminham em direção a sistemas mais previsíveis e tipados.

As comunidades se comportam como torcidas rivais.

Os frameworks, por outro lado, estão convergindo lentamente.

## A Guerra Errada

A discussão React versus Angular não é completamente inútil.

Existem diferenças arquiteturais importantes.

Existem trade-offs reais.

Existem cenários em que um se encaixa melhor que o outro.

Mas a conversa frequentemente ignora aquilo que mais gera valor no desenvolvimento frontend moderno.

Dados confiáveis.

Contratos claros.

Código previsível.

É aí que vive o TypeScript.

E é aí que boa parte da produtividade de longo prazo é construída.

O framework determina como você desenvolve.

O TypeScript determina o quão confiante você consegue continuar desenvolvendo.

E, no longo prazo, confiança costuma importar mais.
