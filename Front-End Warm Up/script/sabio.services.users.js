var userUrl = "https://pacoima-ypi.azurewebsites.net/api/users/";
var url = "https://pacoima-ypi.azurewebsites.net/api/";

 sabio.services.register = function (data, onSuccess, onError) {
	var settings = {
		cache: false,
		contentType: "application/json",
		data: JSON.stringify(data),
		type: "POST",
		xhrFields: {
			withCredentials: true
		},
		success: onSuccess,
		error: onError
	};
	$.ajax(userUrl + "register/employer", settings);
 }

 sabio.services.login = function (data, onSuccess, onError) {
 	var settings = {
 		cache: false,
 		contentType: "application/json",
 		data: JSON.stringify(data),
 		type: "POST",
 		xhrFields: {
 			withCredentials: true
 		},
 		success: onSuccess,
 		error: onError
 	};
 	$.ajax(userUrl + "login/force", settings);
 }

 sabio.services.logout = function (onSuccess, onError) {
 	var settings = {
 		cache: false,
 		type: "GET",
 		xhrFields: {
 			withCredentials: true
 		},
 		success: onSuccess,
 		error: onError
 	};
 	$.ajax(userUrl + "logout", settings);
 }

 sabio.services.getUser = function (onSuccess, onError) {
 	var settings = {
 		cache: false,
 		type: "GET",
 		xhrFields: {
 			withCredentials: true
 		},
 		success: onSuccess,
 		error: onError
 	};
 	$.ajax(url + "people/currentuser", settings);
 }

 sabio.services.getCategories = function (onSuccess, onError) {
     var settings = {
         cache: false,
         type: "GET",
         success: onSuccess,
         error: onError,
         xhrFields: {
             withCredentials: true
         }
     };
     $.ajax(url + "faqcategories", settings);

 }

 sabio.services.userEmployeeId = function (onSuccess, onError) {
     var settings = {
         cache: false,
         type: "GET",
         success: onSuccess,
         error: onError,
         xhrFields: {
             withCredentials: true
         }
     };
     $.ajax(userUrl + "ids", settings)
 }


