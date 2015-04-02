// sign_yetgeul  # 1:sign, 2:yetgeul
function get_table_extension(sign_yetgeul, type) {
var K3_sign_3shin = [
    [0,0,0], /*!*/
    [0,0,0], /*"*/
    /*#*/[0,0,0], 
    /*$*/[0,0,0],
    /*%*/[0,0,0], /*&*/[0,0,0], /*'*/[0x326B,0x266A,0x266C], /*(*/[0,0,0],
    /*)*/[0,0,0], /***/[0,0,0], /*+*/[0,0,0], /*,*/[0x3001,0x3008,0x300A],
    /*-*/[0xB1,0x2642,0x2601], /*.*/[0x3002,0x3009,0x300B], /*/*/[0x326A,0x203B,0x2620],
    /*0*/[0xA7,0x2469,0x2473], /*1*/[0x3BC,0x2460,0x246A], /*2*/[0xB2,0x2461,0x246B], /*3*/[0xB3,0x2462,0x246C], /*4*/[0xFFE6,0x2463,0x246D],
    /*5*/[0xFFE5,0x2464,0x246E], /*6*/[0x321C,0x2465,0x246F], /*7*/[0xFFE1,0x2466,0x2470], /*8*/[0x20AC,0x2467,0x2471],    /*9*/[0xFFE0,0x2468,0x2472],
    /*:*/[0,0,0], /*;*/[0x3265,0x25BD,0x25BC], /*<*/[0,0,0],
    /*=*/[0x2260,0x2640,0x2603], /*>*/[0,0,0], /*?*/[0,0,0], /*@*/[0,0,0],
    /*A*/[0,0,0], /*B*/[0,0,0], /*C*/[0,0,0], /*D*/[0,0,0], /*E*/[0,0,0], /*F*/[0,0,0], /*G*/[0,0,0], /*H*/[0,0,0x2611],
    /*I*/[0,0,0], /*J*/[0,0,0], /*K*/[0,0,0], /*L*/[0,0,0], /*M*/[0,0,0], /*N*/[0,0,0], /*O*/[0,0,0], /*P*/[0,0,0],
    /*Q*/[0,0,0], /*R*/[0,0,0], /*S*/[0,0,0x2610], /*T*/[0,0,0], /*U*/[0,0,0], /*V*/[0,0,0x2612], /*W*/[0,0,0], /*X*/[0,0,0],
    /*Y*/[0,0,0], /*Z*/[0,0,0], /*[*/[0x3010,0x3014,0x2600], /*\*/[0x2252,0xB6,0xA6],
    /*]*/[0x3011,0x3015,0x2602], /*^*/[0,0,0], /*_*/[0,0,0], /*`*/[0x2122,0xA9,0xAE],
    /*a*/[0x25C7,0x25C8,0x25C6], /*b*/[0xF7,0x2030,0x2031], /*c*/[0xB0,0x260E,0x2668], /*d*/[0x25CB,0x25C9,0x25CF],
    /*e*/[0x2199,0x2190,0x261C], /*f*/[0xB7,0x25E6,0x2022], /*g*/[0x2026,0x2015,0xFFE3], /*h*/[0x3261,0x3003,0x2713],
    /*i*/[0x3264,0x2103,0x2109], /*j*/[0x3267,0x2018,0x201C], /*k*/[0x3260,0x2019,0x201D], /*l*/[0x3268,0x25B3,0x25B2],
    /*m*/[0x326D,0x300D,0x300F], /*n*/[0x3266,0x300C,0x300E], /*o*/[0x3269,0x25B7,0x25B6], /*p*/[0x326C,0x25C1,0x25C0],
    /*q*/[0x2196,0x2193,0x261F], /*r*/[0x2198,0x2192,0x261E], /*s*/[0x25A1,0x25A3,0x25A0], /*t*/[0x2D0,0x2194,0x21C4],
    /*u*/[0x3262,0x327E,0x327F], /*v*/[0xD7,0x2715,0x2702], /*w*/[0x2197,0x2191,0x261D], /*x*/[0x2032,0x2606,0x2605],
    /*y*/[0x3263,0x2195,0x21C5], /*z*/[0x2033,0x2661,0x2665], /*{*/[0,0,0], /*|*/[0,0,0], /*}*/[0,0,0], /*~*/[0,0,0]
];


    // 3-2012 자판 기호 확장 배열
    K3_sign_3_2012 = [/*!*/[0,0,0], /*"*/[0x266A,0x266C,0], /*#*/[0,0,0], /*$*/[0xFFE0,0,0],
    /*%*/[8240,8241,0], /*&*/[0,0,0], /*'*/[0x326B,0xF7,0],
    /*(*/[0,0,0], /*)*/[0,0,0], /***/[0,0,0], /*+*/[0,0,0],
    /*,*/[0x3001,0x3008,0x2266], /*-*/[0xB1,0x2642,0x2601], /*.*/[0x3002,0x3009,0x2267], /*/*/[0x2026,0x203B,0x2504],
    /*0*/[0x326A,0x300D,0], /*1*/[0x3BC,0x2122,0], /*2*/[0xB2,0x2109,0], /*3*/[0xB3,0x2103,0], /*4*/[0xFFE6,0xFFE5,0x4B0],
    /*5*/[0x20AC,0xFFE1,0], /*6*/[0x327E,0x2702,0], /*7*/[0xA7,0x300E,0], /*8*/[0,0x300F,0], /*9*/[0,0x300C,0],
    /*:*/[0x2463,0x246D,0x3254], /*;*/[0x3265,0x2463,0x246D], /*<*/[0,0x2640,0], /*=*/[0x2260,0,0x2603],
    /*>*/[0,0,0], /*?*/[0,0,0], /*@*/[0,0,0],
    /*A*/[0,0,0], /*B*/[0,0,0], /*C*/[0,0,0], /*D*/[0,0,0],
    /*E*/[0x2715,0,0], /*F*/[0,0,0], /*G*/[0xA6,0x2506,0], /*H*/[0x2469,0x2473,0x325A],
    /*I*/[0x2466,0x2470,0x3257], /*J*/[0x2460,0x246A,0x3251], /*K*/[0x2461,0x246B,0x3252], /*L*/[0x2462,0x246C,0x3253],
    /*M*/[0x201D,0x2019,0], /*N*/[0x201C,0x2018,0], /*O*/[0x2467,0x2471,0x3258], /*P*/[0x2468,0x2472,0x3259],
    /*Q*/[0x2199,0x2196,0x261F], /*R*/[0,0,0], /*S*/[0,0,0], /*T*/[0,0,0x2610],
    /*U*/[0x2465,0x246F,0x3256], /*V*/[0,0,0], /*W*/[0x2198,0x2197,0x261D], /*X*/[0,0,0],
    /*Y*/[0x2464,0x246E,0x3255], /*Z*/[0,0,0], /*[*/[0x3010,0x3014,0x2600], /*\*/[0x2252,0xB6,0],
    /*]*/[0x3011,0x3015,0x2602], /*^*/[0x321C,0,0], /*_*/[0,0,0], /*`*/[0xA9,0xAE,0x2117],
    /*a*/[0x25C7,0x25C8,0x25C6], /*b*/[0x2D0,0x25C1,0x25C0], /*c*/[0xB0,0x260E,0x2668], /*d*/[0x25CB,0x25C9,0x25CF],
    /*e*/[0xD7,0x2194,0x2195], /*f*/[0xB7,0x25B3,0x25B2], /*g*/[0x2015,0x25BD,0x25BC], /*h*/[0x3261,0x2469,0x2473],
    /*i*/[0x3264,0x2466,0x2470], /*j*/[0x3267,0x2460,0x246A], /*k*/[0x3260,0x2461,0x246B], /*l*/[0x3268,0x2462,0x246C],
    /*m*/[0x326D,0x300B,0], /*n*/[0x3266,0x300A,0], /*o*/[0x3269,0x2467,0x2471], /*p*/[0x326C,0x2468,0x2472],
    /*q*/[0x2190,0x2193,0x261C], /*r*/[0xB4,0x2022,0x25E6], /*s*/[0x25A1,0x25A3,0x25A0], /*t*/[0x3003,0x2713,0x2611],
    /*u*/[0x3262,0x2465,0x246F], /*v*/[0,0x25B7,0x25B6], /*w*/[0x2192,0x2191,0x261E], /*x*/[0x2032,0x2606,0x2605],
    /*y*/[0x3263,0x2464,0x246E], /*z*/[0x2033,0x2661,0x2665], /*{*/[0,0,0], /*|*/[0,0,0], /*}*/[0,0,0], /*~*/[0x327F,0,]];


    K3_sign_3_2012_yet = [
        [[0x2921,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x21 exclam */
        [[0x266A,0x266C,0x0000], [0x0000,0x0000,0x0000]], /* 0x22 quotedbl */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x23 numbersign */
        [[0x0000,0x0000,0x0000], [0xFE35,0x0000,0x0000]], /* 0x24 dollar */
        [[0x0000,0x0000,0x0000], [0xFE36,0x0000,0x0000]], /* 0x25 percent */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x26 ampersand */
        [[0x326B,0x3279,0x0000], [0x00F7,0x0000,0x0000]], /* 0x27 apostrophe */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x28 parenleft */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x29 parenright */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x2A asterisk */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x2B plus */
        [[0x3001,0x0000,0x0000], [0x2266,0x226A,0x0000]], /* 0x2C comma */
        [[0x2642,0x2600,0x2601], [0x00B1,0x002D,0x0000]], /* 0x2D minus */
        [[0x3002,0x0000,0x0000], [0x2267,0x226B,0x0000]], /* 0x2E period */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x2F slash */
        [[0x326A,0x3278,0x0000], [0x2713,0x2611,0x2610]], /* 0x30 0 */
        [[0x2195,0x21C5,0x21F3], [0x03BC,0x0000,0x0000]], /* 0x31 1 */
        [[0x2194,0x21C4,0x2B04], [0x2109,0x0000,0x0000]], /* 0x32 2 */
        [[0xFFE5,0x04B0,0x0000], [0x2103,0x0000,0x0000]], /* 0x33 3 */
        [[0xFFE6,0x0000,0x0000], [0xFFE0,0x0000,0x0000]], /* 0x34 4 */
        [[0x20AC,0xFFE1,0x0000], [0x2030,0x2031,0x0000]], /* 0x35 5 */
      [[0x327E,0x321C,0x327F], [0x2702,0x0000,0x0000]], /* 0x36 6 */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x37 7 */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x38 8 */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x39 9 */
        [[0x2084,0x0000,0x0000], [0x2074,0x0000,0x0000]], /* 0x3A colon */
        [[0x3265,0x3273,0x0000], [0x2463,0x246D,0x3254,0x325E,0x32B9]], /* 0x3B semicolon */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x3C less */
        [[0x2640,0x2602,0x2603], [0x2260,0x2245,0x0000]], /* 0x3D equal */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x3E greater */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x3F question */
        [[0x2922,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x40 at */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x41 A */
        [[0x0000,0x0000,0x0000], [0xFE40,0xFE3E,0x0000]], /* 0x42 B */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x43 C */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x44 D */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x45 E */
        [[0x0000,0x0000,0x0000], [0xFE41,0xFE43,0x0000]], /* 0x46 F */
        [[0x0000,0x0000,0x0000], [0xFE42,0xFE44,0x0000]], /* 0x47 G */
        [[0x2080,0x0000,0x0000], [0x2070,0x0000,0x0000]], /* 0x48 H */
        [[0x2087,0x0000,0x0000], [0x2077,0x0000,0x0000]], /* 0x49 I */
        [[0x2081,0x0000,0x0000], [0x00B9,0x0000,0x0000]], /* 0x4A J */
        [[0x2082,0x0000,0x0000], [0x00B2,0x33A1,0x0000]], /* 0x4B K */
        [[0x2083,0x0000,0x0000], [0x00B3,0x33A5,0x0000]], /* 0x4C L */
        [[0x2019,0x201D,0x0000], [0x0000,0x0000,0x0000]], /* 0x4D M */
        [[0x2018,0x201C,0x0000], [0x0000,0x0000,0x0000]], /* 0x4E N */
        [[0x2088,0x0000,0x0000], [0x2078,0x0000,0x0000]], /* 0x4F O */
        [[0x2089,0x0000,0x0000], [0x2079,0x0000,0x0000]], /* 0x50 P */
        [[0x2199,0x21B2,0x2B10], [0x2196,0x21B0,0x2B11]], /* 0x51 Q */
        [[0x0000,0x0000,0x0000], [0xFE3B,0xFE39,0x0000]], /* 0x52 R */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x53 S */
        [[0x0000,0x0000,0x0000], [0xFE3C,0xFE3A,0x0000]], /* 0x54 T */
        [[0x2086,0x0000,0x0000], [0x2076,0x0000,0x0000]], /* 0x55 U */
        [[0x0000,0x0000,0x0000], [0xFE3F,0xFE3D,0x0000]], /* 0x56 V */
        [[0x2198,0x21B3,0x2B0E], [0x2197,0x21B1,0x2B0F]], /* 0x57 W */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x58 X */
        [[0x2085,0x0000,0x0000], [0x2075,0x0000,0x0000]], /* 0x59 Y */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x5A Z */
        [[0x25B3,0x25B2,0x0000], [0x25B7,0x25B6,0x0000]], /* 0x5B bracketleft */
        [[0x00B6,0x23CE,0x0000], [0x2252,0x2248,0x0000]], /* 0x5C backslash:*/
        [[0x25BD,0x25BC,0x0000], [0x25C1,0x25C0,0x0000]], /* 0x5D bracketright:*/
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x5E asciicircum:*/
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x5F */
        [[0x00A9,0x00AE,0x2117], [0x2122,0x0000,0x0000]], /* 0x60 */
        [[0x2026,0x2504,0x0000], [0x25C7,0x25C8,0x25C6]], /* 0x61 a */
        [[0x00A7,0x0000,0x0000], [0x3009,0x300B,0x0000]], /* 0x62 b */
        [[0x00B0,0x0000,0x0000], [0x260E,0x2668,0x0000]], /* 0x63 c */
        [[0x302E,0x0000,0x0000], [0x25CB,0x25C9,0x25CF]], /* 0x64 d */
        [[0x00D7,0x2715,0x0000], [0x203B,0x327C,0x327D]], /* 0x65 e */
        [[0x00B7,0x2022,0x25E6], [0x300C,0x300E,0x0000]], /* 0x66 f */
        [[0x2015,0x00AF,0xFFE3], [0x300D,0x300F,0x0000]], /* 0x67 g */
        [[0x3261,0x326F,0x0000], [0x2469,0x2473,0x325A,0x32B5,0x32BF]], /* 0x68 h */
        [[0x3264,0x3272,0x0000], [0x2466,0x2470,0x3257,0x32B2,0x32BC]], /* 0x69 i */
        [[0x3267,0x3275,0x0000], [0x2460,0x246A,0x3251,0x325B,0x32B6]], /* 0x6A j */
        [[0x3260,0x326E,0x0000], [0x2461,0x246B,0x3252,0x325C,0x32B7]], /* 0x6B k */
        [[0x3268,0x3276,0x0000], [0x2462,0x246C,0x3253,0x325D,0x32B8]], /* 0x6C l */
        [[0x326D,0x327B,0x0000], [0x2234,0x2235,0x2261]], /* 0x6D m */
        [[0x3266,0x3274,0x0000], [0x221E,0x221D,0x0000]], /* 0x6E n */
        [[0x3269,0x3277,0x0000], [0x2467,0x2471,0x3258,0x32B3,0x32BD]], /* 0x6F o */
        [[0x326C,0x327A,0x0000], [0x2468,0x2472,0x3259,0x32B4,0x32BE]], /* 0x70 p */
        [[0x2190,0x261C,0x21E6], [0x2193,0x261F,0x21E9]], /* 0x71 q */
        [[0x00B4,0x0000,0x0000], [0x3010,0x3014,0x0000]], /* 0x72 r */
        [[0x302F,0x0000,0x0000], [0x25A1,0x25A3,0x25A0]], /* 0x73 s */
        [[0x3003,0x0000,0x0000], [0x3011,0x3015,0x0000]], /* 0x74 t */
        [[0x3262,0x3270,0x0000], [0x2465,0x246F,0x3256,0x32B1,0x32BB]], /* 0x75 u */
        [[0x02D0,0x0000,0x0000], [0x3008,0x300A,0x0000]], /* 0x76 v */
        [[0x2192,0x261E,0x21E8], [0x2191,0x261D,0x21E7]], /* 0x77 w */
        [[0x2032,0x0000,0x0000], [0x2606,0x2605,0x0000]], /* 0x78 x */
        [[0x3263,0x3271,0x0000], [0x2464,0x246E,0x3255,0x325F,0x32BA]], /* 0x79 y */
        [[0x2033,0x0000,0x0000], [0x2661,0x2665,0x0000]], /* 0x7A z */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x7B braceleft */
        [[0x00A6,0x2506,0x0000], [0x0000,0x0000,0x0000]], /* 0x7C bar */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]], /* 0x7D braceright */
        [[0x0000,0x0000,0x0000], [0x0000,0x0000,0x0000]]  /* 0x7E asciitilde */
    ];


    var  K3_yetgeul_3_2012_yet = [
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x21 exclam: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x22 quotedbl: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x23 numbersign: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x24 dollar: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x25 percent: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x26 ampersand: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x27 apostrophe: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x28 parenleft: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x29 parenright: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x2A asterisk: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x2B plus: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x2C comma: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x2D minus: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x2E period: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x2F slash: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x30 0: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x31 1: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x32 2: jongseong ap-sieus(non-standard), jongseong ssang-ap-sieus(non-standard), jongseong dwit-sieus(non-standard), jongseong ssang-dwit-sieus(non-standard) */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x33 3: */
    [[0xD7C2, 0x0000],    [0x0000, 0x0000]],     /* 0x34 4: i+yo */
    [[0xD7C3, 0x0000],    [0x0000, 0x0000]],     /* 0x35 5: i+yu */
    [[0x1199, 0x0000],    [0x0000, 0x0000]],     /* 0x36 6: i+ya */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x37 7: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x38 8: */
    [[0x113C, 0x113D],    [0x113E, 0x113F]],     /* 0x39 9: choseong ap-sieus, choseong ssang-ap-sieus, choseong dwit-sieus, choseong ssang-dwit-sieus */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x3A colon: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x3B semicolon: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x3C less: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x3D equal: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x3E greater: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x3F question: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x40 at: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x41 A: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x42 B: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x43 C: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x44 D: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x45 E: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x46 F: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x47 G: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x48 H: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x49 I: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x4A J: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x4B K: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x4C L: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x4D M: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x4E N: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x4F O: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x50 P: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x51 Q: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x52 R: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x53 S: */
    [[0xD7BE, 0x0000],    [0x0000, 0x0000]],     /* 0x54 T: i+yae */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x55 U: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x56 V: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x57 W: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x58 X: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x59 Y: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x5A Z: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x5B */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x5C */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x5D */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x5E */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x5F */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x60 */
    [[0x0000, 0x0000],    [0x11F0, 0x11EE]],     /* 0x61 a: yes-ieung, ssangyesieung */
    [[0x119B, 0x0000],    [0x1195, 0x0000]],     /* 0x62 b: i+u, eu+u */
    [[0x1168, 0x0000],    [0xD7BB, 0x0000]],     /* 0x63 c: ye, eu+e */
    [[0xD7C4, 0x0000],    [0x1174, 0x0000]],     /* 0x64 d: i+i, eu+i */
    [[0xD7BF, 0x0000],    [0x119E, 0x11A2]],     /* 0x65 e: i+yeo, arae-a, ssangarae-a */
    [[0x1198, 0x0000],    [0xD7B9, 0x0000]],     /* 0x66 f: i+a, eu+a */
    [[0x119C, 0x0000],    [0x1196, 0x0000]],     /* 0x67 g: i+eu, eu+eu */
    [[0x0000, 0x0000],    [0x1159, 0xA97C]],     /* 0x68 h: choseong yeorinhieuh, choseong ssangyeorinhieuh */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x69 i: */
    [[0x0000, 0x0000],    [0x114C, 0x0000]],     /* 0x6A j: choseong yes-ieung, choseong ssang-yes-ieung(non-standard) */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x6B k: */
    [[0x114E, 0x114F],    [0x1150, 0x1151]],     /* 0x6C l: choseong ap-jieuj, choseong ssang-ap-jieuj, choseong dwit-jieuj, choseong ssang-dwit-jieuj */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x6D m: */
    [[0x0000, 0x0000],    [0x1140, 0x0000]],     /* 0x6E n: choseong yeorin-sieus*/
    [[0x1154, 0x0000],    [0x1155, 0x0000]],     /* 0x6F o: choseong ap-chieuch, choseong dwit-chieuch */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x70 p: */
    [[0x0000, 0x0000],    [0x11EB, 0x0000]],     /* 0x71 q: jongseong yeorin-sieus */
    [[0x0000, 0x0000],    [0xD7BA, 0x0000]],     /* 0x72 r: eu+eo */
    [[0x0000, 0x0000],    [0x11F9, 0x0000]],     /* 0x73 s: jongseong yeorin-hieuh, jongseong yeorin-ssang-hieuh(non-standard) */
    [[0x1164, 0xD7BE],    [0x0000, 0x0000]],     /* 0x74 t: yae, i+yae */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x75 u: */
    [[0x119A, 0x0000],    [0xD7BC, 0x0000]],     /* 0x76 v: i+o, eu+o */
    [[0x0000, 0x0000],    [0xD7DD, 0x0000]],     /* 0x77 w: jongseong rieul-ieung */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x78 x: jongseong ap-jieuj(non-standard), jongseong ssang-ap-jieuj(non-standard), jongseong dwit-jieuj(non-standard), jongseong ssang-dwit-jieuj(non-standard) */
    [[0x0000, 0x0000],    [0x111B, 0x0000]],     /* 0x79 y: choseong rieul-ieung */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x7A z: jongseong ap-chieuch(non-standard), jongseong dwit-chieuch(non-standard) */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x7B braceleft: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x7C bar: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]],     /* 0x7D braceright: */
    [[0x0000, 0x0000],    [0x0000, 0x0000]]     /* 0x7E asciitilde: */
];

    // array
    if (sign_yetgeul === 1) {
        switch (true) {
            case /3-2012/.test(type) :
                return K3_sign_3_2012;
            case /3-2015$/.test(type) :
                return [];
            case /3-2/.test(type) :
                return K3_sign_3_2012_yet;
            case /3shin-2015/.test(type) :
                return [];
            case /3shin/.test(type) :
                return K3_sign_3shin;
            default :
                return [];
        }
    } else if (sign_yetgeul === 2) {
        return K3_yetgeul_3_2012_yet;
    } else {
        return [];
    }

}
