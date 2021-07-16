'use strict';

const s1 = 'start\
end';

const s2 = `start
end`;

console.dir({ s1, s2 });

/*

\b: backspace U+0008
\f: form feed U+000C
\n: line feed U+000A
\r: carriage return U+000D
\t: horizontal tab U+0009
\v: vertical tab U+000B
\': single quote U+0027
\": double quote U+0022
\\: backslash U+005C

*/
console.log('\xA9');
console.log('\xAE');
console.log('\u00A9\u00AE');
console.log('\\: backslash \u005C');

const pre = `Dec \t Hex`;
console.log(pre);

for (let i = 159; i < 256; i++) {
  // const str = `${i} \t ${i.toString(16)} \t \u00${i.toString(16)}`;
  const i16 = i.toString(16);
  // const str = [i, ' \t ', i16, ' \t ', '\\u00', i16].join('');
  const str = ['\\x', i16.toUpperCase()].join('');
  debugger
  console.log(str);
}

