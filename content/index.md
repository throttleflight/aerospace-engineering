---
title: Welcome to Quartz 4
---

# Classes
```dataview
TABLE CourseCode as "Course Code", Professor, Contact, Syllabus FROM "STUDENT RELATED"
SORT file.name ASC
```

# Pending  
```dataview  
TASK  
FROM "STUDENT RELATED"  
WHERE !completed  
SORT ASC  
GROUP BY header  
```
