# 🌸 MARYAMA PINK DASHBOARD ♡
### Nidaamka Casriga ah ee Maamulka Hawlaha & Mashaariicda Jaamacadda
**Ardayga:** Maryama Mohamed  
**Kulliyadda:** Faculty of Computer Science & IT  
**Mashruuca:** University Academic Portfolio & Task Manager  
**Naqshadda:** 3D Pink Aesthetic Glassmorphism  

---

## 📖 1. Ujeeddada Mashruuca (Project Purpose)

**Maryama Pink Dashboard** waa mareeg (website) dhammaystiran oo loogu talagalay maamulka mashaariicda iyo hawlaha waxbarashada ee jaamacadda. Waxaa loo dhisay in ardaygu (Maryama Mohamed) ku habaysato hawlaha maalinlaha ah sida:
1. Maamulka Mashaariicda Jaamacadda (University Projects).
2. Qorsheynta Assignments-ka, Imtixaannada iyo Cilmi-baarista (Academic Tasks).
3. La socodka waqtiyada kama-dambaysta ah (Deadlines) iyo hawlaha waqtigoodu dhaafay (Overdue).
4. Soo saarista jaantusyo iyo tirakoobyo toos ah (Visual Statistics & Charts).
5. Diyaarinta warbixinnada rasmiga ah ee PDF ama daabacaadda loo gudbiyo macallinka (Academic Reports).

Mashruucu wuxuu isku dhex daraa **Naqshad 3D Pink Aesthetic ah** (Glassmorphism, midabyo rose/pink/lavender ah, kubado 3D ah oo sabbaynaya) iyo **shaqayn farsamo oo dhab ah** (Full CRUD, LocalStorage persistence, Canvas Charts, Responsive UI).

---

## ✨ 2. Astaamaha Ugu Waaweyn (Key Features)

- **🎀 3D Pink Aesthetic & Glassmorphism:** Kaarar u eg muraayad dhab ah (`backdrop-filter: blur`), hoosyo jilicsan (soft shadows), kubado 3D ah oo gadaal ka sabbaynaya, iyo midabyo isku dheellitiran oo Rose Pink, White, iyo Lavender ah.
- **📁 Maamulka Mashaariicda (Projects CRUD):**
  - **Create:** Abuur mashruuc cusub (Magac, Sharaxaad, Qayb, Xaalad, Taariikho).
  - **Read:** Ku muuji kaarar 3D ah (Cards View) ama Liis nidaamsan (List View).
  - **Update:** Wax ka beddel xogta mashruucii hore.
  - **Delete:** Tirtir mashruuca iyadoo la weydiinayo xaqiijin badbaado ah.
- **📋 Maamulka Hawlaha (Tasks CRUD):**
  - Hawl kasta waxay leedahay: Title, Description, Mashruuca ay ku xiran tahay, Category, Priority (High, Medium, Low), Status (To Do, In Progress, Completed), iyo Due Date.
  - Hal-guji oo hawsha loogu calaamadeynayo in la dhammeeyay oo wata cod guul (Chime sound).
- **📊 Jaantusyo & Tirakoobyo (Native Canvas Charts):**
  - Jaantusyo Donut ah oo muujinaya hawlaha dhammaaday iyo kuwa harsan.
  - Horizontal Bar Chart muujinaya horumarka mashruuc kasta (%).
  - Weekly Task Distribution (Hawlaha maalmaha toddobaadka).
  - Category Breakdown (Qaybaha hawluhu u kala baxaan).
  - *Jaantusyadu waxay ku shaqeeyaan HTML5 Canvas oo uma baahna internet ama maktabado dibadeed.*
- **📅 Jadwalka Bilaha ah (Interactive Monthly Calendar):**
  - Arag hawlaha iyo deadlines-ka ku beegan maalin kasta.
  - Calaamado muujinaya hawlaha waqtigoodu dhacay (Overdue) ama maanta ah (Today).
  - Ku dar task taariikh kasta adoo si toos ah u gujinaya maalintaas.
