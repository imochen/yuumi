# Yuumi
[![npm](https://img.shields.io/npm/v/@mochen/yuumi)](https://www.npmjs.com/package/@mochen/yuumi)  [![Build Status](https://travis-ci.org/imochen/yuumi.svg?branch=master)](https://travis-ci.org/imochen/yuumi) [![codecov](https://codecov.io/gh/imochen/yuumi/branch/master/graph/badge.svg)](https://codecov.io/gh/imochen/yuumi) [![document](https://img.shields.io/badge/document-published-brightgreen)](https://imochen.github.io/yuumi/)

`Yuumi` is an `ES6` module which support Typescript. Include some usefull `lite function` that without any other module dependencies.

## Installation

```bash
$ npm install @mochen/yuumi --save
```

## Usage
```typescript
import { queries } from '@mochen/yuumi';

const { a, b } = queries.parse("a=1&b=2");
```

## [Document](https://imochen.github.io/yuumi/)

- [queries](https://imochen.github.io/yuumi/modules/_queries_.html)