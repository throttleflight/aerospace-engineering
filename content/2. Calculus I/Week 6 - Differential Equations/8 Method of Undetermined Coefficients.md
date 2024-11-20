---
title: 9. Method of Undetermined Coefficients
---

#### Method of Undetermined Coefficients
1. Make an ansatz for (i.e. guess) a solution with a number of undetermined coefficients $A$, $B$, $C$, $\dots$ in it.
2. Plug the ansatz in the equation to obtain a system of equations for the coefficients.
3. Solve the system of equations to determine the coefficients.

#### Advanced Cases
##### Products
If the right hand side is a product of the basic cases then the ansatz should be the product of the corresponding ansatzes.
##### Sums
If the right hand side is a sum of the basic cases then the ansatz should be the sum of the corresponding ansatzes.

#### Table of Basic "Right Hand Sides" and Corresponding Ansatzes
| RHS                                         | Ansatz                                  |
| ------------------------------------------- | --------------------------------------- |
| $$c_{n}x^n+c_{n-1}x^{n-1}+\dots+c_{0}$$     | $$A_{n}x^n+A_{n-1}x^{n-1}+\dots+A_{0}$$ |
| $$c_{1}\cos(\omega x)+c_{2}\sin(\omega x)$$ | $$A \cos(\omega x)+B\sin(\omega x)$$    |
| $$Ce^{kx}$$                                 | $$Ae^{kx}$$                             |
These basic cases should be combined with the rule that for a product of right hand sides we "guess" the product of the corresponding ansatzes and for a sum of right hand sides we "guess" the sum of corresponding ansatzes.

---
#### Example
As a culminating example for this section let us find the solution to the following initial value problem

$$2y''-8y'+8y=e^{2x}\cos(\pi x)+e^{2x}$$

with $y(0)=1$ and $y'(0) = 3$.

We start by finding the general solution to the complementary equation by considering the corresponding characteristic equation

$$2r^2-8r+8=0$$

which has a single solution $r=2$. This means the general solution to the complementary equation is

$$y_{c}(x)=c_{1}e^{2x}+c_{2}xe^{2x}$$

Then we move on to find a particular solution to the non-homogeneous equation by the method of undetermined coefficients. First note that we should view the right hand side as a sum of two products of "basic right hand sides". This means will find particular solutions for both summands of the right hand side separately and then sum them. Let's start with

$$2y''-8y'+8y=e^{2x}\cos(\pi x)$$

We see that the right hand side is a product of an exponential for which the ansatz would be $Ae^{2x}$ and a trigonometric function for which the ansatz would be $A\cos(\pi x)+B\sin(\pi x)$. So we should guess the product of these and our ansatz will be

$$Ae^{2x}\cos(\pi x)+Be^{2x}\sin(\pi x)$$

with first derivative

$$(2A+\pi B)e^{2x}\cos(\pi x)+(2B-\pi A)e^{2x}\sin(\pi x)$$

and second derivative

$$((4-\pi^2)A+4\pi B)e^{2x}\cos(\pi x)+((4-\pi^2)B-4\pi A)e^{2x}\sin(\pi x)$$

Plugging these into the equation and collecting terms yields

$$-2\pi^2Ae^{2x}\cos(\pi x)-2\pi^2Be^{2x}\sin(\pi x)=e^{2x}\cos(\pi x)$$

so it follows that $B=0$ and $A=-\frac{1}{2\pi^2}$. At this point we could check that indeed $-\frac{1}{2\pi^2}e^{2x}\cos(\pi x)$ is a particular solution to the equation above.

So now we move on to the other summand in the right hand side

$$2y''-8y'+8y=e^{2x}$$

This right hand side is one of the basic ones and we should use the ansatz $Ae^{2x}$. However, we observe that this solves the complementary equation so we should move on to $Axe^{2x}$. Sadly this again solves the complementary equation, so we should move on to

$$Ax^2e^{2x}$$

which has derivative

$$2Axe^{2x}+2Ax^2e^{2x}$$

and second derivative

$$2Ae^{2x}+8Axe^{2x}+4Ax^2e^{2x}$$

Plugging these into the equation and collecting terms yields

$$4Ae^{2x}=e^{2x}$$

and so $A=\frac{1}{4}$. At this point we could check that indeed $\frac{1}{4}x^2e^{2x}$ is a particular solution to the equation above.
We could also check that the sum $\frac{1}{4}x^2e^{2x}-\frac{1}{2\pi^2}e^{2x}\cos(\pi x)$ is a particular solution to our original equation which yields the general solution

$$c_{1}e^{2x}+c_{2}xe^{2x}+\frac{1}{4}x^2e^{2x}-\frac{1}{2\pi^2}e^{2x}\cos(\pi x)$$

Finally to determine the coefficients $c_{1}$ and $c_{2}$ we need to consider the initial conditions to obtain the equations

$$c_{1}-\frac{1}{2\pi^2}=1$$

$$2c_{1}+c_{2}-\frac{1}{\pi^2}=3$$

which are solved by $c_{1}=1+\frac{1}{2\pi^2}$ and $c_{2}=1$. So finally we find the solution

$$\left( 1+\frac{1}{2\pi^2} \right)e^{2x}+xe^{2x}+\frac{1}{4}x^2e^{2x}-\frac{1}{2\pi^2}e^{2x}\cos(\pi x)$$

of the initial value problem.
