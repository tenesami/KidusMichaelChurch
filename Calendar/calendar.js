const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const monthlySaints = {
    1: {
        name: "Lideta Maryam & Prophet Elijah",
        amharic: "ልደታ ማርያም / ነቢዩ ኤልያስ",
        type: "monthly"
    },
    3: {
        name: "Be'ata Maryam",
        amharic: "በአታ ማርያም",
        type: "marian"
    },
    5: {
        name: "Peter & Paul, Gebre Menfes Kidus",
        amharic: "ጴጥሮስና ጳውሎስ",
        type: "monthly"
    },
    7: {
        name: "Holy Trinity",
        amharic: "ቅድስት ሥላሴ",
        type: "monthly"
    },
    12: {
        name: "Archangel Michael, St. Yared",
        amharic: "ቅዱስ ሚካኤል / ቅዱስ ያሬድ",
        type: "monthly"
    },
    13: {
        name: "God the Father, Archangel Raphael",
        amharic: "እግዚአብሔር አብ / ቅዱስ ሩፋኤል",
        type: "monthly"
    },
    16: {
        name: "Kidane Mihret",
        amharic: "ኪዳነ ምሕረት",
        type: "marian"
    },
    19: {
        name: "Archangel Gabriel",
        amharic: "ቅዱስ ገብርኤል",
        type: "monthly"
    },
    21: {
        name: "St. Mary",
        amharic: "ቅድስት ማርያም",
        type: "marian"
    },
    23: {
        name: "St. George",
        amharic: "ቅዱስ ጊዮርጊስ",
        type: "monthly"
    },
    24: {
        name: "Abune Tekle Haymanot",
        amharic: "አቡነ ተክለ ሃይማኖት",
        type: "monthly"
    },
    27: {
        name: "Medhane Alem",
        amharic: "መድኃኔ ዓለም",
        type: "major"
    },
    29: {
        name: "God the Son, St. Arsema",
        amharic: "እግዚአብሔር ወልድ / ቅድስት አርሴማ",
        type: "monthly"
    },
    30: {
        name: "St. Mark",
        amharic: "ቅዱስ ማርቆስ",
        type: "monthly"
    }
};

const ethiopianMonths = [{
        key: "meskerem",
        number: 1,
        name: "Meskerem",
        amharic: "መስከረም",
        year: 2018,
        days: 30,
        startGregorian: "2025-09-11"
    },
    {
        key: "tikimt",
        number: 2,
        name: "Tikimt",
        amharic: "ጥቅምት",
        year: 2018,
        days: 30,
        startGregorian: "2025-10-11"
    },
    {
        key: "hedar",
        number: 3,
        name: "Hedar",
        amharic: "ኅዳር",
        year: 2018,
        days: 30,
        startGregorian: "2025-11-10"
    },
    {
        key: "tahsas",
        number: 4,
        name: "Tahsas",
        amharic: "ታኅሣሥ",
        year: 2018,
        days: 30,
        startGregorian: "2025-12-10"
    },
    {
        key: "tir",
        number: 5,
        name: "Tir",
        amharic: "ጥር",
        year: 2018,
        days: 30,
        startGregorian: "2026-01-09"
    },
    {
        key: "yekatit",
        number: 6,
        name: "Yekatit",
        amharic: "የካቲት",
        year: 2018,
        days: 30,
        startGregorian: "2026-02-08"
    },
    {
        key: "megabit",
        number: 7,
        name: "Megabit",
        amharic: "መጋቢት",
        year: 2018,
        days: 30,
        startGregorian: "2026-03-10"
    },
    {
        key: "miazia",
        number: 8,
        name: "Miazia",
        amharic: "ሚያዝያ",
        year: 2018,
        days: 30,
        startGregorian: "2026-04-09"
    },
    {
        key: "genbot",
        number: 9,
        name: "Genbot",
        amharic: "ግንቦት",
        year: 2018,
        days: 30,
        startGregorian: "2026-05-09"
    },
    {
        key: "sene",
        number: 10,
        name: "Sene",
        amharic: "ሰኔ",
        year: 2018,
        days: 30,
        startGregorian: "2026-06-08"
    },
    {
        key: "hamle",
        number: 11,
        name: "Hamle",
        amharic: "ሐምሌ",
        year: 2018,
        days: 30,
        startGregorian: "2026-07-08"
    },
    {
        key: "nehase",
        number: 12,
        name: "Nehase",
        amharic: "ነሐሴ",
        year: 2018,
        days: 30,
        startGregorian: "2026-08-07"
    },
    {
        key: "pagume",
        number: 13,
        name: "Pagume",
        amharic: "ጳጉሜ",
        year: 2018,
        days: 5,
        startGregorian: "2026-09-06"
    }
];