- **🔍 Raadin & Filters Casri ah:**
  - Raadi magacyada hawlaha, sharaxaadda, ama qaybaha.
  - Ku kala saar: Status (To Do, In Progress, Completed, Overdue), Priority, Category, iyo Mashruuc.
  - Keyboard shortcut: Riix `Ctrl + K` ama `⌘ + K` si aad raadinta u furto.
- **📄 Warbixinnada & Soo Dejinta (Reports & Export):**
  - Bog rasmi ah oo loogu talagalay in macallinka loo daabaco (`Print / PDF`).
  - Soo dejso dhammaan hawlaha oo CSV ah (`Export CSV`).
  - Soo dejso kayd buuxa oo JSON ah (`Export JSON Backup`).
  - Dib u soo geli xogta JSON (`Import JSON`).
- **⚙️ Dejinta & Mawduucyada (Settings & Themes):**
  - Pink Light Mode 🌸 & Rose Dark Mode 🌙.
  - Xasuusashada Theme-ka iyo Settings-ka.
  - Codadka ogeysiiska (Web Audio API) oo la demi karo laguna shidi karo.
  - Beddelka magaca ardayga (Maryama Mohamed) iyo kulliyadda.
  - Badhamada "Dib ugu celi xogtii tusaalaha" iyo "Nadiifi dhammaan xogta".

---

## 🛠️ 3. Teknoolojiyada La Adeegsaday (Tech Stack)

| Qaybta | Teknoolojiyada | Sharaxaadda |
| :--- | :--- | :--- |
| **Frontend** | HTML5 Semantic | Qaab-dhismeed nadiif ah oo marin-u-helkiisu sarreeyo (Accessibility). |
| **Styling** | CSS3 Modern | CSS Variables, Flexbox, CSS Grid, Glassmorphism, 3D Keyframes, Print Media Queries. |
| **Logic** | Vanilla JavaScript (ES6+) | Wax framework ah looma baahna (No React/Vue required), koodh nadiif ah oo ardaydu fahmi karto. |
| **Graphics** | HTML5 Canvas 2D | Jaantusyo xawaare sare leh oo si toos ah browser-ka ugu sawirma (Zero CDN dependencies). |
| **Audio** | Web Audio API | Codad guul iyo gujin oo toos ah adigoon soo dejin codad dibadeed. |
| **Storage** | Browser LocalStorage API | Kaydinta xogta oo aan u baahnayn rakibid database dibadeed. |
| **Deployment** | Vercel Static Hosting | U diyaar ah daabacaad degdeg ah iyadoo la isticmaalayo `vercel.json`. |

---

## 📂 4. Qaab-dhismeedka Faylasha (File Structure)

```text
Maryama_Pink_Dashboard/
├── index.html           # Bogga koowaad ee leh dhammaan 7-da qaybood iyo modals-ka
├── style.css            # Naqshadda 3D Pink Aesthetic, Glassmorphism, Responsive & Print
├── script.js            # Koodhka JavaScript: CRUD, Charts, Calendar, LocalStorage, Audio
├── vercel.json          # Habaynta daabacaadda Vercel iyo madaxyada amniga (Security Headers)
├── README.md            # Dukumeentiga buuxa ee mashruuca iyo tilmaamaha jaamacadda
└── assets/              # Faylasha dheeraadka ah ama sawirrada mustaqbalka
```

---

## 🚀 5. Sida loo Furo Website-ka (How to Run)

Mashruucan looma baahna Node.js, npm, ama wax server adag ah:

### Habka 1: Si Toos ah Browser-ka ugu Fur (Fudud)
1. Soo gal galalka: `c:\Users\armaa\Videos\Captures\Maryama_Pink_Dashboard\`.
2. Labo jeer guji (Double Click) faylka **`index.html`**.
3. Waxay si toos ah ugu furmi doontaa Chrome, Edge, ama Safari!

### Habka 2: Live Server (VS Code)
1. Fur VS Code ka dibna fur folder-ka `Maryama_Pink_Dashboard`.
2. Guji midig (Right Click) faylka `index.html` oo dooro **"Open with Live Server"**.
3. Boggu wuxuu ka furmi doonaa `http://127.0.0.1:5500`.

