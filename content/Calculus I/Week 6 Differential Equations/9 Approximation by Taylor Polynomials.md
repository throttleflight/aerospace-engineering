---
CourseCode: MMFEC1X
Semester: Summer 2024
Relevance: Low
Week: Week 6
---
#school-note 
#### Taylor Polynomials
>[!Definition]
>The *n*th order Taylor polynomial of $f$ at the point $a$ is
>$$T_{n}(x)=\sum_{k=0}^n \frac{1}{k!} f^{(k)}(a)(x-a)^k$$
>The closer we are to $a$ the better the polynomial approximates.

#### Strategy
Given an *n*th order initial value problem we can obtain an *m*th order approximation
$$T_{m}(x)=\sum_{k=0}^m \frac{y^{(k)}(a)}{k!}(x-a)^k$$
- We obtain $y^{(k)}(a)$ for $0\leq k\leq n-1$ from the initial values.
- The values $y^{(k)}(a)$ for $k\geq n$ are found iteratively by taking sufficient derivatives of the full differential equation, then plugging in known values of $y^{(l)}(a)$ and solving for $y^{(k)}$.