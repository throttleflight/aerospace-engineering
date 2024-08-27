---
CourseCode: MMFEC2X
Semester: Summer 2024
Relevance: Low
Week: Week 6
---
#school-note 
#### Triple Integrals In Cylindrical Coordinates
If $E=\{(x,y,z)|(x,y)∈D,u_{1}(x,y)\leq z\leq u_{2}(x,y)\}$ and $D$ is given in polar coordinates by $\alpha\leq \theta\leq \beta$, $h_{1}(\theta)\leq r\leq h_{2}(\theta)$,
![[Cylindrical Triple Integration.png| center]]
$$\iiint_{E} f(x,y,z)dV=$$
$$\int_{\alpha}^\beta \int_{h_{1}(\theta)}^{h_{2}(\theta)} \int_{u_{1}(r\cos \theta,r\sin \theta)}^{u_{2}(r\cos \theta,r\sin \theta)} f(r\cos \theta,r\sin \theta,z)r dz dr d\theta$$
