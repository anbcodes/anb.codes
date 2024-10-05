---
title: "Handling CSVs"
---

May 22nd, 2022

Recently, I needed to create a large CSV. CSV is a format for storing data as a
table which seperates each field with a comma and each row with a newline. For
example a CSV file could look like this.

```csv
name,age,pets
Bob,21,dog
Alice,19,cat
```

Pretty simple right? It is until you need a comma (or quote) within the field.
To avoid the comma problem you can put all the fields in quotes like this.

```csv
"name","age","pets"
"Bob","21","dog, parrot"
"Alice","19","cat"
```

It is slightly more complicated, but not too bad. But wait, what if I have a
quote inside the field? After a bit of searching I discovered that you can
escape a double quote by using two double quotes. Like this.

```csv
"name","age","pets"
"Bob ""The Coder""","21","dog, parrot"
"Alice","19","cat"
```

Now we are done! We can store arbitrary text in each field but some escaping is
required.

If you have a comment - email me at <comments@anb.codes>

This work is licensed under the
[Creative Commons Attribution 4.0 International
License.](http://creativecommons.org/licenses/by/4.0/)

[Home](/)
