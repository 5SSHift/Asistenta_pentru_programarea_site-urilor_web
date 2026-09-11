# javascript-modern-lab-2

Laborator JavaScript modern: array methods (`filter`, `map`, `reduce`), module ES6,
destructuring, spread, template literals si `try/catch`.

## Structura repository-ului

```
javascript-modern-lab-2/
│
├── task-01/   -> prelucrarea unui array de note
├── task-02/   -> catalog elevi (module: utils.js, students.js, main.js)
├── task-03/   -> cos de cumparaturi (modul cart.js)
├── task-04/   -> gestionarea angajatilor unei companii
└── README.md
```

Fiecare task este un mini-proiect Node.js independent (module ES6, `"type": "module"`
in `package.json`). Rulare, din interiorul fiecarui folder:

```bash
node main.js
# sau, pentru task-01:
node grades.js
```

## Pasi pentru a initializa repository-ul si a face commit-urile cerute

```bash
# 1. Creati repository-ul nou pe GitHub, apoi clonati-l local
git clone https://github.com/<user>/javascript-modern-lab-2.git
cd javascript-modern-lab-2

# 2. Copiati folderele task-01, task-02, task-03, task-04 si README.md
#    in radacina repository-ului clonat

# 3. Commit separat pentru fiecare sarcina (minim 1 commit/task, ideal cate 2+
#    pentru a ajunge la cele 10 commit-uri cerute: implementare + fix/imbunatatire)

git add task-01/
git commit -m "Task 01 - grades processing (filter, map, reduce)"
git push

git add task-02/
git commit -m "Task 02 - student catalog"
git push

git add task-03/
git commit -m "Task 03 - shopping cart module"
git push

git add task-04/
git commit -m "Task 04 - employee management"
git push

# 4. Daca remediati ulterior o eroare intr-un task, faceti un commit separat:
git add task-02/
git commit -m "Fix error handling in task 02"
git push
```

### Sugestie pentru a ajunge la 10 commit-uri
Impartiti fiecare task in cate 2-3 commit-uri incrementale, de exemplu pentru task-02:

1. `Task 02 - setup utils.js (calculateSum, calculateAverage)`
2. `Task 02 - add students.js module`
3. `Task 02 - connect main.js and add try/catch handling`

Procedati similar si pentru celelalte task-uri, pana completati cele 10 commit-uri.
