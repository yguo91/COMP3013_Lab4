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

![Image](https://github.com/user-attachments/assets/fbb142ac-7406-47be-8052-b0f8160def01)

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

```
npm install
npm run dev
```

Then visit:
http://localhost:5173

## 📂 Folder Structure

```
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
```
