---
CourseCode: MMFEC1X
Semester: Summer 2024
Relevance: Low
Week: Week 3
---
#school-note 
We can discuss the properties of functions. For example, $f(x) = \sqrt{ x }$. The derivative would be $f'(x)=\frac{1}{2\sqrt{ x }}$. The maximal domain would be $D = [0, ∞)$. Then lastly, we have the functional values. The values can be like $f(36) = 6$, $f(100)=10$, $f(0.25)=0.5$, but how can we express $f(101)$?

When we utilize decimal expansion, we can get some obstacles.
> [!attention]
> 1. Some decimal expansions have no repeating patterns.
> 2. Computation can cost a lot of time or other resources.

So in this case, we use approximations.
>[!Definition]
>Given a function f(x) an approximation of a function value f(a) is a real number $\hat{f(a)}$ that is "close" to $f(a)$.
>We denote this as $f(a)\approx \hat{f(a)}$.

>[!Example]
>$\sqrt{ 101 } \approx \sqrt{ 100 }=10$

#### Approximation Error
>[!Definition]
>Suppose $f(a) \approx \hat{f(a)}$ then the approximate error $E$ is defined as
>$$E = |f(a)-\hat{f(a)}|$$
>Similarly, the relative approximation error $\eta$ is defined as
>$$\eta=|\frac{f(a)-\hat{f(a)}}{f(a)}|$$
>$\eta$ is the Greek alphabet Eta.

##### Example
If we consider that $\sqrt{ 101 } \approx \sqrt{ 100 }=10$ then
$$
E = |\sqrt{ 101 }-10| \leq 0.05
$$
If we consider that $\sqrt{ 101 } \approx 10.05$ then
$$
E = |\sqrt{ 101 }-10.05| \leq 0.000125
$$
Approximation methods often come with restrictions so the corresponding approximation error depends on values to which it is applied.