---

## 🧪 6. Sida loo Tijaabiyo CRUD (Testing Guide)

Si aad ugu caddeyso macallinka in CRUD-ku shaqeynayo:

1. **CREATE (Ku Dar Xog Cusub):**
   - Guji badhanka **"+ Task Cusub"** ee sare ama Hero banner-ka.
   - Geli cinwaan: *"Diyaarinta Imtixaanka Kama-dambaysta ah"*.
   - Dooro Mashruuc, Qayb (Category), Priority (High), Status (To Do), iyo Taariikhda.
   - Guji **"Kaydi Hawsha ✨"**.
   - Waxaad maqli doontaa codka guusha, waxaana soo bixi doona Toast Notification, dashboard-kuna isla markiiba wuu kordhin doonaa tirada hawlaha.

2. **READ (Akhriska & Muujinta Xogta):**
   - Tag qaybta **"Tasks"** ama **"Projects"** ee sidebar-ka.
   - Waxaad arki doontaa dhammaan hawlihii aad gelisay oo si qurux badan ugu jira kaarar ama liis.
   - Refresh dheh bogga (`F5` ama `Ctrl + R`); xogtii ma lumayso waxayna toos uga imanaysaa LocalStorage!

3. **UPDATE (Wax Ka Beddelka Xogta):**
   - Hawl kasta guji astaanta qalinkada (✏️).
   - Wax ka beddel cinwaanka ama u beddel status-ka *"Completed"*.
   - Guji **"Kaydi Hawsha ✨"**.
   - Xogta cusub isla goobta ayay ka muuqanaysaa, horumarka mashruucuna wuu kordhayaa.

4. **DELETE (Tirtiridda Xogta):**
   - Guji astaanta qashinka (🗑️) ee hawsha ama mashruuca.
   - Waxaa soo bixi doona modal ku weydiinaya xaqiijin badbaado: *"Ma hubtaa inaad tirtirto hawshan?"*.
   - Guji **"Haa, Tirtir"**.
   - Hawsha waa la tirtirayaa, tirakoobka iyo dashboard-kuna si toos ah ayay isu cusboonaysiinayaan.

---

## 💾 7. Sida LocalStorage u Shaqeeyo & Xaddidaadaha (Storage & Limits)

### Sida uu u Shaqeeyo:
- Website-ku wuxuu isticmaalaa `window.localStorage` si uu u kaydiyo xogta JSON formatted:
  - `maryama_pink_projects_v1`: Liiska mashaariicda.
  - `maryama_pink_tasks_v1`: Liiska hawlaha.
  - `maryama_pink_activities_v1`: Dhaqdhaqaaqa dhacay.
  - `maryama_pink_settings_v1`: Magaca Maryama Mohamed, theme-ka, iyo doorbidyada.
- Markasta oo xog la geliyo ama wax laga beddelo, waxaa loo rogaa qoraal (`JSON.stringify`) waxaana la geliyaa xusuusta browser-ka.
- Marka bogga la furo, waxaa laga soo akhriyaa (`JSON.parse`).

### Xaddidaadaha LocalStorage (Limitations):
1. **Qalabka Keliya (Single Device/Browser):** Xogtu waxay ku jirtaa computer-ka iyo browser-ka lagu furay. Haddii computer kale laga furo, lama helayo xogtii hore (haddii aan la isticmaalin Export JSON Backup).
2. **Cabbirka Xogta (Storage Limit):** LocalStorage wuxuu qaadaa ilaa 5MB - 10MB oo qoraal ah (taasoo ku filan kumannaan hawlood iyo mashaariic ah).
3. **Cache Clear:** Haddii isticmaaluhu browser-ka ka tirtiro dhammaan *Cookies and Site Data*, xogtu way tirtirmaysaa (sidaas darteed waxaan ku darnay badhanka **"Soo Dejso Backup JSON"**).

