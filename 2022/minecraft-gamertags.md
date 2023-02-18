---
title: Using teams to modify gamertags in Minecraft
---

May 22nd, 2022

I had an idea for a Minecraft server with some modifications, but it required
the ablity to modify the gamertags. I looked for a plugin to modify gamertags,
but I could not find any that worked for 1.18.2.

Then I realized that you can modify gamertag color depending on what team your
on. For example, you can create a team using `/team add [teamname]`, and you can
set the color of a team using `/team modify [teamname] color [color]`

This allows you to change the gamertag to any of Minecraft\'s built-in colors,
but what if you want to modify the username by adding text before or after it?
You can! If you use `/team modify [teamname] prefix "[text]"`, you can add
arbitrary text before the username for that team. If you use
`/team modify [teamname] suffix "[text]"`, you can add text after the name.

Note: the \"\[text\]\" in the above commands is JSON text which is why you need
the quotes. You can use it to do more complex formatting. The Minecraft wiki
page for it is [here](https://minecraft.fandom.com/wiki/Raw_JSON_text_format)

Another note: Use `/team join [teamname] [username]` to join a team

Nice! Now I can change all sorts of things about gamertags.

If you have a comment - email me at <comments@anb.codes>

This work is licensed under the
[Creative Commons Attribution 4.0 International
License.](http://creativecommons.org/licenses/by/4.0/)

[Home](/)
