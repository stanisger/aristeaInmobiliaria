
var content = document.querySelector('#content');
var menuBar = document.querySelector('.navbar-collapse');


var templeteHome = '<div id="carousel-example-generic" data-ride="carousel" class="carousel slide bgBlack">'+
				    '<ol class="carousel-indicators">' +
				      '<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>' +
				      '<li data-target="#carousel-example-generic" data-slide-to="1"></li>' +
				    '</ol>'+
				    '<div role="listbox" class="carousel-inner fadeInUp animated">'+
				      '<div class="item active">'+
				        '<h1 class="ColorWhite bold upper textCenter bgRed">aristea</h1>'+
				         '<div class="clear"> </div>'+
				      '</div>'+
				      '<div class="item">'+
				        '<h1 class="ColorWhite bold upper textCenter bgRed">aristea</h1>'+
				        '<div class="clear"></div>'+
				      '</div>'+
				    '</div>'+
				  '</div>'+
				  '<section class="one bgWhite">'+
				    '<div class="subtitle bold colorBlack textCenter">Aristea Desarrollos es una empresa diseñada para proporcionar servicios integrales para la ejecución de <br>proyectos inmobiliarios. </div>'+
				    '<div class="text thing colorBlack textCenter">Contamos con más de 30 años de experiencia en el sector, elaborando sólidas estrategias de bienes raíces <br>en vivienda, desarrollos comerciales y corporativos.</div>'+
				    '<div class="text thing colorBlack textCenter">Ofrecemos soluciones basándonos en 3 pilares: <br> <span class="ColorRed">•</span> Gestión Inmobiliaria <br><span class="ColorRed">•</span> Dirección de construcción <br><span class="ColorRed">•</span> Comercialización de los proyectos.</div>'+
				    '<div class="text thing colorBlack textCenter">Estamos orgullosos de proporcionar a nuestros clientes e inversionistas soluciones exitosas en el sector.</div>'+
				  '</section>'+

				  '<section class="second relative">'+
				    '<article>'+
				      '<div class="groupTitle textCenter boxRed">'+
				        '<h2 class="subtitle light upper ColorWhite">DESARROLLO </h2>'+
				        '<h1 class="titleMedium upper bold ColorBlack">INMOBILIARIO</h1>'+
				      '</div>'+
				      '<p class="text ColorWhite thing"> La gestión inmobiliaria comprende 3 grandes rubros: armado, operación y cierre del proyecto.</p>'+
				      '<a href="/aristeaInmobiliaria/desarrollo-inmobiliario"  class="btn-general ColorWhite bgBlack upper text-center bold btn-color-after-black hover-red-bg">conoce más</a>'+
				    '</article>'+
				  '</section>'+


				  '<section class="third">'+
				    '<article class="bgBlack">'+
				      '<div class="groupTitle textCenter boxBlack">'+
				        '<h1 class="titleMedium upper bold ColorWhite">COMERCIALIZACIÓN</h1>'+
				      '</div>'+
				      '<p class="text ColorWhite thing"> Implementación y ejecución de todo el proceso comercial para vivienda, centros comerciales y corporativos.</p>'+
				      '<a href="/aristeaInmobiliaria/comercializacion" class="btn-general-left ColorWhite bgRed upper text-center bold btn-color-after-red hover-white-bg">conoce más</a>'+
				    '</article>'+
				  '</section>'+

				  '<section class="fourt">'+
				    '<article>'+
				      '<div class="groupTitle textCenter boxGrey">'+
				        '<h1 class="titleMedium upper bold ColorBlack">CONSTRUCCIÓN</h1>'+
				      '</div>'+
				      '<p class="text ColorBlack thing"> Coordinación, Supervisión y Control de todos los trabajos realizados en la construcción de los proyectos.</p>'+
				      '<a href="/aristeaInmobiliaria/construccion"  class="btn-general ColorWhite bgRed upper text-center bold btn-color-after-red hover-black-bg">conoce más</a>'+
				    '</article>'+
				  '</section>';

