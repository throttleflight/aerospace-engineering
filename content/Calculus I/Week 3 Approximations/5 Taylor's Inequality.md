---
CourseCode: MMFEC1X
Semester: Summer 2024
Relevance: Low
Week: Week 3
---
#school-note 
#### Approximation Error
>[!Definition]
>Given a function $f$ and its Taylor polynomial $T_{n}$ at the point $a$, the *approximation error* in $x$ is given by
>$$R_{n}(x)=|f(x)-T_{n}(x)|$$

**In other words**, $R_{n}(x)$ is the difference between the real function value and the value of the Taylor polynomial at the point $x$.
#### Taylor's Inequality
> [!abstract] Theorem
> Let $f$ be a function and $T_{n}$ its Taylor polynomial at the point $a$.
> Let $D$ be an interval that contains the point $a$ and $M$ an upper bound for the function $|f^{(n+1)}(x)|$ on $D$, in other words:
> $$|f^{(n+1)}(x)| \leq M $$ holds for all $x$ in $D$.
> Then, for all $x∈ D$:
> $$|f(x)-T_{n}(x)| \leq \frac{M}{(n+1)!}|x-a|^{n+1}$$
> The section $|f(x)-T_{n}(x)|$ is also $R_{n}(x)$

