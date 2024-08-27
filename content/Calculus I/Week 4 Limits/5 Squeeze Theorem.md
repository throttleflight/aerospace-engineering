---
title: Squeeze Theorem
---

#### Mass-Spring-Damper
$$x(t) = e^{-\frac{t}{10}}(\cos(t)+\frac{1}{10}\sin(t))$$

![[MassSpringDamper.png]]

Looking at the graph above, we can tell that the horizontal asymptote is $y=0$. The wave oscillation is within a so-called envelope by the 2 functions

$$-\frac{11}{10}e^{-\frac{t}{10}} \leq x(t) \leq \frac{11}{10}e^{-\frac{t}{10}}$$

![[After.png]]

In this envelope, it also says that $y=0$.

- Green is $\frac{11}{10}e^{-\frac{t}{10}}$
- Red is $-\frac{11}{10}e^{-\frac{t}{10}}$

#### Squeeze Theorem
> [!abstract] Theorem
> Suppose $f(x)$, $g(x)$ and $h(x)$ are three functions such that
> 
> $$g(x) \leq f(x) \leq h(x)$$
> 
> for $x$ greater than some value $M$ and suppose
>
> $$\lim_{ x \to \infty } g(x) = a = \lim_{ x \to \infty } h(x)$$
> 
> for some value $a$. Then
> 
> $$\lim_{ x \to \infty } f(x) = a$$

