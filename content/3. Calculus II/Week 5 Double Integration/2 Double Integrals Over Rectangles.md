---
title: Double Integrals Over Rectangles
---

#### From Double Integral to Iterated Integral
Suppose $R$ is the rectangle $[a,b]\times[c,d]$ and $f(x,y)$ is a function.

$$\iint_{R}f(x,y)dA=\sum_{i=1}^mVolume(slice\space i)$$

$$\approx \sum_{i=1}^m Area(slice \space i)\triangle x$$

$$=\sum_{i=1}^m\left( \int_{c}^d f(x_{i}^*,y)dy \right)\triangle x$$

![[Double Integral to Iterated Integral.png]]

#### Fubini's Theorem
>[!abstract] Theorem
>If $f$ is continuous on the rectangle
>
>$$R=[a,b]\times[c,d]={(x,y) | a\leq x\leq b,c\leq y\leq d},$$
>
>then
>
>$$\iint_{R}f(x,y)dA = \int_{a}^b\int_{c}^df(x,y)dydx=\int_{c}^d \int_{a}^b f(x,y)dxdy$$



