/* ═══════════════════════════════════════════════════════════
   app.js — St. Michael Church Service Programs
   ═══════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────
   DATA — Edit here to update all content on the page
   ───────────────────────────────────────────────────────── */

const DAILY_SERVICES = [
    { time: '7:00 AM', name: 'ጠዋት ስርአት፣ ቅዳሴ', detail: 'እንደ አለቱ ይስተካላል (ይህ እንደ ምሳሌ እንዲያገለግል ነው)', badge: null },
    { time: '9:10 AM', name: 'ስብከት', detail: 'እንደ ምሳሌ እንዲያገለግል ነው', badge: null },
];

const SUNDAY_SERVICES = [
    { time: '7:30 AM', name: 'ስርአት፣ ቅዳሴ', detail: 'ጠዋት ስርአት፣ ቅዳሴ', badge: null },
    { time: '9:00 AM', name: 'የገና ቅዳሴ', detail: 'Family ስርአት፣ ቅዳሴ · Nursery available', badge: null },
    { time: '11:00 AM', name: 'የቅዱስ ሚካኤል ቅዳሴ', detail: 'Choir & organ', badge: null },
    { time: '3:00 PM', name: 'መዋዕል', detail: 'Saturdays also 4:00–5:00 PM', badge: null },
    { time: '5:00 PM', name: 'የእለተ ምሽት ቅዳሴ', detail: 'Youth-friendly atmosphere', badge: null },
];

const WEEK_SCHEDULE = [
    { day: 0, label: 'እሁድ', items: ['7:30 AM ስርአት፣ ቅዳሴ', '9:00 AM ቅዱስ ቁርባን', '10:00 AM ስብከት'], note: 'ስርአት፣ ቅዳሴ' },
    { day: 4, label: 'ሐሙስ', items: ['5:00 PM ጀምሮ', 'እስከ 7:10 PM', 'የልጆች ትምህርት'], note: 'የልጆች' },
    { day: 5, label: 'ዓርብ', items: ['5:00 PM ጀምሮ', 'እስከ 7:10 PM', 'የልጆች ትምህርት'], note: 'የልጆች' },
    { day: 6, label: 'ቅዳሜ', items: ['10:00 AM ጀምሮ', 'እስከ 1:00 PM', 'የዲያቆናት ትምህርት'], note: 'የዲያቆናት' },
];

const UPCOMING_EVENTS = [
    { month: 'May', day: '3', name: 'እሁድ ቅዱስ ጊዮርጊስ', detail: 'የቅዱስ ጊዮርጊስ ታቦት ይነግሳል' },
    { month: 'May', day: '11', name: "ግንቦት ልደታ ማርያም ስርአት፣ ቅዳሴ Mother's Day", detail: 'ግንቦት ልደታ ማርያም Roses for mothers after 11 AM' },
    { month: 'May', day: '18', name: 'ስለሚምጣው በአል', detail: 'ደብረ ሳህል ይጨምሩበታል' },
];

/* ─────────────────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────────────────── */

/**
 * Returns the approximate liturgical season for a given month + day.
 * @param {number} m  Month (1–12)
 * @param {number} d  Day of month
 * @returns {{ name: string, color: string }}
 */
function getSeason(m, d) {
    const md = m * 100 + d;
    if (md >= 1201 && md <= 1224) return { name: 'Advent', color: '#5B2D82' };
    if (md >= 1225 || md <= 112) return { name: 'Christmas', color: '#8B1A1A' };
    if (md >= 305 && md <= 417) return { name: 'Lent', color: '#6B3280' };
    if (md >= 420 && md <= 608) return { name: 'በአለ ሃምሳ', color: '#B8942A' };
    return { name: 'Ordinary Time', color: '#2E6B3E' };
}

/**
 * Converts a 12-hour time string ("7:30 AM") to a decimal hour (7.5).
 * @param {string} str
 * @returns {number}
 */
function timeToH(str) {
    const m = str.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!m) return 0;
    let h = parseInt(m[1]);
    const min = parseInt(m[2]);
    const period = m[3].toUpperCase();
    if (period === 'PM' && h < 12) h += 12;
    if (period === 'AM' && h === 12) h = 0;
    return h + min / 60;
}

/* ─────────────────────────────────────────────────────────
   INIT — runs on page load
   ───────────────────────────────────────────────────────── */

