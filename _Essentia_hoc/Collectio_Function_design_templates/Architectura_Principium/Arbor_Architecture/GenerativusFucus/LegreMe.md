<div align="center">

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/legioner9/GenerativusFucus/blob/master/LICENSE)
</div>

# GenerativusFucus по мотивам [Wrapper](https://github.com/HowProgrammingWorks/Wrapper)
Задача - создать максимально обобщенный врапер.Разобраться как работает замыкание и объектный контекст.
## [v.1](node_modules/v.1/index.js) и варианты использования в директории [test](node_modules/v.1/test)
### Архитектурная преамбула (nameArht:\<prePropObj>):
управление поведением врапера через предзадание propObj 
### Описание:
- generativusFucus обертка
- fucus возвращаемый функциональный объект
- propObj опции обертки
  - closureForFn замыкание для fn
  - thisForFn объектный контекст для fn
  - preComutClosure и ... функции внутри обертки создающие архитектуру функции
### Особенности:
после вызова обернутая функция как функциональный объект имеет дополнительные методы (printFn()) и поля (args, closureForFn и ...) - ссылки на текущее состояние замыкания и контекста.
## [v.2](node_modules/v.2/index.js) и варианты использования в директории [test](node_modules/v.2/test)
### Архитектурная преамбула (nameArht:\<postChainSetters>):
управление поведением врапера после объявления постзадание сеттеров - userable
### Описание:
- добавлены методы сеттеры флагов и иногда туда можно перенести сами методы (из preComutClosure например в таймауте ) см: [file](node_modules/v.2/test/counterLimit_assign_t_l_c_r_4.js):
  - limit
  - timer
  - cancel
  - resume
### Особенности:
объединены свойства и методы и добавляются в функциональный объект обертку через Object.assign
## [v.3](node_modules/v.1/index.js) with [production](node_modules/v.3/production)
