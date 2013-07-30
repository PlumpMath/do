# do it!

A simple, non-mutable todo list. The datasource is a list of objects
with a description and status, in JSON.

## Why?

To make me do things I've put off for too long. In public, for others to
see, so they can ask me about it, help me and whatnot.

## Using it

    $ make dependencies
    $ python3 -m http.server # or python2 -m SimpleHttpServer
    # Open http://localhost:8000 in your browser

You should now see the todo items for `do` itself. Alternatively, you
can configure/start your browser to allow `XHR`s to `file:///` URLs
(`--allow-file-access-from-files` for chromium, by default in firefox)
and load [index.html](./index.html) directly.

## The future

See [todos.json](./todos.json)
