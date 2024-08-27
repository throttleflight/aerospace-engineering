---
title: Composition of (Inverse) Trigonometric Values
---

#### Regular Values:
| Angle $\theta$  | sin($\theta$)           | cos($\theta$)           | tan($\theta$)           |
| --------------- | ----------------------- | ----------------------- | ----------------------- |
| 0               | 0                       | 1                       | 0                       |
| $\frac{\pi}{6}$ | $\frac{1}{2}$           | $\frac{1}{2}\sqrt{ 3 }$ | $\frac{1}{3}\sqrt{ 3 }$ |
| $\frac{\pi}{4}$ | $\frac{1}{2}\sqrt{2}$   | $\frac{1}{2}\sqrt{ 2 }$ | 1                       |
| $\frac{\pi}{3}$ | $\frac{1}{2}\sqrt{ 3 }$ | $\frac{1}{2}$           | $\sqrt{ 3 }$            |
| $\frac{\pi}{2}$ | 1                       | 0                       | 1                       |
#### Matching Compositions:
$\arcsin(\sin (x)) = x$ and $\sin(\arcsin(x))=x$
$\arccos(\cos(x)) = x$ and $\cos(\arccos(x)) = x$
$\arctan(\tan(x)) = x$ and $\tan(\arctan(x)) = x$
##### Example:
$\arctan(\tan(10)) = 10 - 3\pi$
#### Non-matching Compositions:
(Method 1) Using $\sin^2(\theta) + \cos^2(\theta) = 1$
$\sin(\arccos(x)) = ?$
$\sin^2(\arccos(x))+\cos^2(\arccos(x)) = 1$ ---> Use the Pythagorean Identity
$\sin^2(\arccos(x)) + x^2 = 1$
$\sin^2(\arccos(x)) = 1-x^2$ ---> Take the square root.
$\sin(\arccos(x)) = \pm \sqrt{ 1-x^2 }$
$\sin(\arccos(x)) = \sqrt{ 1-x^2 }$
#### Non-matching Compositions:
(Method 2) Using Triangles
$\cos(\arctan(x)) = ?$
$\theta=\arctan(x)$
$\tan(\theta) = x$
$\cos(\theta) = \frac{1}{\sqrt{ 1+x^2 }}$
