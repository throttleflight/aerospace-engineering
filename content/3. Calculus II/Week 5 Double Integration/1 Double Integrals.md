---
title: 2. Double Integrals
---

#### Interpretation
> [!info]
>The double integral of $f$ over the region D, denoted by
> 
>$$\iint_{D} f(x,y)dA$$
> 
>is the (signed) volume under the graph of $f$ for $(x,y)$ in $D$.
> 
>![[Example Region.png]]

#### Riemann Integral
>[!Definition]
>The integral of $f$ over the rectangle $R$ is
>
>$$\iint_{R}f(x,y)dA=\lim_{ \nabla A \downarrow 0 } \sum_{ij} f(x_{ij}^*,y_{ij}^*)\triangle A$$
>
>if this limit exists.

> [!abstract] Theorem
> The double integral exists for any continuous function.

##### Computation Rules (Similar to Single Variable)
> [!abstract] Theorem
> - $$\iint_{D}f(x,y)+g(x,y)dA = \iint_{D}f(x,y)dA+\iint_{D}g(x,y)dA$$
> - $$\iint_{D}cf(x,y)dA = c \iint_{D}f(x,y)dA$$
> - If $f(x,y)\leq g(x,y)$ on $D$, then $\iint_{D}f(x,y)dA\leq \iint_{D}g(x,y)dA$.

>[!abstract] Theorem
>
>- $$\iint_{D}1dA = area(D)$$
>
>![[Basic Double Integral.png]]

> [!abstract] Theorem
> If $D$ consists of non-overlapping parts $D_{1}, D_{2}$ then
> 
> - $$\iint_{D}f(x,y)dA=\iint_{D_{1}}f(x,y)dA+\iint_{D_{2}}f(x,y)dA$$

---
In the video the mass and center of mass of a two dimensional object were introduced as important applications of double integrals. Another important application is the so-called **moment of inertia** of an object that **rotates around an axis**. This is the amount of torque needed for a desired angular rotation around this axis. For a point mass of mass $m$, the moment of inertia is given by $mr^2$, where $r$ is the distance to the rotational axis.

Suppose we now have a plate that occupies a region $D$ in the $xy$-plane with mass density function $\rho(x,y)$, which we rotate around the $x$-axis and we want to compute the moment of inertia, which we denote by $I_{x}$. The closest point on the $x$-axis to a given point $(x,y)$ is of course the point $(x,0)$. As such, the **square of the distance** of the point $(x,y)$ to the $x$-axis is given by $y^2$. Therefore, the contribution of a small rectangle with sides $\triangle x$ and $\triangle y$ around this point $(x,y)$ to the total moment of inertia is given by $y^2\rho(x,y)\triangle x \triangle y$. In order to compute the total moment of inertia around the $x$-axis, we need to add all of these contributions together and we find that

$$I_{x}=\iint_{D}y^2\rho(x,y)dxdy$$

A similar formula holds for the moment of inertia around the $y$-axis, which we denote by $I_{y}$, and is given by

$$I_{y}=\iint_{D}x^2\rho(x,y)dxdy$$

Finally, for rotation **around the origin**, the square of the distance of the point $(x,y)$ to the origin is given by $x^2+y^2$. So we find that the moment of inertia of rotation around the origin, which we denote by $I_{0}$, is given by

$$I_{0}=\iint_{D}(x^2+y^2)\rho(x,y)dxdy$$
