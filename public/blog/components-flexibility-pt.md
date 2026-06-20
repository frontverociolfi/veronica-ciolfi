# Por Que a Maioria dos Componentes É Flexível Demais

Um dos erros mais comuns no desenvolvimento frontend não nasce de código ruim.

Na verdade, ele costuma nascer de boas intenções.

Uma desenvolvedora cria um componente simples e imediatamente começa a pensar no futuro.

E se outro time precisar de uma variação?

E se o design mudar?

E se precisarmos de uma versão compacta?

E se esse componente precisar funcionar em cinco contextos diferentes?

E se um dia precisarmos reutilizá-lo em outro produto?

A motivação parece razoável.

O problema é que, aos poucos, o componente deixa de resolver um problema real e passa a tentar resolver todos os problemas possíveis.

É nesse momento que muitos componentes começam a se transformar em pequenas plataformas.

Cheios de inputs.

Cheios de flags.

Cheios de variantes.

Cheios de comportamentos opcionais.

E, ironicamente, quanto mais flexíveis se tornam, menos agradáveis ficam de usar.

## A Armadilha da Flexibilidade

Quase toda pessoa que trabalha com frontend há algum tempo já encontrou um componente parecido com este:

```ts
<Button
  variant="primary"
  size="large"
  appearance="filled"
  density="compact"
  iconPosition="left"
  rounded
  elevated
  fullWidth
  loading
/>
```

À primeira vista, nada parece errado.

Cada propriedade individualmente faz sentido.

O problema aparece quando todas essas decisões começam a se acumular.

Logo surgem dúvidas.

Quais combinações são válidas?

Quais foram realmente testadas?

O que acontece se alguém utilizar todas elas ao mesmo tempo?

Será que alguém sequer sabe?

O componente se tornou extremamente configurável.

Mas não necessariamente mais útil.

E existe uma diferença importante entre essas duas coisas.

## Reutilização Não É Sinônimo de Flexibilidade

Uma das maiores confusões que vejo em bibliotecas de componentes é tratar reutilização e flexibilidade como se fossem a mesma ideia.

Não são.

Um componente reutilizável resolve um problema recorrente.

Um componente flexível aceita muitas configurações.

Esses conceitos podem se sobrepor.

Mas não são equivalentes.

Um componente com vinte inputs não é automaticamente mais reutilizável do que um componente com três.

Em muitos casos, acontece exatamente o contrário.

Quanto mais opções uma API expõe, mais difícil ela se torna de entender.

Mais difícil de documentar.

Mais difícil de testar.

E mais difícil de manter.

A longo prazo, a simplicidade costuma escalar melhor do que a flexibilidade.

## Componentes São Ferramentas de Comunicação

Existe uma forma de enxergar componentes que mudou completamente a maneira como eu desenho APIs.

Componentes não são apenas código.

Eles são ferramentas de comunicação.

Quando outra pessoa utiliza um componente, ela está lendo aquela API como documentação.

Ela está tentando entender:

- O que esse componente faz?
- Em quais situações ele deve ser usado?
- Quais comportamentos são esperados?

Uma API simples comunica intenção.

```ts
<UserAvatar
  user="..."
/>
```

A responsabilidade é clara.

O propósito é evidente.

Agora compare com algo assim:

```ts
<UserAvatar
  user="..."
  size="medium"
  density="compact"
  appearance="outlined"
  statusPosition="top-right"
  fallbackMode="initials"
  borderStyle="dashed"
  animation="fade"
/>
```

Esse componente pode ser extremamente poderoso.

Mas também exige muito mais contexto de quem o utiliza.

Cada nova propriedade representa mais uma decisão.

E cada decisão aumenta a carga cognitiva.

Poucas equipes percebem que a complexidade não aparece apenas na implementação.

Ela também aparece na utilização.

## O Verdadeiro Custo dos Componentes Genéricos

Componentes genéricos parecem eficientes.

A lógica costuma ser simples:

Em vez de criar três componentes, criamos apenas um.

Em vez de resolver três cenários, resolvemos todos.

Parece uma vitória.

Mas nem sempre é.

Na prática, componentes genéricos frequentemente acumulam requisitos de contextos completamente diferentes.

Uma necessidade de uma tela.

Outra necessidade de outro produto.

Uma exceção solicitada por uma equipe.

Outra exceção solicitada meses depois.

O resultado é previsível.

O componente deixa de representar uma única ideia.

Ele passa a representar uma coleção de decisões históricas.

E quando isso acontece, algo curioso surge.

