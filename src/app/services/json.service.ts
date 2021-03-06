import { Injectable } from '@angular/core';

@Injectable()
export class JsonService {

  articleFavouriteState:boolean=false;

  public setArticleFavourite(user:any, article:any):void {
    this.articleFavouriteState=!this.articleFavouriteState;
  }

  public isArticleFavourite(article:any):boolean {
    return this.articleFavouriteState;
}

  public getIslandMainArticle(island:String):any {
    return this.getMainArticle();
  }

  public getIslandArticles(island:String):any[] {
    return this.getArticles();
  }

  public getCarouselArticles():any[] {
    return [
      {
        "title": "Caldera de Bandama",
        "link": "",
        "rating": 3,
        "imageURL": "https://www.grancanaria.com/turismo/fileadmin/user_upload/DSC_0110_0001.jpg",
        "altText": "Caldera de Bandama",
        "content": "¡Que no te asuste hundirte! Recorre distintos significados a los que usamos, hay mucho por conocer... La isla de Gran Canaria te invita a descubrir nuevos horizontes y cómo no, profundidades. A nuestro viajero explorador le gusta dar la vuelta a las cosas, y por lo tanto, también a la isla.\nLa caldera de Bandama es una gran depresión de unos 200 metros de profundidad, el diámetro del borde superior es de unos 1.100 metros y su perímetro supera los 3 kilómetros. Los senderos invitan a pasear por ella pudiendo bordearla o bajar hasta el fondo, allí donde a poca profundidad aún se mantienen temperaturas elevadas por lo que, se sabe que su origen es relativamente reciente.\nEl nombre Bandama no es de origen prehispánico, sino que procede de Daniel Van Dam, uno de los colonos flamencos que poblaron esta comarca en el siglo XVI, y que se dedicó a plantar viñas en su interior. Es muy probable que antes de la conquista de la isla, los antiguos canarios ya cultivaran el fondo, pues a media altura de la pared norte existe un interesante yacimiento arqueológico, con cuevas de habitación y silos para guardar grano.\nHoy las viñas siguen siendo representativas del municipio de Santa Brígida, en el que se hunde La Caldera, numerosas fincas de los alrededores, zona conocida como Monte Lentiscal, producen vino y aún hoy en día se pueden degustar los magníficos caldos obtenidos de esas uvas criadas sobre negros picones.\nDe toda la zona, antiguamente denominada Bosque del Lentiscal por conformar un monte termófilo con una potente vegetación que fue desmantelada tras la colonización para el aprovechamiento de la madera, sin duda el Pico de Bandama y La Caldera (un hundimiento y no un cráter, como pudiera parecer) constituyen sus más espectaculares hitos orográficos, lugares de imprescindible visita.\n“Este es el cráter más perfecto de Canarias, una depresión cóncava de tierra y rocas de una uniformidad como solo la naturaleza sabe crear...”, describió un viajero británico, Charles Edwardes en 1888.\nTambién tú puedes disfrutarlo y describirlo. Te deseamos un feliz hundimiento en la tierra y la belleza Gran Canaria."
      },
      {
        "title": "Roque Nublo",
        "link": "",
        "rating": 4,
        "imageURL": "https://www.holaislascanarias.com/sites/default/files/styles/colorbox_image/public/resources/resource_image/roque_nublo-gran_canaria_1.jpg?itok=0fhiYrki",
        "altText": "m2",
        "content": "Monumento natural de importancia ancestral\nSituado en el municipio central de Tejeda, en la isla de Gran Canaria, el Roque Nublo es considerado una de las peñas naturales más grandes del mundo. De especial significado para los isleños, este roque de origen volcánico se eleva ochenta metros sobre su base y 1.813 metros sobre el mar. Antiguo lugar de culto para los aborígenes, todo su entorno fue declarado espacio natural protegido en 1987 y parque rural siete años después. Su enorme presencia solo es superada en altura por el pico de Las Nieves, con 1.949 metros, el lugar más elevado de Gran Canaria.\nTrekking con vistas de las cumbres de Gran Canaria\nLa ruta del Roque Nublo nace en la carretera general, desde donde se recorren 1,5 kilómetros hasta llegar a las cercanías de este monumento singular y de su hermano, el roque de La Rana. Antes se pasa por otro elemento natural destacado, el roque de El Fraile. Este trekking también permite contemplar las localidades de Artenara y Acusa. Las vistas de la caldera de Tejeda, Llanos de la Pez y Pozo de las Nieves compensan el esfuerzo del recorrido."
      }
    ]
  }