var templeteDesarrollos = '<section class="eyecatcherIn relative" style="background: url(./assets/img/interna-desarrollo-inmobiliraio.jpg) center;">'+
						  '<div class="containerFluidMedium">'+
						    '<div class="groupTitle textCenter boxBlackTransparent boxBlackExtraLarge">'+
						      '<h1 class="titleMediumIn upper bold ColorWhite">DESARROLLO INMOBILIARIO</h1>'+
						    '</div>'+
						  '</div>'+
						'</section>'+
						'<section class="mainIn bgWhite">'+
						  '<div class="containerFluidMedium conetentReset">'+
						    '<h2 class="subtitleIn ColorRed medium">En Aristea Desarrollos ejecutamos proyectos inmobiliarios integrales gestionando todo el proceso para la realización de un desarrollo.</h2>'+
						    '<br>'+'<br>'+
						    '<p class="text upper bold">armado del proyecto</p>'+
						     '<br>'+'<br>'+
						    '<div class="row">'+
						      '<ul class="col-xs-12 col-sm-6 generalUl text ColorBlack light">'+
						        '<li>Identificación del sitio.</li>'+
						        '<li>Análisis de la factibilidad del sitio desde el punto de vista: legal, técnico, y comercial.</li>'+
						        '<li>Análisis de los usos y densidades permitidos en el sitio.</li>'+
						        '<li>Conceptualización del proyecto a desarrollar.</li>'+
						      '</ul>'+
						      '<ul class="col-xs-12 col-sm-6 generalUl text ColorBlack light">'+
						        '<li>Evaluación Financiera del Proyecto.</li>'+
						        '<li>Diseño Arquitectónico Conceptual.</li>'+
						        '<li>Plan de Negocios.</li>'+
						      '</ul>'+
						    '</div>'+
						  '</div>'+
						'</section>'+
						'<section class="mainorIn" style="background:  url(assets/img/interna-lg-desarrollo-inmobiliraio.jpg) center;">'+
						  '<article class="bgBlack in">'+
						    '<div class="textoReset">'+
						      '<h2 class="ColorRed Bold upper subtitleIn">operación del proyecto</h2>'+ '<br>'+'<br>'+
						      '<ul class="generalUl">'+
						        '<li class="ColorWhite textInter thing">Gestoría, estudios y licencias.</li>'+
						        '<li class="ColorWhite textInter thing">Proyecto ejecutivo arquitectónico y de ingenierías.</li>'+
						        '<li class="ColorWhite textInter thing">Coordinación para la Dirección de construcción, Dirección comercial, asesores y proveedores.</li>'+
						        '<li class="ColorWhite textInter thing">Control y supervisión del cumplimiento de Plan de Negocios.</li>'+
						        '<li class="ColorWhite textInter thing">Relación con la autoridad y los Inversionistas.</li>'+
						      '</ul>'+
						    '</div>'+
						  '</article>'+
						'</section>'+
						'<section class="mainInTwo bgGreyLight list">'+
						 ' <div class="containerFluidMedium conetentReset">'+ '<br>'+'<br>'+'<br>'+'<br>'+
						    '<h2 class="subtitleIn ColorBlack medium upper">cierre de proyecto</h2>'+'<br>'+'<br>'+'<br>'+'<br>'+
						    '<div class="row">'+
						     ' <ul class="col-xs-12 defaultUl col-sm-6 text ColorBlack light">'+
						        '<li class="light row">'+
						           '<span class="icon flaticon-hand-holding-up-a-key ColorRed col-xs-2"> </span>'+
						           '<p class="light col-xs-9 textInter">'+
						             '<strong>Entrega de espacio </strong>'+ '(vivienda y/o comerciales) a los clientes.</p>'+
						        '</li>'+
						        '<li class="light row">'+
						           '<span class="icon flaticon-city ColorRed col-xs-2"> </span>'+
						          '<p class="light col-xs-9 textInter">'+'<strong>Entrega del inmueble 	</strong>'+ 'a la empresa que los administrará.</p>'+
						        '</li>'+
						      '</ul>'+

						      '<ul class="col-xs-12 defaultUl col-sm-6 text ColorBlack light">'+
						        '<li class="light row">'+
						          '<span class="icon flaticon-male-worker-behind-a-desk ColorRed col-xs-2"> </span>'+
						          '<p class="light col-xs-9 textInter">'+'<strong>Cierre administrativo</strong>'+' ante las autoridades</p>'+
						        '</li>'+
						        '<li class="light row">'+
						          '<span class="icon flaticon-group-of-businessmen ColorRed col-xs-2"> </span>'+
						          '<p class="light col-xs-9 textInter">'+'<strong>Cierre Administrativo</strong>'+' con los Inversionistas.</p>'+
						        '</li>'+
						      '</ul>'+
						    '</div>'+ '<br>'+
						  '</div>'+
						'</section>'+
						'<section class="callToAction bgRed">'+
						  '<div class="containerFluidMedium row">'+
						    '<div class="text light ColorWhite col-xs-12 col-sm-7 col-md-7 col-lg-8">'+' <strong class="ColorWhite"> Aristea Desarrollos</strong> te ofrece un servicio integral para la ejecución de un proyecto en el sector inmobiliario.</div>'+
						    '<div class="border col-xs-12 col-sm-1">'+'</div>'+'<br>'+
						     '<a href="/aristeaInmobiliaria/contacto"  class="btn-general-reset center bgBlack ColorWhite hover-red-bg upper col-xs-12 col-sm-3 col-md-4 col-lg-3">contáctanos</a>'+
						  '</div>'+
						'</section>';

