---
title: "Discovering the Retry-After header"
---

May 21st, 2022

Recently I got a job on [fiverr](https://www.fiverr.com/users/anbcodes) to
scrape a website. The job was to extract some data from 32K different pages.

I started by writing a simple Deno script that fetched a page and extracted the
data. After creating that, I put it in a loop to request each page and save all
the information to a file.

This appeared to be working until my script failed to parse the file and threw a
random error. I discovered that the server was returning
[429 Too Many Requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429).
So I added a check to wait 20 seconds then try to continue requesting the pages.

This worked, but it wasn\'t the most efficient because I had just guessed 20
seconds and did not know how long the server needed me to wait. I ended up
increasing it to 60 seconds because that appeared to always work: the next
request was always able to get through.

I let this run for a while, but later stumbled apon the Retry-After header after
doing some research about rate limiting. From
[MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After)

> The Retry-After response HTTP header indicates how long the user agent should
> wait before making a follow-up request.

It was perfect because I needed to know the amount of time to wait before
retrying the request! So I added it into my script, and I think it ended up
saving about 2-3 hours.

If you have a comment - email me at <comments@anb.codes>

This work is licensed under the
[Creative Commons Attribution 4.0 International
License.](http://creativecommons.org/licenses/by/4.0/)

[Home](/)
