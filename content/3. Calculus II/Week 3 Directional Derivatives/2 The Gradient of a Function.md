---
title: 3. The Gradient of a Function
---

#### Directional Derivative
>[!abstract] Theorem
>For a differentiable function $f(x,y)$, a unit vector $u=⟨u_{1},u_{2}⟩$ and a point $(a,b)$ in the domain of $f$, we have
>
>$$D_{u}f(a,b)=||\nabla f(a,b)||\cos(\theta)$$
>
>where $\theta$ is the angle between the vector $u$ and the gradient vector.

**Proof:**
The dot product of two vectors **v** and **w** is always given by

$$v\cdot w = ||v|| \space ||w|| \cos(\theta)$$

where $\theta$ is the angle between **v** and **w**.

#### Steepest Ascent
>[!abstract] Theorem
>Let $f(x,y)$ be a differentiable function. Then the gradient vector $v=\nabla f(x,y)$ indicates the direction of steepest ascent and, if $\hat{v}$ denotes the corresponding normalized vector, we have
>
>$$D_{\hat{v}}f(x,y)=||\nabla f(x,y)||$$

#### Steepest Descent
>[!abstract] Theorem
>Let $f(x,y)$ be a differentiable function. Then the vector $v=-\nabla f(x,y)$ indicates the direction of steepest descent and, if $\hat{v}$ denotes the corresponding normalized vector, we have
>
>$$D_{\hat{v}}f(x,y)=-||\nabla f(x,y)||$$

#### Directional Derivative
>[!abstract] Theorem
>For a differentiable function $f(x,y)$, a unit vector $u=⟨u_{1},u_{2}⟩$ and a point $(a,b)$ in the domain of $f$, we have
>
>$$D_{u}f(a,b)=||\nabla f(a,b)||\cos(\theta)$$
>
>where $\theta$ is the angle between the vector **u** and the gradient vector.

#### Gradient VS Level Curve
>[!abstract] Theorem
>For a differentiable function $f(x,y)$, the gradient vector $\nabla f(a,b)$ is perpendicular to the tangent line to the level curve $f(x,y)=f(a,b)$ at the point $(a,b)$.

#### Tangent Line to Level Curve
>[!abstract] Theorem
>Suppose $f(x,y)$ is a differentiable function and $k$ is an arbitrary constant, then the tangent line to the curve defined by $f(x,y)=k$ at the point $(a,b)$ is
>
>$$f_{x}(a,b)x+f_{y}(a,b)y=c$$
>
>where $c=f_{x}(a,b)+f_{y}(a,b)b$.

#### Tangent Plane to Level Surface
>[!abstract] Theorem
>Suppose $f(x,y,z)$ is a differentiable function and $k$ is an arbitrary constant. Then the tangent plane to the surface defined by $f(x,y,z)=k$ at the point $(a,b,c)$ is given by the equation
>
>$$f_{x}(a,b,c)x+f_{y}(a,b,c)y+f_{z}(a,b,c)z=C$$
>
>where $C=f_{x}(a,b,c)a+f_{y}(a,b,c)b+f_{z}(a,b,c)c$.


