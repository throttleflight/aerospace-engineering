---
title: Triple Integrals Over General Regions
---

Referring to Type I and Type II regions from Double Integrals --> [[3 Double Integrals Over General Regions]]

#### Regions of Type I
>[!Definition]
>A solid region $E$ is said to be of type 1 or $z$-simple if it lies between the graphs of two continuous functions of $x$ and $y$:
>
>$$E=\{(x,y,z)|(x,y)∈D,u_{1}(x,y)\leq z\leq u_{2}(x,y)\}$$
>
>where $D$ is the projection of $E$ onto the $xy$-plane.

##### Triple Integrals Over a Region of Type I
>[!abstract] Theorem
>If the solid region $E$ is of type 1, i.e.
>
>$$E=\{(x,y,z)|(x,y)∈D,u_{1}(x,y)\leq z\leq u_{2}(x,y)\},$$
>
>then
>
>$$\iiint_{E}f(x,y,z)dV=\iint_{D}\left(  \int_{u_{1}(x,y)}^{u_{2}(x,y)} f(x,y,z)dz \right)dA$$

#### Regions of Type II
>[!Definition]
>A solid region $E$ is said to be of type 2 or $x$-simple if it lies between the graphs of two continuous functions of $y$ and $z$:
>
>$$E=\{(x,y,z)|(y,z)∈D,u_{1}(y,z)\leq x\leq u_{2}(y,z)\},$$
>
>where $D$ is the project of $E$ onto the $yz$-plane.

##### Triple Integrals Over a Region of Type II
>[!abstract] Theorem
>If the solid region $E$ is of type 2, i.e.
>
>$$E=\{(x,y,z)|(y,z)∈D,u_{1}(y,z)\leq x\leq u_{2}(y,z)\},$$
>
>then
>
>$$\iiint_{E}f(x,y,z)dV=\iint_{D}\left( \int_{u_{1}(y,z)}^{u_{2}(y,z)} f(x,y,z)dx \right)dA$$

#### Regions of Type III
>[!Definition]
>A solid region $E$ is said to be of type 3 or $y$-simple if it lies between the graphs of two continuous functions of $x$ and $z$:
>
>$$E=\{(x,y,z)|(x,z)∈D,u_{1}(x,z)\leq x\leq u_{2}(x,z)\},$$
>
>where $D$ is the project of $E$ onto the $xz$-plane.

##### Triple Integrals Over a Region of Type II
>[!abstract] Theorem
>If the solid region $E$ is of type 3, i.e.
>
>$$E=\{(x,y,z)|(x,z)∈D,u_{1}(x,z)\leq y\leq u_{2}(x,z)\},$$
>
>then
>
>$$\iiint_{E}f(x,y,z)dV=\iint_{D}\left( \int_{u_{1}(x,z)}^{u_{2}(x,z)} f(x,y,z)dy \right)dA$$

