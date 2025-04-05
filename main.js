let request = document.getElementById("request_btn");

request.addEventListener("click", () => {
    document.getElementById("status_id").innerHTML = "Loading..";
    request.disabled = true;

    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            if (!response.ok)
                {
                    throw new Error("Server return error");
                }
            return response.json();
        })
        .then(data => {
            document.getElementById("result_id").innerHTML = JSON.stringify(data, null, 2);
            document.getElementById("status_id").innerHTML = "Ready";
        })
        .catch(error => {
            if (error instanceof "SyntaxError")
            {
                document.getElementById("status_id").innerHTML = "Invalud format of data";
            }
            else if (error instanceof "Error")
            {
                document.getElementById("status_id").innerHTML = "Connection error";
            }
            else
            {
                document.getElementById("status_id").innerHTML = "Unknow error";
            }
        })
        .finally(() => {
            request.disabled = false;
        })
})