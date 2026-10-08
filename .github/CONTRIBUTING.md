# Contribuir

Galaxia es un sitio de [VitePress](https://vitepress.dev) cuyo contenido son
páginas Markdown en español. Una contribución añade, corrige o quita enlaces.

## Preparar el entorno

Necesitas [Bun](https://bun.sh) 1.3.14 (`mise install` lo instala desde
[`mise.toml`](../mise.toml)).

```sh
bun install
bun run dev
```

El sitio queda en <http://localhost:5173/urls/> y se recarga al guardar.

| Comando           | Qué hace                                        |
| ----------------- | ----------------------------------------------- |
| `bun run dev`     | Servidor local.                                 |
| `bun run dev:lan` | Servidor local visible desde la red (`--host`). |
| `bun run build`   | Genera el sitio en `docs/.vitepress/dist/`.     |
| `bun run preview` | Sirve el resultado de `build`.                  |
| `bun run lint`    | Revisa el Markdown con `markdownlint-cli2`.     |

`bun run lint` revisa `*.md`, `.github/*.md` y `docs/**/*.md` con la
configuración de [`.markdownlint-cli2.jsonc`](../.markdownlint-cli2.jsonc). Para
revisar solo tus archivos: `bunx markdownlint-cli2 docs/diseno.md`.

## Añadir o corregir un enlace

1. Abre la página de la categoría en [`docs/`](../docs/). Cada página agrupa sus
   enlaces en secciones, con una tabla o una lista por sección.
2. Copia el formato de las filas vecinas. Una tabla típica usa las columnas
   `Nombre`, `Características` y `Enlace`, y el enlace se escribe
   `[Visitar](https://…)`.
3. Revisa el resultado con `bun run dev`. `bun run build` falla si una página
   enlaza a una página interna que no existe.

Cada página de la web tiene un enlace «Editar en GitHub» que abre su archivo.

## Añadir una página

1. Crea `docs/<nombre>.md` con el nombre en minúsculas y sin acentos. El nombre
   del archivo es la URL de la página (`docs/diseno.md` es `/diseno`).
2. Empieza el archivo con el front matter:

   ```md
   ---
   title: Diseño
   description: Herramientas de diseño y recursos para mejorar la estética.
   ---
   ```

3. Añade `{ title, details, link }` a la lista de
   [`docs/.vitepress/categories.ts`](../docs/.vitepress/categories.ts), en la
   posición en que quieres la página. De esa lista salen la barra lateral y las
   tarjetas del índice.

   ```ts
   {
       title: 'Diseño',
       details: 'Herramientas y recursos para mejorar la estética de tus proyectos.',
       link: '/diseno'
   }
   ```

El índice de la web ([`docs/index.md`](../docs/index.md)) contiene el glosario
de los términos que usan las notas. Edítalo ahí.

## Idioma y etiquetas

- La prosa y los nombres de archivo van en español.
- ``[`EN`]`` antes de un enlace indica que el sitio enlazado está en ese idioma.
  Se usan los códigos de dos letras en mayúsculas (`EN`, `ES`, `JP`, `ZH`, `DE`,
  `FR`).
- `:flag-xx:` inserta la bandera del país `xx` (código ISO en minúsculas). El
  atajo lo define
  [`docs/.vitepress/plugins/flag-shortcode.ts`](../docs/.vitepress/plugins/flag-shortcode.ts)
  y cada bandera es un archivo `docs/public/flags/xx.svg`. Banderas disponibles:
  `cn`, `de`, `es`, `jp`, `kr`, `mx`, `ru`. Un código sin archivo se queda como
  texto (`:flag-zz:`). Para otra bandera, añade el SVG.

## Publicación

El flujo [`publish.yml`](workflows/publish.yml) compila el sitio con
`bun run build` y lo publica en GitHub Pages. Se ejecuta al subir a `master` un
cambio en `docs/**`, `package.json`, `bun.lock` o el propio `publish.yml`. Para
publicar sin un cambio de esos archivos, ejecútalo desde la pestaña Actions del
repositorio (`Run workflow`).