const specialDays = {
    "meskerem-1": {
        name: "Enkutatash / Ethiopian New Year",
        amharic: "እንቁጣጣሽ",
        type: "major"
    },
    "meskerem-17": {
        name: "Meskel / Finding of the True Cross",
        amharic: "መስቀል",
        type: "major"
    },
    "tahsas-29": {
        name: "Gena / Christmas",
        amharic: "ገና",
        type: "major"
    },
    "tir-11": {
        name: "Timket / Epiphany",
        amharic: "ጥምቀት",
        type: "major"
    },
    "tir-25": {
        name: "Fast of Nineveh begins",
        amharic: "ጾመ ነነዌ",
        type: "fasting"
    },
    "megabit-27": {
        name: "Hosanna / Palm Sunday",
        amharic: "ሆሣዕና",
        type: "major"
    },
    "miazia-2": {
        name: "Siklet / Good Friday",
        amharic: "ስቅለት",
        type: "major"
    },
    "miazia-4": {
        name: "Fasika / Easter",
        amharic: "ፋሲካ",
        type: "major"
    },
    "genbot-13": {
        name: "Ascension",
        amharic: "ዕርገት",
        type: "major"
    },
    "genbot-23": {
        name: "Pentecost / Paraclete",
        amharic: "ጰራቅሊጦስ",
        type: "major"
    },
    "genbot-24": {
        name: "Fast of the Apostles begins",
        amharic: "ጾመ ሐዋርያት",
        type: "fasting"
    },
    "nehase-1": {
        name: "Fast of the Virgin Mary begins",
        amharic: "ጾመ ፍልሰታ",
        type: "marian"
    },
    "nehase-13": {
        name: "Debre Tabor / Transfiguration",
        amharic: "ደብረ ታቦር",
        type: "major"
    },
    "nehase-16": {
        name: "Filseta / Assumption of Mary",
        amharic: "ፍልሰታ",
        type: "marian"
    }
};

let allCalendarDays = [];

function createDate(dateText) {
    const parts = dateText.split("-").map(Number);
    return new Date(parts[0], parts[1] - 1, parts[2]);
}

function addDays(date, numberOfDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numberOfDays);
    return newDate;
}

function formatGregorian(date, showYear = false) {
    const options = showYear ? { month: "short", day: "numeric", year: "numeric" } : { month: "short", day: "numeric" };

    return new Intl.DateTimeFormat("en-US", options).format(date);
}

function getEvent(monthKey, dayNumber) {
    const specialKey = `${monthKey}-${dayNumber}`;

    if (specialDays[specialKey]) {
        return specialDays[specialKey];
    }

    if (monthlySaints[dayNumber]) {
        return monthlySaints[dayNumber];
    }

    return null;
}

function createDayId(monthKey, dayNumber) {
    return `${monthKey}-${dayNumber}`;
}

