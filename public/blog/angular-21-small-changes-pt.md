# Angular 21: pequenas mudanças que deixam o framework mais agradável

O Angular 21 não é uma versão de grandes revoluções. Em vez disso, ele continua refinando a direção iniciada nas últimas releases: menos boilerplate, APIs mais previsíveis e uma experiência mais alinhada com aplicações modernas.

Se você já trabalha com Angular diariamente, provavelmente não vai reescrever projetos inteiros por causa desta atualização. Ainda assim, existem algumas melhorias que tornam o desenvolvimento mais confortável e reduzem a quantidade de código incidental que precisamos manter.

## O que me chamou atenção

A evolução dos Signals continua sendo uma das áreas mais interessantes do framework. O Angular também segue investindo em APIs mais declarativas e em uma integração cada vez mais natural entre reatividade e componentes.

Na prática, isso significa menos código para sincronizar estado e menos dependência de padrões que antes exigiam múltiplos observables ou gerenciamento manual de efeitos.

## Exemplo 1: linkedSignal

Uma das novidades interessantes é o `linkedSignal`, que permite criar um sinal derivado que continua sincronizado com outro valor, mas ainda pode ser atualizado localmente.

Imagine uma tela de edição onde o usuário recebe um valor inicial da API, mas pode modificá-lo sem alterar imediatamente o estado original.

```ts
import { signal, linkedSignal } from '@angular/core';

const selectedUser = signal({
  id: 1,
  name: 'Veronica',
});

const editableName = linkedSignal(() => selectedUser().name);

editableName.set('Vero');

console.log(editableName()); // Vero
```

Esse tipo de padrão era relativamente comum e frequentemente exigia efeitos ou cópias manuais de estado. Agora a intenção fica muito mais explícita.

## Exemplo 2: Resource API

Outra funcionalidade que continua amadurecendo é a Resource API.

Ela oferece uma forma mais declarativa de buscar dados assíncronos e acompanhar estados de carregamento sem criar estruturas adicionais para cada requisição.

```ts
import { resource, signal } from '@angular/core';

const userId = signal(1);

const userResource = resource({
  params: () => ({
    id: userId(),
  }),
  loader: async ({ params }) => {
    const response = await fetch(`/api/users/${params.id}`);

    return response.json();
  },
});
```

No template:

```html
@if (userResource.isLoading()) {
  <p>Carregando...</p>
}

@if (userResource.value(); as user) {
  <h2>{{ user.name }}</h2>
}
```

Para telas que dependem de chamadas HTTP simples, a abordagem reduz bastante a quantidade de código de infraestrutura.

## Vale a pena atualizar?

Na minha opinião, sim.

Não porque o Angular 21 introduz uma funcionalidade obrigatória, mas porque ele continua consolidando uma direção que tem deixado o framework mais previsível e agradável de trabalhar.

Os últimos anos trouxeram Signals, controle de fluxo nativo, componentes standalone e novas APIs reativas. O Angular 21 parece menos uma ruptura e mais um passo consistente nessa evolução.

E, honestamente, essa consistência talvez seja a mudança mais importante de todas.
