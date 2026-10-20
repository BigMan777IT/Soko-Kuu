# Soko Kuu — Frontend Prototype

Hii ni **mfano wa mwonekano wa mbele (frontend prototype)** wa app ya Soko Kuu, iliyoandikwa kwa HTML/CSS/JavaScript ya kawaida (bila zana/framework maalum, ili iwe rahisi kwa developer yeyote kuiendeleza).

## Kiko Ndani ya Faili Hizi

- `index.html` — muundo wa skrini 4: Mwanzo, Matokeo ya Utafutaji, Maelezo ya Bidhaa, Usajili
- `style.css` — mtindo (design) unaolingana na rangi ya Soko Kuu (teal #0D9488)
- `data.js` — **data ya mfano tu** (bidhaa 6, makundi 7) — badilisha na data halisi kutoka database yako
- `script.js` — mwendo wa app: kubadilisha skrini, kutafuta, kuchuja, like, cargo, fomu ya usajili

## Kinachofanya Kazi Sasa Hivi

- Kubadilisha kati ya skrini nne (navigation)
- Kutafuta na kuchuja bidhaa (kwa kategoria, retail/wholesale, verified)
- Kubonyeza "Like" kwenye bidhaa
- Fomu ya usajili (Hatua ya 1) yenye uchaguzi wa NIDA/Kitambulisho

**Muhimu:** Data zote (kama Like/Cargo) zipo kwenye kumbukumbu ya kivinjari tu — zikipotea ukisasisha ukurasa (refresh), hilo ni la kawaida kwa prototype hii. Haina database halisi.

## Ambacho Developer Anahitaji Kuongeza (Backend)

Hii ni **frontend pekee** — hakuna seva (server) wala database nyuma yake. Kabla ya kuwa app halisi, developer anahitaji:

1. **Backend/API** — kuhifadhi bidhaa, wafanyabiashara, matokeo ya uthibitisho (Node.js, Django, Laravel, au chochote developer anapendelea)
2. **Database** — kuhifadhi taarifa za watumiaji, bidhaa, ripoti (PostgreSQL, MongoDB, n.k)
3. **Uthibitisho wa kweli (Authentication)** — usajili/kuingia kwa kweli, si fomu tu
4. **Upakiaji wa picha** — kwa NIDA/kitambulisho na picha za bidhaa (mfano kutumia Cloudinary, AWS S3)
5. **OTP/uthibitisho wa simu** — kama ilivyoelezwa kwenye mpango wa biashara (manual mwanzoni, kisha API baadaye)
6. **Muunganiko wa WhatsApp/simu** — kitufe cha "Wasiliana na Muuzaji" kiongoze kwenye WhatsApp halisi (`wa.me/<namba>`)
7. **App ya simu halisi (si web tu)** — kama unataka iwe kwenye Play Store/App Store, hii inahitaji kuandikwa upya kwa Flutter/React Native, au kufungwa (wrapped) kwa zana kama Capacitor

## Jinsi ya Kuiona Sasa Hivi

Fungua tu `index.html` kwa kivinjari chochote (Chrome, Safari) — haihitaji usakinishaji wowote.

## Jinsi ya Kuipandisha GitHub / GitHub Pages (bure)

1. Tengeneza akaunti GitHub (idhahuru.com → github.com) ikiwa huna
2. Tengeneza "repository" mpya, pakia faili hizi nne
3. Nenda Settings → Pages → chagua "main branch" → Save
4. Baada ya dakika chache, app itapatikana kwenye link ya bure (mfano `jina-lako.github.io/soko-kuu`)

**Kumbuka:** Hii itaonyesha tu mwonekano wa frontend — bado haitafanya kazi kama app kamili (usajili wa kweli, malipo, n.k) mpaka backend iongezwe na developer.

## Kupeleka kwa Developer

Mpe developer faili hizi nne + hati ya mpango wa biashara (yenye maelezo kamili ya verification flow, mfumo wa mapato, n.k) ili aelewe muktadha kamili kabla ya kuanza kujenga backend.