function renderCalendar() {
    const calendar = document.getElementById("calendar");
    calendar.innerHTML = "";
    allCalendarDays = [];

    ethiopianMonths.forEach((month) => {
                const monthCard = document.createElement("article");
                monthCard.className = "month-card";

                const startDate = createDate(month.startGregorian);
                const endDate = addDays(startDate, month.days - 1);

                monthCard.innerHTML = `
      <div class="month-title">
        <h3>${month.number}. ${month.amharic} (${month.name}) ${month.year}</h3>
        <p>Ethiopian Calendar</p>
      </div>

      <div class="gregorian-range">
        ${formatGregorian(startDate, true)} – ${formatGregorian(endDate, true)}
      </div>

      <div class="weekdays">
        ${WEEKDAYS.map(day => `<span>${day}</span>`).join("")}
      </div>

      <div class="days-grid"></div>
    `;

    const daysGrid = monthCard.querySelector(".days-grid");

    const startWeekday = startDate.getDay();

    for (let i = 0; i < startWeekday; i++) {
      const emptyBox = document.createElement("div");
      emptyBox.className = "empty";
      daysGrid.appendChild(emptyBox);
    }

    for (let dayNumber = 1; dayNumber <= month.days; dayNumber++) {
      const gregorianDate = addDays(startDate, dayNumber - 1);
      const event = getEvent(month.key, dayNumber);
      const dayId = createDayId(month.key, dayNumber);

      const dayBox = document.createElement("div");
      dayBox.id = dayId;
      dayBox.className = `day ${event ? event.type : ""}`;

      dayBox.innerHTML = `
        <span class="eth-date">${dayNumber}</span>
        <span class="greg-date">${formatGregorian(gregorianDate)}</span>
        ${event ? `<span class="event">${event.name}</span>` : ""}
      `;

      dayBox.addEventListener("click", () => {
        showDayDetails(dayId);
      });

      daysGrid.appendChild(dayBox);

      allCalendarDays.push({
        id: dayId,
        ethDay: dayNumber,
        ethMonth: month.name,
        amharicMonth: month.amharic,
        ethYear: month.year,
        gregorian: formatGregorian(gregorianDate, true),
        eventName: event ? event.name : "",
        amharicEvent: event ? event.amharic : "",
        type: event ? event.type : "",
        searchText: `
          ${dayNumber}
          ${month.name}
          ${month.amharic}
          ${month.year}
          ${formatGregorian(gregorianDate)}
          ${formatGregorian(gregorianDate, true)}
          ${event ? event.name : ""}
          ${event ? event.amharic : ""}
          ${event ? event.type : ""}
        `.toLowerCase()
      });
    }

    calendar.appendChild(monthCard);
  });
}

function renderMonthlySaints() {
  const monthlySaintsBox = document.getElementById("monthlySaints");

  const saintsHtml = Object.entries(monthlySaints)
    .map(([day, saint]) => {
      return `<p><strong>${day}</strong> ${saint.name}</p>`;
    })
    .join("");

  monthlySaintsBox.innerHTML = `<div class="monthly-list">${saintsHtml}</div>`;
}

function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearBtn");
  const resultsBox = document.getElementById("searchResults");

  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase().trim();

    if (keyword === "") {
      resultsBox.classList.remove("show");
      resultsBox.innerHTML = "";
      clearHighlight();
      return;
    }

    const results = allCalendarDays.filter((day) => {
      return day.searchText.includes(keyword);
    });

    showSearchResults(results, keyword);
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    resultsBox.classList.remove("show");
    resultsBox.innerHTML = "";
    clearHighlight();
    searchInput.focus();
  });
}

function showSearchResults(results, keyword) {
  const resultsBox = document.getElementById("searchResults");
  resultsBox.classList.add("show");

  if (results.length === 0) {
    resultsBox.innerHTML = `<p>No results found for <strong>${keyword}</strong>.</p>`;
    return;
  }

  const limitedResults = results.slice(0, 24);

  resultsBox.innerHTML = `
    <p><strong>${limitedResults.length}</strong> result(s) found for <strong>${keyword}</strong>.</p>

    <div class="results-grid">
      ${limitedResults.map(createResultCard).join("")}
    </div>
  `;
}

function createResultCard(day) {
  return `
    <article class="result-card">
      <h4>${day.eventName || "Calendar Day"}</h4>

      ${day.amharicEvent ? `<p><strong>Amharic:</strong> ${day.amharicEvent}</p>` : ""}

      <p>
        <strong>Ethiopian:</strong>
        ${day.amharicMonth} ${day.ethDay}, ${day.ethYear} E.C.
      </p>

      <p>
        <strong>Gregorian:</strong>
        ${day.gregorian}
      </p>

      <p>
        <strong>Type:</strong>
        ${day.type || "regular day"}
      </p>

      <button onclick="goToDay('${day.id}')">Go to date</button>
    </article>
  `;
}

function showDayDetails(dayId) {
  const day = allCalendarDays.find(item => item.id === dayId);

  if (!day) {
    return;
  }

  const resultsBox = document.getElementById("searchResults");
  resultsBox.classList.add("show");

  resultsBox.innerHTML = `
    <div class="results-grid">
      ${createResultCard(day)}
    </div>
  `;

  goToDay(dayId);
}

function clearHighlight() {
  document.querySelectorAll(".day.highlight").forEach(day => {
    day.classList.remove("highlight");
  });
}

function goToDay(dayId) {
  clearHighlight();

  const dayBox = document.getElementById(dayId);

  if (!dayBox) {
    return;
  }

  dayBox.classList.add("highlight");

  dayBox.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

renderCalendar();
renderMonthlySaints();
setupSearch();