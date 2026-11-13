
const services = [
  ["ایمپلنت دندان", "جایگزینی دندان از دست‌رفته", "implant"],
  ["بازسازی کامل فک و دهان", "درمان‌های جامع دهان", "full-mouth"],
  ["لمینت سرامیکی", "طراحی و اصلاح لبخند", "laminate"],
  ["کامپوزیت ونیر", "زیبایی دندان‌ها", "composite"],
  ["ارتودنسی", "اصلاح نظم دندان‌ها", "orthodontics"],
  ["پروتز و دندان مصنوعی", "جایگزینی دندان‌ها", "prosthetics"],
  ["عصب‌کشی و ترمیم", "حفظ و بازسازی دندان", "root-canal"],
  ["جراحی دندان و لثه", "درمان‌های جراحی", "surgery"],
  ["جرم‌گیری و بلیچینگ", "بهداشت و روشن‌سازی", "whitening"],
  ["دندانپزشکی کودکان", "مراقبت از دندان کودکان", "pediatric"]
];

const grid = document.getElementById("serviceGrid");

if (grid) {
  grid.innerHTML = services.map((service, index) => `
    <a class="service-card" href="services.html#${service[2]}">
      <div class="service-icon">✧ ${String(index + 1).padStart(2, "0")}</div>
      <h3>${service[0]}</h3>
      <p>${service[1]}</p>
      <span class="more">آشنایی بیشتر ←</span>
    </a>
  `).join("");
}

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

if (menu && nav) {
  menu.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(opened));
  });
}