  public getMainArticle():any {
    return {
      "title": "Jameos del Agua",
      "favouriteCount": 1398,
      "link": "",
      "rating": 5,
      "imageURL": "https://imgcact.b-cdn.net/spai/w_1425+q_lossy+ret_img+to_webp/https://cactlanzarote.b-cdn.net/wp-content/uploads/2016/02/noches-de-jameos-1972-1920.jpg",
      "altText": "m3",
      "content": "Jameos del Agua es el lugar del planeta en el que decidieron abrazarse la naturaleza y el hombre.\nCésar Manrique supo imaginar y transformar lo que era el desplome del techo de un tubo volcánico por el que corrió la lava procedente del Volcán de la Corona, en un espacio único en el mundo. Su mente privilegiada y sus manos llenas de vida modelaron el agreste y negro basalto para dar forma a un lugar en el que reinan armonía, belleza y paz. El blanco, azul, verde y negro, los colores que Manrique regaló a su isla, se entremezclan a lo largo de un recorrido singular y de extraordinaria belleza, que lleva a soñar e imaginar.\nDesde el fresco acceso bañado por el verdor de grandes helechos que acunan el canto de pequeñas aves, hasta su original auditorio, único en el mundo por sus características geológicas y condiciones acústicas, cada detalle de Jameos del Agua es una continua invitación a la introspección y la ensoñación.\nLos cangrejos ciegos (Munidopsis Polimorpha)*, especie endémica de la isla, se encuentran mecidos por las pleamares y bajamares, en la laguna interior, y el túnel de la Atlántida, que se adentra interminable en el azul del Atlántico.\n*Ayúdenos a proteger su entorno: está totalmente prohibido lanzar monedas u otros objetos a la laguna interior.\nJameos del Agua es el primer Centro de Arte, Cultura y Turismo creado por César Manrique, y es, para muchos, el paradigma de su ideario estético: la armonía entre la naturaleza y la creación artística."
    }
  }

  public getSideArticle1():any {
    return {
      "title": "Parque Nacional del Teide",
      "link": "",
      "rating": 3,
      "imageURL": "https://www.volcanoteide.com/fimg/tf8-16teidenievemostazalimp.jpg",
      "altText": "m4",
      "content": "El Parque Nacional del Teide, es el mayor de Canarias. Es una excursión obligada para todos los que visiten Tenerife.\n\nUn paisaje único de cráteres, volcanes y ríos de lava petrificada que rodean la impresionante silueta del Volcán Teide, que se alza hasta los 3.718 m de altitud. Los visitantes encuentran numerosos servicios que les permiten conocer y disfrutar de este espacio: cómodos accesos por carretera que cruza todo el Parque, dos centros de visitantes que desvelan algunos de sus secretos, una zona de restaurantes para reponer fuerzas, numerosos miradores que permiten componer una completa panorámica, una extensa red de senderos para los visitantes que deseen adentrarse en el Parque e incluso dos alojamientos, el Parador Nacional de Las Cañadas del Teide y el Refugio de Altavista a 3.270 metros de altitud.\n\n     \n\nEl Parque Nacional del Teide es una de las grandes maravillas del mundo, con la ventaja de su fácil acceso y de estar relativamente cerca de los países europeos.\n\nTodo el Parque es un extraordinario tesoro geológico en el que los volcanes, cráteres, chimeneas, coladas de lava y productos diversos, forman un impresionante conjunto de colores y formas. Las Cañadas del Teide sorprende por su diversidad, inquieta por sus enormes ríos de lava petrificada e impresiona por sus rocas derruidas por la erosión y por las colosales dimensiones de este caos mineral. Como contraste, en primavera ofrece un maravilloso jardín lleno de flores y suaves aromas, único en el mundo.\n\nLa estructura dominante es el Teide, imponente edificio volcánico que ofrece un aspecto muy distinto según el lugar o la época en que sea observado, deleitando siempre al espectador con sus múltiples caras. A sus pies se extiende un mar de rocas volcánicas tan recientes, que la erosión no ha tenido tiempo de alterar, conformando un amplio catálogo de formas y materiales volcánicos contenidos en el gran anfiteatro definido por la pared de Las Cañadas.\n\nLa pared que lo circunda se prolonga a lo largo de 25 Km. con alturas que llegan a 600m en la zona conocida como Guajara, su punto culminante. Este corte natural afecta a lo que fue otro edificio volcánico anterior, que desapareció parcialmente cuando, hace 198.000 años, se formó la actual depresión de Las Cañadas por un deslizamiento gigante que dejó al descubierto, en la zona de Los Roques, parte de sus raíces, representadas por conductos y chimeneas volcánicas que alimentaron erupciones pasadas.\n\nEn el corte de la pared, quedan a la vista tres millones de años de compleja historia geológica en la que el ciclo, deslizamiento y formación de “un Teide”, se pudo repetir varias veces.\n\nEl Parque Nacional, situado en el centro de la isla de Tenerife, es el mayor y más antiguo de los cuatro existentes en Canarias. En su superficie de 190 Km2 (18.990 hectáreas) se alza el Teide hasta los 3.718 m., constituyendo la cota más alta de España.\n\nFue declarado Parque Nacional en 1954 y en 1989 recibió el Diploma Europeo a la Conservación en su categoría máxima. Posee dos centros de visitantes, uno en el Portillo y otro en el Parador Nacional, dedicados respectivamente a la naturaleza y a los usos tradicionales de Las Cañadas. En 2007 fue declarado por la UNESCO Patrimonio Mundial."
    }
  }

