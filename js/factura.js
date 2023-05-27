$(document).ready(function() {
    var total = [];
    var selected = [];
    
  
    // Detectar clic en checkboxes
    $('input[type="checkbox"]').on('click', function() {
      // Verificar si el checkbox está marcado o desmarcado
      if ($(this).is(':checked')) {
        total.push($(this).val());
        selected.push($(this).attr("id"));
      } else {
        total = total.filter(res => res != $(this).val())
        selected = selected.filter(res => res != $(this).attr('id'))
      }
    });
    //En caso de puslado  el bootn de submit
    $('input[type="submit"]').on('click',function(){
        const resultado = new Map();
        for(let i =0; i<= selected.length; i ++)
        {
            resultado.set(selected[i],total[i]); //Crear una factura
        }
        //Convertirlo en json
        const tojson = JSON.stringify(Object.fromEntries(resultado));
        
        window.location.href= "./pagos.html?json="+tojson;

    })

  });
  