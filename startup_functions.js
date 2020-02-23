// incomplete function

function detectCompleteEntries() {

    let content1 = $.trim(document.getElementById("email_login").value).length;
    let content2 = $.trim(document.getElementById("password_login").value).length;

    if (content1 !== 0 && content2 !== 0) {
        $("#submit_login").disabled = false;
    }

}