  public getSideArticle2():any {
    return {
      "title": "Cueva del Viento",
      "link": "",
      "rating": 5,
      "imageURL": "https://cuevadelviento.net/wp-content/uploads/2021/02/interior1.jpg",
      "altText": "m5",
      "content": "La Cueva del Viento es una cavidad volcánica enclavada en el barrio de Icod de los Vinos que lleva el mismo nombre. Se formó hace 27.000 años en lavas basálticas procedentes de la primera fase eruptiva del volcán Pico Viejo, situado junto al Teide (Tenerife, Islas Canarias).\n\nEste tubo volcánico, cuyo nombre se debe a las importantes corrientes de aire que se producen en su interior, es el quinto más largo del mundo (18,5 kilómetros topografiados) tras los cuatro primeros que se encuentran en la isla mayor del archipiélago de Hawaii (Estados Unidos). Constituye una enorme red laberíntica de pasajes subterráneos, siendo innumerables las ramificaciones aún sin explorar que permitirán ampliar su longitud en el futuro.\n\nLa Cueva del Viento también destaca por sus características geomorfológicas únicas, ya que su red de galerías se dispone en tres niveles superpuestos, fenómeno que no está descrito en ningún otro lugar del mundo. Además, presenta una amplia variedad de estructuras de origen primario tales como goterones de lava, cascadas lávicas, terrazas laterales y lagos de lava, entre otras, así como concreciones exógenas de diferente composición (carbonato cálcico y otras sales).\n\nLa mayor relevancia biológica de esta intrincada cavidad volcánica es su fauna subterránea, que constituye una fuente constante de nuevos hallazgos. La cueva alberga un total de 92 especies conocidas, la mayoría invertebrados. De éstas, 32 son troglobias, esto es, animales adaptados al medio subterráneo. Entre estas especies condenadas a vivir en la oscuridad, 15 han resultado ser nuevas para la ciencia, como la cucaracha sin ojos Loboptera subterranea o los carábidos Wolltinerfia martini y Wolltinerfia tenerifae.\n\nEn su interior también se encuentran algunos restos fósiles de animales vertebrados ya extinguidos, como la rata y el lagarto gigantes, y otros restos óseos de especies ya desaparecidas en Tenerife, como la graja y la hubara.\n\nEl Gobierno de Canarias aprobó, en 1998, para garantizar su conservación, un Plan de Ordenación de los Recursos Naturales de la Cueva del Viento, paso previo a su declaración como Reserva Natural Especial. El Plan nació para frenar las actuaciones que dañan a la Cueva, como nuevas construcciones, alteración del suelo o cualquier tipo de vertido. Además establece medidas de mejora, como una red de alcantarillado que evite el vertido de aguas negras y el apoyo a la investigación científica o a la educación ambiental."
    }
  }

