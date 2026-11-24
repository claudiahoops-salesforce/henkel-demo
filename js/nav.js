/* Henkel Adhesives main navigation – data mirrors next.henkel-adhesives.com/de/en.html */
(function () {
  var BASE = "https://next.henkel-adhesives.com";
  var P = function (c) { return "/de/en/products.html/producttype_" + c + ".html"; };
  var A = function (p) { return "/de/en/applications/" + p + ".html"; };
  var S = function (p) { return "/de/en/services/" + p + ".html"; };
  var B = function (p) { return "/de/en/our-brands/" + p + ".html"; };
  var I = function (p) { return "/de/en/industries/" + p + ".html"; };
  var K = function (p) { return "/de/en/knowledge/" + p + ".html"; };
  var F = function (p) { return "/de/en/support/faqs/" + p + ".html"; };
  var R = "2.3.5.4.";
  var pt = function (label, code, kids) { return [label, P(R + code), kids || []]; };

  var NAV = [
    ["Produkte", P("industrial-root-producttype"), [
      pt("Vergussmassen für die Elektronik", "8", [pt("Schutzlacke","8.8"),pt("Verkapselungsmaterialien","8.2"),pt("Glob-Top-Materialien","8.4"),pt("Spritzgussmassen","8.6"),pt("Vergussmassen","8.7"),pt("Underfills","8.9")]),
      pt("Equipment", "6", [
        pt("Automatisierte Robotersysteme","6.8",[pt("Roboterteile und Zubehör","6.8.5"),pt("Robotersysteme","6.8.6")]),
        pt("Verbrauchsmaterial und Zubehör","6.7",[pt("Dosiernadeln und -spitzen","6.7.1"),pt("Mischdüsen","6.7.2"),pt("Schläuche, Fittings und weiteres Zubehör","6.7.4")]),
        pt("Dosiersysteme","6.1",[pt("Dosiersysteme für anaerobe Klebstoffe","6.1.1"),pt("Flaschendosiersysteme","6.1.3"),pt("Kartuschenadapter und Zubehör","6.1.14"),
          pt("Kartuschendosiersysteme","6.1.4",[pt("Zweikomponenten-Kartuschendosiersysteme","6.1.4.1"),pt("Einzelkartuschen-Dosiersysteme","6.1.4.2")]),
          pt("Steuerungen, Behälter und Dosierventile","6.1.16",[pt("Steuerungen und Dosierbehälter","6.1.16.1"),pt("Dosierventile","6.1.16.2")]),
          pt("Teile und Zubehör für Dosiersysteme","6.1.12"),pt("Prozesskontroll- und Überwachungssysteme für Dosiersysteme","6.1.7"),pt("Spritzendosiersysteme","6.1.8"),pt("Volumetrische Dosiersysteme","6.1.10")]),
        pt("Lichthärtungssysteme","6.2",[
          pt("LED-Lichthärtungssysteme","6.2.1",[pt("LED-Flächenhärtungssysteme","6.2.1.1"),pt("LED-Punkthärtungs- und Handsysteme","6.2.1.3")]),
          pt("Teile und Zubehör für Lichthärtungssysteme","6.2.4"),pt("Prozesskontroll- und Überwachungssysteme für Lichthärtungssysteme","6.2.3"),pt("UV- und Tageslicht-Härtungssysteme","6.2.2")])]),
      pt("Industrieklebstoffe", "1", [pt("Klebstoff-Beschleuniger","1.25"),pt("Klebstoff-Aktivatoren","1.24"),pt("Haftvermittler","1.23"),pt("Kontaktklebstoffe","1.21"),pt("Elektrisch leitfähige Klebstoffe","1.1"),pt("Elektrisch nicht leitfähige Klebstoffe","1.6"),pt("Schmelzklebstoffe","1.4"),pt("Industrielle Klebebänder","1.20"),pt("Sekundenkleber","1.5"),pt("Lichthärtende Klebstoffe","1.15"),pt("Haftklebstoffe","1.7"),pt("Fügeklebstoffe","1.9"),pt("Strukturklebstoffe","1.11"),pt("SMD-Klebstoffe","1.12"),pt("Schraubensicherungen","1.13"),pt("Wasserbasierte Klebstoffe","1.16"),pt("Scheibenklebstoffe","1.17")]),
      pt("Industriereiniger", "2", [pt("Elektroreiniger","2.3"),pt("Allgemeine Industriereiniger","2.4"),pt("Handreiniger","2.8"),pt("Schmelzklebstoff-Reiniger","2.2"),
        pt("Industriereiniger für Oberflächenbehandlungen","2.10",[pt("Wartungsreiniger","2.10.7")]),
        pt("Industrielle Entfetter","2.1",[pt("Industrielle Entfetter für Klebstoffe","2.1.1")]),
        pt("Reiniger für die Metallbearbeitung","2.6"),pt("Formreiniger","2.7"),pt("Rostschutzmittel","2.9")]),
      pt("Industriebeschichtungen", "3", [pt("Karosseriespachtel","3.13"),pt("Korrosionsschutzmittel","3.14"),pt("Bodenbeschichtungen","3.5"),pt("Industrielle Druckfarben und Beschichtungen","3.6"),pt("Trennmittel","3.7"),pt("Schutzbeschichtungen","3.10"),pt("Schalldämpfer","3.15"),pt("Verschleißfeste Beschichtungen","3.12")]),
      pt("Industrieschmierstoffe", "7", [pt("Anti-Seize-Schmierstoffe","7.1"),pt("Zerspanungsschmierstoffe","7.4"),
        pt("Umformschmierstoffe","7.2",[
          pt("Gießschmierstoffe","7.2.2",[pt("Hochdruck-Gießschmierstoffe","7.2.2.1"),pt("Niederdruck-Gießschmierstoffe","7.2.2.2")]),
          pt("Schmiedeschmierstoffe","7.2.1",[pt("Schmiedeschmierstoffe für Eisenwerkstoffe","7.2.1.1")])]),
        pt("Fette auf Mineralölbasis","7.6"),pt("Spezialöle und -schmierstoffe","7.7"),pt("Synthetische Schmierstoffe","7.8")]),
      pt("Industrielle Reparaturwerkstoffe", "9", [pt("Vergussmörtel","9.2"),pt("Metallaufbauwerkstoffe","9.4"),pt("O-Ring-Reparaturwerkstoffe","9.5"),pt("Rohrreparaturwerkstoffe","9.6")]),
      pt("Industriedichtstoffe", "10", [pt("Flexible Dichtstoffe","10.1"),pt("Bodendichtstoffe","10.2"),pt("Flächendichtungen","10.3"),pt("Formtrenn-Dichtstoffe","10.4"),pt("NVH-Dichtstoffe (Geräusch, Vibration, Rauheit)","10.9"),pt("Spezialdichtstoffe","10.10"),pt("Gewindedichtungen","10.7")]),
      pt("Oberflächenbehandlungen", "12", [pt("Autophoretische Beschichtungen","12.9"),
        pt("Konversionsschichten","12.1",[pt("Chromfreie Konversionsschichten","12.1.1")]),
        pt("Korrosionsinhibitoren","12.6"),pt("Industrielle Entfetter für Oberflächenbehandlungen","12.14"),pt("Industrielle Vorbehandlungsmittel","12.4"),pt("Lackentferner","12.7"),pt("Polierpasten","12.8")]),
      pt("Wärmemanagement-Materialien", "13", [pt("Phasenwechselmaterialien","13.1"),pt("Thermal GAP PAD Materialien","13.6"),pt("Thermische Gap-Filler","13.5"),pt("Wärmeleitende Klebstoffe","13.7")])
    ]],

    ["Anwendungen", "/de/en/applications.html", [
      ["Montageautomatisierung", A("equipment"), [["Automatisierte Robotersysteme",A("equipment/automated-robotic-systems")],["Verbrauchsmaterial und Zubehör",A("equipment/consumables-and-supplies")],["Dosiersysteme",A("equipment/dispense-systems")],["Lichthärtungssysteme",A("equipment/light-curing-systems")]]],
      ["Lösungen für die Unfallreparatur", A("collision-repair-solutions")],
      ["Lösungen zum Kleben elektronischer Bauteile", A("electronic-component-bonding-solutions"), [["Montagefolien",A("electronic-component-bonding-solutions/assembly-films")],["Elektrisch leitfähige Klebstoffe",A("electronic-component-bonding-solutions/electrically-conductive-adhesives")],["Nicht leitfähige Klebstoffe",A("electronic-component-bonding-solutions/non-conductive-adhesives")]]],
      ["Lösungen zum Schutz elektronischer Bauteile", A("electronic-component-protection-solutions"), [["Verkapselungen auf Platinenebene",A("electronic-component-protection-solutions/board-level-encapsulants")],["Schutzlacke",A("electronic-component-protection-solutions/conformal-coatings")],["Niederdruckspritzguss",A("electronic-component-protection-solutions/low-pressure-molding")],["Vergussmassen",A("electronic-component-protection-solutions/potting-compounds")],["Underfills",A("electronic-component-protection-solutions/underfills")]]],
      ["Dichtungen", A("gasketing")],
      ["Sofortverklebung von Bauteilen", A("instant-component-bonding")],
      ["Lösungen für die Metallverarbeitung", A("metal-processing-solutions")],
      ["Verpackungslösungen", A("packaging-solutions")],
      ["Materiallösungen für gedruckte Elektronik", A("printed-electronics-material-solutions")],
      ["Fügen von Welle-Nabe-Verbindungen", A("retaining-compounds")],
      ["Smarte Wartung (IIoT)", A("smart-maintenance-iiot"), [["LOCTITE® Pulse für rotierende Anlagen",A("smart-maintenance-iiot/loctite-pulse-rotating-equipment")],["LOCTITE® Pulse Smart Flange","/de/en/navigation/applications/smart-maintenance-iiot/loctite-pulse-smart-flange.html"],["LOCTITE® Pulse Smart Steam Trap",A("smart-maintenance-iiot/loctite-pulse-smart-steam-trap")]]],
      ["Lösungen für strukturelles Kleben", A("structural-bonding-solutions")],
      ["Wärmemanagement", A("thermal-management-materials"), [["Thermal GAP PAD® Materialien",A("thermal-management-materials/thermal-gap-pad-materials")],["Thermische Gap-Filler",A("thermal-management-materials/thermal-gap-fillers")],["Thermische Gele",A("thermal-management-materials/thermal-gel")],["Thermal SIL PAD® Materialien",A("thermal-management-materials/thermal-sil-pad-materials")],["Phasenwechselmaterialien",A("thermal-management-materials/phase-change-materials")],["Wärmeleitfett",A("thermal-management-materials/thermally-conductive-grease")],["Wärmeleitende Klebstoffe",A("thermal-management-materials/thermally-conductive-adhesives")]]],
      ["Schraubensicherung", A("threadlockers")],
      ["Gewindedichtung", A("thread-sealing")],
      ["Verschleißschutz", A("wear-prevention")],
      ["Lösungen für den Scheibenaustausch", A("windscreen-bonding-solutions")],
      ["Wirebond-Halbleiter-Packaging", A("wirebond-semiconductor-packaging"), [["Die-Attach-Folie",A("wirebond-semiconductor-packaging/die-attach-film")],["Die-Attach-Paste",A("wirebond-semiconductor-packaging/die-attach-paste")],["Druckbare B-Stage-Die-Attach-Klebstoffe",A("wirebond-semiconductor-packaging/printable-b-stage-die-attach-adhesives")]]],
      ["Advanced Semiconductor Packaging", A("advanced-semiconductor-packaging"), [["Klebstoffe für Lid- und Stiffener-Montage",A("advanced-semiconductor-packaging/lid-and-stiffener-attach-adhesives")],["EMV-Abschirmung",A("advanced-semiconductor-packaging/emi-shielding")],["Lösungen für Liquid Compression Molding",A("advanced-semiconductor-packaging/liquid-compression-molding-solutions")]]]
    ]],

    ["Services", "/de/en/services.html", [
      ["Engineering-Services", S("engineering"), [["Finite-Elemente-Analyse",S("engineering/finite-element-analysis")],["Materialprüfung und Analytik",S("engineering/material-testing-and-analytical-services")],["Packaging Recyclab",S("engineering/packaging-recyclab")]]],
      ["IoT-Services", S("iot"), [["BONDERITE® LineguardX Services",S("iot/bonderite-lineguardx")]]],
      ["Maschinen- und Anlagenservices", S("equipment-services"), [
        ["LOCTITE® Equipment-Services", S("equipment-services/loctite"), [["Inzahlungnahme von Equipment",S("equipment-services/loctite/equipment-trade-ins")],["Werksreparatur",S("equipment-services/loctite/factory-repair")],["Außendienst-Service",S("equipment-services/loctite/field-services")]]],
        ["SONDERHOFF Maschinenservices", S("equipment-services/sonderhoff-machine-services")]]],
      ["Fertigungs- und Wartungsservices", S("manufacturing-and-maintenance-services"), [["Services für zuverlässige Instandhaltung",S("manufacturing-and-maintenance-services/maintenance-reliability")],["Produktdesign- und Fertigungsservices",S("manufacturing-and-maintenance-services/product-design-and-manufacturing")],["SONDERHOFF Lohnfertigung",S("manufacturing-and-maintenance-services/sonderhoff-contract-manufacturing")]]]
    ]],

    ["Marken", "/de/en/our-brands.html", [
      ["AQUENCE®",B("aquence")],["BONDERITE®",B("bonderite")],["LOCTITE®",B("loctite")],["TECHNOMELT®",B("technomelt")],["TEROSON®",B("teroson")]
    ]],

    ["Branchen", "/de/en/industries.html", [
      ["Luft- und Raumfahrt", I("aerospace"), [["Luftfahrt-MRO",I("aerospace/aerospace-maintenance-repair-overhaul")],["Luftfahrt",I("aerospace/aviation")],["Raumfahrt",I("aerospace/space")],["Urbane Luftmobilität",I("aerospace/urban-air-mobility")]]],
      ["Automobil", I("automotive"), [["Automobilelektronik",I("automotive/automotive-electronics")],["Fahrzeuginterieur und -exterieur",I("automotive/automotive-interior-and-exterior")],["Fahrzeugaufbau",I("automotive/automotive-vehicle-body")],["E-Mobilität",I("automotive/e-mobility")],["Antriebsstrang und Fahrwerk",I("automotive/powertrain-and-chassis")]]],
      ["Automobil-Aftermarket", I("automotive-aftermarket")],
      ["Bau- und Konstruktionskomponenten", I("building-construction-components"), [["Bauteile",I("building-construction-components/building-components")],["Holzwerkstoffe",I("building-construction-components/engineered-wood")]]],
      ["Unterhaltungselektronik", I("consumer-electronics"), [["Kameras, Sensoren und Module",I("consumer-electronics/cameras-sensors-and-modules")],["Mobilgeräte",I("consumer-electronics/mobile-devices")],["Smart-Home-Geräte",I("consumer-electronics/smart-home-devices")],["Speicher und Prozessoren",I("consumer-electronics/storage-and-processors")],["Wearables",I("consumer-electronics/wearable-devices")]]],
      ["Daten und Telekommunikation", I("data-and-telecommunications"), [["Breitbandanbindung",I("data-and-telecommunications/broadband-connectivity")],["Rechenzentrum",I("data-and-telecommunications/data-center")],["Optik",I("data-and-telecommunications/optical")]]],
      ["Möbel und Interieur", I("furniture-interiors")],
      ["Industrielle Fertigung", I("industrial-manufacturing"), [["Filtration",I("industrial-manufacturing/filtration")],["Haushaltsgeräte",I("industrial-manufacturing/home-appliances")],["Schwermaschinen",I("industrial-manufacturing/heavy-equipment")]]],
      ["Wartung und Reparatur", I("industrial-maintenance-repair")],
      ["Medizin", I("medical"), [["Medizinische Einwegprodukte",I("medical/medical-disposables")],["Medizinische Geräte",I("medical/medical-equipment")],["Medizinische Filtration",I("medical/medical-filtration")],["Medizinische Wearables",I("medical/medical-wearables")]]],
      ["Metalle", I("metals"), [["Aluminiumcoil",I("metals/aluminum-coil")],["Aluminiumkomponenten",I("metals/aluminum-components")],["Edelstahlcoil",I("metals/stainless-steel-coil")],["Stahlcoil",I("metals/steel-coil")],["Stahlkomponenten",I("metals/steel-components")]]],
      ["Verpackung und Converting", I("packaging-and-converting"), [["Konsumgüterverpackung",I("packaging-and-converting/consumer-goods-packaging")],["E-Commerce",I("packaging-and-converting/e-commerce")],["Flexible Verpackungen",I("packaging-and-converting/flexible-packaging")],["Metallverpackungen",I("packaging-and-converting/metal-packaging")],["Papierlösungen",I("packaging-and-converting/paper-solutions")],["Klebebänder, Etiketten und selbstklebende Grafikfolien",I("packaging-and-converting/tapes-labels-self-adhesive-graphic-films")],["Verpackungsbeschichtungen",I("packaging-and-converting/packaging-coatings")]]],
      ["Körperhygiene", I("personal-hygiene"), [["Inkontinenzprodukte für Erwachsene",I("personal-hygiene/adult-incontinence")],["Babywindeln",I("personal-hygiene/baby-diapers")],["Damenhygiene",I("personal-hygiene/feminine-care")],["Medizinische Schutzkleidung",I("personal-hygiene/medical-protective-wear")],["Tücher und Handtücher",I("personal-hygiene/tissues-and-towels")]]],
      ["Energie", I("power"), [["Alternative Energieumwandlung und -speicherung",I("power/alternative-energy-conversion-and-storage")],["Ladeinfrastruktur für Elektrofahrzeuge",I("power/ev-charging-infrastructure")],["Wasserstofflösungen",I("power/hydrogen-solutions")],["Stromversorgungen",I("power/power-supplies")],["Solar",I("power/solar")],["Wind",I("power/wind")]]],
      ["Halbleiter", I("semiconductor"), [["Halbleiter-Packaging",I("semiconductor/semiconductor-packaging")],["Halbleiter für Rechenzentren",I("semiconductor/semiconductors-for-data-center")],["Halbleiter für Telekommunikation",I("semiconductor/semiconductors-for-telecom")],["Halbleiter für die Automobilindustrie",I("semiconductor/semiconductors-for-automotive")]]],
      ["Sport und Mode", I("sports-and-fashion"), [["Businessschuhe",I("sports-and-fashion/dress-shoes")],["Mode",I("sports-and-fashion/fashion")],["Sportschuhe",I("sports-and-fashion/sports-shoes")]]],
      ["Transport", I("transportation"), [["Öffentlicher Nahverkehr",I("transportation/mass-transit")],["Spezialfahrzeuge",I("transportation/specialty-vehicles")]]],
      ["Humanoide Robotik", I("humanoid-robotics")]
    ]],

    ["Wissen", "/de/en/knowledge.html", [
      ["LOCTITE®XPLORE | E-Learning", K("elearning/loctite-xplore-landing-page")],
      ["Präsenzschulungen", K("in-person-learning")],
      ["Ressourcencenter", "/de/en/navigation/knowledge/insights.html", [["Artikel","/de/en/navigation/knowledge/insights/articles.html"],["Broschüren","/de/en/navigation/knowledge/insights/brochures.html"],["Fallstudien","/de/en/navigation/knowledge/insights/case-studies.html"],["eBooks","/de/en/navigation/knowledge/insights/ebooks.html"],["Webinare","/de/en/navigation/knowledge/insights/webinars.html"],["Whitepaper","/de/en/navigation/knowledge/insights/white-paper.html"]]],
      ["Global Innovation Centers", K("global-innovation-centers")]
    ]],

    ["Support", "/de/en/support.html", [
      ["Kontakt", "/de/en/support.html", [["Produktinfos und Dokumentation","/de/en/support/product-info.html"],["Technischer Support","/de/en/support/technical-support.html"],["Regulatorische Anfrage","/de/en/support/regulatory-inquiry.html"],["Support für Equipment-Services","/de/en/support/equipment-services-support.html"],["Allgemeine Anfrage","/de/en/support/general-inquiry.html"]]],
      ["FAQs", F("").replace("faqs/.html","faqs.html"), [
        ["Finden, was Sie brauchen", F("find-what-you-need"), [["Produktdokumente finden",F("find-what-you-need/finding-product-documents")],["Support",F("find-what-you-need/support")],["eLearning",F("find-what-you-need/elearning")]]],
        ["Regulatorisches", F("regulatory")],["So kaufen Sie", F("how-to-buy")],["Konto und Verifizierung", F("account-and-verification")],
        ["Produkte und Technologien", F("products-and-technologies"), [["Allgemeine Produktfragen",F("products-and-technologies/general-product-questions")],["Acrylate",F("products-and-technologies/acrylics")],["Anaerobe Klebstoffe",F("products-and-technologies/anaerobic-adhesives")],["Cyanacrylate",F("products-and-technologies/cyanoacrylates")],["Epoxidharze",F("products-and-technologies/epoxies")],["Hybridklebstoffe",F("products-and-technologies/hybrid-adhesives")],["Lichthärtende Klebstoffe",F("products-and-technologies/light-cure-adhesives")],["Silikone",F("products-and-technologies/silicones")]]],
        ["Branchen und Anwendungen", F("industries-and-applications"), [["Lebensmittelsichere Verpackungen",F("industries-and-applications/food-safe-packaging")],["Smarte Wartung (IIoT) – Loctite Pulse",F("industries-and-applications/smart-maintenance-iiot-loctite-pulse")]]],
        ["Equipment", F("equipment"), [["Equipment-Services",F("equipment/equipment-services")],["Standard-Equipment",F("equipment/standard-equipment")]]]
      ]],
      ["Händler finden", "/de/en/support/find-a-distributor.html"],
      ["Technische Bibliothek – TDS, SDB", "/de/en/navigation/support/find-a-tds.html"],
      ["eShop-Login", "https://eshop.henkel-adhesives.com/login"],
      ["eShop-Zugang anfordern", "/de/en/c/eshop.html"]
    ]]
  ];

  var ALL = {"Produkte":"Alle Produkte","Anwendungen":"Alle Anwendungen","Services":"Alle Services","Marken":"Alle Marken","Branchen":"Alle Branchen","Wissen":"Alles Wissen","Support":"Support-Center"};
  var abs = function (u) { return /^https?:/.test(u) ? u : BASE + u; };
  var el = function (tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  var esc = function (s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); };

  // Render a level-3 (+ optional level-4/5) list
  function renderList(items) {
    var ul = el("ul", "mega__list");
    items.forEach(function (it) {
      var li = el("li");
      var a = el("a", null, esc(it[0])); a.href = abs(it[1]);
      li.appendChild(a);
      if (it[2] && it[2].length) { var sub = renderList(it[2]); sub.className = "mega__list mega__list--sub"; li.appendChild(sub); }
      ul.appendChild(li);
    });
    return ul;
  }

  function buildPanel(top) {
    var panel = el("div", "mega"); panel.hidden = true;
    var inner = el("div", "mega__inner");
    var cats = top[2];
    var twoPane = cats.some(function (c) { return c[2] && c[2].length; });

    var head = el("div", "mega__head");
    var all = el("a", "mega__all", (ALL[top[0]]||esc(top[0]))); all.href = abs(top[1]);
    head.appendChild(all);
    inner.appendChild(head);

    if (!twoPane) {
      var grid = el("ul", "mega__grid");
      cats.forEach(function (c) { var li = el("li"); var a = el("a", null, esc(c[0])); a.href = abs(c[1]); li.appendChild(a); grid.appendChild(li); });
      inner.appendChild(grid);
    } else {
      var body = el("div", "mega__body");
      var left = el("ul", "mega__cats");
      var right = el("div", "mega__detail");
      var panes = [];
      cats.forEach(function (c, i) {
        var li = el("li");
        var btn = el("a", "mega__cat", esc(c[0]) + ((c[2] && c[2].length) ? '<span class="chev" aria-hidden="true">›</span>' : ""));
        btn.href = abs(c[1]);
        li.appendChild(btn); left.appendChild(li);

        var pane = el("div", "mega__pane"); pane.hidden = true;
        var t = el("a", "mega__pane-title", esc(c[0])); t.href = abs(c[1]);
        pane.appendChild(t);
        if (c[2] && c[2].length) {
          var cols = renderList(c[2]); cols.classList.add("mega__cols"); pane.appendChild(cols);
        }
        right.appendChild(pane); panes.push({ btn: btn, pane: pane });

        var activate = function () {
          panes.forEach(function (p) { p.pane.hidden = p.pane !== pane; p.btn.classList.toggle("is-active", p.btn === btn); });
        };
        btn.addEventListener("mouseenter", activate);
        btn.addEventListener("focus", activate);
        btn.addEventListener("click", function (e) {
          if (window.matchMedia("(max-width:900px)").matches && c[2] && c[2].length) { e.preventDefault(); activate(); }
        });
        if (i === 0) { pane.hidden = false; btn.classList.add("is-active"); }
      });
      body.appendChild(left); body.appendChild(right); inner.appendChild(body);
    }
    panel.appendChild(inner);
    return panel;
  }

  function init() {
    var nav = document.getElementById("mainnav");
    if (!nav) return;
    var bar = el("ul", "nav__bar");
    var items = [];
    NAV.forEach(function (top) {
      var li = el("li", "nav__item");
      var a = el("a", "nav__link", esc(top[0]) + '<svg class="caret" viewBox="0 0 10 6" width="10" height="6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>');
      a.href = abs(top[1]); a.setAttribute("aria-haspopup", "true"); a.setAttribute("aria-expanded", "false");
      var panel = buildPanel(top);
      li.appendChild(a); li.appendChild(panel); bar.appendChild(li);
      items.push({ li: li, a: a, panel: panel });
    });
    nav.appendChild(bar);

    var timer, current = null;
    function open(it) {
      clearTimeout(timer);
      items.forEach(function (x) { var on = x === it; x.panel.hidden = !on; x.a.setAttribute("aria-expanded", on); x.li.classList.toggle("is-open", on); });
      current = it;
    }
    function closeAll() { items.forEach(function (x) { x.panel.hidden = true; x.a.setAttribute("aria-expanded", "false"); x.li.classList.remove("is-open"); }); current = null; }
    items.forEach(function (it) {
      it.li.addEventListener("mouseenter", function () { if (window.matchMedia("(min-width:901px)").matches) open(it); });
      it.li.addEventListener("mouseleave", function () { timer = setTimeout(closeAll, 120); });
      it.a.addEventListener("click", function (e) {
        if (window.matchMedia("(max-width:900px)").matches) { e.preventDefault(); current === it ? closeAll() : open(it); }
      });
      it.a.addEventListener("keydown", function (e) { if (e.key === "ArrowDown") { e.preventDefault(); open(it); } });
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeAll(); });
    document.addEventListener("click", function (e) { if (!nav.contains(e.target)) closeAll(); });
  }
  document.addEventListener("DOMContentLoaded", init);
})();
