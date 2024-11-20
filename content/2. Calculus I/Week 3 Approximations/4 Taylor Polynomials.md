---
title: Taylor Polynomials
---

Taylor polynomials is a generalization of the concept of a linearization.
>[!Definition]
>The *n*th order Taylor polynomial of $f$ at the point $a$ is
>
>$$T_{n}(x)=f(a)+f'(a)(x-a)+\frac{1}{2}f''(a)(x-a)^2$$
>
>$$+\dots+\frac{1}{n\cdot(n-1)\dots2\cdot_{}1}f^{(n)}(x-a)^n$$

Now this formula can be otherwise simplified into...
>[!Formula]
>$$T_{n}(x)=\sum_{k=0}^{n}\frac{1}{k!}f^{(k)}(a)(x-a)^k$$

In the formula above, we use a value of $k!$ which represents k factorial. For example, if we have $5!$, then the factorial would become $5\cdot_{}4\cdot_{}3\cdot_{}2\cdot_{}1$.
>[!Basic property]
>$$f^{(k)}(a)=T_{n}^{(k)}(a)$$ for $k=0, 1, \dots, n$.

---
#### **Computation rules**
For relatively elementary functions it can be quite easy to compute Taylor polynomials. Sadly however, we often encounter complicated compositions of elementary function as well. Therefore, it can help to be able to express the Taylor polynomials for those complicated functions in terms of the Taylor polynomials of the elementary functions they are composed of. The following computation rules should allow for that method of computation.

>[!info]- Sum rule for Taylor polynomials
>Suppose we consider a sum of functions, in other words $f(x) = g(x)+h(x)$. Then we can express the $n$th order Taylor polynomial $T_{n}(x)$ of $f(x)$ in terms of the $n$th order Taylor polynomials $T_{n}^g(x)$ of $g(x)$ and $T_{n}^h(x)$ of $h(x)$ as follows
>
>$$T_{n}(x) = T_{n}^g(x)+T_{n}^h(x)$$
>
>Keep in mind that all of these Taylor polynomials need to centered at the same point $x=a$.

>[!info]- Product rule for Taylor polynomials
>Suppose we consider the product of a function with a factor $(x-a)$, in other words $f(x)=(x-a) \cdot g(x)$. Then the $(n+1)$th order Taylor polynomial $T_{n+1}(x)$ of $f(x)$ centered at the point $x=a$ is given in terms of the *n*th order Taylor polynomial $T_{n}^g(x)$ of $g(x)$ as follows
>
>$$T_{n+1}(x) = (x-a)\cdot T_{n}^g(x)$$
>
>By applying this rule iteratively we also find that the $(n+k)$th order Taylor polynomial $T_{n+k}(x)$ of the function $f(x) = (x-a)^kg(x)$ centered at $x=a$ is given in terms of the *n*th order Taylor polynomial $T^g(x)$ of $g(x)$ as
>
>$$T_{n+k}(x) = (x-a)^k\cdot T_{n}^g(x)$$
>
>In fact, product rules exist for other kinds of products of function. However, the one presented above will suffice in a great many cases.

>[!info]- Substitution rule for Taylor polynomials
>Suppose we consider the composition of a function with the function $h(x) = (x-a)^k$ in other words $f(x) = g((x-a)^k)$. Recall that the *n*th order Taylor polynomial of $g(x)$ centered at the point $x=0$ is
>
>$$\sum_{i=0}^n \frac{g^{(i)(0)}}{i!}x^i = g(0)+g'(0)x+\frac{g''(0)}{2}x^2+\dots+\frac{g^{(n)}(0)}{n!}x^n$$
>
>Then the $(n\cdot k)$th order Taylor polynomial $T_{nk}(x)$ of $f(x)$ centered at the point $x=a$ is given by
>
>$$T_{n\cdot k}(x)=\sum_{i=0}^n\frac{g^{(i)(0)}}{i!}(x-a)^{k\cdot i}=g(0)+g'(0)(x-a)^k+\frac{g''(0)}{2}(x-a)^{2k}+\dots+\frac{g^{(n)}(0)}{n!}(x-a)^{kn}$$

##### Example
As an example let us obtain the fifth order Taylor polynomial of the function $f(x)=x\cos(x^2)$ centered at the point $x=0$. Try taking some successive derivatives of this function (recall you will need five derivatives) to convince yourself that it would be nice to have a more efficient method of computing this Taylor polynomial.

Now we notice two things. Namely that the function $f(x)$ is the product of the function $x$ with the function $\cos(x^2)$, which itself is a composition of the function $\cos(x)$ with the function $x^2$. So by the product rule for Taylor polynomials we can express the fifth order Taylor polynomial of $f(x)$ in terms of the fourth order Taylor polynomial of $\cos(x^2)$. Furthermore by the substitution rule we can express the fourth order Taylor polynomial of $\cos(x^2)$ in terms of the second order Taylor polynomial of $\cos(x)$.

We start with the latter. The second order Taylor polynomial for $\cos(x)$ centered at the point $x=0$ is easily computed as

$$1-\frac{1}{2}x^2$$

since $\cos(0)=1$, $\sin(0)=0$ and $-\cos(0)=-1$.

This means the fourth order Taylor polynomial for $\cos(x^2)$ centered at the point $x=0$ is given by

$$1-\frac{1}{2}x^4$$

So finally the fifth order Taylor polynomial for $x\cos(x^2)$ centered at the point $x=0$ is given by

$$x-\frac{1}{2}x^5$$

You can check this result by actually computing the first five derivatives of $x\cos(x^2)$ and evaluating them at $0$. Hopefully you agree that using the computation rules was much less work than computing all these derivatives!
