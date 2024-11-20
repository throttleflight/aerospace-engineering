---
title: Fundamental Theorem of Calculus
---

#### Fundamental Theorem V.1
>[!Abstract] Theorem
>If the function $f(x)$ is integrable* over the interval $[a, b]$, then
>
>$$\int_{a}^b f(x) dx = F(b)-F(a)$$
>
>where $F(x)$ is any anti-derivative of $f(x)$.

>[!Definition]
>A function $F(x)$ is an antiderivative of $f(x)$ if $\frac{dF}{dx} = f(x)$.

#### Anti-derivative
>[!Definition]
>A function $F(x)$ is an antiderivative of $f(x)$ if $\frac{dF}{dx} = f(x)$.

> [!example]
> $F(x) = \frac{1}{3}x^3-\cos(x)$ is an anti-derivative of $f(x) = x^2 + \sin(x)$.
> 
> Indeed
> 
> $$F'(x) = f(x)$$

#### Fundamental Theorem V.2
>[!Abstract] Theorem
>If the function $f(x)$ is integrable* over the interval $[a,b]$, then
>
>$$F(x) = \int_{a}^x f(t) dt$$
>
>is an anti-derivative of $f(x)$, i.e. $F'(x) = f(x)$.

> [!example]
> $$\int_{0}^{\frac{\pi}{2}} \cos(x) dx = F(\frac{\pi}{2}) - F(0)$$
> 
> where $F'(x) = \cos(x)$
> 
> So
> 
> $$\int_{0}^{\frac{\pi}{2}} \cos(x) dx = \sin(\frac{\pi}{2}) - \sin(0) = 1 - 0 = 1$$
> 
> since $\frac{d\sin(x)}{dx} = \cos(x)$

##### Elementary Functions
| functions                | Anti-derivatives    |
| ------------------------ | ------------------- |
| $x^r$ for $r \neq -1$    | $$\frac{x^r}{r+1}$$ |
| $$x^{-1} = \frac{1}{x}$$ | $$\ln(x)$$          |
| $$\sin(x)$$              | $$\cos(x)$$         |
| $$\cos(x)$$              | $$-\sin(x)$$        |
| $$e^x$$                  | $$e^x$$             |

#### Combinations
##### Elementary Functions:
- Polynomials
- Trigonometric Functions
- Exponential Function
##### Examples of Combination:
- $f(x) = x^2e^x$
- $g(x) = \cos(x^2)$
#### Problematic Functions
The anti-derivative $F(x)$ of $\cos(x^2)$ can only be expressed as:

$$F(x) = \int _{a}^{x} \cos(t^2) dt$$

It can not be expressed as a combination of elementary functions.
#### Indefinite Integral
> [!info] Notation
> Given an integrable function $f(x)$, the indefinite integral
> 
> $$\int f(x)dx = F(x) + C$$
> 
> denotes the family of anti-derivative $F(x) + C$ where $F'(x)=f(x)$ and $C$ represents an arbitrary constant.

