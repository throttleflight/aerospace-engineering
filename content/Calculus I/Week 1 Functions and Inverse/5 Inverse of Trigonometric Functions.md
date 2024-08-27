---
CourseCode: MMFEC1X
Semester: Summer 2024
Relevance: Low
Week: Week 1
dg-publish: true
dg-show-toc: true
dg-home-link: true
dg-show-local-graph: true
---
#school-note 
Referring to [[4 The Inverse Function and Invertibility]], there is a test called the horizontal line test. Also shown below:
>[!theorem]
>A function is invertible if and only if all horizontal lines intersect the graph of the function in at most 1 place.

If we look at the sine function graph, we can tell that it does not pass the horizontal line test. We can say that therefore, it **does not** have an inverse function. This may only be true for some circumstances.

```functionplot
---
title: Sine Graph
xLabel: 
yLabel: 
bounds: [-6.28,6.28,-1,1]
disableZoom: true
grid: true
---
y = sin(x)
y=0
y=0.5
y=-0.5
```
This sine graph clearly does not pass the horizontal line test and according to the theorem, it does not have an inverse. Unless, we limit the domain of the function so that it passes the horizontal line test. We can limit the domain to $\left[ -\frac{1}{2}\pi, \frac{1}{2}\pi \right]$ where an inverse of $sin(x)$ exists.

$arcsin(x)$ is the inverse of $sin(x)$
>[!Definition]
>The inverse of $y=sin(x)$ is the function $y=arcsin(x)$.
>Domain: $[-1, 1]$ ---> Range: $\left[ -\frac{\pi}{2}, \frac{\pi}{2} \right]$
>$y=arcsin(x) => sin(y)=x$
>$arcsin(x)$ is also denoted as $sin^{-1}(x)$

```functionplot
---
title: Arcsine Graph
xLabel: 
yLabel: 
bounds: [-1,1,-1.57,1.57]
disableZoom: true
grid: true
---
y=asin(x)
y=0
```
$arccos(x)$ is the inverse of $cos(x)$
>[!Definition]
>The inverse of $y=cos(x)$ is the function $y=arccos(x)$.
>Domain: $[-1, 1]$ ---> Range: $[0, \pi]$
>$y=arccos(x) => cos(y) = x$
>$arccos(x)$ is also denoted as $cos^{-1}(x)$

```functionplot
---
title: Arccosine Graph
xLabel: 
yLabel: 
bounds: [-1,1,0,3.14]
disableZoom: true
grid: true
---
y=acos(x)
y=0
```
The $\tan(x)$ function has a continuous function that also has asymptotes. The inverse of a tangent function exists on $\left( -\frac{\pi}{2}, \frac{\pi}{2} \right)$. Keep in mind that we are using parenthesis instead of brackets because the graph that we are looking at does not touch $-\frac{\pi}{2}$ or $\frac{\pi}{2}$. Below is a graph of tangent lines.
```functionplot
---
title: Tangent Graph
xLabel: 
yLabel: 
bounds: [-6.28,6.28,-2,2]
disableZoom: true
grid: true
---
y=tan(x)
```
$arctan(x)$ is the inverse of $tan(x)$
>[!Definition]
>The inverse of $y=tan(x)$ is the function $y=arctan(x)$.
>Domain: ℝ ---> Range: $\left( -\frac{\pi}{2}, \frac{\pi}{2} \right)$
>$y=arctan(x) => tan(y) = x$
>$arctan(x)$ is also denoted as $tan^{-1}(x)$

```functionplot
---
title: Arctangent Graph
xLabel: 
yLabel: 
bounds: [-10,10,-1.57,1.57]
disableZoom: true
grid: true
---
y=atan(x)
```