var templeteComercializacion = '<section class="eyecatcherIn relative" style="background: url(./assets/img/interna-comercializacion.jpg) center;">'+
						  '<div class="containerFluidMedium">'+
						    '<div class="groupTitle textCenter boxBlackTransparent boxBlackLarge">'+
						      '<h1 class="titleMediumIn upper bold ColorWhite">COMERCIALIZACIÓN</h1>'+
						    '</div>'+
						  '</div>'+
						'</section>'+
						'<section class="mainIn bgWhite">'+
						'<br>'+'<br>'+
						  '<div class="containerFluidMedium conetentReset">'+
						    '<h2 class="subtitleIn ColorRed medium">Aristea Desarrollos cuenta con una amplia experiencia en la comercialización de desarrollos inmobiliarios habitacionales, centros comerciales, oficinas corporativas y parques industriales.</h2>'+
						    '<br>'+'<br>'+
						    '<h2 class="subtitleIn ColorBalck medium">Nuestra experiencia nos permite dirigir y operar integralmente el proceso comercial, desde la definición del proyecto a construir así como los productos a desarrollar.</h2>'+
						    '<br>'+'<br>'+
						    '<p class="light text">Elaboramos la estrategia comercial más adecuada tomando en cuenta los siguientes puntos:</p>'+
						     '<br>'+'<br>'+
						    '<div class="row">'+
						      '<ul class="col-xs-12 col-sm-6 generalUl text ColorBlack light">'+
						        '<li>Análisis del mercado para identificar oportunidades y preferencias de consumo del público objetivo.</li>'+
						        '<li>Monitoreo estricto de la competencia.</li>'+
						      '</ul>'+
						      '<ul class="col-xs-12 col-sm-6 generalUl text ColorBlack light">'+
						        '<li>Establecimiento de canales de venta.</li>'+
						        '<li>Definición de acciones puntuales de ejecución.</li>'+
						      '</ul>'+
						    '</div>'+
						  '</div>'+'<br>'+'<br>'+'<br>'+'<br>'+
						'</section>'+
						'<section class="mainorIn" style="background: url(./assets/img/interna-lg-comercializacion.jpg) center;">'+
						  '<article class="bgBlack in">'+
						    '<div class="textoReset">'+
						      '<h2 class="ColorRed Bold upper subtitleIn">Alcances de los servicios de comercialización:</h2>'+ '<br>'+'<br>'+
						      '<ul class="generalUl">'+
						        '<li class="ColorWhite textInter thing">Opinión comercial sobre la adquisición de nuevos terrenos.</li>'+
						        '<li class="ColorWhite textInter thing">Revisión del proyecto desde el punto de vista del consumidor final.</li>'+
						        '<li class="ColorWhite textInter thing">Estudio y análisis del público objetivo.</li>'+
						        '<li class="ColorWhite textInter thing">Coordinación para la creación de marca e imagen del proyecto.</li>'+
						        '<li class="ColorWhite textInter thing">Campaña de publicidad, creación de aplicaciones y promoción del desarrollo.</li>'+
						        '<li class="ColorWhite textInter thing">Capacitación de ventas, carpeta legal, contratos, negociaciones y ofertas.</li>'+
						        '<li class="ColorWhite textInter thing">Reporteo periódico del detalle de la operación y venta.</li>'+
						      '</ul>'+
						    '</div>'+
						  '</article>'+
						'</section>'+
						'<section class="mainInTwo bgGreyLight list">'+
						 ' <div class="containerFluidMedium conetentReset">'+ '<br>'+'<br>'+'<br>'+'<br>'+
						    '<h2 class="subtitleIn ColorBlack medium upper">El proceso de operación comercial incluyendo el monitoreo de todos los indicadores es el siguiente:</h2>'+'<br>'+'<br>'+'<br>'+'<br>'+
						    '<div class="row">'+
						     ' <ul class="col-xs-12 defaultUl col-sm-6 text ColorBlack light">'+
						        '<li class="light row">'+
						           '<span class="icon flaticon-businessman-discussing-a-business-report ColorRed col-xs-2"> </span>'+
						           '<p class="light col-xs-9 textInter">'+
						             '<strong>Capacitación </strong>'+ 'de prospectos.</p>'+
						        '</li>'+
						        '<li class="light row">'+
						           '<span class="icon flaticon-money-1 ColorRed col-xs-2"> </span>'+
						          '<p class="light col-xs-9 textInter">'+'<strong>Seguimiento de ventas </strong>'+ 'y negociaciones de condiciones de pago.</p>'+
						        '</li>'+
						        '<li class="light row">'+
						          '<span class="icon flaticon-signature-with-a-pen ColorRed col-xs-2"> </span>'+
						          '<p class="light col-xs-9 textInter">'+ '<strong>Firma </strong>'+ 'de contrato.</p>'+
						        '</li>'+
						        '<li class="light row">'+
						          '<span class="icon flaticon-group ColorRed col-xs-2"> </span>'+
						          '<p class="light col-xs-9 textInter">'+ '<strong>Administración </strong>'+ 'de cartera de clientes.</p>'+
						        '</li>'+
						      '</ul>'+

						      '<ul class="col-xs-12 defaultUl col-sm-6 text ColorBlack light">'+
						        '<li class="light row">'+
						          '<span class="icon flaticon-money ColorRed col-xs-2"> </span>'+
						          '<p class="light col-xs-9 textInter">'+'<strong>Gestión de </strong>'+' cobranza.</p>'+
						        '</li>'+
						        '<li class="light row">'+
						          '<span class="icon flaticon-house-value ColorRed col-xs-2"> </span>'+
						          '<p class="light col-xs-9 textInter">'+'<strong>Asesoría </strong>'+' en créditos hipotecarios.</p>'+
						        '</li>'+
						        '<li class="light row">'+
						          '<span class="icon flaticon-signing-the-contract ColorRed col-xs-2"> </span>'+
						          '<p class="light col-xs-9 textInter">'+'<strong>Firma </strong>'+' de escrituras.</p>'+
						        '</li>'+
						        '<li class="light row">'+
						          '<span class="icon flaticon-real-estate-business-house-on-a-hand ColorRed col-xs-2"> </span>'+
						          '<p class="light col-xs-9 textInter">'+'<strong>Entrega </strong>'+' y posventa</p>'+
						        '</li>'+
						      '</ul>'+
						    '</div>'+ '<br>'+'<br>'+'<br>'+'<br>'+
						  '</div>'+
						'</section>'+
						'<section class="callToAction bgRed">'+
						  '<div class="containerFluidMedium row">'+
						    '<div class="text light ColorWhite col-xs-12 col-sm-7 col-md-7 col-lg-8">'+'La operación de  <strong class="ColorWhite">Aristea Desarrollos </strong> se basa en diversas metodologías y sistemas probados para cada uno de los procesos de la actividad comercial de bienes raíces.</div>'+
						    '<div class="border col-xs-12 col-sm-1">'+'</div>'+'<br>'+
						     '<a href="/aristeaInmobiliaria/contacto" class="btn-general-reset center bgBlack ColorWhite hover-red-bg upper col-xs-12 col-sm-3 col-md-4 col-lg-3">contáctanos</a>'+
						  '</div>'+
						'</section>';

