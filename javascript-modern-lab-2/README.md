Structura Proiectului

```text
javascript-modern-lab-2/
├── README.md
├── task-01/
│   ├── grades.js
│   └── package.json
├── task-02/
│   ├── main.js
│   ├── students.js
│   ├── utils.js
│   └── package.json
├── task-03/
│   ├── index.html
│   ├── main.js
│   ├── cart.js
│   └── package.json
└── task-04/
    ├── index.html
    ├── main.js
    ├── employees.js
    └── package.json
```



##  Descrierea Task-urilor

###  Task 01: Calculul și Gestionarea Notelelor (Grades Management)
- **Fișiere:** `task-01/grades.js`, `task-01/package.json`
- **Descriere:** Lucrul cu tabouri de note/numere, calcularea mediei, filtrarea notelor de trecere/promovare și utilizarea metodelor moderne de legătură pe tablouri (`map`, `filter`, `reduce`).

###  Task 02: Gestionarea Studenților și Utilitare (Student Management System)
- **Fișiere:** `task-02/students.js`, `task-02/utils.js`, `task-02/main.js`, `task-02/package.json`
- **Descriere:** Structurarea datelor complexe despre studenți. Utilizarea modulelor ES6 (`import`/`export`) pentru separarea logicii de date și a funcțiilor utilitare (ex: sortare, căutare, procesare date).

###  Task 03: Coș de Cumpărături (Shopping Cart Interactive UI)
- **Fișiere:** `task-03/index.html`, `task-03/main.js`, `task-03/cart.js`, `task-03/package.json`
- **Descriere:** Implementarea logicii pentru un coș de cumpărături interactiv. Adăugarea, ștergerea și actualizarea produselor din coș, precum și calculul automat al totalului prin conectarea logicii JavaScript cu interfața HTML (DOM).

###  Task 04: Sistem de Management al Angajaților (Employee Management UI)
- **Fișiere:** `task-04/index.html`, `task-04/main.js`, `task-04/employees.js`, `task-04/package.json`
- **Descriere:** Aplicație web completă pentru vizualizarea și gestionarea unei liste de angajați. Renders dinamice pe bază de DOM, filtrare după departament sau funcție, căutare și manipulare stări.

##  Instrucțiuni de Rulare și Utilizare

### Cerințe preliminare
- Node.js (versiune recentă recomandată, v14+)
- Un browser web modern (Chrome, Firefox, Edge, Safari)

### Instalare și Rulare

1. **Clonarea repozitoriului:**
   ```bash
   git clone <repository-url>
   cd javascript-modern-lab-2
   ```

2. **Rularea Task-urilor bazate pe Node.js (Task 01 & Task 02):**
   Navigați în directorul task-ului dorit și executați script-ul principal:
   ```bash
   cd task-01
   node grades.js

   # sau pentru Task 02
   cd ../task-02
   node main.js
   ```

3. **Rularea Task-urilor bazate pe Interfață Web / Browser (Task 03 & Task 04):**
   - Deschideți fișierul `index.html` din `task-03` sau `task-04` direct în browser, sau
   - Utilizați extensia **Live Server** din VS Code pentru o experiență de dezvoltare mai bună.
