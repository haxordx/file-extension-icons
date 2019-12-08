# File Extension Icons

Icons from the [Seti UI](https://github.com/jesseweed/seti-ui) theme isolated.

![](/assets/icons.png)

## Usage

Automatically embeds icon based on ```data-filename``` field. 

Use like so:

```html
<div class="filetype-icon" data-filename="Procfile">Procfile</div>
```

Input can include full filetype like `video.mov` but can also be supplied `.mov` as the styles are assigned with [the $= "ends with" selector](https://www.w3schools.com/cssref/sel_attr_end.asp).

## Render Icon Set

Install `http-server` globally.

```sh
npm install http-server -g
```

Generate the json file to render the icons.

```sh
node loop.js
```

Use http server to serve the directory.

```
http-server
```

## Build

```sh
npm install less
```

```sh
lessc index.html index.css
```

## Generate Icon Font

These commands come from the **Seti UI** package.

```sh
npm install
```

```sh
gulp icons
```