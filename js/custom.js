/* Theme Name: The Project - Responsive Website Template
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version:1.4.0
 * Created:March 2015
 * License URI:http://support.wrapbootstrap.com/
 * File Description: Place here your custom scripts
 */

(function($){

	$(document).ready(function(){

		var cont = 0;

		// Notify Plugin - The below code (until line 42) is used for demonstration purposes only

		$("#sobre").mouseover(function(){

			if(cont <=4)
			{
				if(cont == 0)
				{
					$("#sobre").toggleClass("col-md-offset-4");
					$("#sobre").toggleClass("col-md-offset-1");
					$("#sobreText").text("Si, el sobre amarillo es");
				}
				else
				{
					if (cont == 1) 
					{
						$("#sobre").toggleClass("col-md-offset-1");
						$("#sobre").toggleClass("col-md-offset-7");
						$("#sobreText").text("Tiene que darle clic si quiere abrirlo XD");
					}
					else
					{
						if (cont == 2) 
						{
							$("#sobre").toggleClass("col-md-offset-7");
							$("#sobre").toggleClass("col-md-offset-1");
							$("#sobreText").text("¿Es que no lo quiere abrir verdad? :,(");
						}
						else
						{
							if (cont == 3) 
							{
								$("#sobre").toggleClass("col-md-offset-1");
								$("#sobre").toggleClass("col-md-offset-9");
								$("#sobreText").text("Que feo su modo :<");
							}
							else
							{
								if(cont == 4)
								{
									$("#sobre").toggleClass("col-md-offset-9");
									$("#sobre").toggleClass("col-md-offset-4");
									$("#sobreText").text("JAJAJAJA Ya pues XD, Dele clic");
								}
							}
						}
					}
				}

				setTimeout(()=>{
					cont += 1;
				}, 1000);
			}
		});

		$("#sobreButton").click(function(e){
			e.preventDefault();
			e.stopPropagation();

			if(cont>=4)
			{
				$("#sobreButton").toggleClass("disabled");
				$("#sobreRow").toggleClass("hidden");
				$("#message").toggleClass("hidden");
			}
		});

		//-----------------------------------------------
		// if (($(".main-navigation.onclick").length>0) && !Modernizr.touch ){
		// 	$.notify({
		// 		// options
		// 		message: 'The Dropdowns of the Main Menu, are now open with click on Parent Items. Click "Home" to checkout this behavior.'
		// 	},{
		// 		// settings
		// 		type: 'info',
		// 		delay: 10000,
		// 		offset : {
		// 			y: 150,
		// 			x: 20
		// 		}
		// 	});
		// };
		// if (!($(".main-navigation.animated").length>0) && !Modernizr.touch && $(".main-navigation").length>0){
		// 	$.notify({
		// 		// options
		// 		message: 'The animations of main menu are disabled.'
		// 	},{
		// 		// settings
		// 		type: 'info',
		// 		delay: 10000,
		// 		offset : {
		// 			y: 150,
		// 			x: 20
		// 		}
		// 	}); // End Notify Plugin - The above code (from line 14) is used for demonstration purposes only

		//};
	}); // End document ready

})(this.jQuery);