var templeteConstruccion = '<section class="eyecatcherIn relative" style="background: url(./assets/img/interna-construccion.jpg) center;">'+
						  '<div class="containerFluidMedium">'+
						    '<div class="groupTitle textCenter boxBlackTransparent boxBlackLarge">'+
						      '<h1 class="titleMediumIn upper bold ColorWhite">CONSTRUCCIÓN</h1>'+
						    '</div>'+
						  '</div>'+
						'</section>'+
						'<section class="mainIn bgWhite">'+
						'<br>'+'<br>'+
						  '<div class="containerFluidMedium conetentReset">'+
						    '<h2 class="subtitleIn ColorRed medium">Aristea Desarrollos cuenta con una Dirección de Construcción especializada en coordinar, supervisar y controlar los trabajos internos y externos de construcción del proyecto.</h2>'+
						    '<br>'+'<br>'+
						    '<h2 class="subtitleIn ColorBalck medium">La eficacia de nuestro plan de desarrollo le brinda la seguridad de que su proyecto cumplirá las expectativas de tiempo, costo y diseño.</h2>'+
						    '<br>'+'<br>'+
						    '<p class="light text">Las principales actividades a realizar por la Dirección de Construcción en las diferentes fases del proyecto son:</p>'+
						     '<br>'+'<br>'+
						    '<div class="row">'+
						      '<ul class="col-xs-12 col-sm-6 generalUl text ColorBlack light">'+
						        '<li>Análisis del terreno donde se llevará a cabo el proyecto para entender sus bondades y riesgos desde el punto de vista técnico.</li>'+
						        '<li>Contratación y ejecución del proyecto conceptual tanto de arquitectónico como de ingeniería.</li>'+
						      '</ul>'+
						      '<ul class="col-xs-12 col-sm-6 generalUl text ColorBlack light">'+
						        '<li>Elaboración del presupuesto paramétrico de construcción que servirá como base del Plan de Negocios.</li>'+
						      '</ul>'+
						    '</div>'+
						  '</div>'+'<br>'+'<br>'+'<br>'+'<br>'+
						'</section>'+
						'<section class="mainorIn" style="background: url(./assets/img/interna-lg-construccion.jpg) center;">'+
						  '<article class="bgBlack in">'+
						    '<div class="textoReset">'+
						      '<h2 class="ColorRed Bold upper subtitleIn">EJECUCIÓN</h2>'+ '<br>'+'<br>'+
						      '<ul class="generalUl">'+
						        '<li class="ColorWhite textInter thing">Contratación y ejecución del proyecto ejecutivo, tanto Arquitectónico como de Ingenierías, para trámite de Licencias y ejecución de la obra.</li>'+
						        '<li class="ColorWhite textInter thing">Elaboración de presupuesto base para la ejecución y correcto control de la obra.</li>'+
						        '<li class="ColorWhite textInter thing">Coordinación de todo el proceso de concursos y asignaciones de todos los contratos relacionados con la construcción.</li>'+
						        '<li class="ColorWhite textInter thing">Revisión de avances de obra de todos los contratistas del proyecto</li>'+
						        '<li class="ColorWhite textInter thing">Seguimiento del costo y programa de construcción, siendo responsables de tomar las acciones correctivas cuando sean necesarias.</li>'+
						        '<li class="ColorWhite textInter thing">Responsables de la relación primaria con la autoridad de todo lo relacionado con la licencia de construcción y cumplimiento de normas.</li>'+
						        '<li class="ColorWhite textInter thing">Control administrativo de todos los cambios que se le hagan al proyecto.</li>'+
						      '</ul>'+
						    '</div>'+
						  '</article>'+
						'</section>'+
						'<section class="mainInTwo bgGreyLight list">'+
						 ' <div class="containerFluidMedium conetentReset">'+ '<br>'+'<br>'+'<br>'+'<br>'+
						    '<h2 class="subtitleIn ColorBlack medium upper">Cierre</h2>'+'<br>'+'<br>'+'<br>'+'<br>'+
						    '<div class="row">'+
						     ' <ul class="col-xs-12 defaultUl col-sm-6 text ColorBlack light">'+
						        '<li class="light row">'+
						           '<span class="icon flaticon-businessman-discussing-a-business-report ColorRed col-xs-2"> </span>'+
						           '<p class="light col-xs-9 textInter">'+
						             '<strong>Coordinación y supervisión </strong>'+ ' de los planos “as built” de todo el proyecto.</p>'+
						        '</li>'+
						        '<li class="light row">'+
						           '<span class="icon flaticon-money-1 ColorRed col-xs-2"> </span>'+
						          '<p class="light col-xs-9 textInter">'+'<strong>Cierre administrativo </strong>'+ 'de todos los contratos relacionados con la construcción del proyecto, incluyendo cierres financieros, entregas de fianzas y garantías, y de todo los folletos y guías de operación de los equipos instalados en el proyecto.</p>'+
						        '</li>'+
						        '<li class="light row">'+
						          '<span class="icon flaticon-signature-with-a-pen ColorRed col-xs-2"> </span>'+
						          '<p class="light col-xs-9 textInter">'+ '<strong>Entrega de los espacios </strong>'+ ' a los inquilinos y/o compradores de los mismos.</p>'+
						        '</li>'+
						      '</ul>'+

						      '<ul class="col-xs-12 defaultUl col-sm-6 text ColorBlack light">'+
						        '<li class="light row">'+
						          '<span class="icon flaticon-money ColorRed col-xs-2"> </span>'+
						          '<p class="light col-xs-9 textInter">'+'<strong>Entrega del inmueble </strong>'+' terminado a la entidad que lo va a operar y/o administrar.</p>'+
						        '</li>'+
						        '<li class="light row">'+
						          '<span class="icon flaticon-house-value ColorRed col-xs-2"> </span>'+
						          '<p class="light col-xs-9 textInter">'+'<strong>Cierre administrativo </strong>'+' con las autoridades locales de todos los asuntos relacionados con la licencia de construcción. </p>'+
						        '</li>'+
			
						      '</ul>'+
						    '</div>'+ '<br>'+'<br>'+'<br>'+'<br>'+
						  '</div>'+
						'</section>'+
						'<section class="callToAction bgRed">'+
						  '<div class="containerFluidMedium row">'+
						    '<div class="text light ColorWhite col-xs-12 col-sm-7 col-md-7 col-lg-8">El proceso de construcción de '+'<strong class="ColorWhite">Aristea Desarrollos </strong> le garantiza que su proyecto cumplirá con las normas establecidas para el proceso de la construcción del inmueble.</div>'+
						    '<div class="border col-xs-12 col-sm-1">'+'</div>'+'<br>'+
						     '<a href="/aristeaInmobiliaria/contacto"  class="btn-general-reset center bgBlack ColorWhite hover-red-bg upper col-xs-12 col-sm-3 col-md-4 col-lg-3">contáctanos</a>'+
						  '</div>'+
						'</section>';
