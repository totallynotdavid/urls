# Galaxia

Galaxia es una colección de enlaces de Internet organizados por categoría, con
anotaciones sobre su uso práctico. Es para quien busca una herramienta, una
biblioteca digital o un recurso concreto y prefiere una lista curada a un
buscador.

El sitio solo enlaza: no aloja archivos. Se publica en
<https://totallynotdavid.github.io/urls/>.

## Ejecutar el sitio en local

Necesitas [Bun](https://bun.sh) 1.3.14 (`mise install` lo instala desde
[`mise.toml`](mise.toml)).

```sh
bun install
bun run dev
```

El sitio queda en <http://localhost:5173/urls/>.

## Una entrada

Cada categoría es una página Markdown de [`docs/`](docs/). Una entrada típica es
una fila de tabla (de [`docs/diseno.md`](docs/diseno.md)):

```md
| Nombre              | Características                  | Enlace                                          |
| ------------------- | -------------------------------- | ----------------------------------------------- |
| Finsweet LottieFlow | Animaciones gratuitas y simples. | [Visitar](https://www.finsweet.com/lottieflow/) |
```

## Qué incluye

- Una página por categoría. El
  [índice del sitio](https://totallynotdavid.github.io/urls/) las lista y define
  los términos que usan las notas.
- Búsqueda local en todas las páginas.
- Banderas de país con el atajo `:flag-xx:`, descrito en
  [CONTRIBUTING.md](.github/CONTRIBUTING.md#idioma-y-etiquetas).

## Más información

- Para añadir o corregir un enlace, ver
  [CONTRIBUTING.md](.github/CONTRIBUTING.md).
- Licencia: [CC0 1.0](LICENSE).
