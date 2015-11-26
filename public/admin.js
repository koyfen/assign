angular.module('admin', [])
  .controller('AppController', function ($http) {
    var app = this
   app.koy = "show ng"
   app.d = []
   app.c = []
   app.i = []
   app.h = []
   show()


   app.toThaiDateTime = function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }


    function show(){
   	$http.get('api/info'). success(function(response) {

            for(var i=0;i<response.length;i++){
                if(response[i].status=="candidate"){
                  app.d.push(response[i])
                }
                if(response[i].status=="call_interview"){
                  app.c.push(response[i])
                }
                if(response[i].status=="interview"){
                  app.i.push(response[i])
                }
                if(response[i].status=="hire"){
                  app.h.push(response[i])
                }
                
            }  	

          }).
          error(function(data, status, headers, config) {
            // log error
            console.log('error')
       })
      }

       app.modal = function(index,_id){
          console.log(index,_id);
           $http.post('/modal', { _id : _id}).then(function success (response) {
              console.log(response)
              app.detail = response.data
             })
      
      } 

     app.lost = function(index,_id){
        console.log(index,_id);
         $http.post('/lost1', { _id : _id}).then(function success (response) {
              console.log(response)
              app.d.splice(index,1)
              
         })
       }
     app.lost2 = function(index,_id){
        console.log(index,_id);
         $http.post('/lost2', { _id : _id}).then(function success (response) {
              console.log(response)
              app.c.splice(index,1)
              
         })
        
     }

     app.lost3 = function(index,_id){
        console.log(index,_id);
         $http.post('/lost3', { _id : _id}).then(function success (response) {
              console.log(response)
              app.i.splice(index,1)
              
         })
        
     }
     app.f1tos2 = function(data){
      
       $http.put('/candidate/',{_id : data._id ,
                              name : data.name,
                              surname : data.surname,
                              age : data.age,
                              email : data.email,
                              sex : data.sex,
                              tel : data.tel,
                              facebook : data.facebook,
                              twitter : data.twitter,
                              github : data.github,
                              skills : data.skills,

                             }).success(function (data, status, headers) {
                                    window.location="admin.html"
                                    console.log(data);
                                    
                                })


     }

     app.s2tot3 = function(data){
        $http.put('/call_interview/',{_id : data._id ,
                                      name : data.name,
                                      surname : data.surname,
                                      age : data.age,
                                      email : data.email,
                                      sex : data.sex,
                                      tel : data.tel,
                                      facebook : data.facebook,
                                      twitter : data.twitter,
                                      github : data.github,
                                      skills : data.skills,

                             }).success(function (data, status, headers) {
                                    window.location="admin.html"
                                    console.log(data);
                                    
                                })


     }


     





  })
