const { createApp } = Vue
 createApp({
   data() {
     return {
       url: 'https://hernanbula.pythonanywhere.com/usuarios',
       datos: [],
       usuario:"admin@admin.com",
       clave:"admin"
       }
   },
   methods: {
     fetchData(url) {
       fetch(url)
         .then(response => response.json())
         .then(data => {
           this.datos=data
        })
         .catch(error=>alert("Ups... se produjo un error: "+ error))
     },
     validar(){
      
       arreglo=this.datos.filter(x => x.email==this.usuario);
        console.log(arreglo)
        if (arreglo[0].clave == this.clave){      
            sessionStorage.setItem("login","true") 
            window.location.href = "adm.html";
        }else{
          alert("Usuario o Password erronea")
        }
       
 
     }
    
        
   },
   created() {
     this.fetchData(this.url)                                                      
   }
 }).mount('#app')