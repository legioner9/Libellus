'use strict';

const scaleble = (image) => {
  image.scale = () => console.log(image);
};

const lazyed = (image) => {
  const scale = image.scale;
  image.scale = () => setImmediate(() => scale());
};

const img = { a: 'a' };

scaleble(img);
console.log('start');
img.scale();
console.log('end');

lazyed(img);
console.log('start');
img.scale();
console.log('end');
