# Arquitetura Frontend: Complexidade é Débito, não Funcionalidade

Desenvolvedores frontend adoram arquitetura.

Gostamos de discutir estruturas de pastas, gerenciamento de estado, limites entre domínios, padrões de projeto, camadas, abstrações e todos aqueles tópicos que fazem engenharia de software parecer, bem, engenharia.

Não há nada de errado nisso. Boa arquitetura realmente importa.

O problema é que discussões arquiteturais costumam acontecer exatamente no momento em que são menos úteis: quando o projeto acabou de nascer.

O repositório está vazio.

Não existem usuários.

Não existem incidentes em produção.

Não existem problemas de escala.

Não existem dificuldades de onboarding.

Não existe lógica duplicada.

E, ainda assim, é justamente nesse momento que muitas equipes sentem a necessidade de projetar um sistema capaz de sobreviver aos próximos cinco anos.

Eu já fiz isso.

A maioria dos desenvolvedores já fez.

A intenção quase sempre é boa. Queremos evitar erros futuros. Queremos criar uma base sólida para crescimento. Queremos ser responsáveis.

Ironicamente, essa busca por responsabilidade frequentemente cria complexidade muito antes de existir qualquer necessidade real para ela.

Ao longo dos anos, me convenci de que uma das habilidades mais valiosas em arquitetura frontend não é saber quando adicionar estrutura.

É saber quando não adicionar.

## A Tentação da Arquitetura Perfeita

Todo desenvolvedor conhece essa sensação.

Você inicia um projeto novo e, de repente, cada decisão parece definitiva.

As features devem ser organizadas por domínio?

A comunicação com APIs deve passar por repositories?

Precisamos de stores?

Facades?

Adapters?

Componentes totalmente apresentacionais?

Separação entre estado local e estado remoto?

A lista nunca termina.

O interessante é que essas discussões raramente acontecem porque o projeto realmente precisa dessas soluções naquele momento.

Elas acontecem porque imaginamos a possibilidade de precisar delas algum dia.

E essa diferença importa.

Arquitetura funciona melhor quando responde a pressões reais.

Ela se torna perigosa quando começa a responder a pressões hipotéticas.

No momento em que arquitetura deixa de ser reação e passa a ser previsão, a complexidade começa a se acumular.

E complexidade, ao contrário de funcionalidades, costuma permanecer.

## Arquitetura Deve Seguir a Realidade

Uma das lições mais importantes que aprendi na carreira é que arquitetura deve emergir da realidade.

Não de previsões.

Não de diagramas.

Não de palestras em conferências.

Da realidade.

Conforme uma aplicação cresce, certos problemas naturalmente começam a aparecer.

Talvez componentes se tornem difíceis de reutilizar.

Talvez o estado fique difícil de rastrear.

Talvez contratos de API se tornem inconsistentes.

Talvez novos desenvolvedores tenham dificuldade para localizar o código relevante.

Esses são problemas reais.

Esses são sinais.

E sinais devem influenciar arquitetura.

O erro que vejo com frequência é tentar antecipar esses sinais antes que eles existam.

O resultado costuma ser um sistema otimizado para problemas que ninguém realmente enfrentou.

Já trabalhei em aplicações com camadas de repository que nunca precisaram existir.

Facades que não simplificavam absolutamente nada.

Abstrações de estado que introduziam mais complexidade do que resolviam.

Todas essas decisões pareciam excelentes em teoria.

Pouquíssimas continuaram parecendo excelentes depois de alguns meses de manutenção.

Arquitetura deveria resolver atrito.

Não imaginação.

## O Custo da Abstração Prematura

Abstrações passam uma sensação agradável de organização.

Elas fazem sistemas parecerem mais sofisticados.

Mais maduros.

Mais profissionais.

O problema é que toda abstração possui um custo.

Cada camada adicionada representa mais um conceito que alguém precisará entender.

Mais um lugar onde bugs podem se esconder.

Mais uma decisão que futuros desenvolvedores precisarão interpretar.

Imagine uma chamada simples de API.

```ts
this.http.get<User[]>('/api/users');
```

Direta.

Legível.

Fácil de seguir.

Agora imagine a mesma chamada após algumas reuniões de arquitetura.

```ts
this.userFacade.loadUsers();
```

Que chama:

```ts
this.userStore.fetchUsers();
```

Que chama:

```ts
this.userRepository.getUsers();
```

Que finalmente executa:

```ts
this.http.get<User[]>('/api/users');
```

Nenhuma dessas camadas é necessariamente errada.

A pergunta importante é:

Elas estão gerando valor suficiente para justificar sua existência?

Porque cada camada cria distância entre intenção e execução.

Quanto mais distância existe, mais esforço é necessário para entender o sistema.