var templeteContacto = 
						'<section class="eyecatcherIn relative" style="background: url(./assets/img/interna-generica.jpg) center;">'+
						  '<div class="containerFluidMedium">'+
						    '<div class="groupTitle textCenter boxBlackTransparent boxBlackSmall">'+
						      '<h1 class="titleMediumIn upper bold ColorWhite">CONTACTO</h1>'+
						    '</div>'+
						  '</div>'+
						'</section>'+

						'<section class="mainContact contacto">'+
						  '<div class="conetentReset">'+
						    '<article>'+
						      '<div class="text thing ColorBlack">Para nosotros su comunicación es muy importante, agradeceremos nos brinde los siguientes datos para atenderle mejor.</div>'+'<br>'+'<br>'+
						      '<form>'+
						        '<div class="form-group">'+
						          '<input type="text" placeholder="*Nombre Completo" name="text" class="form-control text">'+
						        '</div>'+
						        '<div class="form-group">'+
						          '<input type="telephone" placeholder="*Teléfono Completo" name="telephone" class="form-control text">'+
						        '</div>'+
						        '<div class="form-group">'+
						          '<input type="mail" placeholder="*E-mail" name="mail" class="form-control text">'+
						        '</div>'+
						        '<div class="form-group">'+
						          '<input type="text" placeholder="*Mensaje" name="mensaje" class="form-control text">'+
						        '</div>'+'<br>'+
						        '<div class="checkbox">'+
						          '<label>'+
						            '<input type="checkbox">He leido y acepto los'+'<a class="ColorRed"> terminos y condicines</a>'+
						          '</label>'+
						        '</div>'+'<br>'+'<br>'+
						        '<a class="btn-general-reset bgRed upper hover-black right ColorWhite regular">ENVIAR</a>'+
						      '</form>'+
						    '</article>'+
						    '<article>'+
						      '<div class="contenido">'+
						        '<div class="groupTitle textCenter boxBlackTransparentTwo">'+
						          '<h3 class="subtitle bold ColorBlack">UBICACIÓN</h3>'+
						        '</div>'+'<br>'+'<br>'+
						        '<ul class="fa-ul">'+
						          '<li>'+'<i class="fa-li fa fa-check-square ColorRed fa-2x"></i>'+
						            '<p class="text thing">+01 800 831 2680 / 52 (55) 5447-7400</p>'+
						          '</li>'+
						          '<li>'+'<i class="fa-li fa fa-check-square ColorRed fa-2x"></i>'+
						            '<p class="text thing">servicios@aristea.com.mx</p>'+
						          '</li>'+
						          '<li>'+'<i class="fa-li fa fa-check-square ColorRed fa-2x"></i>'+
						            '<p class="text thing">Avenida 2 # 28 Despacho 8, Colonia San Pedro de los Pinos, Delegación Benito Juárez, CP 03800</p>'+
						          '</li>'+
						        '</ul>'+
						      '</div>'+
						      '<div class="map">'+
						        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1237.206962381936!2d-99.18509295532829!3d19.389444238866048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff7c364fcce3%3A0x24cecb2b2173c491!2sCalle+Av.+Dos%2C+San+Pedro+de+los+Pinos%2C+CDMX!5e0!3m2!1ses!2smx!4v1482264558894" frameborder="0" style="border:0" allowfullscreen=""></iframe>'+
						      '</div>'+
						    '</article>'+
						  '</div>'+
						'</section>';