  public getAdditionalArticles():any[] {
    return [
      {
        "title": "Dunas de Maspalomas",
        "link": "",
        "rating": 2,
        "imageURL": "https://www.holaislascanarias.com/sites/default/files/styles/masonry_image/public/resources/resource_image/dunas_de_maspalomas-gran_canaria_0.jpg?itok=riwdgrlH",
        "altText": "m6",
        "content": "Las Dunas de Maspalomas es un espacio natural único en las Islas Canarias por su belleza y la variedad de ecosistemas que alberga. Protegido por el Gobierno de Canarias como reserva natural especial, sus 400 hectáreas engloban una excelente playa, un campo de dunas vivas de arena orgánica, un bosque de palmeras y una laguna salobre. Esta mezcla de desierto y oasis se encuentra en la costa del extremo sur de Gran Canaria y está rodeada de los afamados establecimientos hoteleros del gran núcleo turístico de Maspalomas.\nQué hacer en las Dunas de Maspalomas\nPara conocer mejor este paraje natural, conviene visitar su centro de información y el mirador, ambos ubicados en el Hotel Riu Palace, en el sector nordeste de Maspalomas conocido como Playa del Inglés. Desde allí sale un sendero cuyo ramal número 3 atraviesa los distintos tipos de dunas de la reserva y llega hasta la extensa y soleada playa de Maspalomas. Desde allí se puede ir a observar la abundante vida salvaje de la Charca y disfrutar de la refrescante sombra del Palmeral."
      },
      {
        "title": "Caldera de Taburiente",
        "link": "",
        "rating": 5,
        "imageURL": "https://www.holaislascanarias.com/sites/default/files/resources/list_image/Imagen-listado-Parque-Nacional-Caldera-de-Taburiente.jpg",
        "altText": "m7",
        "content": "Las Dunas de Maspalomas es un espacio natural único en las Islas Canarias por su belleza y la variedad de ecosistemas que alberga. Protegido por el Gobierno de Canarias como reserva natural especial, sus 400 hectáreas engloban una excelente playa, un campo de dunas vivas de arena orgánica, un bosque de palmeras y una laguna salobre. Esta mezcla de desierto y oasis se encuentra en la costa del extremo sur de Gran Canaria y está rodeada de los afamados establecimientos hoteleros del gran núcleo turístico de Maspalomas.\nQué hacer en las Dunas de Maspalomas\nPara conocer mejor este paraje natural, conviene visitar su centro de información y el mirador, ambos ubicados en el Hotel Riu Palace, en el sector nordeste de Maspalomas conocido como Playa del Inglés. Desde allí sale un sendero cuyo ramal número 3 atraviesa los distintos tipos de dunas de la reserva y llega hasta la extensa y soleada playa de Maspalomas. Desde allí se puede ir a observar la abundante vida salvaje de la Charca y disfrutar de la refrescante sombra del Palmeral."
      }
    ]
  }

