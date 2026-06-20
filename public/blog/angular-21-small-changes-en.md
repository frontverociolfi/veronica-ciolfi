# Angular 21: Small Changes That Make the Framework Better

Angular 21 is not a release built around a single groundbreaking feature. Instead, it continues the direction the framework has been following over the last few versions: less boilerplate, more predictable APIs, and a smoother developer experience.

If you already work with Angular every day, you probably won't rewrite entire applications because of this update. Still, there are a few improvements that make development feel cleaner and reduce the amount of incidental code we need to maintain.

## What Stood Out to Me

The evolution of Signals remains one of the most interesting areas of the framework. Angular continues investing in more declarative APIs and a tighter integration between reactivity and components.

In practice, that means less code dedicated to synchronizing state and fewer situations where we need complex observable chains just to keep data in sync.

## Example 1: linkedSignal

One of the more interesting additions is `linkedSignal`, which allows you to create a signal derived from another value while still being able to update it locally.

Imagine an edit screen where you receive data from an API but want to allow users to modify it without immediately changing the original state.

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

This pattern was fairly common before and often required effects or manual state copying. With `linkedSignal`, the intent becomes much clearer.

## Example 2: Resource API

Another feature that continues to mature is the Resource API.

It provides a more declarative way to fetch asynchronous data and manage loading states without creating additional infrastructure for every request.

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

In the template:

```html
@if (userResource.isLoading()) {
  <p>Loading...</p>
}

@if (userResource.value(); as user) {
  <h2>{{ user.name }}</h2>
}
```

For screens that depend on simple HTTP requests, this approach significantly reduces the amount of boilerplate needed to handle loading and state management.

## Is It Worth Updating?

In my opinion, yes.

Not because Angular 21 introduces a must-have feature, but because it continues reinforcing a direction that has made the framework increasingly pleasant to work with.

The last few years brought Signals, built-in control flow, standalone components, and new reactive APIs. Angular 21 feels less like a major disruption and more like another solid step in that evolution.

And honestly, that consistency might be the most valuable improvement of all.
