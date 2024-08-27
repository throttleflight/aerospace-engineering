---
CourseCode: IAFV
Professor: Dr. J. Gordon Leishman
Contact: Leishman_ebook@erau.edu
Syllabus: N/A
dg-publish: true
dg-home-link: true
dg-show-local-graph: true
dg-show-toc: true
---
## Notes
```dataview  
LIST rows.file.link
FROM #IAFV  
SORT file.name ASC
WHERE this.CourseCode = CourseCode  
GROUP BY Module
```  
