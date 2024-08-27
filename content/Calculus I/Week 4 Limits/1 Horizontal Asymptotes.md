---
CourseCode: MMFEC1X
Semester: Summer 2024
Relevance: Low
Week: Week 4
---
#school-note 
Using an example model of Newton's law of cooling, we figure out the equation:
$$T(t) = T_{env} + (T(0)-T_{env})e^{-rt}$$
So now if our refrigerator is $5\degree$ Celsius and our object is $20 \degree$ Celsius when placed in, we get the equation:
$$T(t)=5+(20-5)e^{-t}$$
```functionplot
---
title: 
xLabel: Time in hrs
yLabel: Temperature in Degrees Celsius
bounds: [0,10,0,20]
disableZoom: true
grid: true
---
y=5+(15*E^(-x))
```
There is a horizontal asymptote of $y=5$ where it only approaches and it doesn't touch.
#### Horizontal Asymptote
>[!Definition]
>The function $f(x)$ has a horizontal asymptote at $y=a$ if
>$$|f(x)-a| \to 0$$ as $$x \to ∞$$ or $$x\to -∞$$
##### Note:
A function can have $0$, $1$ or $2$ distinct horizontal asymptotes.
#### Limits
> [!info] Notation
> If $y=a$ is a horizontal asymptote for $f(x)$ when $x\to∞$ we write
> $$\lim_{ x \to \infty } f(x) = a$$
> If $y=a$ is a horizontal asymptote for $f(x)$ when $x\to-\infty$ we write
> $$\lim_{ x \to -\infty } f(x) = a$$

