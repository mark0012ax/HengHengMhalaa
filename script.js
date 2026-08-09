document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar-container");
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    // 1. สลับการแสดงผลเมนูบนมือถือ (Mobile Hamburger Menu)
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // ปิดเมนูอัตโนมัติเมื่อกดคลิกเลือกหัวข้อบนมือถือ
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
        });
    });

    // 2. ปรับ Navbar เปลี่ยนสีเมื่อเลื่อนหน้าจอลง (Header Scroll Effect)
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // 3. Highlight ปุ่มเมนูตาม Section ที่กำลังดูอยู่ (Active Section)
        let current = "";
        const sections = document.querySelectorAll("section");

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });

        // 4. Scroll Reveal Animation (ให้การ์ด/เนื้อหาค่อยๆ ลอยขึ้น)
        const reveals = document.querySelectorAll(".reveal");
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("active");
            }
        });
    });
});