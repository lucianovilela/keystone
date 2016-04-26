$().ready(function(){

  var mensagens = ["Você não quer saber o que faz esse botão?",
"Pode ser o fim das guerras...",
"Pode ser o seu grande amor",
"Você pode ganhar super-poderes"];

  var timer=0;
  var timerStr;
  var timeout;
  var TEMPO=1000;

  var msg='';
  var cont=0;

  var setMsg = function(){
    if(Math.random() > 0.2 && cont <=0 ){
        var i = Math.floor(Math.random() * mensagens.length);
        msg = mensagens[i];
        cont = 10;
    }
    cont = cont -1;
  }


  var counter = function(){
    setMsg();
    timer = timer + TEMPO;
    timerStr=humanizeDuration(timer, {language : 'pt'});
    $('#contador').html("Você está a "+timerStr + " sem clicar no botão");
    $('#mensagem').html(msg);
    timeout = setTimeout(counter, TEMPO);
  }
  timeout = setTimeout(counter, TEMPO);

  $("#botao").click(function (){
      clearTimeout(timeout);
      $('#msgFinal').html("Você ficou "+timerStr + " sem clicar no botão");
      $("#modalFinal").modal({'show':true});

  });

});
