---
CourseCode: MMFEC2X
Semester: Summer 2024
Relevance: Low
Week: Week 4
---
#school-note 
#### Critical Points
>[!Definition]
>A point $p$ in the domain of a function $f$ of $n$ variables is called a **critical point** of $f$ if
>- $f_{x_{i}}(p)=0$ for $i=1,\dots,n$ or
>- one of the partial derivatives fails to exist at $p$.

>[!abstract] Theorem
>Suppose $f(x)$ has a local minimum or local maximum at the point $p$. Then $p$ is a critical point of $f$.

#### Extreme Value Theorem
>[!abstract] Theorem
>Suppose $f(x)$ is a continuous function on a **closed** and **bounded** domain $D ⊂ ℝ^n$. Then $f$ attains both an absolute maximum and an absolute minimum on that domain.

>[!info] Corollary
>In the setting of the previous theorem the function must attain its maximum and minimum either on the boundary of the domain or at a critical point of interior of the domain.

#### Closed and Bounded Region Method
> [!abstract] Algorithm
> To find the absolute maximum and minimum values of a continuous function $f$ on a closed and bounded domain $D$ apply the following algorithm:
> 1. Find the values of $f$ at the critical points of $f$ in the interior of the region $D$.
> 2. Find the extreme values of $f$ restricted to the boundary of the region $D$ by applying this algorithm to the function obtained by restricting $f$ to the boundary of $D$.
> 3. The largest of the values from Steps 1 and 2 is the absolute maximum value; the smallest of these values is the absolute minimum value.

