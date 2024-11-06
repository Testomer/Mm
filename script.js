// إضافة تأثيرات تفاعل الموقع عند التمرير
document.addEventListener("DOMContentLoaded", () => {
    // تأخير العرض والتأثيرات عند التمرير
    const sections = document.querySelectorAll(".section");

    // وظيفة للتحقق إذا كان العنصر في نطاق الرؤية
    const isInView = (element) => {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    // إضافة التأثيرات عند التمرير
    const handleScroll = () => {
        sections.forEach(section => {
            if (isInView(section)) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    };

    // متابعة التمرير باستمرار
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // لتفعيل التأثيرات فور تحميل الصفحة
});

// تأثيرات عند الضغط على اللوجو
const logo = document.querySelector(".logo h1");
logo.addEventListener("click", () => {
    logo.style.transform = "scale(1.1)";
    setTimeout(() => {
        logo.style.transform = "scale(1)";
    }, 300); // إرجاع الحجم الطبيعي بعد فترة قصيرة
});

// إضافة تأثير للروابط (إن كانت موجودة) عند المرور
const links = document.querySelectorAll("a");
links.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#ff6347"; // اللون عند المرور
    });

    link.addEventListener("mouseout", () => {
        link.style.color = "#ffffff"; // اللون الطبيعي
    });
});

// تأثير التدرج في النصوص عند التمرير
const title = document.querySelector(".title");
window.addEventListener("scroll", () => {
    const opacity = 1 - window.scrollY / 500; // تأثير التلاشي مع التمرير
    title.style.opacity = opacity > 0 ? opacity : 0;
});

// انيميشن تأثير التدوير للصور (إن وجدت) عند التمرير
const images = document.querySelectorAll("img");
images.forEach(image => {
    image.addEventListener("mouseenter", () => {
        image.style.transition = "transform 0.5s";
        image.style.transform = "rotate(15deg)";
    });

    image.addEventListener("mouseleave", () => {
        image.style.transition = "transform 0.5s";
        image.style.transform = "rotate(0deg)";
    });
});

// تطبيق بعض الأنيميشنات على الأقسام عند التمرير
const animateSections = () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.classList.contains('visible')) {
            section.style.transition = 'all 0.8s ease';
            section.style.transform = 'translateY(0)';
            section.style.opacity = '1';
        } else {
            section.style.transform = 'translateY(50px)';
            section.style.opacity = '0';
        }
    });
};

// إضافة التأثيرات عند التمرير
document.addEventListener("scroll", animateSections);

// إضافة التأثيرات الأولية للأقسام فور تحميل الصفحة
window.addEventListener('load', animateSections);

// إضافة تأثير زر التمرير إلى الأعلى عند الضغط
const scrollTopButton = document.createElement('button');
scrollTopButton.textContent = '⬆️ العودة إلى الأعلى';
scrollTopButton.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopButton);

// وظيفة للتمرير إلى الأعلى عند الضغط على الزر
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// إظهار الزر عند التمرير للأسفل
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});