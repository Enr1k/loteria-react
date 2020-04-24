const cards = [
  {
    id: 1,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693702/loteria1_o8gaxa.png",
    title: "El gallo",
    phrase: "El que la canto a San Pedro."
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693611/loteria2_xt4sea.png",
    title: "El diablito",
    phrase: "Portate bien cuatito, si no te lleva el coloradito."
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693613/loteria3_nnafxg.png",
    title: "La dama",
    phrase: "Puliendo el paso, por toda la calle real."
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693615/loteria4_ddrdhq.png",
    title: "El catrin",
    phrase: "Don ferruco en la alameda, su baston queria tirar."
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693608/loteria5_wxmhs9.png",
    title: "El paraguas",
    phrase: "Para el sol y para el agua."
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693610/loteria6_jdmeku.png",
    title: "La sirena",
    phrase: "Medio cuerpo de señora se divisa en altamar."
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693611/loteria7_lwumoq.png",
    title: "La escalera",
    phrase: "Subeme paso a pasito, no quieras pegar brinquitos."
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693611/loteria8_gjdbak.png",
    title: "La botella",
    phrase: "La herramienta del borracho."
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693611/loteria9_h3vn6j.png",
    title: "El barril",
    phrase: "Tanto bebio el albañil, que quedo como barril."
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693609/loteria10_lzt2t5.png",
    title: "El arbol",
    phrase: "El que a buen arbol se arrima buena sombra el cobija."
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693608/loteria11_dxtdi0.png",
    title: "El melon",
    phrase: "Me lo das o me lo quitas."
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693609/loteria12_wusjfu.png",
    title: "El valiente",
    phrase: "Por que le corres cobarde, trayendo tan buen puñal."
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693608/loteria13_w6xb10.png",
    title: "El gorrito",
    phrase: "Ponle su gorrito al nene, no se nos vaya a resfriar."
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693609/loteria14_sk8ias.png",
    title: "La muerte",
    phrase: "La muerte siriqui siaca. La muerte tilica y flaca."
  },
  {
    id: 15,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693610/loteria15_ngbdmh.png",
    title: "La pera",
    phrase: "El que espera desespera."
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693610/loteria16_r6z7tq.png",
    title: "La bandera",
    phrase: "Verde blanco y colorado, la bandera del soldado."
  },
  {
    id: 17,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693610/loteria17_wuencz.png",
    title: "El bandolon",
    phrase: "Tocando su bandolon, esta el mariachi Simon."
  },
  {
    id: 18,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693610/loteria18_nx3ea5.png",
    title: "El violoncello",
    phrase: "Creciendo se fue hasta el cielo, y como no fue violin, tuvo que ser violoncello."
  },
  {
    id: 19,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693612/loteria19_jug9vh.png",
    title: "La garza",
    phrase: "Al otro lado del rio tengo mi banco de arena, donde se sienta mi chata pico de garza morena."
  },
  {
    id: 20,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693611/loteria20_x6uc5l.png",
    title: "El pajaro",
    phrase: "Tu me traes a puros brincos, como pajaro en la rama."
  },
  {
    id: 21,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693612/loteria21_yew0yl.png",
    title: "La mano",
    phrase: "La mano de un criminal. La mano de un escribano."
  },
  {
    id: 22,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693611/loteria22_outgef.png",
    title: "La bota",
    phrase: "Una bota igual que l'otra. Botala si no te sirve."
  },
  {
    id: 23,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693612/loteria23_d7sfci.png",
    title: "La luna",
    phrase: "El farol de los enamorados."
  },
  {
    id: 24,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693612/loteria24_rl61w0.png",
    title: "El cotorro",
    phrase: "cotorro cotorro saca la pata, y empiezame a platicar."
  },
  {
    id: 25,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693612/loteria25_tyys9f.png",
    title: "El borracho",
    phrase: "Ah! que borracho tan necio, ya no lo puedo aguantar."
  },
  {
    id: 26,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693612/loteria26_khll1d.png",
    title: "El negrito",
    phrase: "El que se comio el azucar."
  },
  {
    id: 27,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693612/loteria27_ebouch.png",
    title: "El corazon",
    phrase: "No me extrañes corazon, que regreso en el camion."
  },
  {
    id: 28,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693613/loteria28_iwnlzc.png",
    title: "La sandia",
    phrase: "La barriga que Juan tenia, era empacho sandia."
  },
  {
    id: 29,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693613/loteria29_muhpyc.png",
    title: "El tambor",
    phrase: "No te arrugues cuero viejo, que te quiero pa'tambor."
  },
  {
    id: 30,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693613/loteria30_mpwpj4.png",
    title: "El camaron",
    phrase: "Camaron que se duerme, se lo lleva la corriente."
  },
  {
    id: 31,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693614/loteria31_ljxsib.png",
    title: "Las jaras",
    phrase: "Las jaras del indio Adan, donde pegan, dan."
  },
  {
    id: 32,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693614/loteria32_bfsvi9.png",
    title: "El musico",
    phrase: "El musico trompa de hule, ya no me quiere tocar."
  },
  {
    id: 33,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693614/loteria33_d9hsbu.png",
    title: "La araña",
    phrase: "Atarantamela a palos, no me la dejes llegar."
  },
  {
    id: 34,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693614/loteria34_oqp5da.png",
    title: "El soldado",
    phrase: "Uno, dos y tres el soldado pa'l cuartel."
  },
  {
    id: 35,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693614/loteria35_vgovqb.png",
    title: "La estrella",
    phrase: "La estrella polar del norte."
  },
  {
    id: 36,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693614/loteria36_puw6gd.png",
    title: "El cazo",
    phrase: "El caso que te hago es poco."
  },
  {
    id: 37,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693614/loteria37_arihpl.png",
    title: "El mundo",
    phrase: "Este mundo es una bola, y nosotros un balon."
  },
  {
    id: 38,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693615/loteria38_oopybt.png",
    title: "El apache",
    phrase: "Ah Chihuahua! cuanto apache con pantalon y huarache."
  },
  {
    id: 39,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693615/loteria39_zfelkp.png",
    title: "El nopal",
    phrase: "Al nopal no la van a ver, nomas cuando tiene tunas."
  },
  {
    id: 40,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693615/loteria40_e0xzfk.png",
    title: "El alacran",
    phrase: "El que con la cola pica, le dan una paliza."
  },
  {
    id: 41,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693615/loteria41_f11tux.png",
    title: "La rosa",
    phrase: "Rosita, Rosaura, ven que quiero ahora."
  },
  {
    id: 42,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693615/loteria42_inkpea.png",
    title: "La calavera",
    phrase: "Al pasar por el panteon, me encontre un calaveron."
  },
  {
    id: 43,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693615/loteria43_fc24m3.png",
    title: "La campana",
    phrase: "tu con la campana y yo con tu hermana."
  },
  {
    id: 44,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693615/loteria44_gyljql.png",
    title: "El cantarito",
    phrase: "El cantarito del pulque no se te vaya a quebrar pos lo quiere la patrona pa poderme enamorar."
  },
  {
    id: 45,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693616/loteria45_ev9lpk.png",
    title: "El venado",
    phrase: "El que brinca los peñascos."
  },
  {
    id: 46,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693616/loteria46_a6iuyq.png",
    title: "El sol",
    phrase: "La cobija de los pobres."
  },
  {
    id: 47,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693608/loteria47_ts3y1d.png",
    title: "La corona",
    phrase: "El sombrero de los reyes."
  },
  {
    id: 48,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693608/loteria48_qfo12c.png",
    title: "La chalupa",
    phrase: "Rema rema va Lupita, sentada en su chalupita."
  },
  {
    id: 49,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693609/loteria49_eawwcz.png",
    title: "El pino",
    phrase: "Fresco y oloroso, en todo tiempo hermoso."
  },
  {
    id: 50,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693609/loteria50_zkx9ve.png",
    title: "El pescado",
    phrase: "El que por la boca muere, aunque mudo fuere."
  },
  {
    id: 51,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693609/loteria51_w08z6m.png",
    title: "La palma",
    phrase: "Palmero sube a la palma y bajame un coco real."
  },
  {
    id: 52,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693610/loteria52_woyqht.png",
    title: "La maceta",
    phrase: "El que nace pa'maceta, no sale del corredor."
  },
  {
    id: 53,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693611/loteria53_j6niky.png",
    title: "El arpa",
    phrase: "Arpa vieja de mi suegra, ya no sirves pa'tocar."
  },
  {
    id: 54,
    src: "https://res.cloudinary.com/enr1k/image/upload/v1587693611/loteria54_jmwbyl.png",
    title: "La rana",
    phrase: "Al ver a la verde rana, que brinco pego tu hermana."
  }
];

function cardLoader() {
  return cards;
}

export default cardLoader;
