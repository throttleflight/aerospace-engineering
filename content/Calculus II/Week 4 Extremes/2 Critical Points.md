---
CourseCode: MMFEC2X
Semester: Summer 2024
Relevance: Low
Week: Week 4
---
#school-note 
#### Critical Point
>[!Definition]
>A point $p$ in the domain of a function $f$ is called a **critical point** of $f$ if
>- $D_{u}f(p)=0$ for all unit vectors $u$ or
>- a directional derivative does not exist at that point

>[!Definition]
>A point $p$ in the domain of a function $f$ of $n$ variables is called a **critical point** of $f$ if
>- $f_{x_{i}}(p)=0$ for $i=1,\dots,n$ or
>- one of the partial derivatives fails to exist at $p$.

#### Fermat's Theorem
>[!abstract] Theorem
>Suppose $f(x)$ has a local minimum or local maximum at the point $p$. Then $p$ is a critical point of $f$.

> [!note]
>A critical point at which the function does not take an extreme value is called a saddle point.

#### Second Derivatives Test: Two Variables
>[!abstract] Theorem
>Let $f(x,y)$ be a differentiable function and let $(a,b)$ be a critical point of the function. Denote
>$$D(a,b)=f_{xx}(a,b)f_{yy}(a,b)-f_{xy}(a,b)f_{yx}(a,b)$$
>Then
>- if $D(a,b) > 0$ and $f_{xx}(a,b)<0$ there is a local maximum at $(a,b)$
>- if $D(a,b)>0$ and $f_{xx}(a,b)>0$ there is a local minimum at $(a,b)$
>- if $D(a,b)<0$ there is a saddle point at $(a,b)$.
>- otherwise the test is inconclusive, i.e. when $D=0$.

#### Hessian Matrix
>[!Definition]
>Let $f$ be a function of $n$ variables. Then the Hessian matrix of $f$ at the point $p$ is given by
>$$\left[ \begin{array}{cc} f_{x_{1}x_{1}}(p) &f_{x_{2}x_{1}}(p) &\dots &f_{x_{n}x_{1}}(p) \\ f_{x_{1}x_{2}}(p) &f_{x_{2}x_{2}}(p) &\dots &f_{x_{n}x_{2}}(p) \\ ⋮ &⋮ &⋱ &⋮ \\ f_{x_{1}x_{n}}(p) &f_{x_{2}x_{n}}(p) &\dots &f_{x_{n}x_{n}}(p)\end{array} \right]$$

#### Second Derivatives Test
>[!abstract] Theorem
>Let $f(x)$ be a differentiable function of $n$ variables and let $p$ be a critical point of the function. Let $\lambda_{1},\lambda_{2},\dots,\lambda_{n}$ denote that eigenvalues of the Hessian matrix of $f$ at $p$.
>Then
>- If $\lambda_{i}<0$ for all $i=1,\dots,n$ then $f$ has a local maximum at $p$
>- If $\lambda_{i}>0$ for all $i=1,\dots,n$ then $f$ has a local minimum at $p$
>- If $\lambda_{i}=0$ for any $i=1,\dots,n$ then the test is inconclusive.
>- Otherwise $f$ has a saddle point at $p$.

---
### **Finding and classifying critical points in contour plots**
In order to find critical points exactly, the main strategy is to start with a formula for your function and then solve the system of equations obtained by setting the first partial derivatives equal to $0$. Sometimes it may be useful to present or detect critical points more globally, however. This will be particularly straightforward if we are in the two variable case and have acccess to a contour plot. It turns out that local minima, local maxima and saddly points are quite easy to detect in a contour plot. A caveat is that we need sufficient resolution in our contour plot. In other words, the levels for our level curves need to be sufficiently close together. Of course what is close enough depends on the function that we are considering.
#### Local minima/maxima
Here you see a typical contour plot for a local minimum or maximum:
![[Contour Plot 1.png| center]]
Indeed, for a local minimum or maximum we see that contour lines take the form of simple closed curves (like circles or ellipses) around the critical point. This is because the function must be increasing (in the case of a minimum) or decreasing (in the case of a maximum) in all directions around the critical point. Since the steepness needs to increase/decrease from $0$ to some positive/negative value we also typically see that the level curves get closer together as we move away from the critical point.

In the picture above it is not clear whether we are looking at a local maximum or a local minimum. Indeed the shape of the level curves is similar going from the a function $f(x,y)$ to the function $-f(x,y)$ changes a local minimum to a local maximum, but it does not do anything to changes the shape of the contour plot. The only way to tell the difference between a local minimum and a local maximum is by including information about the level of each level curve in the contour plot. For instance, this shows that the following contour plot shows a local minimum:
![[Contour Plot 2.png| center]]
Of course, the level may also be indicated using color where usually shades of red indicate high levels and shades of blue indicate low levels. Convention may vary, however, and best practice is to include a legend.  For instance, the following contour plot shows a local maximum
![[Contour Plot 3.png| center]]
In this case, we have to be extra careful about the caveat on resolution mentioned above. If the resolution of the contour plot is too low then the information about the levels of the level curves may imply a certain critical point is a local maximum while it is actually a local minimum and vice versa.
#### Saddle points
Here you see a typical contour plot for a saddle point:
![[Saddle Point.png| center]]
Indeed, for a saddle point we see that the critical point lies at the intersection of two level curves. Since the level curves intersect they must have the same level and might be viewed as just one level curve. This is because the function is increasing in one direction and decreasing in another. On the boundary between a region where it increases and a region where it decreases it must be neither increasing nor decreasing. So these boundaries form the intersecting lines. 
#### Example
As a small example can you locate the four critical points in this contour plot (two saddle points, a local minimum and a local maximum)?
![[Example.png|center]]
