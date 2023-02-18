---
title: "Controlling a LED Strip Using Equations"
---

November 23rd, 2022

I have an individually addressable LED strip, which I wanted to be able to
control from my phone or computer. The LED strip contains about 250 LEDs. I
wanted a way to easily program them to any pattern, so I came up with an
expression language that lets you write things like.

```py
t * 2 + i
```

Where `i` and `t` are special variables meaning the time and the index.
Assigning this equation to the hue of the lights would produce a rainbow pattern
across the lights. ([try it out](http://leds.anb.codes)). This allows me to
create all sorts of patterns on my LEDs without requiring a code update.

## How it works

First, here is a broad overview of the setup. I have a WS2812b LED strip which
is connected to an Arduino MKR WiFi 1010 and a power supply I also have a
Raspberry Pi and a webcam. The website is hosted on Github pages. The Arduino
code is written in C++ and runs an interpreter which interprets a custom
language (not the raw strings). The website is written using SvelteKit,
TailwindCSS, and Typescript. The website compiles the expressions into a
stack-based binary language (which I describe below). The Raspberry Pi runs
websockify to proxy the WebSockets.

### The Language

The expression language is described [on the led site](http://leds.anb.codes),
but that language compiles to a binary language that looks a bit different. The
binary language is stack-based. You push values onto the stack and then
functions modify the values on the stack. So for example to add two numbers, the
\"assembly\" looks like this.

```py
VAL 10 # Push 10 onto the stack
VAL 20 # Push 20 onto the stack
ADD    # Pop two values on the stack and push the result
```

The result of that \"program\" would be `30` on the stack. This is how you would
implement `(10 + 20) * 3`

```py
VAL 10 # Push 10 onto the stack  - Stack: [10]
VAL 20 # Push 20 onto the stack  - Stack: [10, 20]
ADD    # Add the two values      - Stack: [30]
VAL 3  # Push 3 onto the stack   - Stack: [30, 3]
MUL    # Multiply the two values - Stack: [90]
```

The language is very simple. It\'s all unsigned 32-bit integers when its
compiled and it supports the following commands: `SIN`, `ADD`, `SUB`, `MUL`,
`DIV`, `SIN`, `POW`, `MOD`, `IF`, `EQ`, `GT`, `LT`, `AND`, `OR`, `VAL`, `VAR_T`,
`VAR_I`, `END`.

`VAL` is a special code that prefixes numbers. It is not a function.

### The Website

The website is written in SvelteKit, TailwindCSS, and Typescript and is hosted
on GitHub Pages. The website compiles the expressions to the stack language and
sends them over WebSockets to the Raspberry Pi. The compiler is pretty simple,
the main part that probably doesn\'t work quite right is the order of
operations. The live stream comes from Twitch and I use OBS to broadcast it. The
expressions are immediately sent to the server as you type them in, but it
always waits for one expression to send before sending another.

Note: All the code that runs this setup is
[on Github](https://github.com/anbcodes/led-functions)

## Wrap up

That\'s it! If you have more questions, look at
[the code](https://github.com/anbcodes/led-functions). It\'s not very nice code,
but maybe you can understand it. I only spent a few days coding this, so there
are probably many bugs. Overall, it is a useful project for me and might be
useful (or at least interesting) to someone else.

If you have a comment - email me at <comments@anb.codes>

This work is licensed under the
[Creative Commons Attribution 4.0 International
License.](http://creativecommons.org/licenses/by/4.0/)

[Home](/)
