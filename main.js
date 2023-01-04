async function addPost() {
  let id = document.getElementById("id").value;
    let title = document.getElementById("title").value;
     let author = document.getElementById("author").value;
    
    //creating a objects for sending tha data
    let send_this_data = {
      //catch the key and values
      id,
      author,
      title,
    };
    
    
    let res = await fetch(`http://localhost:3000/posts`, {
      method: "POST",

      body: JSON.stringify(send_this_data),

      headers: {
        "Content_Type": "application/json",
      },
    });

    let data = await res.json();
    console.log("data:",data)
    



    }


