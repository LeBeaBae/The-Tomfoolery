/* It's Tomfoolering time */
var app = new function() {
    this.name = "The Tomfoolery", this.version = "69", this.date = "2023", this.folder = "asset-v1/", this.looptime = 8000, this.bpm = 120, this.totalframe = 384, this.nbpolo = 7, this.nbloopbonus = 6, this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 34, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepolotshirt = "polo-sprite-tshirt.png", this.spritepicto = "game-picto.png", this.colBck = "#29002c", this.col0 = "#ca00d1", this.col1 = "#b100b7", this.col2 = "#5c196f", this.col3 = "#380d4c", this.col4 = "#2c0a33", this.animearray = [{
        name: "1_average-ass-kick",
        color: "d40ad6",
        uniqsnd: !1
    }, {
        name: "2_fucking-clappy",
        color: "d40ad6",
        uniqsnd: !0
    }, {
        name: "3_bob",
        color: "d40ad6",
        uniqsnd: !0
    }, {
        name: "4_table",
        color: "d40ad6",
        uniqsnd: !1
    }, {
        name: "5_maraki",
        color: "d40ad6",
        uniqsnd: !1
    }, {
        name: "6_bad-bass",
        color: "35b535",
        uniqsnd: !1
    }, {
        name: "7_robo",
        color: "35b535",
        uniqsnd: !1
    }, {
        name: "8_alan",
        color: "35b535",
        uniqsnd: !1
    }, {
        name: "9_blobo",
        color: "35b535",
        uniqsnd: !0
    }, {
        name: "10_pain",
        color: "35b535",
        uniqsnd: !1
    }, {
        name: "11_shavir",
        color: "0069ca",
        uniqsnd: !1
    }, {
        name: "12_hector",
        color: "0069ca",
        uniqsnd: !0
    }, {
        name: "13_keko",
        color: "0069ca",
        uniqsnd: !0
    }, {
        name: "14_buzzo",
        color: "0069ca",
        uniqsnd: !1
    }, {
        name: "15_i-ran-out-of-stupid-name-ideas",
        color: "0069ca",
        uniqsnd: !1
    }, {
        name: "16_schizophrenia",
        color: "8a0127",
        uniqsnd: !1
    }, {
        name: "17_epic-chorus",
        color: "8a0127",
        uniqsnd: !1
    }, {
        name: "18_amogus",
        color: "8a0127",
        uniqsnd: !1
    }, {
        name: "19_epic-chorus2",
        color: "8a0127",
        uniqsnd: !1
    }, {
        name: "20_an-epic-voice-that-doesnt-sound-awful",
        color: "8a0127",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "The City",
        src: "v69-b1-the-city-hb.mp4",
        code: "1,2,3,6,15",
        sound: "bonus-the-city",
        aspire: "aspire"
    }, {
        name: "The Chase",
        src: "v69-b2-the-chase-hb.mp4",
        code: "3,4,5,7,11",
        sound: "bonus-the-chase",
        aspire: "aspire-the-chase"
    }, {
        name: "The End",
        src: "v69-b3-the-end-hb.mp4",
        code: "1,8,9,12,18",
        sound: "bonus-the-end",
        aspire: "aspire"
    }];
  for (var e = 0, n = this.animearray.length; e < n; e++) {
        var o = this.animearray[e].name;
        this.animearray[e].soundA = o + "_a", this.animearray[e].soundB = this.animearray[e].uniqsnd ? o + "_a" : o + "_b", this.animearray[e].anime = o + "-sprite.png", this.animearray[e].animeData = o + ".json"
    }
};
