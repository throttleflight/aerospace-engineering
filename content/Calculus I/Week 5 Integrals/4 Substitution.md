---
title: Substitution
---

#### Anti-derivative
A function $F(x)$ is an anti-derivative of a function $f(x)$ if:

$$F'(x) = f(x)$$

to

$$\int f(x)dx = F(x) + C$$
#### Some standard anti-derivatives
$$\int x^r dx = \frac{x^{r+1}}{r+1} + C$$ for $r\neq 1$ (above)

$$\int x^{-1}dx = \ln|x|+C$$

$$\int e^xdx=e^x+C$$

$$\int \sin(x)dx = -\cos(x)+C$$

$$\int \cos(x)dx = \sin(x)+C$$

#### More complicated anti-derivatives
$$\int x\sin(x)dx$$

$$\int \frac{\ln x}{x}dx$$

$$\int x^2\sqrt{ x^3+1 } dx$$

#### Method of Substitution
$$\int F'(g(x))g'(x)dx = \int F'(u)du = F(u)+C = F(g(x))+C$$

$u=g(x)$

$\frac{du}{dx}=g'(x) \to du=g'(x)dx$

##### The four steps
1. Check special form $f(g(x))g'(x)$ of the integrand
2. Simplify $\int f(g(x))g'(x)dx = \int f(u)du$
3. Find the anti-derivative $F$ of $f$
4. $\int f(u)du = F(u)+C=F(g(x))+C$
#### Substitution rule for definite integrals
$$\int_{a}^b F(g(x))g'(x)dx = \int_{g(a)}^{g(b)}F'(u)du = F(g(b))-F(g(a))$$

$u=g(x)$
### **Substitution Example**
When trying to work out an integral with a substitution, an easier integral is not guaranteed: the choice of the substitution is important. Let's consider this integral as example: $\int \frac{x}{1+x^4}dx$.
#### Substitution 1:
First let's try to substitute $u=1+x^4$. This makes sense since it is the function in the denominator. It means

$$du=4x^3dx$$

and so

$$dx=\frac{du}{4x^3}$$

Since we picked for $u$ the denominator, we can replace $\frac{x}{1+x^4}$ by $\frac{x}{u}$ in the integral, and as just shown we can replace $dx$ by $\frac{du}{4x^3}$ to obtain

$$\int \frac{x}{u*4x^3}du = \int \frac{1}{4u} \frac{1}{x^2}du$$

By noting that $u-1=x^4$ and thus that $x^2=\sqrt{ u-1 }$ we can remove all occurrences of $x$ from the integral to get

$$\int \frac{x}{1+x^4}dx = \int \frac{1}{u} \frac{1}{4x^2}du = \int \frac{1}{4u\sqrt{ u-1 }}du$$

This concludes the application of the method of substitution and the shown integrals are indeed equal. At this point we should evaluate whether the application of the method of substitution actually helped. Sadly we should conclude that it did not. The "new" integral in terms of $u$ is not actually more straightforward than the original one. In some cases this means we should apply the method of substitution again or apply some other method. Another option however is to go back to our original integral and see if we can find a different substitution that would work better.

#### Substitution 2:
Since the numerator is $x$ it may make sense to try to substitute $u=x^2$, since then the derivative gives us the numerator up to a constant. Indeed, we find $du=2x$ and thus

$$du=2xdx$$

and so

$$dx=\frac{du}{2x}$$

In the integral we can then replace $xdx$ by $x \frac{du}{2x} = \frac{1}{2}du$ and what remains is $\frac{1}{1+x^4} = \frac{1}{1+u^2}$. So we obtain

$$\int \frac{x}{1+x^2}dx = \frac{1}{2} \int \frac{1}{1+u^2}du$$

Again this concludes the application of the method of substitution and the shown integrals are indeed equal. In this case however, the antiderivative of $\frac{1}{1+u^2}$ is known, namely $\arctan(u)$. That means we can calculate the integral

$$\int \frac{x}{1+x^4}dx = \frac{1}{2} \int \frac{1}{1+u^2}du$$

$$=\frac{1}{2} \arctan(u) + C$$

$$=\frac{1}{2}\arctan(x^2)+C$$

since $u=x^2$.

#### Conclusion
Picking the right substitution is very important to simplify an integral, as picking a bad one can take us further away from known derivative-antiderivative pairs. Dealing with this fact comes down to experience and perseverance. The more often you use the method of substitution the more you will be able to preemptively determine which substitutions will be good. To get this experience you will need to persevere. This means that you simply guess a substitution then apply the method and see if it made the integral easier. If it did **not** then you go back to the original integral and try another substitution instead.
