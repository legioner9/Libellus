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

console.log('\\: backslash \u005C');

const pre = `Dec \t Hex`;
console.log(pre);

for (let i = 0; i < 16; i++) {
  // const str = `${i} \t ${i.toString(16)} \t \u00${i.toString(16)}`;
  const str = i + ' \t ' + i.toString(16) + ' \t 0x' + i.toString(16);

  console.log(str);
}

