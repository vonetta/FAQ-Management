var userUrl = "https://pacoima-ypi.azurewebsites.net/api/users/";
var url = "https://pacoima-ypi.azurewebsites.net/api/";

 sabio.page.register = function (data, onSuccess, onError) {
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

 sabio.page.login = function (data, onSuccess, onError) {
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

 sabio.page.logout = function (onSuccess, onError) {
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

 sabio.page.getUser = function (onSuccess, onError) {
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

 sabio.page.getCategories = function (onSuccess, onError) {
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



