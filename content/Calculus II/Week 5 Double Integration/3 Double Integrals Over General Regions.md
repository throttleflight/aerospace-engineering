---
title: Double Integrals Over General Regions
---

#### Type I and Type II Regions
>[!Definition] Definition (Type I)
>A region of type I (or $y$-simple region) is a region of the form
>
>$$D=\{(x,y)|a\leq x\leq b,g_{1}(x)\leq y\leq g_{2}(x)\}$$
>
>![[Type I Region.png]]

>[!Definition] Definition (Type II)
>A region of type II (or $x$-simple region) is a region of the form
>
>$$D=\{(x,y)|c\leq y\leq d,h_{1}(y)\leq x\leq h_{2}(y)\}$$
>
>![[Type II Region.png]]

#### Integral over Type I Region
>[!abstract] Theorem
>If $f(x,y)$ is a function on a type I region $D$ such that
>
>$$D=\{(x,y)|a\leq x\leq b,g_{1}(x)\leq y\leq g_{2}(x)\}$$
>
>then
>
>$$\iint_{D}f(x,y)dA=\int_{a}^b \int_{g_{1}(x)}^{g_{2}(x)}f(x,y)dydx$$

>[!abstract] Theorem
>If $f(x,y)$ is a function on a type II region $D$ such that
>
>$$D=\{(x,y)|c\leq y\leq d,h_{1}(x)\leq x\leq h_{2}(x)\}$$
>
>then
>
>$$\iint_{D}f(x,y)dA=\int_{c}^d \int_{h_{1}(y)}^{h_{2}(y)}f(x,y)dxdy$$

##### Steps
How to calculate the double integral $\iint_{D}f(x,y)dA$?
1. Sketch the domain $D$.
2. Determine whether it is a type I or II region.
3. Write $D$ in the relevant form (e.g. here Type I):

$$D={(x,y)|a\leq x\leq b,g_{1}(x)\leq y\leq g_{2}(x)}$$

5. Write the integral as an iterated integral and calculate it

$$\iint_{D}f(x,y)dA=\int_{a}^b \int_{g_{1}(x)}^{g_{2}(x)}f(x,y)dydx=\dots$$
