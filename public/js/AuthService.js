(function() {
  'use strict';
  angular.module('authService', [])
    .factory('Auth,' Auth)
    .factory('AuthInterceptor', AuthInterceptor)
    .factory('AuthToken', AuthToken)

    function Auth($http, $q, AuthToken){
      var authFactory = {}

      authFactory.login = function(email, password){
        //post request to api signin endpoint
        return $http.post('/api/v1/signIn', {email: email, password: password})//(uri, req.body)
            .then(function(data){
              AuthToken.setToken(data.token)
              return data
            })
      authFactory.logout = function(){
        AuthToken.setToken()
      }

      authFactory.isLoggedIn = function(){
        if(AuthToken.getToken()){ //checking local storage if it's true
          return true
        } else {
          return false
        }
      }

      authFactory.getUser = function(){
        if(AuthToken.getToken()){
          return $http.get('api/v1/me')
        } else {
          return $q.reject({message: 'User has no token brah'})
        }
      }

      return authFactory
    }

    function AuthToken($window){
      var authTokenFactory = {}

      authTokenFactory.getToken = function(){
        return $window.localStorage.getItem('token')
      }

      authTokenFactory.setToken = function(){
        if(token){
          $window.localStorage.setItem('token',token)
        }
        else{
          $window.localStorage.removeItem('token')
        }
      }

      return authTokenFactory
    }

    function AuthInterceptor($q, AuthToken){
      var interceptorFactory = {}

      interceptorFactory.request = function(config){
        var token = AuthToken.getToken()

        if(token){
          config.headers['x-access-token'] = token
        }

        return config
      }

      interceptorFactory.responseError = function(response){
        if(response.status == 403){
          $location.path('/')
        }
        return $q.reject(response)
      }
      return interceptorFactory
    }


}());
