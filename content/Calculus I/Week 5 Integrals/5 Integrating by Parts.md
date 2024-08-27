---
CourseCode: MMFEC1X
Semester: Summer 2024
Relevance: Low
Week: Week 5
---
#school-note 
#### Notation
In the video, we used the notation
$$\int f(x)g(x)dx = F(x)g(x) - \int F(x)g'(x)dx$$
when discussing integration by parts. In this formula, $F$ is an anti-derivative of the function $f$. In the upcoming example, as well as some of the exercises, we will switch to a different notation. Both types of notation are used commonly in the applied literature, so it is important that you familiarize yourself with both. In the alternative notation, integration by parts takes the form
$$\int udv = uv - \int vdu$$
In this notation, $u$ takes the role of $g(x)$, while $v$ takes the role of $F(x)$. In fact, these variables $u$ and $v$ are still functions of $x$, even though we do not make this explicit. The notation $dv$ and $du$ might seem a bit mysterious, but it is actually quite similar to the notation $du$ we used for the substitution method. That is, we have
$$du=\frac{du}{dx}dx$$ and
$$dv = \frac{dv}{dx}dx$$
#### Integration by Parts Example
When trying to work out an integral with an integration by parts, an easier integral is not guaranteed: the choice of parts is important. For integration by parts we consider an integral given as $\int u dv$ for functions $u(x)$ and $v(x)$. What may not be clear is which part of the integrand is $u$ and which part is $dv$. In fact, for some integrals multiple choices might be correct. Note that if we choose (or guess) the function $u(x)$ this fixes all the rest of the method. So how do we choose $u$? Well it goes just like for the method of substitution by experience and trial and error.
Let's consider this integral as example: $\int x\ln(x)dx$.
##### Choice 1:
First let's try $u=x$ since its derivative is just a constant $1$ and this is very simple. This means that $dv=\ln(x)dx$. By computing $du$ and considering an anti-derivative for $\ln(x)$ we can complete the table to find
$u=x$ and $du=dx$
$v=x\ln(x)-x$ and $dv=\ln(x)dx$.
Here you may view the anti-derivative $v$ of $\ln(x)$ as given. In fact, you can obtain this from by using integration by parts (try to show this yourself). Carrying out the integration by parts from the start now gives
$$\int x\ln(x)dx = [x\cdot(x\ln(x)-x)]-\int 1\cdot(x\ln(x)-x)dx$$
$$=x^2\ln(x)-x^2-\int(x\ln(x)-x)dx$$
This concludes the application of the method of integration by parts and the shown equation indeed holds. At this point we should evaluate whether the application of the method of integration by parts actually helped. Sadly we should conclude that it did not. The "new" integral is not actually more straightforward than the original one. In some cases this means we should apply the method of integration by parts again or apply some other method. Another option however is to go back to our original integral and see if we can find a $u(x)$ that would work better.
##### Choice 2:
Let's try the other part of the product $u=\ln(x)$. This means that $dv=xdx$. By computing $du$ and considering an anti-derivative for $x$ we can complete the table to find
$u=\ln(x)$ and $du=\frac{dx}{x}$
$v=\frac{1}{2}x^2$ and $dv=xdx$.
Carrying out the integration by parts from the start now gives
$$\int x\ln(x)dx = \left[ \ln(x)\cdot \frac{x^2}{2} \right]-\int \frac{1}{x} \cdot \frac{x^2}{2}dx$$
$$=\frac{\ln(x)x^2}{2}-\frac{1}{2}\int xdx$$
$$=\frac{\ln(x)x^2}{2}-\frac{1}{2}\left[ \frac{x^2}{2} \right]$$
$$=\frac{x^2}{2}\left( \ln(x)-\frac{1}{2} \right)$$
This concludes the application of the method of integration by parts and the shown equation indeed holds. This time things worked out much better since the "new" integral was actually more straightforward than the original one.
#### Conclusion
Picking the right parts is very important to simplify an integral, as picking bad ones can take us further away from known derivative-antiderivative pairs. Dealing with this fact comes down to experience and perseverance. The more often you use the method of integration by parts the more you will be able to preemptively determine which parts will be good. To get this experience you will need to persevere. This means that you simply guess a then apply the method and see if it made the integral easier, if it did **not** then you go back to the original integral and try another $u$ instead.

---
#### LIATE
As shown above the art of integration by parts comes from choosing the correct $u$, in other words the correct function that will be differentiated. As a rule of thumb to help you choose which function to pick as you $u$ we can consider the acronym: LIATE. This stands for
- **L**ogarithm
- **I**nverse
- **A**lgebraic
- **T**rigonometric
- **E**xponential
So our first option for $u$ should be any available logarithms like $\ln(3x)$; if those are not present we move on to other inverse functions like $\arcsin(x)$; if these are also not present we move on to algebraic functions like $\sqrt{ 4+x }$ and $x^5$; next are the trigonometric functions like $\sin(x)$ and $\tan(x)$; finally if none of the above are available or you have already tried them we move on to exponentials like $e^{\pi x}$.
Keep in mind that this is only a rule of thumb, it can happen that for a particular integral it makes sense to deviate from this rule, but in most cases it is the preferred order.

---
#### Circular Integrals
Although there is already a lot of text for this lesson we should still present the following example. For some integrals, in particular when trigonometric functions and exponential functions appear together, integration by parts doesn't result in an integral that we already know how to solve otherwise, but rather it results in the original integral again! This actually means the method also allows us to find the anti-derivative although in a slightly peculiar manner. Namely it will say that the integral $I$ equals some function $f(x)$ minus the same integral $I$ which then means $2I$ equals the function $f(x)$ plus an integration constant!
This notion is made clear most easily by way of example so let's consider the integral $\int \cos(4x)e^xdx$. If we simply apply integration by parts using the LIATE rule we choose $u=\cos(4x)$ and thus $dv=e^xdx$. We get
$u=\cos(4x)$ and $du=-4\sin(4x)dx$
$v=e^x$ and $dv=e^xdx$
Hence we find
$$\int \cos(4x)e^xdx = \cos(4x)e^x+4 \int \sin(4x)e^xdx$$
If we evaluate here we find that the new integral $\int \sin(4x)e^xdx$ is really just as difficult as the original, so the method of integration by parts didn't help much. Let's persevere, however, and just apply integration by parts on this new integral using the LIATE rule again. This means we choose $u=\sin(4x)$ and $dv=e^xdx$, so
$u=\sin(4x)$ and $du=4\cos(4x)dx$
$v=e^x$ and $dv=e^xdx$
So we find
$$\int \cos(4x)e^xdx = \cos(4x)e^x+4\sin(4x)e^x-16\int \cos(4x)e^xdx$$
Here we see the magic happen since now the new integral is actually our original integral! So by adding $16$ times the new integral to both sides of the equation we find
$$17\int \cos(4x)e^xdx=\cos(4x)e^x+4\sin(4x)e^x+C$$
where we also add the integration constant since it would otherwise get lost in translation. Now we simply divide both sides by $17$ to solve our original problem.
$$\int \cos(4x)e^xdx = \frac{\cos(4x)e^x}{17}+\frac{4\sin(4x)e^x}{17}+C$$
