# Why Most Components Are Too Flexible

One of the most common frontend mistakes doesn't come from bad code.

It comes from good intentions.

A developer creates a component and immediately starts thinking about the future.

What if another team needs a slightly different variation?

What if the design changes?

What if we need a secondary mode?

What if we need a compact version?

What if we need to support six different contexts?

The result is predictable.

A simple component slowly evolves into an API with dozens of options, flags, variants, and configuration points.

Ironically, the component becomes less reusable as it becomes more flexible.

## The Flexibility Trap

Most developers have seen a component like this.

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

Nothing looks wrong at first.

Each property makes sense individually.

The problem appears when flexibility starts accumulating.

Soon nobody knows which combinations are valid.

Nobody knows which combinations were actually tested.

And nobody knows whether changing one variant will break another.

The component has become configurable.

But it hasn't necessarily become useful.

## Reusability Is Not The Same As Flexibility

This is where many component libraries go wrong.

Developers often treat flexibility and reusability as if they were the same thing.

They aren't.

A reusable component solves a recurring problem.

A flexible component accepts many configurations.

Those ideas overlap sometimes.

But not always.

A component with twenty inputs is not automatically more reusable than one with three.

In fact, the opposite is often true.

The more options a component exposes, the harder it becomes to understand.

## Components Are Communication

One of the most important lessons I've learned is that component APIs are communication tools.

When another developer uses a component, they're reading its API as documentation.

A simple API communicates intent.

```ts
<UserAvatar
  user="..."
/>
```

The purpose is obvious.

Compare that to:

```ts
<UserAvatar
  user="..."
  size="medium"
  density="compact"
  appearance="outlined"
  statusPosition="top-right"
  fallbackMode="initials"
/>
```

The second version may be more flexible.

But it demands more knowledge from the developer consuming it.

Every new option creates another decision.

And every decision creates cognitive load.

## The Cost Of Generic Components

Generic components are attractive because they seem efficient.

Instead of creating three components, we create one.

Instead of solving three use cases, we solve every use case.

At least that's the theory.

The reality is usually different.

Generic components tend to accumulate behavior from unrelated requirements.

Eventually they become impossible to reason about.

When a bug appears, nobody is entirely sure which combination of properties triggered it.

When a design changes, nobody knows what else might be affected.

The component becomes a dependency shared by half the application.

Changing it feels dangerous.

## Design Systems Encourage This Problem

Ironically, design systems sometimes make this worse.

Teams begin with good intentions.

They want consistency.

They want reuse.

They want a common language.

Then every possible variation becomes part of the component.

Instead of saying:

```ts
<PrimaryButton />
```

they create:

```ts
<Button
  variant="primary"
/>
```

Then:

```ts
<Button
  variant="secondary"
/>
```

Then:

```ts
<Button
  variant="ghost"
/>
```

Then:

```ts
<Button
  variant="danger"
/>
```

And eventually the component becomes a matrix of states that few people fully understand.

## What I Prefer Today

I've gradually moved toward smaller component APIs.

Fewer inputs.

Fewer variations.

Stronger defaults.

When a component has a clear purpose, using it becomes easier.

Maintaining it becomes easier.

Testing it becomes easier.

And most importantly, understanding it becomes easier.

Sometimes the right solution isn't adding another option.

Sometimes it's creating another component.

## Strong Defaults Beat Endless Configuration

One of the most underrated frontend skills is choosing good defaults.

Developers often assume flexibility comes from configuration.

In reality, flexibility often comes from having sensible defaults that work in most situations.

The fewer decisions developers need to make, the easier a component becomes to adopt.

Good defaults remove friction.

Bad APIs create it.

## Simplicity Scales Better

As applications grow, the number of components increases dramatically.

The number of developers increases.

The number of requirements increases.

At that scale, simplicity becomes more valuable than flexibility.

Simple APIs are easier to learn.

Simple APIs are easier to document.

Simple APIs are easier to evolve.

The best component libraries I've worked with weren't the most powerful.

They were the easiest to understand.

## The Question I Ask Now

Whenever I'm tempted to add another input to a component, I try to ask a simple question:

Does this make the component more useful? Or does it merely make the component more configurable?

Those are not always the same thing.

And learning the difference has improved my frontend code far more than any design pattern ever did.
