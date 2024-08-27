---
CourseCode: MMFEC1X
Semester: Summer 2024
Relevance: Low
Week: Week 3
---
#school-note 
Let's take an example of a sine function.
```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-6.18,6.18,-4,4]
disableZoom: true
grid: true
---
y=1.5sin(x+0.7299)
```
If we take a closer look at the point $(0, 1)$, we can see that it is almost like a straight line.
```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-0.08,0.08,0.92,1.06]
disableZoom: true
grid: true
---
y=1.5sin(x+0.7299)
```
#### Linearization
>[!Definition]
>Given a function $y=f(x)$ the tangent line to the graph of $f$ at the point $x=a$ is given by the equation:
>$$y=f(a)+f'(a)(x-a)$$
>The linear function whose graph is the tangent line at $x=a$ is called the linearization of $f$ at $a$:
>$$L(x) = f(a) + f'(a)(x-a)$$



