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
        name: input.skillName,
        level: input.skillLevel
      }
      app.skills.push(newSkill);

      input.skillName = ''
      input.skillLevel = ''
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
