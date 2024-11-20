---
title: 2. First Order Partial Derivatives
---

#### Partial Derivative (Two Variables)
>[!Definition]
>The partial derivative of the function $f(x,y)$ with respect to $x$ at the point $(x_{0}, y_{0})$ is given by $g'(x_{0})$ where
>
>$$g(x) = f(x, y_{0})$$
>
>Similarly the partial derivative of the function $f(x,y)$ with respect to $y$ at the point $(x_{0}, y_{0})$ is given by $h'(y_{0})$ where
>
>$$h(y) = f(x_{0}, y)$$

#### Partial Derivative
>[!Definition]
>The partial derivative of the function $f(x_{1},\dots,x_{n})$ with respect to $x_{i}$ at the point $(a_{1},\dots,a_{n})$ is given by $g'(a_{i})$ where
>
>$$g(x)=f(a_{1},\dots,a_{i-1},x,a_{i+1},\dots,a_{n})$$

#### Partial Derivative Limits
>[!Definition]
>The partial derivative of the function $f(x,y)$ with respect to $x$ at the point $(x_{0}, y_{0})$ is given by $g'(x_{0})$ where $g(x)=f(x,y_{0})$. Similarly the partial derivative of the function $f(x,y)$ with respect to $y$ at the point $(x_{0}, y_{0})$ is given by $h'(y_{0})$ where $h_{y}=f(x_{0},y)$.

$$g'(x_{0})=\lim_{ h \to 0 } \frac{f(x_{0}+h,y_{0})-f(x_{0},y_{0})}{h}$$

$$h'(x_{0})=\lim_{ h \to 0 } \frac{f(x_{0},y_{0}+h)-f(x_{0},y_{0})}{h}$$

#### Partial Derivative Notation
Partial derivative with respect to $x$:

$$f_{x}(x_{0},y_{0})=\frac{∂f}{∂x}(x_{0},y_{0})=\frac{∂}{∂y}f(x_{0},y_{0})=D_{x}f(x_{0},y_{0})=f_{1}(x_{0},y_{0})$$

Partial derivative with respect to y:

$$f_{y}(x_{0},y_{0})=\frac{∂f}{∂y}(x_{0}, y_{0})=\frac{∂}{∂y}f(x_{0},y_{0})=D_{y}f(x_{0},y_{0})=f_{2}(x_{0},y_{0})$$

#### Del vs delta vs d
"d" --> dee (total derivative)

"$\delta$" --> delta

"∂" --> del (partial derivative)