  public getArticles():any[] {
    return [
      {
        "title": "Caldera de Bandama",
        "link": "",
        "rating": 3,
        "imageURL": "https://www.grancanaria.com/turismo/fileadmin/user_upload/DSC_0110_0001.jpg",
        "altText": "Caldera de Bandama",
        "content": "¡Que no te asuste hundirte! Recorre distintos significados a los que usamos, hay mucho por conocer... La isla de Gran Canaria te invita a descubrir nuevos horizontes y cómo no, profundidades. A nuestro viajero explorador le gusta dar la vuelta a las cosas, y por lo tanto, también a la isla.\nLa caldera de Bandama es una gran depresión de unos 200 metros de profundidad, el diámetro del borde superior es de unos 1.100 metros y su perímetro supera los 3 kilómetros. Los senderos invitan a pasear por ella pudiendo bordearla o bajar hasta el fondo, allí donde a poca profundidad aún se mantienen temperaturas elevadas por lo que, se sabe que su origen es relativamente reciente.\nEl nombre Bandama no es de origen prehispánico, sino que procede de Daniel Van Dam, uno de los colonos flamencos que poblaron esta comarca en el siglo XVI, y que se dedicó a plantar viñas en su interior. Es muy probable que antes de la conquista de la isla, los antiguos canarios ya cultivaran el fondo, pues a media altura de la pared norte existe un interesante yacimiento arqueológico, con cuevas de habitación y silos para guardar grano.\nHoy las viñas siguen siendo representativas del municipio de Santa Brígida, en el que se hunde La Caldera, numerosas fincas de los alrededores, zona conocida como Monte Lentiscal, producen vino y aún hoy en día se pueden degustar los magníficos caldos obtenidos de esas uvas criadas sobre negros picones.\nDe toda la zona, antiguamente denominada Bosque del Lentiscal por conformar un monte termófilo con una potente vegetación que fue desmantelada tras la colonización para el aprovechamiento de la madera, sin duda el Pico de Bandama y La Caldera (un hundimiento y no un cráter, como pudiera parecer) constituyen sus más espectaculares hitos orográficos, lugares de imprescindible visita.\n“Este es el cráter más perfecto de Canarias, una depresión cóncava de tierra y rocas de una uniformidad como solo la naturaleza sabe crear...”, describió un viajero británico, Charles Edwardes en 1888.\nTambién tú puedes disfrutarlo y describirlo. Te deseamos un feliz hundimiento en la tierra y la belleza Gran Canaria."
      },
      {
        "title": "Roque Nublo",
        "link": "",
        "rating": 4,
        "imageURL": "https://www.holaislascanarias.com/sites/default/files/styles/colorbox_image/public/resources/resource_image/roque_nublo-gran_canaria_1.jpg?itok=0fhiYrki",
        "altText": "m2",
        "content": "Monumento natural de importancia ancestral\nSituado en el municipio central de Tejeda, en la isla de Gran Canaria, el Roque Nublo es considerado una de las peñas naturales más grandes del mundo. De especial significado para los isleños, este roque de origen volcánico se eleva ochenta metros sobre su base y 1.813 metros sobre el mar. Antiguo lugar de culto para los aborígenes, todo su entorno fue declarado espacio natural protegido en 1987 y parque rural siete años después. Su enorme presencia solo es superada en altura por el pico de Las Nieves, con 1.949 metros, el lugar más elevado de Gran Canaria.\nTrekking con vistas de las cumbres de Gran Canaria\nLa ruta del Roque Nublo nace en la carretera general, desde donde se recorren 1,5 kilómetros hasta llegar a las cercanías de este monumento singular y de su hermano, el roque de La Rana. Antes se pasa por otro elemento natural destacado, el roque de El Fraile. Este trekking también permite contemplar las localidades de Artenara y Acusa. Las vistas de la caldera de Tejeda, Llanos de la Pez y Pozo de las Nieves compensan el esfuerzo del recorrido."
      },
      {
        "title": "Jameos del Agua",
        "link": "",
        "rating": 5,
        "imageURL": "https://imgcact.b-cdn.net/spai/w_1425+q_lossy+ret_img+to_webp/https://cactlanzarote.b-cdn.net/wp-content/uploads/2016/02/noches-de-jameos-1972-1920.jpg",
        "altText": "m3",
        "content": "Jameos del Agua es el lugar del planeta en el que decidieron abrazarse la naturaleza y el hombre.\nCésar Manrique supo imaginar y transformar lo que era el desplome del techo de un tubo volcánico por el que corrió la lava procedente del Volcán de la Corona, en un espacio único en el mundo. Su mente privilegiada y sus manos llenas de vida modelaron el agreste y negro basalto para dar forma a un lugar en el que reinan armonía, belleza y paz. El blanco, azul, verde y negro, los colores que Manrique regaló a su isla, se entremezclan a lo largo de un recorrido singular y de extraordinaria belleza, que lleva a soñar e imaginar.\nDesde el fresco acceso bañado por el verdor de grandes helechos que acunan el canto de pequeñas aves, hasta su original auditorio, único en el mundo por sus características geológicas y condiciones acústicas, cada detalle de Jameos del Agua es una continua invitación a la introspección y la ensoñación.\nLos cangrejos ciegos (Munidopsis Polimorpha)*, especie endémica de la isla, se encuentran mecidos por las pleamares y bajamares, en la laguna interior, y el túnel de la Atlántida, que se adentra interminable en el azul del Atlántico.\n*Ayúdenos a proteger su entorno: está totalmente prohibido lanzar monedas u otros objetos a la laguna interior.\nJameos del Agua es el primer Centro de Arte, Cultura y Turismo creado por César Manrique, y es, para muchos, el paradigma de su ideario estético: la armonía entre la naturaleza y la creación artística."
      },
      {
        "title": "Parque Nacional del Teide",
        "link": "",
        "rating": 3,
        "imageURL": "https://www.volcanoteide.com/fimg/tf8-16teidenievemostazalimp.jpg",
        "altText": "m4",
        "content": "El Parque Nacional del Teide, es el mayor de Canarias. Es una excursión obligada para todos los que visiten Tenerife.\n\nUn paisaje único de cráteres, volcanes y ríos de lava petrificada que rodean la impresionante silueta del Volcán Teide, que se alza hasta los 3.718 m de altitud. Los visitantes encuentran numerosos servicios que les permiten conocer y disfrutar de este espacio: cómodos accesos por carretera que cruza todo el Parque, dos centros de visitantes que desvelan algunos de sus secretos, una zona de restaurantes para reponer fuerzas, numerosos miradores que permiten componer una completa panorámica, una extensa red de senderos para los visitantes que deseen adentrarse en el Parque e incluso dos alojamientos, el Parador Nacional de Las Cañadas del Teide y el Refugio de Altavista a 3.270 metros de altitud.\n\n     \n\nEl Parque Nacional del Teide es una de las grandes maravillas del mundo, con la ventaja de su fácil acceso y de estar relativamente cerca de los países europeos.\n\nTodo el Parque es un extraordinario tesoro geológico en el que los volcanes, cráteres, chimeneas, coladas de lava y productos diversos, forman un impresionante conjunto de colores y formas. Las Cañadas del Teide sorprende por su diversidad, inquieta por sus enormes ríos de lava petrificada e impresiona por sus rocas derruidas por la erosión y por las colosales dimensiones de este caos mineral. Como contraste, en primavera ofrece un maravilloso jardín lleno de flores y suaves aromas, único en el mundo.\n\nLa estructura dominante es el Teide, imponente edificio volcánico que ofrece un aspecto muy distinto según el lugar o la época en que sea observado, deleitando siempre al espectador con sus múltiples caras. A sus pies se extiende un mar de rocas volcánicas tan recientes, que la erosión no ha tenido tiempo de alterar, conformando un amplio catálogo de formas y materiales volcánicos contenidos en el gran anfiteatro definido por la pared de Las Cañadas.\n\nLa pared que lo circunda se prolonga a lo largo de 25 Km. con alturas que llegan a 600m en la zona conocida como Guajara, su punto culminante. Este corte natural afecta a lo que fue otro edificio volcánico anterior, que desapareció parcialmente cuando, hace 198.000 años, se formó la actual depresión de Las Cañadas por un deslizamiento gigante que dejó al descubierto, en la zona de Los Roques, parte de sus raíces, representadas por conductos y chimeneas volcánicas que alimentaron erupciones pasadas.\n\nEn el corte de la pared, quedan a la vista tres millones de años de compleja historia geológica en la que el ciclo, deslizamiento y formación de “un Teide”, se pudo repetir varias veces.\n\nEl Parque Nacional, situado en el centro de la isla de Tenerife, es el mayor y más antiguo de los cuatro existentes en Canarias. En su superficie de 190 Km2 (18.990 hectáreas) se alza el Teide hasta los 3.718 m., constituyendo la cota más alta de España.\n\nFue declarado Parque Nacional en 1954 y en 1989 recibió el Diploma Europeo a la Conservación en su categoría máxima. Posee dos centros de visitantes, uno en el Portillo y otro en el Parador Nacional, dedicados respectivamente a la naturaleza y a los usos tradicionales de Las Cañadas. En 2007 fue declarado por la UNESCO Patrimonio Mundial."
      },
      {
        "title": "Cueva del Viento",
        "link": "",
        "rating": 5,
        "imageURL": "https://cuevadelviento.net/wp-content/uploads/2021/02/interior1.jpg",
        "altText": "m5",
        "content": "La Cueva del Viento es una cavidad volcánica enclavada en el barrio de Icod de los Vinos que lleva el mismo nombre. Se formó hace 27.000 años en lavas basálticas procedentes de la primera fase eruptiva del volcán Pico Viejo, situado junto al Teide (Tenerife, Islas Canarias).\n\nEste tubo volcánico, cuyo nombre se debe a las importantes corrientes de aire que se producen en su interior, es el quinto más largo del mundo (18,5 kilómetros topografiados) tras los cuatro primeros que se encuentran en la isla mayor del archipiélago de Hawaii (Estados Unidos). Constituye una enorme red laberíntica de pasajes subterráneos, siendo innumerables las ramificaciones aún sin explorar que permitirán ampliar su longitud en el futuro.\n\nLa Cueva del Viento también destaca por sus características geomorfológicas únicas, ya que su red de galerías se dispone en tres niveles superpuestos, fenómeno que no está descrito en ningún otro lugar del mundo. Además, presenta una amplia variedad de estructuras de origen primario tales como goterones de lava, cascadas lávicas, terrazas laterales y lagos de lava, entre otras, así como concreciones exógenas de diferente composición (carbonato cálcico y otras sales).\n\nLa mayor relevancia biológica de esta intrincada cavidad volcánica es su fauna subterránea, que constituye una fuente constante de nuevos hallazgos. La cueva alberga un total de 92 especies conocidas, la mayoría invertebrados. De éstas, 32 son troglobias, esto es, animales adaptados al medio subterráneo. Entre estas especies condenadas a vivir en la oscuridad, 15 han resultado ser nuevas para la ciencia, como la cucaracha sin ojos Loboptera subterranea o los carábidos Wolltinerfia martini y Wolltinerfia tenerifae.\n\nEn su interior también se encuentran algunos restos fósiles de animales vertebrados ya extinguidos, como la rata y el lagarto gigantes, y otros restos óseos de especies ya desaparecidas en Tenerife, como la graja y la hubara.\n\nEl Gobierno de Canarias aprobó, en 1998, para garantizar su conservación, un Plan de Ordenación de los Recursos Naturales de la Cueva del Viento, paso previo a su declaración como Reserva Natural Especial. El Plan nació para frenar las actuaciones que dañan a la Cueva, como nuevas construcciones, alteración del suelo o cualquier tipo de vertido. Además establece medidas de mejora, como una red de alcantarillado que evite el vertido de aguas negras y el apoyo a la investigación científica o a la educación ambiental."
      },
      {
        "title": "Dunas de Maspalomas",
        "link": "",
        "rating": 2,
        "imageURL": "https://www.holaislascanarias.com/sites/default/files/styles/masonry_image/public/resources/resource_image/dunas_de_maspalomas-gran_canaria_0.jpg?itok=riwdgrlH",
        "altText": "m6",
        "content": "Las Dunas de Maspalomas es un espacio natural único en las Islas Canarias por su belleza y la variedad de ecosistemas que alberga. Protegido por el Gobierno de Canarias como reserva natural especial, sus 400 hectáreas engloban una excelente playa, un campo de dunas vivas de arena orgánica, un bosque de palmeras y una laguna salobre. Esta mezcla de desierto y oasis se encuentra en la costa del extremo sur de Gran Canaria y está rodeada de los afamados establecimientos hoteleros del gran núcleo turístico de Maspalomas.\nQué hacer en las Dunas de Maspalomas\nPara conocer mejor este paraje natural, conviene visitar su centro de información y el mirador, ambos ubicados en el Hotel Riu Palace, en el sector nordeste de Maspalomas conocido como Playa del Inglés. Desde allí sale un sendero cuyo ramal número 3 atraviesa los distintos tipos de dunas de la reserva y llega hasta la extensa y soleada playa de Maspalomas. Desde allí se puede ir a observar la abundante vida salvaje de la Charca y disfrutar de la refrescante sombra del Palmeral."
      },
      {
        "title": "Caldera de Taburiente",
        "link": "",
        "rating": 5,
        "imageURL": "https://www.holaislascanarias.com/sites/default/files/resources/list_image/Imagen-listado-Parque-Nacional-Caldera-de-Taburiente.jpg",
        "altText": "m7",
        "content": "Las Dunas de Maspalomas es un espacio natural único en las Islas Canarias por su belleza y la variedad de ecosistemas que alberga. Protegido por el Gobierno de Canarias como reserva natural especial, sus 400 hectáreas engloban una excelente playa, un campo de dunas vivas de arena orgánica, un bosque de palmeras y una laguna salobre. Esta mezcla de desierto y oasis se encuentra en la costa del extremo sur de Gran Canaria y está rodeada de los afamados establecimientos hoteleros del gran núcleo turístico de Maspalomas.\nQué hacer en las Dunas de Maspalomas\nPara conocer mejor este paraje natural, conviene visitar su centro de información y el mirador, ambos ubicados en el Hotel Riu Palace, en el sector nordeste de Maspalomas conocido como Playa del Inglés. Desde allí sale un sendero cuyo ramal número 3 atraviesa los distintos tipos de dunas de la reserva y llega hasta la extensa y soleada playa de Maspalomas. Desde allí se puede ir a observar la abundante vida salvaje de la Charca y disfrutar de la refrescante sombra del Palmeral."
      }
    ]
  }
}