---

## 🌐 8. Sida loo Ballin Karo Mashruuca Mustaqbalka (Full Database Scalability)

Nooca koowaad (v1.0) wuxuu si ula kac ah ugu shaqeeyaa LocalStorage si mashruucu u noqdo mid fudud oo shaqaynaya meel kasta oo aan server loo baahnayn.

Haddii macallinka jaamacaddu dalbado in mustaqbalka lagu daro Database dhab ah:
1. **Backend API:** Waxaa la dhisayaa server fudud oo adeegsanaya **Node.js + Express** ama **Python + FastAPI**.
2. **Database:** Waxaa lagu xiri karaa **PostgreSQL** ama **MongoDB**.
3. **Authentication:** Waxaa lagu dari karaa nidaamka Login/Register oo adeegsanaya **JWT (JSON Web Tokens)** ama **Supabase Auth**.
4. **Isbeddelka Koodhka:** Gudaha `script.js`, halkii laga isticmaali lahaa `localStorage.setItem()`, waxaa lagu beddelayaa shaqooyin `async/await fetch('https://api.domain.com/tasks')`.

---

## ☁️ 9. Sida Loogu Daabaco Vercel (Online Deployment Guide)

Si aad u hesho link online ah (tusaale: `https://maryama-pink-dashboard.vercel.app`) oo aad macallinka la wadaagto:

### Habka 1: Vercel CLI (Aad u Degdeg Badan)
1. Fur Terminal-ka PowerShell.
2. Ku rakib Vercel (haddii aanad haysan):
   ```powershell
   npm install -g vercel
   ```
3. Gal galalka mashruuca:
   ```powershell
   cd c:\Users\armaa\Videos\Captures\Maryama_Pink_Dashboard
   ```
4. Ku daabac amarkan keliya:
   ```powershell
   vercel --prod
   ```
5. Dooro `Y` (Yes) su'aalaha, 1 daqiiqo gudahood waxaad helaysaa live link online ah!

### Habka 2: GitHub + Vercel Dashboard (Caadi)
1. Geli folder-ka `Maryama_Pink_Dashboard` akoonkaaga **GitHub**.
2. Gal bogga [vercel.com](https://vercel.com) oo ku gal akoonkaaga GitHub.
3. Guji **"Add New Project"** ka dibna dooro repository-ga `Maryama_Pink_Dashboard`.
4. Guji **"Deploy"**. Vercel si toos ah ayay u aqoonsanaysaa faylasha HTML/CSS/JS, waxayna ku siinaysaa link shaqaynaya!

---

## 👩🏽‍🎓 10. Bandhigga Jaamacadda (Presentation Tips for Maryama Mohamed)

Markaad hortagto guddiga jaamacadda ama macallinka:
1. **Hordhac:** "Magacaygu waa Maryama Mohamed, waxaanan maanta idiin soo bandhigayaa mashruucayga *Maryama Pink Dashboard*, kaasoo ah xarun casri ah oo ardaydu ku maamulaan waxbarashadooda."
2. **Naqshadda:** Tusi qaabka 3D Glassmorphism-ka, badhanka Dark/Light mode-ka, iyo sida design-ku u yahay mid indhaha u roon oo responsive ah.
3. **Muuji CRUD Shaqaynaya:** 
   - Ku dar task cusub hortooda.
   - Calaamadee inuu dhammaaday si ay u maqlaan codka chime-ka una arkaan jaantuska oo isla markiiba boqolkiiba kordhaya.
   - Tirtir hawl si ay u arkaan xaqiijinta badbaadada.
4. **Muuji Warbixinta:** Fur qaybta **Reports**, guji **Print / PDF**, tus sida ay warbixin qurux badan ugu soo baxayso magacaaga iyo saxeexyada.

---
*Waxaa jacayl iyo dadaal ku dhistay ardayad Maryama Mohamed ♡ — Oktoobar 2026*
