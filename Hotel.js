const hotel= prompt("qual é o nome do hotel?");

			var nomeusuario = prompt("ola,bem vindo ao hotel"+" "+hotel +" "+ "qual è o seu nome");
			alert("ola,"+ " " +nomeusuario +" "+ "É um imenso prazer ter você por aqui! " );



			var senha=2678;
			
			var senha=parseInt(prompt("para acessar digite a sua senha de 4 digitos"));

			while(senha!==2678){
				var senha=parseInt(prompt("sua senha esta incorreta , para acessar digite a sua senha de 4 digitos novamente"));
			}

			var listausuarios=[];

			var diasemana=["segunda","terca","quarta","quinta","sexta"];

			var finalsemana=["sabado","domingo"];

			var valoremresas=[];
			
	

	

	

		function inicio() {

			

			var escolha = parseInt(prompt('Selecione uma opçco:   1.) Reserva de Quartos    2.) Cadastro de Hospedes     3.) Abastecimento de Carros      4.) Sair        5.)Cadastro de Hospedes Pelo Usuario    0.)Eventos     6.)Buffet      7.)Auditorio      8.)Restaurante  9.Manutençao de ar condicionado do hotel' ));

			switch(escolha){

				case 0:
					eventos();
					break

			case 1:
				reserva_quartos();
				break


				case 2:
					cadastro_hospedes();
					break

					case 3:
						abastecer_carros();
						break

						case 4:
							sair();
							break

							case 5:
								cadastrousuario_hospedes();
								break

								case 6:
									Buffet();
									break


									case 7:
										auditorio();
										break


										case 8:
											restaurante();
											break

											case 9:
												condicionado();
												break
											

								
									











			}
		}		

		function reserva_quartos() {

			alert(" Bem vindo , a RESERVA DE QUARTOS" +" "+ hotel );


			var valordadiaria=parseInt(prompt("Qual é o valor da diaria?"));


				if(isNaN (valordadiaria) || (valordadiaria) <1){

				alert("so aceitamos numero positivos, tente novamente");

				reserva_quartos();
			}


			var numerodediarias=parseInt(prompt("quantas diarias serão necessarios?"));

			
			if(isNaN (numerodediarias) || (numerodediarias) <1){
				alert("so aceitamos numero positivos, tente novamente");
				reserva_quartos();
			}else{
				
				
			alert("o valor de"+" "+numerodediarias+" "+"dias"+""+" é de "+""+valordadiaria+" "+"reais");

			}

			var nomedohospede=prompt("qual é o nome do hospede?");

			var confirmacao= prompt(nomeusuario+",confirma a hospedagem para"+" "+nomedohospede+" "+"por"+" "+valordadiaria+"?"+" "+"s para (sim)/ n para (não)");
		

			

			if (confirmacao=="s"){
				alert(nomeusuario+ " "+"reserva efetuada para"+" "+nomedohospede+" "+" O valor total é de"+" "+valordadiaria+" "+"reais");
			}

			if (confirmacao=="n"){
				alert(nomeusuario+ " "+"reserva não efetuada");
				inicio();
			}


		}
			



			

			
			
 
				
			




			
			




		




		function cadastro_hospedes() {
			alert("Bem vindo , ao CADASTRO DE HOSPEDES"+" "+hotel);

			var diariahospede=parseInt(prompt("qual é o valor da diaria?"));

			if(isNaN (diariahospede) || (diariahospede) <1){

				alert("so aceitamos numero positivos, tente novamente");
				cadastro_hospedes();

			}

			var nomedohospede=prompt("como é o nome do hospede");

			var idadehospede=parseInt(prompt("qual a idade do usuario:"));

			if(isNaN (idadehospede) || (idadehospede) <1){

			alert("so aceitamos numero positivos, tente novamente");
				cadastro_hospedes();
			}

			if(idadehospede <6){
				alert(nomedohospede+" "+"esá cadastrada(o)  com sucesso."+"  "+nomedohospede+" "+",possui gratuidade");

			}

			if(idadehospede >6 && idadehospede <60){
				alert(nomedohospede+" "+"esá cadastrada(o)  com sucesso.");
			}

			if(idadehospede >60){
				alert(nomedohospede+" "+"esá cadastrada(o)  com sucesso."+" "+nomedohospede+" "+" paga meia");
			}

			if(nomedohospede=="PARE"){
				alert(nomeusuario+" "+" o valor total das hospedagens é R$250; 1 gratuidade(s); 1 meia(s)")
			}


			






			inicio();
		}




		function abastecer_carros() {

			var valoralcoolw=parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
			var resultadoalcoolw=valoralcoolw*42;
			 

			var valorgasolinaw=parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil"));
			var resultadogasolinaw=valorgasolinaw*42;

			var valoralcools=parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol"));
			var resultadoalcools=valoralcools*42;

			var valorgasolinas=parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol"));
			var resultadogasolinas=valorgasolinas*42;


			if(resultadoalcoolw*30/100<resultadogasolinaw*30/100 && resultadoalcoolw*30/100<resultadogasolinas*30/100){
				alert(+" "+" e mais barato abastecer com álcool no posto Wayne Oil "+" "+"custa"+" "+resultadoalcoolw+" "+"reais");
				inicio();
			}else if(resultadogasolinaw<resultadogasolinas){
				alert("e mais barato abastecer com gasolina no posto Wayne Oil"+" "+"custa"+" "+resultadogasolinaw+" "+"reais");
				inicio();
			}else{
				alert("e  mais barato abastecer com gasolina no posto Stark Petrol"+" "+"custa"+resultadogasolinas+" "+"reais");
				inicio();
			}

			if(resultadoalcools*30/100<resultadogasolinaw*30/100 && resultadoalcools*30/100<resultadogasolinas*30/100){
				alert(" e mais barato abastecer com  álcool no posto Stark Petrol "+" "+"custa"+" "+resultadoalcools+" "+"reais");
				inicio();
			}else if(resultadogasolinaw<resultadogasolinas){
				alert("e mais barato abastecer com gasolina no posto Wayne Oil"+" "+"custa"+" "+resultadogasolinaw+" "+"reais");
				inicio();
			}else{
				alert("e  mais barato abastecer com gasolina no posto Stark Petrol"+" "+"custa"+resultadogasolinas+" "+"reais");
				inicio();
			}
			





			}


			



		function erro() {

			alert('Por favor, informe um número entre 1 e 4');
			inicio();
		}



		function sair() {


			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				alert("Muito obrigado e até logo"+" "+ nomeusuario );
				window.close();
			} else {
				inicio();
			}



			
			}

		

		function eventos(){
				
				var duracao=parseInt(prompt("qaul e a duracao do evento"));

				var ngarcos=parseInt(prompt("qauntos garcons sao necessarios"));

				var resultado= duracao*ngarcos*10.50;

				alert("o valor total é de "+""+ resultado +" "+"reais");

				var confirmacao=prompt("voce esta de acordo com esse valor? aperte (s) sim ou n (n)");

				if(confirmacao=="s"){
					alert(nomeusuario+" "+ "reserva feita com sucesso");
				}

				if(confirmacao=="n"){
					inicio();
				}

			


			}


			function Buffet(){

				var pessoas=parseInt(prompt("Quantos convidados estarao no evento?"));

				if(pessoas>360){
					alert("Quantidade de convidados superior à capacidade máxima");
					inicio();

				}else{
					var agua= 0.40;
					var cafe=0.80;
					var salg=34;

					var ragua=pessoas*0.5;
					var rcafe=pessoas*0.2;
					var salg=pessoas*7;
					alert("precisara de "+" "+ragua+" "+ " litros de àgua"+ " "+rcafe+" "+"litros de cafe"+" "+salg+" "+"salgados");

					var valortotal=ragua*agua+rcafe*cafe+salg/100*34;
					alert("o valor total é de"+" "+valortotal+" "+"reais");


					var confirmacao=prompt("voce esta de acordo com esse valor? aperte (s) sim ou n (n)");

				if(confirmacao=="s"){
					alert(nomeusuario+" "+ "reserva feita com sucesso");
				}

				if(confirmacao=="n"){
					inicio();
				}

				}











			}


			function auditorio(){
				var pessoasauditorio=parseInt(prompt("Qual o número de convidados para o seu evento?"));

						if(pessoasauditorio>220 ){
							alert("Use o auditório Colorado");

							var confirmacao=prompt("Gostaria de efetuar a reserva?  aperte (s) sim ou n (n)");

				if(confirmacao=="s"){
					alert(nomeusuario+" "+ "reserva feita com sucesso");
				}

				if(confirmacao=="n"){
					inicio();
				}

			}

		
				
				
				
				if(pessoasauditorio<300 ){
							alert("Use o auditório Laranja (inclua mais 42 cadeiras)");

							var confirmacao=prompt("Gostaria de efetuar a reserva?  aperte (s) sim ou n (n)");

				if(confirmacao=="s"){
					alert(nomeusuario+" "+ "reserva feita com sucesso");
				}

				if(confirmacao=="n"){
					inicio();
				}

						}

					}

				
					


					function restaurante(){

						

						var diaevento=prompt("Qual o dia do seu evento?");

						

						if(diasemana.includes(diaevento)){
							var horario=parseInt(prompt("qual é o horario?"));

							if(horario>7 && horario<23){
								var nomeempresa=prompt("qual o nome da empresa");

								alert("Restaurante reservado para"+" "+nomeempresa+" "+diaevento+" "+"as"+" "+horario+" "+"horas");
								inicio();
							}else{
								alert("restaurante indisponivel");
							}
							
						}
					


						if(finalsemana.includes(diaevento)){
							var horario=parseInt(prompt("qual é o horario?"));

							if(horario>7 && horario<15){
								var nomeempresa=prompt("qual o nome da empresa");

								alert("Restaurante reservado para"+" "+nomeempresa+" "+diaevento+" "+"as"+" "+horario+" "+"horas");
								inicio();
							}else{
								alert("restaurante indisponivel");
								inicio();
							}
							
						}

						

					}






					function condicionado(){

				var empresa=prompt("qual eo nome da empresa");


				var valoraparelho=parseFloat(prompt("qual e o valor do aparelho"));


				var quan=parseInt(prompt("qual e a quantidade de aparelhos"));


				var desconto=parseInt(prompt("qual e a porcentagem de desconto"));

				var minimo=parseInt(prompt("qual e o numero minimo de aparelhos para conseguir desconto"));

				var valortotal=valoraparelho*quan;




				if(quan == minimo){
					var totalcomdesconto=valortotal-valortotal*desconto/100;
					alert("O serviço da"+" "+empresa+" "+" custará "+" "+totalcomdesconto+" "+"reais");







					
				}else if(quan!==minimo){
					alert("O serviço da"+" "+empresa+" "+" custará "+valortotal+" "+"reais");
				}





				var escolha=prompt("você gostaria de adicionar mais dados?  s(sim) ou n(não)")
				

				if(escolha=="s"){

					var empresadois=prompt("qual eo nome da empresa");


						var valoraparelho=parseFloat(prompt("qual e o valor do aparelho"));


						var quan=parseInt(prompt("qual e a quantidade de aparelhos"));


						var desconto=parseInt(prompt("qual e a porcentagem de desconto"));

						var minimo=parseInt(prompt("qual e o numero minimo de aparelhos para conseguir desconto"));

						var valortotaldois=valoraparelho*quan;


						if(quan == minimo){


												var totalcomdesconto=valortotal-valortotal*desconto/100;
												alert("O serviço da"+" "+empresa+" "+" custará "+" "+valortotaldois+" "+"reais");
												
											}else if(quan!==minimo){
												alert("O serviço da"+" "+empresa+" "+" custará "+valortotaldois+" "+"reais");
											}

											if(valortotaldois<valortotal){
												alert("O orçamento de menor valor é o de"+" "+empresadois+" "+" custa"+" "+valortotaldois +"reais");
											}else{
												alert("O orçamento de menor valor é o de"+" "+empresa+" "+"custa"+" "+valortotal+" "+"reais");
											}


				}

				if(escolha=="n"){

					inicio();

				}
										
					

				

					}

				
			

				

					

















			
		
		inicio();


		function cadastrousuario_hospedes(){

			var escolhausuario=parseInt(prompt(" 1) cadastrar; 2) pesquisar; 3) sair."));

			switch(escolhausuario){

				case 1:
					casdastro_usuario();
					break


					case 2:
						pesquisar_usuario();
						break



						case 3:
							sair_usuario();
							break
							




			}








			function casdastro_usuario(){

				

				var nome_hospede = prompt('Por favor, informe o nome da(o) hóspede:');
				listausuarios.push(nome_hospede);
				console.log(listausuarios);
				alert("esá cadastrada(o)  com sucesso.");

				if(listausuarios.length>=15){
					alert("Numero máximo de hóspedes cadastrados.");
				}

				
						

				}
				
				
				


			function pesquisar_usuario(){
			

				var nome_hospede = prompt("Por favor, informe o nome da(o) hóspede:");

				if (listausuarios.includes(nome_hospede)){
					alert(nome_hospede + ' encontrada(o).')
				} else {
					alert(nome_hospede + ' não foi encontrada(o).')
				}
				
			}


			function sair_usuario(){
				inicio();

			}









		}
