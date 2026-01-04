import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        function onScroll() {
            setVisible(window.scrollY > 200);
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            style={{
                position: "fixed",
                bottom: "24px",
                right: "24px",
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "white",                 // 🔹 asosiy fon
                color: "#4f46e5",                     // 🔹 primary rang (arrow)
                border: "2px solid #4f46e5",           // 🔹 primary outline
                cursor: "pointer",
                boxShadow: "0 10px 25px rgba(79,70,229,0.25)", // 🔹 soft primary shadow
                zIndex: 9999,
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = "#4f46e5";
                e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "#4f46e5";
            }}
        >
            <ArrowUp size={24} strokeWidth={2.5} />
        </button>
    );
}