var templeteSomos = '<section class="eyecatcherIn relative" style="background: url(./assets/img/interna-generica.jpg) center;">'+
						  '<div class="containerFluidMedium">'+
						    '<div class="groupTitle textCenter boxBlackTransparent boxBlackLarge">'+
						      '<h1 class="titleMediumIn upper bold ColorWhite">¿QUIÉNES SOMOS?</h1>'+
						    '</div>'+
						  '</div>'+
						'</section>'+
						'<section class="mainIn bgWhite">'+
						'<br>'+
						  '<div class="containerFluidMedium conetentReset">'+
						    '<h2 class="subtitleIn ColorRed medium">Aristea Desarrollos cuenta con una Dirección de Construcción especializada en coordinar, supervisar y controlar los trabajos internos y externos de construcción del proyecto.</h2>'+
						    '<br>'+'<br>'+
						    '<h2 class="subtitleIn ColorBalck medium">La eficacia de nuestro plan de desarrollo le brinda la seguridad de que su proyecto cumplirá las expectativas de tiempo, costo y diseño.</h2>'+
						    '<br>'+'<br>'+
						    '<p class="light text">Las principales actividades a realizar por la Dirección de Construcción en las diferentes fases del proyecto son:</p>'+
						     '<br>'+'<br>'+
						    '<div class="row">'+
						      '<ul class="col-xs-12 col-sm-6 generalUl text ColorBlack light">'+
						        '<li>Análisis del terreno donde se llevará a cabo el proyecto para entender sus bondades y riesgos desde el punto de vista técnico.</li>'+
						        '<li>Contratación y ejecución del proyecto conceptual tanto de arquitectónico como de ingeniería.</li>'+
						      '</ul>'+
						      '<ul class="col-xs-12 col-sm-6 generalUl text ColorBlack light">'+
						        '<li>Elaboración del presupuesto paramétrico de construcción que servirá como base del Plan de Negocios.</li>'+
						      '</ul>'+
						    '</div>'+
						  '</div>'+'<br>'+'<br>'+
						'</section>'+
						'<section class="mainorIn relative" style="background: url(./assets/img/bgArticleOur.jpg) center;">'+
						  '<article class="bgBlack">'+
						    '<div class="textoReset">'+
						      '<div class="ColorWhite textInter thing smalltext">Nuestros servicios comprenden desde la '+'<strong>identificación de oportunidades de desarrollo inmobiliario</strong>'+'hasta la entrega final del producto comercializado y el cierre administrativo del negocio.Para dar este servicio integral, nos basamos en tres pilares básicos de trabajo que desarrollamos directamente nosotros. Estos trabajos son:</div>'+'<br>'+
						      '<div class="text thing ColorWhite smalltext">Para dar este servicio integral, nos basamos en tres pilares básicos de trabajo que desarrollamos directamente nosotros. Estos trabajos son: </div>'+
						      '<ul class="InUl text smalltext">'+
						        '<li class="ColorWhite Bold">Gestión Inmobiliaria.</li>'+
						        '<li class="ColorWhite Bold">Dirección de Construcción</li>'+
						        '<li class="ColorWhite Bold">Comercialización del producto final.</li>'+
						      '</ul>'+
						      '<div class="text light ColorWhite">Coordinamos durante todo el proceso los trabajos desarrollados por terceros, cuidando siempre que estos se realicen en los estándares más estándares altos de calidad, y de manera competitiva en tiempo y costo.</div>'+'<br>'+
						      '<div class="text light ColorWhite">Estamos orgullosos de proporcionar a nuestros clientes e inversionistas soluciones creativas a los problemas que este tipo de proyectos representan, teniendo especial cuidado en eliminar los conflictos de interés que pudieran existir con nuestros clientes / inversionistas.  </div>'+
						    '</div>'+
						   ' <div class="textoReset absolute textMainorText">'+
						      '<div class="ColorWhite textInter thing">Nuestros servicios comprenden desde la '+'<strong>identificación de oportunidades de desarrollo inmobiliario</strong>'+' hasta la entrega final del producto comercializado y el cierre administrativo del negocio.</div>'+'<br>'+
						      '<div class="text thing ColorWhite">Para dar este servicio integral, nos basamos en tres pilares básicos de trabajo que desarrollamos directamente nosotros. Estos trabajos son: </div>'+
						      '<ul class="InUl text">'+
						        '<li class="ColorWhite Bold">Gestión Inmobiliaria.</li>'+
						        '<li class="ColorWhite Bold">Dirección de Construcción</li>'+
						        '<li class="ColorWhite Bold">Comercialización del producto final.</li>'+
						      '</ul>'+
						    '</div>'+
						  '</article>'+
						'</section>'+
						'<section class="mainIn bgWhite our">'+
						 ' <div class="containerFluidMedium conetentReset">'+
						    '<div class="groupTitle textCenter box">'+
						      '<h2 class="subtitle light upper ColorRed">NUESTRO</h2>'+
						      '<h1 class="title upper bold ColorBlack">EQUIPO</h1>'+
						    '</div>'+'<br>'+'<br>'+
						    '<div class="row">'+'<a href="" type="button" data-toggle="modal" data-target=".bs-example-modal-lg" class="col-sx-12 col-sm-6 col-md-4">'+'<img src="assets/img/our.jpg" class="relative img-responsive img-circle">'+
						        '<div class="groupTitle textCenter box">'+
						          '<h3 class="subtitleIn bold ColorBlack">Alejandra Gonzales</h3>'+
						          '<h4 class="text light ColorRed">Director Comercial</h4>'+
						        '</div>'+'</a>'+'<a href="" type="button" data-toggle="modal" data-target=".bs-example-modal-lg" class="col-sx-12 col-sm-6 col-md-4">'+'<img src="assets/img/our.jpg" class="relative img-responsive img-circle">'+
						        '<div class="groupTitle textCenter box">'+
						          '<h3 class="subtitleIn bold ColorBlack">Alejandra Gonzales</h3>'+
						         ' <h4 class="text light ColorRed">Director Comercial</h4>'+
						        '</div>'+'</a>'+'<a href="" type="button" data-toggle="modal" data-target=".bs-example-modal-lg" class="col-sx-12 col-sm-6 col-md-4">'+'<img src="assets/img/our.jpg" class="relative img-responsive img-circle">'+
						        '<div class="groupTitle textCenter box">'+
						         ' <h3 class="subtitleIn bold ColorBlack">Alejandra Gonzales</h3>'+
						          '<h4 class="text light ColorRed">Director Comercial</h4>'+
						        '</div>'+'</a>'+'</div>'+
						  '</div>'+
						'</section>'+
		
						'<div tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" class="modal fade bs-example-modal-lg">'+
						  '<div role="document" class="modal-dialog modal-lg">'+
						    '<div class="modal-content">'+
						      '<div class="head bgRed relative"><img src="assets/img/our.jpg" class="absolute img-responsive img-circle">'+
						        '<div class="datesCv">'+
						          '<h4 class="subtitle ColorWhite medium inline upper">Alejandra González</h4>'+'<span class="subtitle ColorWhite medium inline">|</span>'+
						          '<p class="subtitle ColorWhite thing inline">  Direcora Comercial</p>'+
						        '</div>'+
						      '</div>'+
						      '<div class="body relative"><span class="flaticon-group ColorRed absolute"></span>'+'<br>'+
						       ' <h5 class="ColorRed upper medium subtitle">experiencia</h5>'+'<br>'+
						        '<p class="light ColorBlack"> <strong>Lorem ipsum dolor sit amet, </strong>consectetur adipisicing elit.  consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>'+'<br>'+
						        '<p class="light ColorBlack">A asperiores quia, dolorum aperiam quasi doloribus non, doloremque sequi modi ad, unde veritatis saepe optio adipisci veniam voluptatibus iste quod eaque!</p>'+'<i class="thing ColorBlack">“Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo”.</i>'+
						      '</div>'+
						      '<div class="foot">'+'<a href="#" class="flaticon-facebook-logo-button ColorBlack right"> '+
						          '<p class="text thing inline">/AleGonza</p>'+'</a>'+'<a href="#" class="flaticon-facebook-logo-button ColorBlack right">'+
						          '<p class="text thing inline">/AleGonza</p>'+'</a>'+'<a href="#" class="flaticon-facebook-logo-button ColorBlack right">'+
						          '<p class="text thing inline">/AleGonza</p>'+'</a>'+'</div>'+
						    '</div>'+
						  '</div>'+
						'</div>';

