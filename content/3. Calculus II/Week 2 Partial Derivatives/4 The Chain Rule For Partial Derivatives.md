---
title: The Chain Rule For Partial Derivatives
---

#### Chain Rule - One Variable
> [!question] Chain Rule
> If $h(x) = f(g(x))$ then
> 
> $$h'(x)=f'(g(x))\cdot g'(x)$$

**Remark:**
If $y=g(x)$, then Chain rule can be rewritten to

$$\frac{dh}{dx}=\frac{df}{dy} \frac{dy}{dx}$$

#### Chain Rule - Simplest Version
>[!abstract] Theorem
>If $z=f(x,y)$, $x=g(t)$, and $y=h(t)$, then
>
>$$\frac{dz}{dt}=\frac{∂f}{∂x} \frac{dx}{dt}+\frac{∂f}{∂y} \frac{dy}{dt}$$

#### Chain Rule - Two Independent Variables
>[!abstract] Theorem
>If $z=f(x,y)$, $x=g(s,t)$, and $y=h(s,t)$, then
>
>$$\frac{∂z}{∂s}=\frac{∂f}{∂x} \frac{∂x}{∂s}+\frac{∂f}{∂y} \frac{∂y}{∂s}$$
>
>and
>
>$$\frac{∂z}{∂t}=\frac{∂f}{∂x} \frac{∂x}{∂t}+\frac{∂f}{∂y} \frac{∂y}{∂t}$$

**Remark:**
The rule can be generalized to the case where $z=f(x_{1}, x_{2}, \dots, x_{n})$ and each $x_{i}$ depends on $m$ variables $t_{1},\dots,t_{m}$.
