# Toda Equipe Frontend Acaba Construindo um Design System

Existe uma frase que escuto com frequência em projetos frontend.

"Nós não temos um design system."

Na maioria das vezes, isso não é verdade.

O que geralmente acontece é que a equipe não possui um design system formal.

Não existe documentação.

Não existe um site dedicado.

Não existe uma equipe responsável.

Não existe um nome oficial.

Mas o sistema existe.

Porque sempre que uma equipe constrói interfaces repetidamente, padrões começam a surgir.

E padrões acabam se transformando em um design system, independentemente de alguém planejar isso ou não.

A diferença está apenas no grau de organização.

## O Design System Surge Antes da Documentação

Muitas pessoas imaginam que design systems começam com workshops, diagramas e bibliotecas de componentes.

Na prática, o processo costuma acontecer na direção oposta.

Tudo começa com um botão.

Depois surge outro.

E mais outro.

Logo alguém percebe que existem três versões diferentes do mesmo componente.

Então alguém cria um componente compartilhado.

Depois surgem inputs.

Cards.

Modais.

Badges.

Tabelas.

Alertas.

O sistema começa a nascer naturalmente.

Mesmo que ninguém esteja chamando aquilo de design system.

## O Momento em Que Você Já Tem Um

Existe um momento específico em que a equipe deixa de construir componentes isolados e começa a construir padrões.

Geralmente ele parece algo assim:

```ts
<ButtonPrimary />
<ButtonSecondary />
<ButtonGhost />
```

Ou:

```ts
<Input />
<Select />
<TextArea />
```

Ou:

```ts
<Card />
<CardCompact />
<CardInteractive />
```

Nesse ponto, a equipe já está tomando decisões sobre:

- espaçamento
- tipografia
- cores
- comportamento
- acessibilidade
- consistência

Ou seja:

Já existe um sistema.

Talvez não documentado.

Talvez incompleto.

Mas existe.

## O Problema Não É Ter Um Design System

O problema é fingir que ele não existe.

Quando equipes não reconhecem a existência de um design system, os padrões continuam evoluindo.

Só que de forma desorganizada.

Um time cria um botão.

Outro cria uma versão ligeiramente diferente.

Outro adiciona um novo comportamento.

Outro altera os espaçamentos.

Meses depois existem cinco componentes que resolvem exatamente o mesmo problema.

Todos parecidos.

Nenhum igual.

Nesse momento, o custo de manutenção começa a crescer.

## Design Systems São Sistemas de Decisão

Uma das formas que mais gosto de definir design systems é:

> Um design system é um sistema de decisões compartilhadas.

Muitas pessoas enxergam design systems apenas como bibliotecas de componentes.

Mas componentes são apenas uma consequência.

O verdadeiro valor está nas decisões.

Perguntas como:

- Qual é o espaçamento padrão?
- Qual é a hierarquia tipográfica?
- Como erros devem aparecer?
- Como ações destrutivas devem ser representadas?
- Quais cores possuem significado semântico?

Precisam de respostas consistentes.

O design system existe para fornecer essas respostas.

## O Benefício Não É Reutilização

Quando falamos sobre design systems, reutilização costuma dominar a conversa.

Mas acredito que reutilização não seja o principal benefício.

O principal benefício é redução de decisões.

Imagine uma equipe sem padrões definidos.

Cada nova tela exige dezenas de pequenas escolhas.

Tamanho do botão.

Cor.

Espaçamento.

Tipografia.

Estados.

Comportamentos.

Agora imagine uma equipe com padrões claros.

Grande parte dessas decisões já foi tomada.

O trabalho deixa de ser reinventar componentes.

E passa a ser resolver problemas de produto.

## O Que Acontece Conforme Equipes Crescem

A necessidade de um design system raramente aparece quando existe apenas uma pessoa trabalhando no produto.

Ela surge quando o número de pessoas aumenta.

Novos desenvolvedores entram.

Novos designers entram.

Novas squads aparecem.

De repente, consistência deixa de ser uma consequência natural.

Ela precisa ser construída intencionalmente.

É nesse momento que um design system deixa de ser algo conveniente.

E passa a ser infraestrutura.

## O Erro Que Muitas Equipes Cometem

Um erro comum é tentar construir um design system completo antes que ele seja necessário.

Isso costuma gerar o mesmo problema que vemos em arquitetura frontend.

Abstrações prematuras.

Componentes genéricos.

APIs excessivamente flexíveis.

Complexidade sem necessidade.

Os melhores design systems que já vi não nasceram completos.

Eles evoluíram a partir de padrões reais.

Foram extraídos do produto.

Não inventados antes dele.

## Design Systems São Sobre Pessoas

Existe uma tendência de enxergar design systems como um problema técnico.

Mas eles são principalmente um problema de comunicação.

Designers precisam falar a mesma linguagem que desenvolvedores.

Produto precisa compartilhar as mesmas expectativas.

Equipes precisam tomar decisões consistentes.

O design system se torna uma espécie de contrato coletivo.

Uma referência compartilhada para o produto.

## O Design System Invisível

Mesmo equipes que afirmam não possuir um design system geralmente possuem um.

Ele apenas está espalhado pelo código.

Escondido em componentes.

Duplicado em telas diferentes.

Documentado informalmente em conversas.

Mantido através de conhecimento tribal.

O problema é que design systems invisíveis continuam gerando custos.

Só que sem oferecer os benefícios da centralização.

## Conclusão

Toda equipe frontend eventualmente constrói um design system.

A questão não é se isso vai acontecer.

A questão é quando a equipe vai perceber que já aconteceu.

Porque assim que componentes começam a ser reutilizados, padrões começam a surgir.

Assim que padrões surgem, decisões começam a ser compartilhadas.

E assim que decisões são compartilhadas, um design system já está em formação.

Alguns são documentados.

Outros não.

Alguns são maduros.

Outros são caóticos.

Mas quase todos os produtos que sobrevivem tempo suficiente acabam chegando ao mesmo lugar.

Eles descobrem que consistência não surge por acaso.

Ela precisa ser construída.

E isso, no fim das contas, é exatamente o que um design system faz.
