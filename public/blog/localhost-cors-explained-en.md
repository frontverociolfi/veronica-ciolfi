# If Everything Is Running on Localhost, Why Do We Still Get CORS Errors?

Every frontend developer runs into this problem sooner or later.

You start a local application.

Your Angular app is running on:

```text
http://localhost:4200
```

Your API is running on:

```text
http://localhost:8080
```

Both applications are running on your machine.

The same laptop.

The same operating system.

The same network.

And yet the browser responds with a familiar message:

```text
Access to fetch at 'http://localhost:8080/api/users'
from origin 'http://localhost:4200'
has been blocked by CORS policy.
```

At first glance, it feels completely unreasonable.

How can two applications running on the same computer be considered "cross-origin"?

The answer lies in how browsers define an origin.

## What Actually Defines an Origin?

Most developers assume an origin is simply a domain.

It's not.

An origin is made up of three parts:

```text
Protocol + Host + Port
```

For example:

```text
http://localhost:4200
```

and

```text
http://localhost:8080
```

share the same:

- Protocol (`http`)
- Host (`localhost`)

But they have different ports.

And from the browser's perspective, that changes everything.

As soon as one of those values changes, you're dealing with a different origin.

These are all considered different:

```text
http://localhost:4200
https://localhost:4200
http://localhost:8080
https://api.myapp.com
```

To a browser, origins are strict.

Close enough doesn't count.

## Why Does The Browser Care?

The easiest way to understand CORS is to stop thinking about your own application.

Instead, think about what would happen if browsers didn't enforce restrictions.

Imagine you're logged into your bank.

In another tab, you visit a malicious website.

Without browser protections, that website could potentially make requests to your bank's API using your existing session.

It could attempt to:

- Read account information
- Access private data
- Trigger actions on your behalf

That would be catastrophic.

To prevent scenarios like this, browsers implement something called the Same-Origin Policy.

The rule is simple:

A website cannot freely access resources from another origin unless permission is explicitly granted.

## What Happens During a Request?

Let's imagine an Angular application making a request.

```ts
this.http.get('http://localhost:8080/api/users');
```

From a developer's perspective, it feels straightforward.

From the browser's perspective, something different is happening.

```text
Origin A
http://localhost:4200

↓

Origin B
http://localhost:8080
```

The browser immediately recognizes this as a cross-origin request.

At that point, it starts checking whether the destination server allows requests from the current origin.

## The Part That Confuses Most Developers

One detail surprises a lot of people.

The backend often receives the request successfully.

Yes, really.

A typical flow looks like this:

```text
Frontend
    ↓
Backend Receives Request ✅
    ↓
Backend Processes Request ✅
    ↓
Backend Sends Response ✅
    ↓
Browser Blocks Response ❌
```

This explains a situation many developers have encountered:

You check your backend logs.

You can clearly see the request arriving.

The controller executes.

The database query runs.

Everything appears successful.

Yet the browser still reports a CORS error.

That's because CORS is primarily enforced by the browser after the response comes back.

The backend did its job.

The browser simply decided not to expose the response to your application.

## How Does CORS Work?

CORS stands for:

```text
Cross-Origin Resource Sharing
```

Despite sounding complicated, the concept is surprisingly simple.

The server tells the browser:

> "I trust requests coming from this specific origin."

It does that through HTTP headers.

For example:

```http
Access-Control-Allow-Origin: http://localhost:4200
```

When the browser sees that header and the origin matches, the response is allowed.

Without it, the response is blocked.

That's the entire idea behind CORS.

The browser isn't asking whether the request succeeded.

It's asking whether the server gave permission.

## Why Does Postman Work?

This is another source of confusion.

Developers often test an endpoint in Postman and everything works perfectly.

Then they try the same request from Angular or React and get a CORS error.

The request is identical.

The URL is identical.

The headers are identical.

So what's different?

The answer is simple:

Postman is not a browser.

Tools like:

- Postman
- Insomnia
- cURL

do not enforce browser security policies.

CORS only exists inside browsers.

That's why a request can work flawlessly in Postman while failing immediately inside Chrome.

## Development Proxies

This is also why Angular and other frontend frameworks often provide development proxies.

For example, instead of calling:

```ts
this.http.get('http://localhost:8080/api/users');
```

You call:

```ts
this.http.get('/api/users');
```

And configure Angular to forward the request to your backend.

From the browser's perspective, everything appears to come from the same origin.

The proxy handles the routing behind the scenes.

It's not removing CORS.

It's avoiding it.

## The Real Lesson

One of the most useful things to understand about CORS is that the browser doesn't care where applications are running.

It doesn't care that they're on the same laptop.

It doesn't care that you're the developer.

It doesn't care that both services are part of the same project.

The browser only cares about origins.

And an origin is defined by:

```text
Protocol + Host + Port
```

Change any one of those values and you're now dealing with a different origin.

Once that clicks, CORS errors start feeling much less mysterious.

They're no longer random browser behavior.

They're simply the browser enforcing rules designed to keep users safe.
