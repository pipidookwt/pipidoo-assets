!function() {
  var e = [ "babyShoes", "pacifierHolder", "hairBrush", "braceletBoard" ], t = [ {
    id: "nailTrimmer",
    name: "Electric Nail Trimmer",
    costBoy: 1.31,
    costGirl: 1.31,
    imgBoy: "https://via.placeholder.com/150/9EC5E0/fff?text=Nail+Trimmer",
    imgGirl: "https://via.placeholder.com/150/F2B6C6/fff?text=Nail+Trimmer"
  }, {
    id: "bottleBrush",
    name: "Portable Baby Bottle Brush Set",
    costBoy: 5.73,
    costGirl: 5.86,
    imgBoy: "https://via.placeholder.com/150/9EC5E0/fff?text=Bottle+Brush",
    imgGirl: "https://via.placeholder.com/150/F2B6C6/fff?text=Bottle+Brush"
  }, {
    id: "toothBrush",
    name: "ToothBrush Set",
    costBoy: .93,
    costGirl: .93,
    imgBoy: "https://via.placeholder.com/150/8FBF7F/fff?text=ToothBrush",
    imgGirl: "https://via.placeholder.com/150/C79FE0/fff?text=ToothBrush"
  }, {
    id: "woodPlate",
    name: "Cloud Wood Plate Set",
    costBoy: 5.6,
    costGirl: 5.6,
    imgBoy: "https://via.placeholder.com/150/EEEEEE/333?text=Wood+Plate",
    imgGirl: "https://via.placeholder.com/150/F2B6C6/fff?text=Wood+Plate"
  }, {
    id: "pacifierHolder",
    name: "Star Pacifier Holder",
    costBoy: 1.06,
    costGirl: 1.06,
    imgBoy: "https://via.placeholder.com/150/9EC5E0/fff?text=Pacifier+Holder",
    imgGirl: "https://via.placeholder.com/150/D8B6F2/fff?text=Pacifier+Holder"
  }, {
    id: "pacifierCase",
    name: "Bear Pacifier Case",
    costBoy: .502,
    costGirl: .502,
    imgBoy: "https://via.placeholder.com/150/AAAAAA/fff?text=Pacifier+Case",
    imgGirl: "https://via.placeholder.com/150/F7C6D9/fff?text=Pacifier+Case"
  }, {
    id: "diaperBags",
    name: "Waterproof Diaper Bags (3pcs)",
    costBoy: 1.39,
    costGirl: 1.39,
    imgBoy: "https://via.placeholder.com/150/9EC5E0/fff?text=Diaper+Bags+Lion",
    imgGirl: "https://via.placeholder.com/150/F2B6C6/fff?text=Diaper+Bags+Rainbow"
  }, {
    id: "perfume1",
    name: "Pipidoo Perfume - Type 1",
    costBoy: .01995,
    costGirl: .01995,
    imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Perfume+1",
    imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Perfume+1"
  }, {
    id: "perfume2",
    name: "Pipidoo Perfume - Type 2",
    costBoy: .02325,
    costGirl: .02325,
    imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Perfume+2",
    imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Perfume+2"
  }, {
    id: "balloonAge",
    name: "Balloon Age Photography Set",
    costBoy: 1.31,
    costGirl: 1.31,
    imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Balloon+Age",
    imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Balloon+Age"
  }, {
    id: "roundAge",
    name: "Round Age Photography Set",
    costBoy: 4.56,
    costGirl: 4.56,
    imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Round+Age",
    imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Round+Age"
  }, {
    id: "braceletBoard",
    name: "Hospital Bracelet Board",
    costBoy: .68,
    costGirl: .68,
    imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Bracelet+Board",
    imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Bracelet+Board"
  }, {
    id: "shoeLettersW",
    name: "Letters for Shoes - White",
    costBoy: .4,
    costGirl: .4,
    imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Shoe+Letters+W",
    imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Shoe+Letters+W"
  }, {
    id: "shoeLettersC",
    name: "Letters for Shoes - Colors",
    costBoy: .99,
    costGirl: .99,
    imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Shoe+Letters+C",
    imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Shoe+Letters+C"
  }, {
    id: "medicineNeedle",
    name: "Medicine Needle",
    costBoy: .95,
    costGirl: .95,
    imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Medicine+Needle",
    imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Medicine+Needle"
  }, {
    id: "rabbitRattle",
    name: "Rabbit Comfort Rattle",
    costBoy: .9,
    costGirl: .9,
    imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Rabbit+Rattle",
    imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Rabbit+Rattle"
  }, {
    id: "messageBoard",
    name: "Message Board",
    costBoy: 1.83,
    costGirl: 1.83,
    imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Message+Board",
    imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Message+Board"
  }, {
    id: "acrylicFrame",
    name: "Acrylic Frame",
    costBoy: 1.52,
    costGirl: 1.52,
    imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Acrylic+Frame",
    imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Acrylic+Frame"
  }, {
    id: "cloudTeether",
    name: "Cloud Teether",
    costBoy: 1.67,
    costGirl: 1.67,
    imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Cloud+Teether",
    imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Cloud+Teether"
  }, {
    id: "babyShoes",
    name: "Baby Shoes",
    costBoy: 1.457,
    costGirl: 1.457,
    imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Baby+Shoes",
    imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Baby+Shoes"
  }, {
    id: "perfumeRoller",
    name: "Perfume Roller",
    costBoy: .106,
    costGirl: .106,
    imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Perfume+Roller",
    imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Perfume+Roller"
  }, {
    id: "hairBrush",
    name: "HairBrush Wood",
    costBoy: .502,
    costGirl: .502,
    imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=HairBrush",
    imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=HairBrush"
  }, {
    id: "heartMug",
    name: "Clear Heart Shape Mug",
    costBoy: 1.1,
    costGirl: 1.1,
    imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Heart+Mug",
    imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Heart+Mug"
  }, {
    id: "mirror",
    name: "Mirror",
    costBoy: .9,
    costGirl: .9,
    imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Mirror",
    imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Mirror"
  }, {
    id: "earrings",
    name: "Earrings",
    costBoy: .02875,
    costGirl: .02875,
    imgBoy: "https://via.placeholder.com/150/DDDDDD/333?text=Earrings",
    imgGirl: "https://via.placeholder.com/150/DDDDDD/333?text=Earrings"
  } ], o = {
    gender: null,
    selectedItems: [],
    personalizationName: ""
  }, i = document.getElementById("pipidoo-box-builder");
  if (i) {
    var l = i.querySelectorAll(".pbb-gender-card"), a = document.getElementById("pbb-to-step-2"), r = document.getElementById("pbb-back-to-1"), n = document.getElementById("pbb-add-to-cart"), c = document.getElementById("pbb-items-grid"), s = document.getElementById("pbb-preview-box"), d = document.getElementById("pbb-counter"), m = document.getElementById("pbb-items-line"), D = document.getElementById("pbb-fee-display"), p = document.getElementById("pbb-total-display"), h = document.getElementById("pbb-msg"), u = i.querySelectorAll(".pbb-step"), g = document.getElementById("pbb-step-indicator-3"), B = document.getElementById("pbb-step-line-3"), y = document.getElementById("pbb-name-input"), f = document.getElementById("pbb-name-char-count"), b = document.getElementById("pbb-personalize-items-note"), v = document.getElementById("pbb-fee-display-3"), x = document.getElementById("pbb-items-line-3"), E = document.getElementById("pbb-personalize-fee-line"), G = document.getElementById("pbb-personalize-fee-line-amount"), I = document.getElementById("pbb-total-display-3"), C = document.getElementById("pbb-msg-3"), A = document.getElementById("pbb-back-to-2"), L = document.getElementById("pbb-final-add-to-cart"), P = T(1.15 / .234);
    l.forEach(function(e) {
      e.addEventListener("click", function() {
        try {
          if (l.forEach(function(e) {
            e.classList.remove("selected");
          }), e.classList.add("selected"), o.gender = e.getAttribute("data-gender"), !a) return void alert("DEBUG: Next button element not found (toStep2Btn is null)");
          a.disabled = !1, a.removeAttribute("disabled");
        } catch (e) {
          alert("DEBUG ERROR: " + e.message);
        }
      });
    }), a.addEventListener("click", function() {
      H(2), c.innerHTML = "", t.forEach(function(e) {
        var t = "boy" === o.gender ? e.imgBoy : e.imgGirl, i = document.createElement("div");
        i.className = "pbb-item-card", i.setAttribute("data-id", e.id), i.innerHTML = '<img src="' + t + '" alt="' + e.name + '"><span class="pbb-item-name">' + e.name + '</span><span class="pbb-item-price">' + S(M(e)) + "</span>", 
        i.addEventListener("click", function() {
          !function(e) {
            var t = o.selectedItems.findIndex(function(t) {
              return t.id === e.id;
            });
            if (t > -1) o.selectedItems.splice(t, 1); else {
              if (o.selectedItems.length >= 5) return;
              o.selectedItems.push(e);
            }
            N(), F(), k();
          }(e);
        }), c.appendChild(i);
      }), N(), F();
    }), r.addEventListener("click", function() {
      H(1);
    }), n.addEventListener("click", function() {
      var t;
      o.selectedItems.length < 4 || (R() ? (H(3), t = o.selectedItems.filter(function(t) {
        return e.indexOf(t.id) > -1;
      }).map(function(e) {
        return e.name;
      }), b.textContent = "You selected: " + t.join(", ") + ". Add a name to personalize them.", 
      W()) : w(n, h, ""));
    }), A.addEventListener("click", function() {
      H(2);
    }), y.addEventListener("input", function() {
      y.value.length > 10 && (y.value = y.value.slice(0, 10)), o.personalizationName = y.value.trim(), 
      f.textContent = y.value.length, W();
    }), L.addEventListener("click", function() {
      w(L, C, o.personalizationName);
    });
  }
  function S(e) {
    return e.toFixed(3) + " KWD";
  }
  function M(e) {
    return T(function(e) {
      return "boy" === o.gender ? e.costBoy : e.costGirl;
    }(e) / .234);
  }
  function T(e) {
    var t = e - .9;
    return (t <= 0 ? 0 : Math.ceil(t - 1e-9)) + .9;
  }
  function H(e) {
    document.getElementById("pbb-step-1").style.display = 1 === e ? "" : "none", document.getElementById("pbb-step-2").style.display = 2 === e ? "" : "none", 
    document.getElementById("pbb-step-3").style.display = 3 === e ? "" : "none", u.forEach(function(t) {
      t.classList.toggle("active", parseInt(t.getAttribute("data-step"), 10) <= e);
    });
  }
  function R() {
    return o.selectedItems.some(function(t) {
      return e.indexOf(t.id) > -1;
    });
  }
  function N() {
    c.querySelectorAll(".pbb-item-card").forEach(function(e) {
      var t = e.getAttribute("data-id"), i = o.selectedItems.some(function(e) {
        return e.id === t;
      });
      e.classList.toggle("selected", i);
      var l = o.selectedItems.length >= 5;
      e.classList.toggle("disabled", l && !i);
    }), d.textContent = o.selectedItems.length + " / 5 selected (min 4)", k();
  }
  function F() {
    s.innerHTML = "", 0 !== o.selectedItems.length ? o.selectedItems.forEach(function(e) {
      var t = "boy" === o.gender ? e.imgBoy : e.imgGirl, i = document.createElement("div");
      i.className = "pbb-preview-item", i.innerHTML = '<img src="' + t + '" alt="' + e.name + '">', 
      s.appendChild(i);
    }) : s.innerHTML = '<div class="pbb-preview-placeholder">Your box will appear here</div>';
  }
  function k() {
    var e = o.selectedItems.reduce(function(e, t) {
      return e + M(t);
    }, 0), t = e + P;
    m.innerHTML = "<span>" + o.selectedItems.length + " item" + (1 === o.selectedItems.length ? "" : "s") + " selected</span><span>" + S(e) + "</span>", 
    D.textContent = S(P), p.textContent = S(t), o.selectedItems.length < 4 ? (h.textContent = "Select at least 4 items to continue (" + o.selectedItems.length + "/4).", 
    n.disabled = !0) : o.selectedItems.length >= 5 ? (h.textContent = "Remove an item to add another.", 
    n.disabled = !1) : (h.textContent = "", n.disabled = !1), R() ? (n.textContent = "Next", 
    g.style.display = "", B.style.display = "") : (n.textContent = "Add to Cart", g.style.display = "none", 
    B.style.display = "none");
  }
  function W() {
    var e = o.selectedItems.reduce(function(e, t) {
      return e + M(t);
    }, 0), t = o.personalizationName.length > 0, i = e + P + (t ? 2 : 0);
    v.textContent = S(P), x.innerHTML = "<span>" + o.selectedItems.length + " item" + (1 === o.selectedItems.length ? "" : "s") + " selected</span><span>" + S(e) + "</span>", 
    t ? (E.style.display = "", G.textContent = S(2)) : E.style.display = "none", I.textContent = S(i);
  }
  function w(e, t, i) {
    var l = o.selectedItems.reduce(function(e, t) {
      return e + M(t);
    }, 0), a = i && i.length > 0, r = l + P + (a ? 2 : 0), n = o.selectedItems.map(function(e) {
      return e.name;
    }).join(", "), c = "boy" === o.gender ? "Boy" : "Girl", s = e.textContent;
    e.disabled = !0, e.textContent = "Adding...";
    var d = {
      Gender: c,
      "Selected Items": n
    };
    a && (d["Personalization Name"] = i), Ecwid.Cart.addProduct({
      id: 849737063,
      quantity: 1,
      selectedPrice: r,
      options: d,
      callback: function(o) {
        e.textContent = s, e.disabled = !1, o ? (t.style.color = "#4caf50", t.textContent = "Added to cart!") : (t.style.color = "#d9534f", 
        t.textContent = "Something went wrong. Please try again.");
      }
    });
  }
}();
