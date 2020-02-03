# Path Finding

## Problem
Given the following 2d matrix (this is a sample input, you should consider alternative inputs):
```
[[1,1,1,1],
[0,1,1,0],
[0,1,0,1],
[0,1,9,1],
[1,1,1,1]]
```
Create a virtual robot, that can walk up, right, left and bottom. The robot cannot leave the borders.
Find the shortest path to `9`. `1` is a walkable place. `0` is a hole, and you must avoid it.
Your initial position is `0x0`, the `9` position is `2x3`.

## Possible Solutions

- [PathFinding.js](https://qiao.github.io/PathFinding.js)
- [Lee Algorithm](https://stackoverflow.com/a/2311784/6743610)
- [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
