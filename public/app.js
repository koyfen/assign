angular.module('app', [])
 .controller('AppController', function ($http) {
    var app = this
   app.koy = "show ng";
   app.skills = [
      
      // {
      //   name: 'Angular.js',
      //   level: 10,
      // },
      // {
      //   name: 'Node.js',
      //   level: 10,
      // }
    ] 


    


    
    app.addSkill = function(input) {
      var newSkill = {
        name: app.input.skillName,
        level: app.input.skillLevel

      }
      app.skills.push(newSkill);

      app.input.skillName = ''
      app.input.skillLevel = ''
      app.input.skillLevel = 5

    };
   
   app.send = function(input){
    input.skills = app.skills;
   	regis(input)
   	console.log(input)
   	
   }

   	regis = function(data){
   		$http.post('/api/info', data).then(function success (response) {
            console.log(response);
            alert("Register done")
           // window.location="end.html"
            
            })
   	
   	}

    $http.get('/api/info'). success(function(response) {
            
           
            //console.log(response)

          }).
          error(function(data, status, headers, config) {
            // log error
            console.log('error')
       })

    app.toRegis = function(){
      window.location = "user.html"
    }


  });
