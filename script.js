jQuery(document).ready(function() {     
    jQuery("#slider1").revolution({
       sliderType:"standard",
       sliderLayout:"auto",
       delay:9000, //<-- change this value (in milliseconds)
       navigation: {
           arrows:{enable:true}              
       },            
       gridwidth:1230,
       gridheight:720        
     });
    }); 