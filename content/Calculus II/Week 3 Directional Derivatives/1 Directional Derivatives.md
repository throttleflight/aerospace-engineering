---
CourseCode: MMFEC2X
Semester: Summer 2024
Relevance: Low
Week: Week 3
---
#school-note 
#### Interpretation
![[Interpretation.png| center]]
The image above consists of an interpretation of directional derivatives.
> [!abstract] Information of $p$ and $u$
> $$p=(1,0.75)$$
> $$u=⟨0.5,0.7⟩$$

#### Partial Derivatives
>[!Definition]
>Given a function $f(x,y)$ the partial derivative in the point $(a,b)$ are defined by
>$$f_{x}(a,b) = \lim_{ h \to 0 } \frac{f(a+h,b)-f(a,b)}{h}$$
>and
>$$f_{y}(a,b)=\lim_{ h \to 0 } \frac{f(a,b+h)-f(a,b)}{h} $$

#### Directional Derivative
>[!Definition]
>Given a function $f(x,y)$ and a unit vector $u=⟨u_{1},u_{2}⟩$ the directional derivative in the point $(a,b)$ and in the direction $u$ is defined by
>$$D_{u}f(a,b)=\lim_{ h \to 0 } \frac{f(a+u_{1}h,b+u_{2}h)-f(a,b)}{h}$$

#### Unit Vector
>[!Definition] 
>Given a function $f(x,y)$ and a **unit** vector $u=⟨u_{1},u_{2}⟩$ the directional derivative in the point $(a,b)$ and in the direction $u$ is defined by
>$$D_{u}f(a,b)=\lim_{ h \to 0 } \frac{f(a+u_{1}h,b+u_{2}h)-f(a,b)}{h}$$

>[!Definition]
>A unit vector is a vector $u$ of length $||u||$ equal to 1.
>Given a non-zero vector $u$ the normalized vector $\hat{u}=\frac{u}{||u||}$ is a unit vector with the same direction as $u$.

#### Relation with Partial Derivatives
>[!abstract] Theorem
>For a differentiable function $f(x,y)$ and a **unit** vector $u=⟨u_{1},u_{2}⟩$ we have
>$$D_{u}f(a,b)=f_{x}(a,b)u_{1}+f_{y}(a,b)u_{2}$$
>at any point $(a,b)$.

#### Directional Derivative
>[!Definition]
>Given a function $f(x_{1},\dots,x_{n})$ and a **unit** vector $u=⟨u_{1},\dots,u_{n}⟩$ the directional derivative in the point $(a_{1},\dots,a_{n})$ and in the direction $u$ is defined by
>$$D_{u}f(a_{1},\dots,a_{n})=\lim_{ h \to 0 } \frac{f(a_{1}+u_{1}h,\dots,a_{n}+u_{n}h)-f(a_{1},\dots,a_{n})}{h}$$

> [!abstract] Theorem
> For a differentiable function $f(x_{1},\dots,x_{n})$ and a **unit** vector $u=⟨u_{1},\dots,u_{n}⟩$ we have
> $$D_{u}f(a_{1},\dots,a_{n})=f_{x_{1}}(a_{1},\dots,a_{n})u_{1}+\dots+f_{x_{n}}(a_{1},\dots,a_{n})u_{n}$$

#### Gradient Vector
>[!Definition]
>Given a function $f(x_{1},\dots,x_{n})$ the gradient vector $\nabla f$ at the point $(a_{1},\dots,a_{n})$ is given by
>$$\nabla f(a_{1},\dots,a_{n})= ⟨f_{x_{1}}(a_{1},\dots,a_{n}),\dots,f_{x_{n}}(a_{1},\dots,a_{n})⟩$$

#### Directional Derivative VS Gradient
>[!abstract] Theorem
>For a differentiable function $f(x_{1},\dots,x_{n})$, a unit vector $u=⟨u_{1},\dots,u_{n}⟩$ and a point $p=(a_{1},\dots,a_{n})$ we have
>$$D_{u}f(a_{1},\dots,a_{n})=\nabla f(a_{1},\dots,a_{n})\cdot u$$

