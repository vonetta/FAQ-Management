var userUrl = "https://pacoima-ypi.azurewebsites.net/api/users/";
var url = "https://pacoima-ypi.azurewebsites.net/api/";

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
    $.ajax(userUrl + "ids", settings);
}

sabio.services.newQuizEntry = function (data, onSuccess, onError) {
    var settings = {
        cache: false,
        type: "POST",
        contentType: "application/Json",
        data: JSON.stringify(data),
        success: onSuccess,
        error: onError,
        xhrFields: {
            withCredentials: true
        }

    };
    $.ajax(url + "quizzes", settings);
}

sabio.services.editQuizEntry = function (data, id, onSuccess, onError) {
    var settings = {
        cache: false,
        type: "PUT",
        contentType: "application/Json",
        data: JSON.stringify(data),
        success: onSuccess,
        error: onError,
        xhrFields: {
            withCredentials: true
        }
    };
    $.ajax(url + "quizzes/" + id, settings);
}

sabio.services.postQuizQuestion = function (data, onSuccess, onError) {
    var settings = {
        cache: false,
        type: "POST",
        contentType: "application/Json",
        data: JSON.stringify(data),
        success: onSuccess,
        error: onError,
        xhrFields: {
            withCredentials: true
        }
    };
    $.ajax(url + "quizzes/questions");
}