---
title: 8. Unbounded Domains
---

#### Bell Curve - Expectation
Probability density function for male height in cm:

$$f(x)=\frac{1}{6\sqrt{ 2\pi }}e^{-\frac{1}{2}(\frac{x-180}{6})^2}$$

Expected value:

$$\int_{\infty}^{\infty}xf(x)dx$$

#### Definition - $[a, \infty)$ and $(-\infty, b]$
>[!Definition]
>The integral of the function $f$ over the interval $[a, \infty)$ is given by
>
>$$\int_{a}^{\infty} f(x)dx = \lim_{ b \to \infty } \int_{a}^b f(x)dx$$
>
>The integral of the function $f$ over the interval $(-\infty, b]$ is given by
>
>$$\int_{-\infty}^b f(x)dx = \lim_{ a \to -\infty } \int_{a}^b f(x)dx$$

>[!Note]
>Integral converges if the limits are finite numbers and diverges otherwise.

#### Definition - $(-\infty, \infty)$
>[!Definition]
>The integral of the function $f$ over the entire real line $(-\infty, \infty)$ is given by
>
>$$\int_{-\infty}^{\infty} f(x) dx = \int_{-\infty}^c f(x)dx + \int_{c}^{\infty} f(x)dx$$
>
>for some number $c \in ℝ$.

>[!Note]
>Integral converges if **both** the parts converge and diverges otherwise.

#### Comparison Rule For Integrals
An integral over an unbounded interval will converge if the integrand approaches  quickly enough. Therefore, one way of determining whether an integral over an unbounded interval converges without doing the actual computation is by comparing the integrand with a function of which you already know that it approaches $0$ quickly enough.

For that reason it is good to have a few examples for which you definitely know that the integral converges.

The integrand $e^{-x}$ approaches zero quickly enough since:

$$\int_{0}^{\infty}e^{-x}dx = \lim_{ b \to \infty } -e^{-b}+1=1$$

When $p>1$ the integrand $\frac{1}{x^p}$ also approaches $0$ quickly enough since then

$$\int_{1}^{\infty} \frac{1}{x^p}dx = \lim_{ b \to \infty } \frac{1}{1-p}b^{1-p}+\frac{1}{p-1}=\frac{1}{p-1}$$

When $p<1$ the integrand $\frac{1}{x^p}$ does not approach $0$ quickly enough since then

$$\int_{1}^{\infty} \frac{1}{x^p}dx = \lim_{ b \to \infty } \frac{1}{1-p}b^{1-p}+\frac{1}{p-1} = \infty$$

When $p=1$ the integrand $\frac{1}{x^p}$ does not approach $0$ quickly enough since then

$$\int_{1}^{\infty} \frac{1}{x}dx = \lim_{ b \to \infty } \ln(b)=\infty$$
