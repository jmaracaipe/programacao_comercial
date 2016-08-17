 function minhaFuncao1(){
 	$('#area-01').css({
 		color: '#ff0000',
 		textTransform: 'upperCase',
 		width: '70%'

 	});
 };

 function minhaFuncao2(){
 	$('#area-02').empty();//remove todos os elementos filhos 
 		var alunos = ['Aluno 01','Aluno 02','Aluno 03','Aluno 04','Aluno 5'];

 		//itera ao longo do array inserindo inserindo seus elementos ao final 
 	$.each(alunos, function(index,value){
 			$('#area-02').append(value);
	
 	});
 };

 function minhaFuncao3(){
    $('#area-02').empty();
    var alunos = [
      {
          nome: 'Aluno 1',
          idade: 19
      },
      {
          nome: 'Aluno 2',
          idade: 18
      },
      {
          nome: 'Aluno 3',
          idade: 20
      },
      {
          nome: 'Aluno 4',
          idade: 45
      },
      {
          nome: 'Aluno 5',
          idade: 20
      }
    ];

    for (var i = 0; i < alunos.length; i++) {
      $('#area-02').append("Nome: "+alunos[i].nome +" -- Idade: "+alunos[i].idade);
      console.log(alunos[i]);
    }
    var list = $("#area-02").append('<ul></ul>').find('ul');
    $.each(alunos,function(index,value){
      list.append('<li>'+value.nome+' - '+value.idade+'</li>');
    });

};