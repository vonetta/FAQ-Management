var userUrl = "https://pacoima-ypi.azurewebsites.net/api/users/";
var url = "https://pacoima-ypi.azurewebsites.net/api/";

sabio.page.newFaq = function (data, onSuccess, onError) {
    var settings = {
        cache: false,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: onSuccess,
        error: onError,
        xhrFields: {
            withCredentials: true
        }
    };
    $.ajax(url + "faqs", settings);
}

sabio.page.editFaq = function (data, id, onSuccess, onError) {
    var settings = {
        cache: false,
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: onSuccess,
        error: onError,
        xhrFields: {
            withCredentials: true
        }
    };
    $.ajax(url + "faqs/" + id, settings);
}

sabio.page.getFaq = function ( id, onSuccess, onError) {
    var settings = {
        cache: false,
        type: "GET",
        success: onSuccess,
        error: onError,
        xhrFields: {
            withCredentials: true
        }
    };
    $.ajax(url + "faqs/" + id, settings);
}

sabio.page.getFaq = function ( onSuccess, onError) {
    var settings = {
        cache: false,
        type: "GET",
        success: onSuccess,
        error: onError,
        xhrFields: {
            withCredentials: true
        }
    };
    $.ajax(url + "faqs/user", settings);
}

