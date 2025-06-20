// src/reusables/button.jsx or similar path
// src/reusables/button.jsx
export default function MyButton({ title, type = "button", className = "" }) {
  return (
    <button
      type={type}
      className={`bg-gradient-to-r from-pink-500 via-red-500 to-indigo-600 text-white py-4 rounded-xl w-full font-bold tracking-wide shadow-lg transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl active:scale-[0.98] ${className}`}
    >
      {title}
    </button>
  );
}

