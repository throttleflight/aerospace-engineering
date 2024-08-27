---
title: First Order Linear Differential Equations
---

#### First Order Linear Differential Equations
>[!Definition]
>A first-order **linear** differential equation is one that can be put into the form
>
>$$\frac{dy}{dx}+P(x)y=Q(x)$$
>
>We call the equation above the *standard form*.

#### Integrating Factor
>[!Definition]
>The **integrating factor** $I(x)$ for the linear differential equation (in standard form)
>
>$$\frac{dy}{dx}+P(x)y=Q(x)$$
>
>is the function
>
>$$I(x) = e^{\int P(x) dx}$$
>
>where you may choose any value for the integration constant.

##### Purpose
An integrating factor $I(x) = e^{\int P(x)dx}$ for the linear differential equation

$$\frac{dy}{dx}+P(x)y = Q(x)$$

satisfies

$$I'(x) = I(x)P(x)$$

##### Corollary
$$[I(x)y]' = I(x)y'+I'(x)y = I(x)y'+I(x)P(x)y = I(x)Q(x)$$

#### Solution Procedure - Algorithm
Algorithm to solve 1st order linear differential equations:
1. **Write in standard form:** $\frac{dy}{dx}+P(x)y=Q(x)$
2. **Compute integrating factor:** $I(x)=e^{\int P(x)dx}$
3. **Multiply by $I(x)$:** $[I(x)y]' = I(x)y'+I(x)P(x)y=I(x)Q(x)$
4. **Integrate:** $I(x)y=\int I(x)Q(x)dx$
5. **Divide by $I(x)$:** $y(x)=\frac{1}{I(x)}\int I(x)Q(x)dx$
