# 📘 BCIT Assignment Tracker

A lightweight, responsive assignment tracker built with **React + TypeScript**, using **Zustand** for global state and **react-day-picker** for deadline input.

## 🚀 Features

- ✅ Create and manage assignment tasks
- 📅 Add a due date to each assignment
- 🟢 Mark assignments as complete/incomplete
- 🗑️ Delete assignments
- 📊 Real-time counts for total and completed tasks
- 🧠 Visual labels like "Due: tomorrow" or "Due: 3 days"
- 🎨 Responsive design with Bootstrap and CSS Modules

## 🖼️ Preview

![App Screenshot](./screenshot.png)

---

## 🛠️ Tech Stack

| Library           | Purpose                        |
|------------------|--------------------------------|
| [React](https://reactjs.org/) | UI components                 |
| [TypeScript](https://www.typescriptlang.org/) | Strong typing               |
| [Zustand](https://zustand-demo.pmnd.rs/) | Global state management     |
| [React Day Picker](https://react-day-picker.js.org/) | Select assignment deadlines |
| [React Icons](https://react-icons.github.io/react-icons/) | Icons                      |
| [Vite](https://vitejs.dev/) | Fast dev + build tool        |
| [Bootstrap](https://getbootstrap.com/) | Responsive styling          |

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/assignment-tracker.git
cd assignment-tracker
npm install
npm run dev

---

Then visit:
http://localhost:5173

```bash

##Folder Structure
src/
├── components/
│   ├── Header/
│   ├── Assignments/
│   └── Assignment/
├── helpers/
│   └── stringHelpers.ts
├── styles/
├── store.ts
└── App.tsx

##📄 License
This project is open-source under the MIT License.
