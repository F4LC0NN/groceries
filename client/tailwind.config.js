/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                Red1: "#FA5133",
                Red2: "#F1E4E0",
                Green1: "#83FA33",
                Green2: "#5BC913",
                Green3: "#DEFACC",
                Green4: "#4AA30F",
                Grey1: "#333333",
                Grey2: "#6D6F6D",
                Grey3: "#D4D4D3",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
