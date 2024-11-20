---
title: Tangent Plane and Linearization
---

#### Tangent Line
>[!info] Equation
>
>$$y=f(x_{0})+f'(x_{0})(x-x_{0})$$

##### 3D Representation
>[!info] When $y=y_{0}$
>
>$$z=f(x_{0},y_{0})+f_{x}(x_{0},y_{0})(x-x_{0})$$
>
>![[3D Representation of Y.png]]

>[!info] When $x=x_{0}$
>
>$$z=f(x_{0}, y_{0})+f_{y}(x_{0},y_{0})(y-y_{0})$$
>
>![[3D Representation of X.png]]

>[!info] Tangent Plane
>
>$$a(z-f(x_{0},y_{0}))+b(x-x_{0})+c(y-y_{0})=0$$
>
>into
>
>$$z=f(x_{0},y_{0})+f_{x}(x_{0},y_{0})(x-x_{0})+f_{y}(x_{0},y_{0})(y-y_{0})$$
>
>![[Tangent Plane 3D Representation.png]]

#### Linearization - One Variable
>[!info]
>Tangent Line: $y=f(a)+f'(a)(x-a)$ where $L(a)=f(a)$
>
>Linearization: $L(x)=f(a)+f'(a)(x-a)$ where $L'(a)=f'(a)$

#### Linearization - Two Variables
>[!Info]
>Tangent Line:
>
>$$z=f(x_{0},y_{0})+f_{x}(x_{0},y_{0})(x-x_{0})+f_{y}(x_{0},y_{0})(y-y_{0})$$
>
>Linearization:
>
>$$L(x,y)=f(x_{0},y_{0})+f_{x}(x_{0},y_{0})(x-x_{0})+f_{y}(x_{0},y_{0})(y-y_{0})$$
>
>where
>
>$$L(x_{0},y_{0})=f(x_{0},y_{0})$$
>
>$$L_{x}(x_{0},y_{0})=f_{x}(x_{0},y_{0})$$
>
>$$L_{y}(x_{0},y_{0})=f_{y}(x_{0},y_{0})$$

#### Linearization
>[!Definition]
>The linearization of a function $f(x_{1},\dots,x_{n})$ at the point $(a_{1},\dots,a_{n})$ is the unique linear function $L(x_{1},\dots,x_{n})$ such that
>
>$$L(a_{1},\dots,a_{n})=f(a_{1},\dots,a_{n})$$
>
>and
>
>$$L_{x_{i}}(a_{1},\dots,a_{n})=f_{x_{i}}(a_{1},\dots,a_{n})$$
>
>for all $i=1,\dots,n$.

>[!abstract] Theorem
>$$L(x_{1},\dots,x_{n})=f(a_{1},\dots,a_{n})+\sum_{i=1}^n f_{x_{i}}(a_{1},\dots,a_{n})(x_{i}-a_{i})$$

#### Higher Order
>[!Definition]
>The *n*th order Taylor polynomial of $f$ at the point $a$ is
>
>$$T_{n}(x)=\sum_{k=0}^n \frac{1}{k!}f^{(k)}(a)(x-a)^k$$

**Note:**
A similar notion for functions of several variables exists, e.g.

$$T_{2}(x,y)=L(x,y)+\frac{1}{2}f_{xx}(x_{0},y_{0})(x-x_{0})^2$$

$$+f_{xy}(x_{0},y_{0})(x-x_{0})(y-y_{0})+\frac{1}{2}f_{yy}(x_{0},y_{0})(y-y_{0})^2$$

#### Differential
>[!Definition]
>Give a function $z=f(x,y)$ the differential $dz=df$ of $f$ is given by
>
>$$dz=df=f_{x}(x,y)dx+f_{y}(x,y)dy$$

**Note:** 
If we set $x=x_{0}$, $y=y_{0}$, $dx=\triangle x$, and $dy=\triangle y$ we obtain the approximation

$$\triangle z = f(x_{0}+\triangle x,y_{0}+\triangle y)-f(x_{0},y_{0}) \approx L(x_{0}+\triangle x, y_{0}+\triangle y) - L(x_{0}, y_{0})=dz$$
