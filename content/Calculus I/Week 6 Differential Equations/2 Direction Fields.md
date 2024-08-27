---
title: Direction Fields
---

#### Direction Field
>[!Definition]
>Given a first order differential equation
>
>$$F(x,y,y') = 0$$
>
>a direction field is given by drawing a small line piece with slope $y'$ satisfying $F(a,b,y')=0$ at many points $(a,b)$ in the plane.

##### Example
![[Direction Fields Example.png]]

$$T'=-(T-5)$$

where $T(0) = 10$ and equalling

$$T(t)=5+5e^{-t}$$

#### Autonomous Equation
>[!Definition]
>A differential equation $F(x,y,y', \dots, y^{(n)})=0$ is called **autonomous** if it does not depend explicitly on the independent variable, i.e.
>
>$$F(x,y,y', \dots, y^{(n)}) = F(y,y', \dots, y^{(n)})$$

#### Equilibrium Solution
>[!Definition]
>An **equilibrium solution** of a differential equation
>
>$$F(x,y,y', \dots, y^{(n)})=0$$
>
>is a solution $y(x)$ such that $y'(x)=0$.

##### Example
The cooling equation $T'=-(T-5)$ has equilibrium solution $T(t)=5$ which can be found by solving the equation
$$0=-(T-5)$$

obtained by setting $T'=0$.
