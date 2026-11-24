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
    ["Products", P("industrial-root-producttype"), [
      pt("Compounds for electronics", "8", [pt("Conformal coatings","8.8"),pt("Encapsulants","8.2"),pt("Glob top materials","8.4"),pt("Injection molding compounds","8.6"),pt("Potting compounds","8.7"),pt("Underfills","8.9")]),
      pt("Equipment", "6", [
        pt("Automated robotic systems","6.8",[pt("Robot parts and accessories","6.8.5"),pt("Robot systems","6.8.6")]),
        pt("Consumables and supplies","6.7",[pt("Dispensing needles and tips","6.7.1"),pt("Mixing nozzles","6.7.2"),pt("Tubing, fittings and other accessories","6.7.4")]),
        pt("Dispense systems","6.1",[pt("Anaerobic dispense systems","6.1.1"),pt("Bottle dispense systems","6.1.3"),pt("Cartridge adapters and accessories","6.1.14"),
          pt("Cartridge dispensing systems","6.1.4",[pt("Dual cartridge dispensing systems","6.1.4.1"),pt("Single cartridge dispense systems","6.1.4.2")]),
          pt("Controllers, reservoirs and dispense valves","6.1.16",[pt("Controllers and dispense reservoirs","6.1.16.1"),pt("Dispense valves","6.1.16.2")]),
          pt("Parts and accessories for dispense systems","6.1.12"),pt("Process control and monitoring systems for dispense systems","6.1.7"),pt("Syringe dispense systems","6.1.8"),pt("Volumetric dispensing systems","6.1.10")]),
        pt("Light curing systems","6.2",[
          pt("LED light curing systems","6.2.1",[pt("LED flood curing systems","6.2.1.1"),pt("LED spot curing and handheld systems","6.2.1.3")]),
          pt("Parts and accessories for light curing systems","6.2.4"),pt("Process control and monitoring systems for light curing systems","6.2.3"),pt("UV and visible light curing systems","6.2.2")])]),
      pt("Industrial adhesives", "1", [pt("Adhesive accelerators","1.25"),pt("Adhesive activators","1.24"),pt("Adhesive primers","1.23"),pt("Contact adhesives","1.21"),pt("Electrically conductive adhesives","1.1"),pt("Electrically non-conductive adhesives","1.6"),pt("Hot melt adhesives","1.4"),pt("Industrial adhesive tapes","1.20"),pt("Instant adhesives","1.5"),pt("Light curing adhesives","1.15"),pt("Pressure sensitive adhesives","1.7"),pt("Retaining compounds","1.9"),pt("Structural adhesives","1.11"),pt("Surface mount adhesives","1.12"),pt("Threadlockers","1.13"),pt("Water based adhesives","1.16"),pt("Windshield adhesives","1.17")]),
      pt("Industrial cleaners", "2", [pt("Electrical cleaners","2.3"),pt("General industrial cleaners","2.4"),pt("Hand cleaners","2.8"),pt("Hot melt cleaners","2.2"),
        pt("Industrial cleaners for surface treatments","2.10",[pt("Maintenance cleaners","2.10.7")]),
        pt("Industrial degreasers","2.1",[pt("Industrial degreasers for adhesives","2.1.1")]),
        pt("Metal process cleaners","2.6"),pt("Mold release cleaners","2.7"),pt("Rust preventatives","2.9")]),
      pt("Industrial coatings", "3", [pt("Body fillers","3.13"),pt("Corrosion protectors","3.14"),pt("Floor coatings","3.5"),pt("Industrial inks and coatings","3.6"),pt("Mold release agents","3.7"),pt("Protective coatings","3.10"),pt("Sound dampers","3.15"),pt("Wear resistant coatings","3.12")]),
      pt("Industrial lubricants", "7", [pt("Anti-seize lubricants","7.1"),pt("Machining lubricants","7.4"),
        pt("Metal forming lubricants","7.2",[
          pt("Casting lubricants","7.2.2",[pt("High pressure casting lubricants","7.2.2.1"),pt("Low pressure casting lubricants","7.2.2.2")]),
          pt("Forging lubricants","7.2.1",[pt("Forging ferrous lubricants","7.2.1.1")])]),
        pt("Petroleum based greases","7.6"),pt("Specialty oils and lubricants","7.7"),pt("Synthetic lubricants","7.8")]),
      pt("Industrial repair materials", "9", [pt("Grout materials","9.2"),pt("Metal rebuilding materials","9.4"),pt("O-ring repair materials","9.5"),pt("Pipe repair materials","9.6")]),
      pt("Industrial sealants", "10", [pt("Flexible sealants","10.1"),pt("Floor sealants","10.2"),pt("Gasketing sealants","10.3"),pt("Mold release sealants","10.4"),pt("Noise, vibration and harshness (NVH) sealants","10.9"),pt("Specialty sealants","10.10"),pt("Thread sealants","10.7")]),
      pt("Surface treatments", "12", [pt("Autodeposition coatings","12.9"),
        pt("Conversion coatings","12.1",[pt("Chrome-free conversion coatings","12.1.1")]),
        pt("Corrosion inhibitors","12.6"),pt("Industrial degreasers for surface treatments","12.14"),pt("Industrial pretreatment conditioners","12.4"),pt("Paint strippers","12.7"),pt("Polishing compounds","12.8")]),
      pt("Thermal management materials", "13", [pt("Phase change materials","13.1"),pt("Thermal GAP PAD Materials","13.6"),pt("Thermal gap fillers","13.5"),pt("Thermally conductive adhesives","13.7")])
    ]],

    ["Applications", "/de/en/applications.html", [
      ["Assembly automation", A("equipment"), [["Automated robotic systems",A("equipment/automated-robotic-systems")],["Consumables and supplies",A("equipment/consumables-and-supplies")],["Dispense systems",A("equipment/dispense-systems")],["Light-curing systems",A("equipment/light-curing-systems")]]],
      ["Collision repair solutions", A("collision-repair-solutions")],
      ["Electronic component bonding solutions", A("electronic-component-bonding-solutions"), [["Assembly films",A("electronic-component-bonding-solutions/assembly-films")],["Electrically conductive adhesives",A("electronic-component-bonding-solutions/electrically-conductive-adhesives")],["Non-conductive adhesives",A("electronic-component-bonding-solutions/non-conductive-adhesives")]]],
      ["Electronic component protection solutions", A("electronic-component-protection-solutions"), [["Board-level encapsulants",A("electronic-component-protection-solutions/board-level-encapsulants")],["Conformal coatings",A("electronic-component-protection-solutions/conformal-coatings")],["Low pressure molding",A("electronic-component-protection-solutions/low-pressure-molding")],["Potting compounds",A("electronic-component-protection-solutions/potting-compounds")],["Underfills",A("electronic-component-protection-solutions/underfills")]]],
      ["Gasketing", A("gasketing")],
      ["Instant component bonding", A("instant-component-bonding")],
      ["Metal processing solutions", A("metal-processing-solutions")],
      ["Packaging solutions", A("packaging-solutions")],
      ["Printed electronics material solutions", A("printed-electronics-material-solutions")],
      ["Retaining", A("retaining-compounds")],
      ["Smart maintenance (IIoT)", A("smart-maintenance-iiot"), [["LOCTITE® Pulse rotating equipment",A("smart-maintenance-iiot/loctite-pulse-rotating-equipment")],["LOCTITE® Pulse Smart Flange","/de/en/navigation/applications/smart-maintenance-iiot/loctite-pulse-smart-flange.html"],["LOCTITE® Pulse Smart Steam Trap",A("smart-maintenance-iiot/loctite-pulse-smart-steam-trap")]]],
      ["Structural bonding solutions", A("structural-bonding-solutions")],
      ["Thermal management", A("thermal-management-materials"), [["Thermal GAP PAD® materials",A("thermal-management-materials/thermal-gap-pad-materials")],["Thermal gap fillers",A("thermal-management-materials/thermal-gap-fillers")],["Thermal gels",A("thermal-management-materials/thermal-gel")],["Thermal SIL PAD® materials",A("thermal-management-materials/thermal-sil-pad-materials")],["Phase change materials",A("thermal-management-materials/phase-change-materials")],["Thermally conductive grease",A("thermal-management-materials/thermally-conductive-grease")],["Thermally conductive adhesives",A("thermal-management-materials/thermally-conductive-adhesives")]]],
      ["Threadlocking", A("threadlockers")],
      ["Thread sealing", A("thread-sealing")],
      ["Wear prevention", A("wear-prevention")],
      ["Windscreen replacement solutions", A("windscreen-bonding-solutions")],
      ["Wirebond semiconductor packaging", A("wirebond-semiconductor-packaging"), [["Die attach film",A("wirebond-semiconductor-packaging/die-attach-film")],["Die attach paste",A("wirebond-semiconductor-packaging/die-attach-paste")],["Printable B-stage die attach adhesives",A("wirebond-semiconductor-packaging/printable-b-stage-die-attach-adhesives")]]],
      ["Advanced semiconductor packaging", A("advanced-semiconductor-packaging"), [["Lid and stiffener attach adhesives",A("advanced-semiconductor-packaging/lid-and-stiffener-attach-adhesives")],["EMI shielding",A("advanced-semiconductor-packaging/emi-shielding")],["Liquid compression molding solutions",A("advanced-semiconductor-packaging/liquid-compression-molding-solutions")]]]
    ]],

    ["Services", "/de/en/services.html", [
      ["Engineering services", S("engineering"), [["Finite element analysis",S("engineering/finite-element-analysis")],["Material testing and analytics",S("engineering/material-testing-and-analytical-services")],["Packaging recyclab",S("engineering/packaging-recyclab")]]],
      ["IoT services", S("iot"), [["BONDERITE® LineguardX services",S("iot/bonderite-lineguardx")]]],
      ["Machine and equipment services", S("equipment-services"), [
        ["LOCTITE® equipment services", S("equipment-services/loctite"), [["Equipment trade-ins",S("equipment-services/loctite/equipment-trade-ins")],["Factory repair",S("equipment-services/loctite/factory-repair")],["Field service",S("equipment-services/loctite/field-services")]]],
        ["SONDERHOFF machine services", S("equipment-services/sonderhoff-machine-services")]]],
      ["Manufacturing and maintenance services", S("manufacturing-and-maintenance-services"), [["Maintenance reliability services",S("manufacturing-and-maintenance-services/maintenance-reliability")],["Product design and manufacturing services",S("manufacturing-and-maintenance-services/product-design-and-manufacturing")],["SONDERHOFF contract manufacturing",S("manufacturing-and-maintenance-services/sonderhoff-contract-manufacturing")]]]
    ]],

    ["Brands", "/de/en/our-brands.html", [
      ["AQUENCE®",B("aquence")],["BONDERITE®",B("bonderite")],["LOCTITE®",B("loctite")],["TECHNOMELT®",B("technomelt")],["TEROSON®",B("teroson")]
    ]],

    ["Industries", "/de/en/industries.html", [
      ["Aerospace", I("aerospace"), [["Aerospace MRO",I("aerospace/aerospace-maintenance-repair-overhaul")],["Aviation",I("aerospace/aviation")],["Space",I("aerospace/space")],["Urban air mobility",I("aerospace/urban-air-mobility")]]],
      ["Automotive", I("automotive"), [["Automotive electronics",I("automotive/automotive-electronics")],["Automotive interior and exterior",I("automotive/automotive-interior-and-exterior")],["Automotive vehicle body",I("automotive/automotive-vehicle-body")],["E-mobility",I("automotive/e-mobility")],["Powertrain and chassis",I("automotive/powertrain-and-chassis")]]],
      ["Automotive aftermarket", I("automotive-aftermarket")],
      ["Building and construction components", I("building-construction-components"), [["Building components",I("building-construction-components/building-components")],["Engineered wood",I("building-construction-components/engineered-wood")]]],
      ["Consumer electronics", I("consumer-electronics"), [["Cameras, sensors and modules",I("consumer-electronics/cameras-sensors-and-modules")],["Mobile devices",I("consumer-electronics/mobile-devices")],["Smart home devices",I("consumer-electronics/smart-home-devices")],["Storage and processors",I("consumer-electronics/storage-and-processors")],["Wearable devices",I("consumer-electronics/wearable-devices")]]],
      ["Data and telecommunications", I("data-and-telecommunications"), [["Broadband connectivity",I("data-and-telecommunications/broadband-connectivity")],["Data centre",I("data-and-telecommunications/data-center")],["Optical",I("data-and-telecommunications/optical")]]],
      ["Furniture and interiors", I("furniture-interiors")],
      ["Industrial manufacturing", I("industrial-manufacturing"), [["Filtration",I("industrial-manufacturing/filtration")],["Home appliances",I("industrial-manufacturing/home-appliances")],["Heavy equipment",I("industrial-manufacturing/heavy-equipment")]]],
      ["Maintenance and repair", I("industrial-maintenance-repair")],
      ["Medical", I("medical"), [["Medical disposables",I("medical/medical-disposables")],["Medical equipment",I("medical/medical-equipment")],["Medical filtration",I("medical/medical-filtration")],["Medical wearables",I("medical/medical-wearables")]]],
      ["Metals", I("metals"), [["Aluminium coil",I("metals/aluminum-coil")],["Aluminium components",I("metals/aluminum-components")],["Stainless steel coil",I("metals/stainless-steel-coil")],["Steel coil",I("metals/steel-coil")],["Steel components",I("metals/steel-components")]]],
      ["Packaging and converting", I("packaging-and-converting"), [["Consumer goods packaging",I("packaging-and-converting/consumer-goods-packaging")],["E-commerce",I("packaging-and-converting/e-commerce")],["Flexible packaging",I("packaging-and-converting/flexible-packaging")],["Metal packaging",I("packaging-and-converting/metal-packaging")],["Paper solutions",I("packaging-and-converting/paper-solutions")],["Tapes, labels and self-adhesive graphic films",I("packaging-and-converting/tapes-labels-self-adhesive-graphic-films")],["Packaging coatings",I("packaging-and-converting/packaging-coatings")]]],
      ["Personal hygiene", I("personal-hygiene"), [["Adult incontinence",I("personal-hygiene/adult-incontinence")],["Baby nappies",I("personal-hygiene/baby-diapers")],["Feminine care",I("personal-hygiene/feminine-care")],["Medical protective wear",I("personal-hygiene/medical-protective-wear")],["Tissues and towels",I("personal-hygiene/tissues-and-towels")]]],
      ["Power", I("power"), [["Alternative energy conversion and storage",I("power/alternative-energy-conversion-and-storage")],["EV charging infrastructure",I("power/ev-charging-infrastructure")],["Hydrogen solutions",I("power/hydrogen-solutions")],["Power supplies",I("power/power-supplies")],["Solar",I("power/solar")],["Wind",I("power/wind")]]],
      ["Semiconductor", I("semiconductor"), [["Semiconductor packaging",I("semiconductor/semiconductor-packaging")],["Semiconductors for data center",I("semiconductor/semiconductors-for-data-center")],["Semiconductors for telecom",I("semiconductor/semiconductors-for-telecom")],["Semiconductors for automotive",I("semiconductor/semiconductors-for-automotive")]]],
      ["Sports & fashion", I("sports-and-fashion"), [["Formal shoes",I("sports-and-fashion/dress-shoes")],["Fashion",I("sports-and-fashion/fashion")],["Sports shoes",I("sports-and-fashion/sports-shoes")]]],
      ["Transportation", I("transportation"), [["Mass transit",I("transportation/mass-transit")],["Speciality vehicles",I("transportation/specialty-vehicles")]]],
      ["Humanoid robotics", I("humanoid-robotics")]
    ]],

    ["Knowledge", "/de/en/knowledge.html", [
      ["LOCTITE®XPLORE | E-learning", K("elearning/loctite-xplore-landing-page")],
      ["In-Person Learning", K("in-person-learning")],
      ["Resource centre", "/de/en/navigation/knowledge/insights.html", [["Articles","/de/en/navigation/knowledge/insights/articles.html"],["Brochures","/de/en/navigation/knowledge/insights/brochures.html"],["Case studies","/de/en/navigation/knowledge/insights/case-studies.html"],["eBooks","/de/en/navigation/knowledge/insights/ebooks.html"],["Webinars","/de/en/navigation/knowledge/insights/webinars.html"],["White papers","/de/en/navigation/knowledge/insights/white-paper.html"]]],
      ["Global Innovation Centers", K("global-innovation-centers")]
    ]],

    ["Support", "/de/en/support.html", [
      ["Contact us", "/de/en/support.html", [["Product info and documentation","/de/en/support/product-info.html"],["Technical support","/de/en/support/technical-support.html"],["Regulatory enquiry","/de/en/support/regulatory-inquiry.html"],["Equipment services support","/de/en/support/equipment-services-support.html"],["General enquiry","/de/en/support/general-inquiry.html"]]],
      ["FAQs", F("").replace("faqs/.html","faqs.html"), [
        ["Find what you need", F("find-what-you-need"), [["Finding product documents",F("find-what-you-need/finding-product-documents")],["Support",F("find-what-you-need/support")],["eLearning",F("find-what-you-need/elearning")]]],
        ["Regulatory", F("regulatory")],["How to buy", F("how-to-buy")],["Account and verification", F("account-and-verification")],
        ["Products and technologies", F("products-and-technologies"), [["General product questions",F("products-and-technologies/general-product-questions")],["Acrylics",F("products-and-technologies/acrylics")],["Anaerobic adhesives",F("products-and-technologies/anaerobic-adhesives")],["Cyanoacrylates",F("products-and-technologies/cyanoacrylates")],["Epoxies",F("products-and-technologies/epoxies")],["Hybrid adhesives",F("products-and-technologies/hybrid-adhesives")],["Light-cure adhesives",F("products-and-technologies/light-cure-adhesives")],["Silicones",F("products-and-technologies/silicones")]]],
        ["Industries and applications", F("industries-and-applications"), [["Food-safe packaging",F("industries-and-applications/food-safe-packaging")],["Smart maintenance (IIoT) - Loctite Pulse",F("industries-and-applications/smart-maintenance-iiot-loctite-pulse")]]],
        ["Equipment", F("equipment"), [["Equipment services",F("equipment/equipment-services")],["Standard equipment",F("equipment/standard-equipment")]]]
      ]],
      ["Find a distributor", "/de/en/support/find-a-distributor.html"],
      ["Technical library – TDS, SDS", "/de/en/navigation/support/find-a-tds.html"],
      ["eShop login", "https://eshop.henkel-adhesives.com/login"],
      ["eShop access request", "/de/en/c/eshop.html"]
    ]]
  ];

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
    var all = el("a", "mega__all", "All " + esc(top[0].toLowerCase())); all.href = abs(top[1]);
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
