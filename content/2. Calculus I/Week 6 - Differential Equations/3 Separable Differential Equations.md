---
title: Separable Differential Equations
---

#### Separable Differential Equations
>[!Definition]
>A (first-order) **separable differential equation** is a first-order differential equation in which the expression for $y'=\frac{dx}{dy}$ can be factored as a function of $x$ times a function of $y$.
>
>In other words, it can be written in the form
>
>$$\frac{dy}{dx}=f(x)g(y)=\frac{f(x)}{h(y)}$$

>[!Info] Differential Form
>$$h(y)dy = f(x)dx$$

#### Solution Procedure - Algorithm
Algorithm to solve separable differential equations:
1. **write DE as:** $\frac{dy}{dx}=\frac{f(x)}{h(y)}$
2. **Separate variables:** $h(y)dy = f(x)dx$
3. **Find anti-derivatives:** $H(y) = \int h(y)dy = \int f(x)dx = F(x)+C$
4. **Implicit solution:** $H(y) = F(x) + C$ with $C ∈ ℝ$ 
5. **Explicit solution:** $y(x)=H^{-1}(F(x)+C)$ with $C ∈ ℝ$ 