var templeteProyectos = 
						'<section class="eyecatcherIn relative" style="background: url(./assets/img/interna-construccion.jpg) center;">'+
						  '<div class="containerFluidMedium">'+
						    '<div class="groupTitle textCenter boxBlackTransparent boxBlackLarge">'+
						      '<h1 class="titleMediumIn upper bold ColorWhite">proyectos</h1>'+
						    '</div>'+
						  '</div>'+
						'</section>'+


						'<section class="mainIn bgWhite">'+
						  '<div class="containerFluidSmall conetentReset text-center">'+
						    '<h2 class="subtitleIn light ColorBlack"><strong class="ColorRed">Aristea Desarrollos</strong> cuenta con una amplia experiencia en la comercialización de desarrollos inmobiliarios habitacionales. Nuestra experiencia nos permite dirigir y operar integralmente el proceso comercial, desde la definición del proyecto a construir así como los productos a desarrollar. </h2>'+'<br>'+'<br>'+
						  '</div>'+
						'</section>'+


						'<!--◊Mainor whit text◊-->'+
						'<section class="second relative" style="background: url(./assets/img/proyecto.jpg) center;">'+
						 ' <article>'+
						    '<div class="groupTitle textCenter boxRed">'+
						      '<h2 class="subtitle light upper ColorWhite">NOMBRE</h2>'+
						      '<h1 class="titleMedium upper bold ColorBlack">PROYECTO</h1>'+
						    '</div>'+
						   ' <p class="text ColorWhite thing"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, metus.</p>'+
						  '</article>'+
						'</section>'+

						'<section class="third" style="background: url(./assets/img/proyecto2.jpg) center;">'+
						  '<article class="bgWhite">'+
						    '<div class="groupTitleSmall textCenter boxBlackTransparentTwo">'+
						      '<h2 class="subtitle light upper ColorRed">NOMBRE</h2>'+
						      '<h1 class="titleMedium upper bold ColorBlack">PROYECTO</h1>'+
						    '</div>'+
						   ' <p class="text ColorBlack thing"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>'+
						  '</article>'+
						'</section>'+

						'<section class="second relative" style="background: url(./assets/img/proyecto3.jpg) center;">'+
						  '<article>'+
						    '<div class="groupTitle textCenter boxRed">'+
						      '<h2 class="subtitle light upper ColorWhite">NOMBRE</h2>'+
						      '<h1 class="titleMedium upper bold ColorBlack">PROYECTO</h1>'+
						    '</div>'+
						    '<p class="text ColorWhite thing"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, metus.</p>'+
						  '</article>'+
						'</section>'+

						'<section class="third" style="background: url(./assets/img/proyecto4.jpg) center;">'+
						  '<article class="bgWhite">'+
						    '<div class="groupTitleSmall textCenter boxBlackTransparentTwo">'+
						      '<h2 class="subtitle light upper ColorRed">NOMBRE</h2>'+
						      '<h1 class="titleMedium upper bold ColorBlack">PROYECTO</h1>'+
						    '</div>'+
						    '<p class="text ColorBlack thing"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>'+
						  '</article>'+
						'</section>';

page.base('/aristeaInmobiliaria');

//transition "middleware"
page('*', function(ctx,next){
// var menu = $('')
  if (ctx.init) {
    next();
  } else {
    content.classList.add('ess');
    setTimeout(function(){
      content.classList.remove('ess');
      next();
    }, 1000);
    setTimeout(function(){
       menuBar.classList.remove('in');
      next();
    }, 800);
 
  }
  setTimeout(function(){
    $(window).scrollTop(0);
    }, 800);
})

page('/', function(){
  content.innerHTML = templeteHome;
});

page('/desarrollo-inmobiliario', function(){
  content.innerHTML = templeteDesarrollos;

});


page('/comercializacion', function(){
  content.innerHTML = templeteComercializacion;
});

page('/construccion', function(){
  content.innerHTML = templeteConstruccion;
});

page('/somos', function(){
  content.innerHTML = templeteSomos;
});

page('/proyectos', function(){
  content.innerHTML = templeteProyectos;
});

page('/contacto', function(){
  content.innerHTML = templeteContacto;
});

page()