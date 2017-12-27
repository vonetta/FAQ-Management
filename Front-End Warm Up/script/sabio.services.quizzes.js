var userUrl = "https://pacoima-ypi.azurewebsites.net/api/users/";
var url = "https://pacoima-ypi.azurewebsites.net/api/";

sabio.services.userEmployeeId = (onSuccess, onError) => {
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

sabio.services.newQuizEntry = (data, onSuccess, onError)  => {
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

sabio.services.editQuizEntry = (data, id, onSuccess, onError) => {
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

sabio.services.postQuizQuestion = (data, onSuccess, onError) => {
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
    $.ajax(url + "quizzes/questions", settings);
}

sabio.services.deleteQuizQuestion = (id, onSuccess, onError) => {
    var settings = {
        cache: false,
        type: "DELETE",
        success: onSuccess,
        error: onError,
        xhrFields: {
            withCredentials: true
        }
    };
        $.ajax(url + "/quizzes/questions/" + id ,settings);
}

sabio.services.updateQuizQuestion = (data, onSuccess, onError) => {
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
    $.ajax(url + "quizzes/questions/" + id, settings);
}

sabio.services.loadQuiz = (onSuccess, onError) => {
    var settings = {
        cache: false,
        type: "GET",
        success: onSuccess,
        error: onError,
        xhrFields: {
            withCredentials: true
        }
    };
    $.ajax(url + "quizzes/" ,settings);
}