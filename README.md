# JS-Grapher
A Desmos Like graph tool using p5.js, the math is calculated using eval() so you can change the source code from the input box

### Features:
- tab support
  - tabs insert five spaces
- auto update
- Error Output
- curve interpolation (checkbox)
- terrible grid
- zoom/pan functionality

### Stuff to try:
- change color of line
```js
line_color = color('blue');
y=sin(x);
```
- change detail of line
```js
detail = 10; //lower the value the bigger the detail
y=xx;
```
- Use javascript!
```js
y = random(1,x);
```
```js
y = x|4;
```
```js
function a(b){
  return b*4;
}
y=b(x);
```
```js
y=noise(x/30)*20; //perlin noise!
```
