## ✅ **Project Summary**

You're building a modern Airbnb-like UI using **Next.js (v13+)**, **TypeScript**, **Tailwind CSS**, and **ESLint**, focusing on:

* Scaffolding a Next.js project
* Component architecture with TypeScript
* Routing via the Pages Router
* Reusable UI components
* Responsive design and image optimization

---

## 🧠 **Learning Objectives Recap**

* Scaffold a Next.js app with TypeScript
* Understand and implement folder structure best practices
* Use routing via the **Pages Router**
* Create modular, reusable React components
* Type components with TypeScript interfaces
* Style with TailwindCSS (responsive design)
* Maintain code quality with ESLint

---

## 📦 **System Requirements**

Ensure you have:

* Node.js (v16+)
* npm or yarn
* Visual Studio Code
* Next.js v13+
* TypeScript
* Tailwind CSS
* ESLint

---

## 🔨 **Progress Checklist**

### **Task 0: Scaffolding a Project**

✅ `npx create-next-app@latest alx-project-0x00 --typescript`
✅ Select: `Yes` for ESLint, Tailwind, import alias
✅ Select: `No` for `/src` directory and App Router
✅ Run the app with: `npm run dev -- -p 3000`

✅ GitHub repo: `alx-project-0x00-setup`
✅ Create a `README.md`

---

### **Task 1: Setting Up Directories**

✅ Create `components/` and `interfaces/` in root
✅ Modify `pages/index.tsx` to:

```tsx
const Home: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
      <h1>Airbnb Application Clone system</h1>
      <button className="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full">Get Started</button>
    </main>
  );
};
export default Home;
```

✅ Create:

* `components/Card.tsx`
* `components/Pill.tsx`
* `interfaces/index.ts`

---

### **Task 2: Basic Routing**

✅ Create pages:

* `pages/landing.tsx`
* `pages/about.tsx`

```tsx
// landing.tsx
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
    </div>
  );
};
export default Landing;
```

```tsx
// about.tsx
const About: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">About Page</h1>
    </div>
  );
};
export default About;
```

✅ Test in browser:

* [http://localhost:3000/landing](http://localhost:3000/landing)
* [http://localhost:3000/about](http://localhost:3000/about)

---

### **Task 3: Rendering Components**

✅ Move images `house.png` and `star.png` to:
`public/assets/images`

✅ Add Card component in `components/Card.tsx` (already done as per your message)

📌 Remember:

* You will need a basic `Pill.tsx` component too for the `Card` to work
* Here’s a suggested structure for `Pill.tsx`:

```tsx
import React from "react";

interface PillProps {
  title: string;
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <span className="text-xs bg-gray-200 rounded-full px-3 py-1">{title}</span>
  );
};

export default Pill;
```

---
