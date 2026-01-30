<p align="center">
  <img src="https://raw.githubusercontent.com/vuefrag/vue-use-to-number/main/banner.svg" alt="vue-use-to-number" width="100%" />
</p>

<h1 align="center">vue-use-to-number</h1>

<p align="center">A Vue 3 composition API utility that reactively converts a string ref to a number ref using Number(), parseInt(), or parseFloat() methods.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-use-to-number"><img src="https://img.shields.io/npm/v/vue-use-to-number.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-use-to-number"><img src="https://img.shields.io/npm/dm/vue-use-to-number.svg" alt="npm downloads" /></a>
</p>

## Installation

```bash
npm install vue-use-to-number
```

## Usage

```ts
import { useToNumber } from 'vue-use-to-number'
import { ref } from 'vue'

const str = ref('123')
const num = useToNumber(str)

console.log(num.value) // 123

str.value = '456.78'
console.log(num.value) // 456.78
```

## License

MIT

Extracted from [VueUse](https://vueuse.org/) for standalone use.
