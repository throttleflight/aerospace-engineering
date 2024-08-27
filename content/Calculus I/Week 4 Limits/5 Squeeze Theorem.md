---
CourseCode: MMFEC1X
Semester: Summer 2024
Relevance: Low
Week: Week 4
---
#school-note 
#### Mass-Spring-Damper
$$x(t) = e^{-\frac{t}{10}}(\cos(t)+\frac{1}{10}\sin(t))$$
```functionplot
---
title: 
xLabel: time t in s
yLabel: position x in cm
bounds: [0,60,-1.2,1.2]
disableZoom: true
grid: true
---
y=(E^(-x/10))*(cos(x)+0.1(sin(x)))
```
Looking at the graph above, we can tell that the horizontal asymptote is $y=0$. The wave oscillation is within a so-called envelope by the 2 functions
$$-\frac{11}{10}e^{-\frac{t}{10}} \leq x(t) \leq \frac{11}{10}e^{-\frac{t}{10}}$$

```functionplot
---
title: 
xLabel: time t in s
yLabel: position x in cm
bounds: [0,60,-1.2,1.2]
disableZoom: true
grid: true
---
y=(E^(-x/10))*(cos(x)+0.1(sin(x)))
y=(-11/10)(E^(-x/10))
y=(11/10)(E^(-x/10))
```
In this envelope, it also says that $y=0$.
- Green is $\frac{11}{10}e^{-\frac{t}{10}}$
- Red is $-\frac{11}{10}e^{-\frac{t}{10}}$
#### Squeeze Theorem
> [!abstract] Theorem
> Suppose $f(x)$, $g(x)$ and $h(x)$ are three functions such that
> $$g(x) \leq f(x) \leq h(x)$$
> for $x$ greater than some value $M$ and suppose
> $$\lim_{ x \to \infty } g(x) = a = \lim_{ x \to \infty } h(x)$$
> for some value $a$. Then
> $$\lim_{ x \to \infty } f(x) = a$$

