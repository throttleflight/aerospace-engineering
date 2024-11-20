---
title: 7. Approximating using Taylor's Polynomials
---

#### Problem
The anti-derivative of some functions, eg. $\cos(x^2)$, $\sin(x^2)$, and $(e^x)^2$, cannot be expressed in terms of elementary functions.
Other antiderivatives are hard to figure out, eg.

$$\int \frac{\tan^3(\ln(x))}{x}dx$$

Solution:
Approximate by Taylor's polynomials.
#### Taylor Polynomials
>[!Abstract] Theorem
>Suppose $T_{n}(x)$ is the *n*th Taylor polynomial of a function $f(x)$. Then
>
>$$\int T_{n}(x)dx$$
>
>is the $(n+1)$th order Taylor polynomial of an anti-derivative $F(x)$ of $f(x)$.

#### Taylor Polynomials - Accuracy
>[!Abstract] Corollary
>Suppose $T_{n}(x)$ is the *n*th order Taylor polynomial of the function $f(x)$ about the point $x=a$.
>
>Taylor's inequality implies that the approximation error
>
>$$R_{n}(x) = |T_{n}(x)-f(x)|$$
>
>is small when $|x-a|$ is smaller.
>
>When we use Taylor polynomials about a point $x=a$ to approximate the integral of $f(x)$ over the interval $[b, c]$ then the entire interval should be close to the point $x=a$.

#### Absolute Value of an Integral
> [!abstract] Theorem
> Let $f(x)$ be a function that is integrable over $[a, b]$ then
> 
> $$|\int_{a}^b f(x)dx| \leq \int_{a}^b |f(x)|dx$$

#### Taylor's Inequality - For Integrals
> [!abstract] Corollary
> Let $f$ be a function and $T_{n}$ its Taylor polynomial at the point $a$.
> 
> Let $[b, c]$ be an interval that contains the point $a$ and $M$ an upper bound for the function $|f^{(n+1)}(x)|$ on $D$, in other words:
> 
> $|f^{(n+1)}(x)|\leq M$ holds for all $x$ in $D$.
> 
> Then
> 
> $$|\int_{b}^c f(x)dx-\int_{b}^c T_{n}(x)dx| \leq \int_{b}^c \frac{M}{(n+1)!}|x-a|^{n+1}dx$$

#### Summary
Approach to approximate $\int_{b}^c f(x)dx$:
1. Compute Taylor polynomial $T_{n}(x)$ about $x=a$ for $f(x)$ where $a$ should be close to $[b, c]$.
2. Compute $\int_{b}^c T_{n}(x)dx$, this is your approximation
3. Taylor's inequality for integrals provides an upper bound on approximation error.

