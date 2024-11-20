---
title: Linear Second Order Differential Equations
---

#### First Order Linear Differential Equations
>[!Definition]
>A first-order **linear** differential equation is one that can be put into the form
>
>$$y'+P(x)y = Q(x)$$

#### Second Order Linear Differential Equations
>[!Definition]
>A second-order **linear** differential equation is one that can be put into the form
>
>$$a(x)y''+b(x)y'+c(x)y=F(x)$$

>[!Info] Linearity Property
>$$(a(x)y_{1}''+b(x)y_{1}'+c(x)y_{1})+(a(x)y_{2}''+b(x)y_{2}'+c(x)y_{2})=a(x)y''+b(x)y'+c(x)y$$
>
>$$k(a(x)y_{1}''+b(x)y_{1}'+c(x)y_{1})=a(x)(ky_{1})''+b(x)(ky_{1})'+c(x)ky_{1}$$
>
>where $y=y_{1}+y_{2}$.

#### Homogeneous Equation
>[!Definition]
>A second-order linear differential equation
>
>$$a(x)y''+b(x)y'+c(x)y=F(x)$$
>
>is called **homogeneous** if $F(x)=0$, so we get
>
>$$a(x)y''+b(x)y'+c(x)y=0$$

##### Linearity
If $y_{1}$ and $y_{2}$ both solve $a(x)y''+b(x)y'+c(x)y=0$ then so does $y=y_{1}+y_{2}$.

#### Linear Combination
>[!Info] Theorem
>If two functions $y_{1}$ and $y_{2}$ solve a homogeneous linear second order differential equation then so does any linear combination of them.

>[!Definition]
>A **linear combination** of two functions $y_{1}$ and $y_{2}$ is a function
>
>$$y=c_{1}y_{1}+c_{2}y_{2}$$
>
>for some constants $c_{1}$ and $c_{2}$.

#### Linear Independence
>[!Info] Theorem
>
>If two linearly independent functions $y_{1}$ and $y_{2}$ solve a homogeneous linear second order differential equation then the general solution is
>
>$$y=c_{1}y_{1}+c_{2}y_{2}$$

>[!Definition]
>Two functions $y_{1}$ and $y_{2}$ are called **linearly independent** if $y_{1} \neq \alpha y_{2}$ and $y_{2} \neq \beta y_{1}$ for any constants $\alpha$ and $\beta$.

#### Complementary Equation
>[!Definition]
>For a second-order linear differential equation
>
>$$a(x)y''+b(x)y'+c(x)y=F(x)$$
>
>we call $F(x)$ the **driving term** and we call
>
>$$a(x)y''+b(x)y'+c(x)y=0$$
>
>the **complementary** (homogeneous) equation.

#### Linearity - Non-Homogeneous Case
>[!Info] Theorem
>If $y_{1}$ and $y_{2}$ are two solutions to a second order linear differential equation then
>
>$$y=y_{2}-y_{1}$$
>
>is a solution to the complementary equation.

##### General Solution
>[!Info] Theorem
>If two linearly independent functions $y_{1}$ and $y_{2}$ solve the complementary equation to a second order linear differential equation and $y_{p}$ is some particular solution to that equation then the general solution is
>
>$$y=y_{p}+c_{1}y_{1}+c_{2}y_{2}$$

#### Solving Strategy
Solving $a(x)y''+b(x)y'+c(x)y=F(x)$:

1. Find two linearly independent solutions $y_{1}$ and $y_{2}$ to the complementary equation $a(x)y''+b(x)y'+c(x)y=0$.
2. Find one particular solution $y_{p}$ to the actual equation.
3. The general solution is

$$y=y_{p}+c_{1}y_{1}+c_{2}y_{2}$$

#### Constant Coefficients
>[!Definition]
>A second order linear differential equation with **constant coefficients** is a differential equation in the following form:
>
>$$ay''+by'+cy=F(x)$$
>
>where $a$, $b$, and $c$ are constants.