Quando desenvolvedores passam mais tempo navegando pela arquitetura do que resolvendo problemas de produto, algo provavelmente saiu do controle.

## Arquitetura Frontend É Principalmente Comunicação

Existe uma percepção sobre arquitetura que mudou completamente a forma como eu trabalho.

Arquitetura não existe principalmente para o código.

Ela existe para as pessoas.

Código é apenas o meio pelo qual equipes se comunicam.

Estruturas de pastas comunicam propriedade.

Componentes comunicam responsabilidade.

Serviços comunicam comportamento.

TypeScript comunica contratos.

O motivo pelo qual arquitetura importa não é porque computadores precisam dela.

Computadores executam código ruim com a mesma eficiência que executam código bom.

Arquitetura existe porque seres humanos precisam compreender sistemas.

Quando comecei a enxergar arquitetura como uma ferramenta de comunicação, muitas decisões ficaram mais simples.

A pergunta deixou de ser:

"Esse padrão é sofisticado o suficiente?"

E passou a ser:

"A próxima pessoa conseguirá entender isso?"

Essa costuma ser uma pergunta muito mais útil.

## Por Que Equipes Fazem Overengineering

Eu não acredito que a maior parte do overengineering aconteça por ego.

Pelo menos não exclusivamente.

Acho que, muitas vezes, ele nasce da ansiedade.

Desenvolvedores sabem que software se torna mais complexo com o tempo.

Sabem que requisitos mudam.

Sabem que equipes crescem.

Sabem que produtos evoluem.

Então tentam se preparar.

O problema é que incerteza frequentemente incentiva complexidade.

A equipe teme precisar de uma funcionalidade futura.

Então cria a abstração agora.

Teme problemas de escala.

Então adiciona infraestrutura agora.

Teme duplicação de lógica.

Então cria camadas agora.

Às vezes essas preocupações se mostram corretas.

Muitas vezes não.

O desafio está em reconhecer que arquitetura é sempre uma troca.

Preparar-se para um futuro possível inevitavelmente tem um custo no presente.

E esse custo não deveria ser ignorado.

## O Que Eu Tento Otimizar

Com o passar dos anos, minhas prioridades ficaram surpreendentemente simples.

Quando avalio uma arquitetura frontend, normalmente faço quatro perguntas.

Um novo desenvolvedor consegue entendê-la rapidamente?

Conseguimos refatorar com segurança?

As pessoas conseguem encontrar o que procuram facilmente?

Mudanças de requisito exigem alterações locais ou uma reescrita significativa?

Se a resposta para essas perguntas for positiva, a arquitetura provavelmente está cumprindo seu papel.

Perceba o que não aparece nessa lista.

Padrões.

Camadas.

Tendências do mercado.

Nenhum desses elementos importa muito se a equipe tem dificuldade para trabalhar dentro do sistema.

Legibilidade continua vencendo sofisticação na maioria dos cenários.

## A Arquitetura Que Eu Prefiro Hoje

A arquitetura que prefiro atualmente é muito menos ambiciosa do que aquela que eu imaginava ideal no início da carreira.

Gosto de organizar aplicações por features.

Gosto de manter código relacionado próximo.

Gosto de limites claros definidos pelo TypeScript.

Gosto de componentes com responsabilidades evidentes.

Gosto de remover abstrações até que exista um problema real exigindo que elas retornem.

Para muitas aplicações Angular, algo tão simples quanto isso costuma ser suficiente:

```text
src/
  app/
    core/
    shared/
    pages/
      blog/
      projects/
      dashboard/
```

Estruturas simples frequentemente são subestimadas.

Não porque sejam incapazes.

Mas porque são fáceis de entender.

E compreensão continua sendo um dos recursos mais valiosos em desenvolvimento de software.

## Arquitetura É Uma Ferramenta

Uma das maiores armadilhas da engenharia de software é tratar arquitetura como um objetivo final.

Ela não é.

Usuários não se beneficiam de estruturas de pastas sofisticadas.

Clientes não se importam com camadas de abstração.

Empresas não aumentam receita porque existe um repository pattern.

Arquitetura existe para apoiar o desenvolvimento.

Nada mais.

Nada menos.

As melhores arquiteturas frontend com as quais trabalhei raramente eram as mais sofisticadas.

Eram aquelas que desapareciam silenciosamente para o segundo plano.

Ajudavam desenvolvedores a trabalhar mais rápido.

Reduziam confusão.

Tornavam mudanças mais seguras.

E conseguiam fazer tudo isso sem exigir atenção constante.

Essa é a arquitetura que tento construir hoje.

Não a arquitetura que parece impressionante.

Mas a arquitetura que continua útil.
