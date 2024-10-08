document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('emailField');
    const header = document.getElementById('userHeader');
    const lastName = document.getElementById('LastName');
    const avatar = document.getElementById('avatar');
    const downloadList = document.getElementById('downloadList');


    document.getElementById('button').addEventListener('click', async function() {
        try {
            var li = document.createElement("li");

            var btn = document.createElement("button");
            btn.textContent = 'Click Me';
            btn.onclick = function() {
                alert(`Button in list item with value "${inputValue}" was clicked!`);
            };

            // Append the button to the list item


            const inputValue = input.value;
            li.appendChild(document.createTextNode(inputValue));
            li.appendChild(btn);
            downloadList.appendChild(li);
            const response = await fetch('https://reqres.in/api/users?page=2');
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
        
            const json = await response.json();
            // console.log(json.data[0]);
            header.innerHTML = json.data[0].first_name + ' ' + json.data[0].last_name;
            //avatar.src = json.data[0].avatar;
          } catch (error) {
            console.error(error.message);
          }
    });



  });