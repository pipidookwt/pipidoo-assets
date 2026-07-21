(function () {
  // ============================================================
  // CONFIG — edit these values
  // ============================================================
  var PRODUCT_ID = 849737063;      // Ecwid product ID for "Pipidoo Custom Box"
  var MIN_ITEMS = 4;
  var MAX_ITEMS = 5;

  // --- Pricing formula (matches your "ready-made boxes" pricing sheet exactly) ---
  // finalPrice = ROUND_UP_TO_.900( totalCost / (1 - ADS_PCT - MARGIN_PCT) / (1 - DISCOUNT_PCT) )
  var ADS_PCT = 0.15;               // Ads Manager %
  var MARGIN_PCT = 0.59;            // Net profit margin % — same as ready-made boxes
  var DISCOUNT_PCT = 0.10;          // Future discount buffer %
  var PACKAGING_COST = 1.150;       // KWD — real cost of outer box + ribbon/card/filler (no shipping, no payment fee)
  var PRICE_DIVISOR = (1 - ADS_PCT - MARGIN_PCT) * (1 - DISCOUNT_PCT); // = 0.234

  // --- Personalization (Step 3) ---
  // IDs below must match the "id" field of items in the ITEMS array further down.
  var PERSONALIZABLE_IDS = ["babyShoes", "pacifierHolder", "hairBrush", "braceletBoard"];
  var PERSONALIZATION_FEE = 2.000; // KWD — one flat fee per box, not per item, added after rounding
  var MAX_NAME_LENGTH = 10;

  // ============================================================
  // EDIT YOUR ITEMS HERE
  // Add/remove/edit entries in this array. Each item needs:
  //   id            — unique short code (letters/numbers, no spaces)
  //   name          — item name shown to customer
  //   cost          — YOUR raw purchase cost in KWD (NOT the sale price — sale price
  //                   is calculated automatically from cost using the formula above)
  //   imgBoy        — image URL for boy color variant
  //   imgGirl       — image URL for girl color variant
  // ============================================================
  var ITEMS = [
    // --- Items with real Boy/Girl color pairs (confirm pairing is correct, then just replace image URLs) ---
    { id: "nailTrimmer",   name: "Electric Nail Trimmer",         costBoy: 1.310, costGirl: 1.310, imgBoy: "https://via.placeholder.com/150/9EC5E0/fff?text=Nail+Trimmer", imgGirl: "https://via.placeholder.com/150/F2B6C6/fff?text=Nail+Trimmer" },
    { id: "bottleBrush",   name: "Portable Baby Bottle Brush Set", costBoy: 5.730, costGirl: 5.860, imgBoy: "https://via.placeholder.com/150/9EC5E0/fff?text=Bottle+Brush", imgGirl: "https://via.placeholder.com/150/F2B6C6/fff?text=Bottle+Brush" },
    { id: "toothBrush",    name: "ToothBrush Set",                 costBoy: 0.930, costGirl: 0.930, imgBoy: "https://via.placeholder.com/150/8FBF7F/fff?text=ToothBrush", imgGirl: "https://via.placeholder.com/150/C79FE0/fff?text=ToothBrush" },
    { id: "woodPlate",     name: "Cloud Wood Plate Set",           costBoy: 5.600, costGirl: 5.600, imgBoy: "https://via.placeholder.com/150/EEEEEE/333?text=Wood+Plate", imgGirl: "https://via.placeholder.com/150/F2B6C6/fff?text=Wood+Plate" },
    { id: "pacifierHolder",name: "Star Pacifier Holder",           costBoy: 1.060, costGirl: 1.060, imgBoy: "https://via.placeholder.com/150/9EC5E0/fff?text=Pacifier+Holder", imgGirl: "https://via.placeholder.com/150/D8B6F2/fff?text=Pacifier+Holder" },
    { id: "pacifierCase",  name: "Bear Pacifier Case",             costBoy: 0.502, costGirl: 0.502, imgBoy: "https://via.placeholder.com/150/AAAAAA/fff?text=Pacifier+Case", imgGirl: "https://via.placeholder.com/150/F7C6D9/fff?text=Pacifier+Case" },
    { id: "diaperBags",    name: "Waterproof Diaper Bags (3pcs)",  costBoy: 1.390, costGirl: 1.390, imgBoy: "https://via.placeholder.com/150/9EC5E0/fff?text=Diaper+Bags+Lion", imgGirl: "https://via.placeholder.com/150/F2B6C6/fff?text=Diaper+Bags+Rainbow" },

    // --- Single / neutral items (same image both genders until you add gender-specific photos) ---
    { id: "perfume1",      name: "Pipidoo Perfume - Type 1",       costBoy: 0.01995, costGirl: 0.01995, imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Perfume+1", imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Perfume+1" },
    { id: "perfume2",      name: "Pipidoo Perfume - Type 2",       costBoy: 0.02325, costGirl: 0.02325, imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Perfume+2", imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Perfume+2" },
    { id: "balloonAge",    name: "Balloon Age Photography Set",    costBoy: 1.310, costGirl: 1.310, imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Balloon+Age", imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Balloon+Age" },
    { id: "roundAge",      name: "Round Age Photography Set",      costBoy: 4.560, costGirl: 4.560, imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Round+Age", imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Round+Age" },
    { id: "braceletBoard", name: "Hospital Bracelet Board",        costBoy: 0.680, costGirl: 0.680, imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Bracelet+Board", imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Bracelet+Board" },
    { id: "shoeLettersW",  name: "Letters for Shoes - White",      costBoy: 0.400, costGirl: 0.400, imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Shoe+Letters+W", imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Shoe+Letters+W" },
    { id: "shoeLettersC",  name: "Letters for Shoes - Colors",     costBoy: 0.990, costGirl: 0.990, imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Shoe+Letters+C", imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Shoe+Letters+C" },
    { id: "medicineNeedle",name: "Medicine Needle",                costBoy: 0.950, costGirl: 0.950, imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Medicine+Needle", imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Medicine+Needle" },
    { id: "rabbitRattle",  name: "Rabbit Comfort Rattle",          costBoy: 0.900, costGirl: 0.900, imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Rabbit+Rattle", imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Rabbit+Rattle" },
    { id: "messageBoard",  name: "Message Board",                  costBoy: 1.830, costGirl: 1.830, imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Message+Board", imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Message+Board" },
    { id: "acrylicFrame",  name: "Acrylic Frame",                  costBoy: 1.520, costGirl: 1.520, imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Acrylic+Frame", imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Acrylic+Frame" },
    { id: "cloudTeether",  name: "Cloud Teether",                  costBoy: 1.670, costGirl: 1.670, imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Cloud+Teether", imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Cloud+Teether" },
    { id: "babyShoes",     name: "Baby Shoes",                     costBoy: 1.457, costGirl: 1.457, imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Baby+Shoes", imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Baby+Shoes" },
    { id: "perfumeRoller", name: "Perfume Roller",                 costBoy: 0.106, costGirl: 0.106, imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Perfume+Roller", imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Perfume+Roller" },
    { id: "hairBrush",     name: "HairBrush Wood",                 costBoy: 0.502, costGirl: 0.502, imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=HairBrush", imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=HairBrush" },
    { id: "heartMug",      name: "Clear Heart Shape Mug",          costBoy: 1.100, costGirl: 1.100, imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Heart+Mug", imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Heart+Mug" },
    { id: "mirror",        name: "Mirror",                         costBoy: 0.900, costGirl: 0.900, imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Mirror", imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Mirror" },
    { id: "earrings",      name: "Earrings",                       costBoy: 0.02875, costGirl: 0.02875, imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Earrings", imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Earrings" }
  ];
  // ============================================================
  // END OF EDITABLE SECTION — no need to touch anything below
  // ============================================================

  var state = { gender: null, selectedItems: [], personalizationName: "" };

  var root = document.getElementById("pipidoo-box-builder");
  if (!root) return; // safety: do nothing on pages that don't contain this widget
  var genderCards = root.querySelectorAll(".pbb-gender-card");
  var toStep2Btn = document.getElementById("pbb-to-step-2");
  var backBtn = document.getElementById("pbb-back-to-1");
  var addToCartBtn = document.getElementById("pbb-add-to-cart");
  var itemsGrid = document.getElementById("pbb-items-grid");
  var previewBox = document.getElementById("pbb-preview-box");
  var counterEl = document.getElementById("pbb-counter");
  var itemsLineEl = document.getElementById("pbb-items-line");
  var feeDisplayEl = document.getElementById("pbb-fee-display");
  var totalDisplayEl = document.getElementById("pbb-total-display");
  var msgEl = document.getElementById("pbb-msg");
  var stepIndicators = root.querySelectorAll(".pbb-step");
  var stepIndicator3 = document.getElementById("pbb-step-indicator-3");
  var stepLine3 = document.getElementById("pbb-step-line-3");

  // Step 3 elements
  var nameInput = document.getElementById("pbb-name-input");
  var nameCharCount = document.getElementById("pbb-name-char-count");
  var personalizeItemsNote = document.getElementById("pbb-personalize-items-note");
  var feeDisplay3 = document.getElementById("pbb-fee-display-3");
  var itemsLine3 = document.getElementById("pbb-items-line-3");
  var personalizeFeeLine = document.getElementById("pbb-personalize-fee-line");
  var personalizeFeeLineAmount = document.getElementById("pbb-personalize-fee-line-amount");
  var totalDisplay3 = document.getElementById("pbb-total-display-3");
  var msgEl3 = document.getElementById("pbb-msg-3");
  var backTo2Btn = document.getElementById("pbb-back-to-2");
  var finalAddToCartBtn = document.getElementById("pbb-final-add-to-cart");

  function fmt(n) { return n.toFixed(3) + " KWD"; }

  // Cost for the currently selected gender
  function itemCost(item) {
    return state.gender === "boy" ? item.costBoy : item.costGirl;
  }

  // Display price for a single item, independently rounded UP to the nearest
  // "N.900" tier — same convention as your individual items sheet. This is the
  // price that actually gets summed into the total, so what the customer sees
  // per item always matches the total exactly (no surprise gap at checkout).
  function itemDisplayPrice(item) {
    return roundUpTo900(itemCost(item) / PRICE_DIVISOR);
  }

  // Packaging price, same rounding rule, computed once (cost never changes)
  var PACKAGING_PRICE = roundUpTo900(PACKAGING_COST / PRICE_DIVISOR);

  // Rounds UP to the nearest "N.900" tier, matching your pricing sheet's rounding
  // (e.g. 0.05 -> 0.900, 3.23 -> 3.900, 23.84 -> 23.900). Values already <= 0.900
  // round to 0.900 (your minimum listed price).
  function roundUpTo900(x) {
    var y = x - 0.9;
    var tier = y <= 0 ? 0 : Math.ceil(y - 1e-9); // tiny epsilon guards float rounding
    return tier + 0.9;
  }

  // --- Step 1: gender selection ---
  genderCards.forEach(function (card) {
    card.addEventListener("click", function () {
      genderCards.forEach(function (c) { c.classList.remove("selected"); });
      card.classList.add("selected");
      state.gender = card.getAttribute("data-gender");
      toStep2Btn.disabled = false;
    });
  });

  toStep2Btn.addEventListener("click", function () {
    goToStep(2);
    renderItemsGrid();
    renderPreview();
  });

  backBtn.addEventListener("click", function () { goToStep(1); });

  function goToStep(stepNum) {
    document.getElementById("pbb-step-1").style.display = stepNum === 1 ? "" : "none";
    document.getElementById("pbb-step-2").style.display = stepNum === 2 ? "" : "none";
    document.getElementById("pbb-step-3").style.display = stepNum === 3 ? "" : "none";
    stepIndicators.forEach(function (s) {
      s.classList.toggle("active", parseInt(s.getAttribute("data-step"), 10) <= stepNum);
    });
  }

  function hasPersonalizableSelected() {
    return state.selectedItems.some(function (i) { return PERSONALIZABLE_IDS.indexOf(i.id) > -1; });
  }

  // --- Step 2: items grid ---
  function renderItemsGrid() {
    itemsGrid.innerHTML = "";
    ITEMS.forEach(function (item) {
      var img = state.gender === "boy" ? item.imgBoy : item.imgGirl;
      var card = document.createElement("div");
      card.className = "pbb-item-card";
      card.setAttribute("data-id", item.id);
      card.innerHTML =
        '<img src="' + img + '" alt="' + item.name + '">' +
        '<span class="pbb-item-name">' + item.name + '</span>' +
        '<span class="pbb-item-price">' + fmt(itemDisplayPrice(item)) + '</span>';
      card.addEventListener("click", function () { toggleItem(item); });
      itemsGrid.appendChild(card);
    });
    syncItemCardStates();
  }

  function toggleItem(item) {
    var idx = state.selectedItems.findIndex(function (i) { return i.id === item.id; });
    if (idx > -1) {
      state.selectedItems.splice(idx, 1);
    } else {
      if (state.selectedItems.length >= MAX_ITEMS) return;
      state.selectedItems.push(item);
    }
    syncItemCardStates();
    renderPreview();
    renderSummary();
  }

  function syncItemCardStates() {
    var cards = itemsGrid.querySelectorAll(".pbb-item-card");
    cards.forEach(function (card) {
      var id = card.getAttribute("data-id");
      var isSelected = state.selectedItems.some(function (i) { return i.id === id; });
      card.classList.toggle("selected", isSelected);
      var atMax = state.selectedItems.length >= MAX_ITEMS;
      card.classList.toggle("disabled", atMax && !isSelected);
    });
    counterEl.textContent = state.selectedItems.length + " / " + MAX_ITEMS + " selected (min " + MIN_ITEMS + ")";
    renderSummary();
  }

  // --- Live box preview ---
  function renderPreview() {
    previewBox.innerHTML = "";
    if (state.selectedItems.length === 0) {
      previewBox.innerHTML = '<div class="pbb-preview-placeholder">Your box will appear here</div>';
      return;
    }
    state.selectedItems.forEach(function (item) {
      var img = state.gender === "boy" ? item.imgBoy : item.imgGirl;
      var thumb = document.createElement("div");
      thumb.className = "pbb-preview-item";
      thumb.innerHTML = '<img src="' + img + '" alt="' + item.name + '">';
      previewBox.appendChild(thumb);
    });
  }

  // --- Summary + validation ---
  function renderSummary() {
    var itemsSum = state.selectedItems.reduce(function (sum, i) { return sum + itemDisplayPrice(i); }, 0);
    var total = itemsSum + PACKAGING_PRICE;

    itemsLineEl.innerHTML = "<span>" + state.selectedItems.length + " item" + (state.selectedItems.length === 1 ? "" : "s") + " selected</span><span>" + fmt(itemsSum) + "</span>";
    feeDisplayEl.textContent = fmt(PACKAGING_PRICE);
    totalDisplayEl.textContent = fmt(total);

    if (state.selectedItems.length < MIN_ITEMS) {
      msgEl.textContent = "Select at least " + MIN_ITEMS + " items to continue (" + state.selectedItems.length + "/" + MIN_ITEMS + ").";
      addToCartBtn.disabled = true;
    } else if (state.selectedItems.length >= MAX_ITEMS) {
      msgEl.textContent = "Remove an item to add another.";
      addToCartBtn.disabled = false;
    } else {
      msgEl.textContent = "";
      addToCartBtn.disabled = false;
    }

    // Toggle Step 2 button between "Next" (goes to personalization) and "Add to Cart" (direct)
    if (hasPersonalizableSelected()) {
      addToCartBtn.textContent = "Next";
      stepIndicator3.style.display = "";
      stepLine3.style.display = "";
    } else {
      addToCartBtn.textContent = "Add to Cart";
      stepIndicator3.style.display = "none";
      stepLine3.style.display = "none";
    }
  }

  // --- Step 2 button: either go to Step 3 (personalization) or add to cart directly ---
  addToCartBtn.addEventListener("click", function () {
    if (state.selectedItems.length < MIN_ITEMS) return;

    if (hasPersonalizableSelected()) {
      goToStep(3);
      renderStep3();
    } else {
      performAddToCart(addToCartBtn, msgEl, "");
    }
  });

  // --- Step 3: personalization ---
  backTo2Btn.addEventListener("click", function () { goToStep(2); });

  nameInput.addEventListener("input", function () {
    // Hard trim to MAX_NAME_LENGTH in case of paste
    if (nameInput.value.length > MAX_NAME_LENGTH) {
      nameInput.value = nameInput.value.slice(0, MAX_NAME_LENGTH);
    }
    state.personalizationName = nameInput.value.trim();
    nameCharCount.textContent = nameInput.value.length;
    renderStep3Summary();
  });

  function renderStep3() {
    var personalizedItemNames = state.selectedItems
      .filter(function (i) { return PERSONALIZABLE_IDS.indexOf(i.id) > -1; })
      .map(function (i) { return i.name; });
    personalizeItemsNote.textContent = "You selected: " + personalizedItemNames.join(", ") + ". Add a name to personalize them.";
    renderStep3Summary();
  }

  function renderStep3Summary() {
    var itemsSum = state.selectedItems.reduce(function (sum, i) { return sum + itemDisplayPrice(i); }, 0);
    var hasName = state.personalizationName.length > 0;
    var boxTotal = itemsSum + PACKAGING_PRICE;
    var total = boxTotal + (hasName ? PERSONALIZATION_FEE : 0);

    feeDisplay3.textContent = fmt(PACKAGING_PRICE);
    itemsLine3.innerHTML = "<span>" + state.selectedItems.length + " item" + (state.selectedItems.length === 1 ? "" : "s") + " selected</span><span>" + fmt(itemsSum) + "</span>";

    if (hasName) {
      personalizeFeeLine.style.display = "";
      personalizeFeeLineAmount.textContent = fmt(PERSONALIZATION_FEE);
    } else {
      personalizeFeeLine.style.display = "none";
    }
    totalDisplay3.textContent = fmt(total);
  }

  finalAddToCartBtn.addEventListener("click", function () {
    performAddToCart(finalAddToCartBtn, msgEl3, state.personalizationName);
  });

  // --- Shared: Add to cart via Ecwid JS API ---
  function performAddToCart(btnEl, msgTarget, personalizationName) {
    var itemsSum = state.selectedItems.reduce(function (sum, i) { return sum + itemDisplayPrice(i); }, 0);
    var hasName = personalizationName && personalizationName.length > 0;
    var boxTotal = itemsSum + PACKAGING_PRICE;
    var total = boxTotal + (hasName ? PERSONALIZATION_FEE : 0);
    var itemNames = state.selectedItems.map(function (i) { return i.name; }).join(", ");
    var genderLabel = state.gender === "boy" ? "Boy" : "Girl";

    var originalLabel = btnEl.textContent;
    btnEl.disabled = true;
    btnEl.textContent = "Adding...";

    var options = {
      "Gender": genderLabel,
      "Selected Items": itemNames
    };
    // IMPORTANT: "Personalization Name" must be defined as a Text Field product
    // option on the "Pipidoo Custom Box" product in the Ecwid dashboard first,
    // otherwise Ecwid will silently ignore it.
    if (hasName) {
      options["Personalization Name"] = personalizationName;
    }

    Ecwid.Cart.addProduct({
      id: PRODUCT_ID,
      quantity: 1,
      selectedPrice: total,
      options: options,
      callback: function (success) {
        btnEl.textContent = originalLabel;
        btnEl.disabled = false;
        if (success) {
          msgTarget.style.color = "#4caf50";
          msgTarget.textContent = "Added to cart!";
        } else {
          msgTarget.style.color = "#d9534f";
          msgTarget.textContent = "Something went wrong. Please try again.";
        }
      }
    });
  }
})();
