/* ==========================================================================
   Efectos y Lógica JavaScript - José Sánchez Zumel
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Highlight de página activa en el menú
    highlightActiveNavLink();

    // Inicializar lluvia digital de Matrix en Canvas (Overlay / Fallback)
    initMatrixCanvas();

    // Botones interactivos de copia
    initCopyButtons();

    // Manejo del formulario de contacto
    initContactForm();
});

/**
 * Marca el enlace activo según el archivo HTML actual
 */
function highlightActiveNavLink() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPath || (currentPath === "" && href === "index.html")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

/**
 * Lluvia digital Matrix en Canvas
 */
function initMatrixCanvas() {
    const canvas = document.getElementById("matrix-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Caracteres Matrix: Katakana y símbolos
    const characters = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$%&*+-/;<=>@";
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);

    let drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -100);
    }

    function draw() {
        // Fondo traslúcido para rastro
        ctx.fillStyle = "rgba(5, 10, 6, 0.08)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${fontSize}px 'Consolas', 'Courier New', monospace`;

        for (let i = 0; i < drops.length; i++) {
            const char = characters.charAt(Math.floor(Math.random() * characters.length));
            
            // Primer carácter más brillante
            if (Math.random() > 0.85) {
                ctx.fillStyle = "#ffffff";
            } else {
                ctx.fillStyle = "#00ff66";
            }

            ctx.fillText(char, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(draw, 40);
}

/**
 * Copiar al portapapeles con feedback visual
 */
function initCopyButtons() {
    const copyBtns = document.querySelectorAll(".copy-btn");
    copyBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const textToCopy = btn.getAttribute("data-copy");
            if (textToCopy) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    const originalText = btn.innerHTML;
                    btn.innerHTML = "[✓ COPIADO]";
                    btn.style.color = "#39ff14";
                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.style.color = "";
                    }, 2000);
                });
            }
        });
    });
}

/**
 * Simulación de envío de formulario de contacto
 */
function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector(".btn-submit");
        submitBtn.innerHTML = "ENVIANDO MENSAJE...";
        
        setTimeout(() => {
            alert("¡Mensaje enviado con éxito! José se pondrá en contacto contigo muy pronto.");
            form.reset();
            submitBtn.innerHTML = "ENVIAR MENSAJE";
        }, 1200);
    });
}