(function init() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const monthNum = now.getMonth() + 1;
    const hours = now.getHours() + now.getMinutes() / 60;

    const DAY_NAMES = ['እሁድ', 'ሰኞ', 'ማክሰኞ', 'እሮብ', 'ሐሙስ', 'ዓርብ', 'ቅዳሜ'];
    const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    /* ── Liturgical season ── */
    const season = getSeason(monthNum, now.getDate());
    document.getElementById('seasonBadge').textContent = season.name;
    document.documentElement.style.setProperty('--season-color', season.color);

    /* ── Date bar ── */
    document.getElementById('todayLabel').innerHTML =
        `<span>${DAY_NAMES[dayOfWeek]}, ${MONTH_NAMES[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}</span>`;
    document.getElementById('footerYear').textContent = now.getFullYear();

    /* ── Build sections ── */
    buildTodayCards(dayOfWeek, hours);
    buildNextServiceLabel(dayOfWeek, hours);
    buildWeekTable(dayOfWeek);
    buildEventsList();
    initScrollSpy();
})();

/* ─────────────────────────────────────────────────────────
   BUILD: TODAY'S CARDS
   ───────────────────────────────────────────────────────── */
function buildTodayCards(dayOfWeek, hours) {
    const services = dayOfWeek === 0 ? SUNDAY_SERVICES : DAILY_SERVICES;
    const grid = document.getElementById('todayGrid');
    let nextSet = false;

    services.forEach(s => {
        const sH = timeToH(s.time);
        const isNow = hours >= sH && hours < sH + 1;
        const isNext = !nextSet && hours < sH;
        if (isNext) nextSet = true;

        const card = document.createElement('div');
        card.className = 'service-card' + (isNow || isNext ? ' highlight' : '');
        card.innerHTML = `
      ${isNow  ? '<span class="badge now"><span class="live-dot"></span>Now</span>' : ''}
      ${isNext ? '<span class="badge next">Next</span>' : ''}
      ${s.badge === 'daily' ? '<span class="badge daily">Daily</span>' : ''}
      <div class="card-time">${s.time}</div>
      <div class="card-name">${s.name}</div>
      <div class="card-detail">${s.detail}</div>
    `;
        grid.appendChild(card);
    });
}

/* ─────────────────────────────────────────────────────────
   BUILD: NEXT SERVICE LABEL
   ───────────────────────────────────────────────────────── */
function buildNextServiceLabel(dayOfWeek, hours) {
    const services = dayOfWeek === 0 ? SUNDAY_SERVICES : DAILY_SERVICES;
    const nextService = services.find(s => timeToH(s.time) > hours);
    const el = document.getElementById('nextServiceLabel');

    if (nextService) {
        el.innerHTML = `<span class="live-dot"></span>የሚቀጥለው: <strong>${nextService.name}</strong> በ ${nextService.time}`;
    } else {
        el.textContent = 'ዛሬ ምንም ስርአት የለም — ነገ እንገናኛለን!';
    }
}

/* ─────────────────────────────────────────────────────────
   BUILD: WEEKLY TABLE
   ───────────────────────────────────────────────────────── */
function buildWeekTable(dayOfWeek) {
    const tbody = document.getElementById('weekBody');

    WEEK_SCHEDULE.forEach(row => {
        const tr = document.createElement('tr');
        if (row.day === dayOfWeek) tr.classList.add('today-row');

        const items = row.items.map(i => `<li>${i}</li>`).join('');
        tr.innerHTML = `
      <td><span class="day-tag">${row.label}</span></td>
      <td><ul>${items}</ul></td>
      <td class="row-note">${row.note}</td>
    `;
        tbody.appendChild(tr);
    });
}

/* ─────────────────────────────────────────────────────────
   BUILD: EVENTS LIST
   ───────────────────────────────────────────────────────── */
function buildEventsList() {
    const container = document.getElementById('eventsList');

    UPCOMING_EVENTS.forEach(ev => {
        const row = document.createElement('div');
        row.className = 'event-row';
        row.innerHTML = `
      <div class="event-date-box">
        <div class="eday">${ev.day}</div>
        <div class="emon">${ev.month}</div>
      </div>
      <div class="event-divider"></div>
      <div class="event-info">
        <div class="ev-name">${ev.name}</div>
        <div class="ev-detail">${ev.detail}</div>
      </div>
    `;
        container.appendChild(row);
    });
}

/* ─────────────────────────────────────────────────────────
   SCROLL SPY — highlights the active nav tab
   ───────────────────────────────────────────────────────── */
function initScrollSpy() {
    const tabs = document.querySelectorAll('.nav-tab[href^="#"]');
    const sections = [...document.querySelectorAll('section[id]')];

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tabs.forEach(t => t.classList.remove('active'));
                const activeTab = document.querySelector(`.nav-tab[href="#${entry.target.id}"]`);
                if (activeTab) activeTab.classList.add('active');
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(s => observer.observe(s));
}