Ninguém mais entende completamente o componente.

Nem quem o criou.

## O Problema dos Inputs Infinitos

Existe um padrão que aparece em muitos projetos maduros.

Sempre que surge uma nova necessidade, alguém adiciona mais um input.

```ts
@Input() compact = false;
```

Depois:

```ts
@Input() outlined = false;
```

Depois:

```ts
@Input() floating = false;
```

Depois:

```ts
@Input() highlighted = false;
```

E assim sucessivamente.

Nenhuma dessas mudanças parece problemática individualmente.

Mas software raramente sofre por decisões individuais.

Ele sofre pelo acúmulo delas.

Depois de alguns anos, o componente possui dezenas de caminhos possíveis de execução.

Testar tudo se torna difícil.

Prever comportamento se torna difícil.

Modificar qualquer coisa se torna arriscado.

Tudo porque cada novo requisito foi tratado como mais uma configuração.

## Quando Criar Outro Componente É Melhor

Uma pergunta que comecei a fazer com frequência é:

"E se isso fosse outro componente?"

Muitas vezes a resposta é surpreendentemente positiva.

Considere um botão principal.

```ts
<PrimaryButton />
```

E um botão destrutivo.

```ts
<DangerButton />
```

Muita gente imediatamente argumenta que isso gera duplicação.

Talvez.

Mas também gera clareza.

Quem lê o código entende imediatamente a intenção.

Não precisa lembrar quais combinações de props produzem determinado comportamento.

Não precisa consultar documentação.

Não precisa interpretar variantes.

A semântica já está presente no próprio componente.

E semântica costuma ser uma das formas mais valiosas de reduzir complexidade.

## Design Systems Também Sofrem Com Isso

Curiosamente, muitos design systems acabam incentivando esse problema.

A intenção é excelente.

Padronização.

Consistência.

Reutilização.

Mas existe uma linha tênue entre um sistema consistente e um sistema excessivamente configurável.

Um botão começa simples.

Depois surgem variantes.

Depois surgem tamanhos.

Depois surgem modos.

Depois surgem estados especiais.

Depois surgem exceções.

De repente, existe uma matriz gigantesca de combinações possíveis.

E poucas pessoas conseguem afirmar com confiança que entendem todas elas.

O design system continua centralizado.

Mas já não é necessariamente simples.

## O Que Eu Prefiro Hoje

Ao longo dos anos, fui me afastando de APIs excessivamente flexíveis.

Hoje prefiro:

- menos inputs
- menos variantes
- responsabilidades mais claras
- defaults mais fortes
- componentes menores

Isso não significa abandonar reutilização.

Significa priorizar legibilidade.

Uma API simples geralmente é mais fácil de usar.

Mais fácil de ensinar.

Mais fácil de testar.

Mais fácil de evoluir.

E principalmente:

Mais fácil de confiar.

## Defaults Fortes São Subestimados

Uma das habilidades mais valiosas em frontend é definir bons padrões.

Muitas equipes tentam resolver tudo através de configuração.

Mas, frequentemente, a melhor experiência vem justamente da ausência dela.

Quando um componente possui defaults fortes, a maioria dos casos de uso funciona sem esforço adicional.

O desenvolvedor não precisa tomar dez decisões para renderizar um botão.

Ele simplesmente utiliza o componente.

Quanto menos decisões desnecessárias existirem, mais confortável a API se torna.

## Simplicidade Escala Melhor

Conforme aplicações crescem, mais pessoas passam a trabalhar nelas.

Mais componentes surgem.

Mais requisitos aparecem.

Mais decisões precisam ser tomadas.

Nesse contexto, simplicidade se torna um ativo extremamente valioso.

APIs simples são mais rápidas de aprender.

Mais fáceis de documentar.

Mais fáceis de revisar.

Mais fáceis de refatorar.

Os melhores sistemas de componentes com os quais trabalhei não eram os mais poderosos.

Eram os mais previsíveis.

## A Pergunta Que Faço Hoje

Sempre que sinto vontade de adicionar mais um input a um componente, tento fazer uma pergunta simples:

Isso realmente torna o componente mais útil?

Ou apenas mais configurável?

As duas coisas não são iguais.

E aprender a distinguir uma da outra melhorou muito mais a qualidade do meu código do que qualquer padrão arquitetural que já estudei.

No fim das contas, componentes existem para resolver problemas.

Não para demonstrar flexibilidade.

E, na maioria dos casos, componentes que fazem poucas coisas de forma clara acabam sendo muito mais valiosos do que aqueles que tentam fazer tudo.
