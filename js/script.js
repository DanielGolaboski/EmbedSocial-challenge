

fetch("./data/data.json")
    .then(response => response.json())
    .then(data => {

    // count variable sets the number of cards shown when the page loads
    var count = 4    
    function showBasic() {

        let html = '';

        // loops through the data and displays in HTML the number of resaults set by the count variable
        for(var i = 0; i < count; i++){

            html += 
            `
            <div class="card">
                <div class="card_head">
                    <div class="profile_image"><img src="${data[i].profile_image}" alt=""></div>
                    <div class="heading">
                        <p class="profile_name"><strong>${data[i].name}</strong></p>
                        <p class="profile_date">
                        ${new Date(data[i].date).toLocaleString('en-UK', {
                            day: 'numeric',
                            year: 'numeric',
                            month: 'short',
                        })}
                        </p>
                    </div>
                    <div class="instagram_icon"><img src="icons/instagram-logo.svg" alt=""></div>
                </div>

                <div class="card_content">
                    <div id="popup" class="card_image" style="background-image: url('${data[i].image}');"></div>
                    <div class="caption"><p>${data[i].caption}</p></div>
                </div>

                <div class="card_footer">
                    <div class="heart"><img src="./icons/heart.svg" alt=""></div>
                    <div>${data[i].likes}</div>
                </div>
            </div>
            `
        }
        document.getElementById('content').innerHTML = html;

    // takes all divs with the card_content class
    var items = document.querySelectorAll(".card_content"),
    tab = [], index;

    
    // all the available divs are pushed in the tab array
    for(var i = 0; i < items.length; i++){
    tab.push(items[i]);
    }
    

    for(var i = 0; i < items.length; i++){
        items[i].onclick = function(){
            // sets the index of the selected div to the index variable
            index = tab.indexOf(this);
            var popup = document.getElementById("popupBtn");
            popup.style.display = "block";
    
            // displays selected div in a popup
            document.getElementById('popup').innerHTML = 

            `
            <div class="popup">
                <div class="popup_image"  style="background-image: url('${data[index].image}');"></div>
                <div class="popup_content">
                    <div class="popup_head">
                        <div class="profile_image"><img src="${data[index].profile_image}" alt=""></div>
                        <div class="heading">
                            <p class="profile_name"><strong>${data[index].name}</strong></p>
                            <p class="profile_date">
                                ${new Date(data[index].date).toLocaleString('en-UK', {
                                    day: 'numeric',
                                    year: 'numeric',
                                    month: 'short',
                                })}
                            </p>
                        </div>
                        <div><img src="icons/instagram-logo.svg" alt=""></div>
                    </div>
                    <div class="popup_caption">
                        <div class="caption"><p>${data[index].caption}</p></div>
                    </div>
                    <div class="popup_footer">
                        <div class="heart"><img src="./icons/heart.svg" alt=""></div>
                        <div>${data[index].likes}</div>
                    </div>
                </div>
            </div>
                `;
    
                // closes the popup after clicking outside of the popup window
                var span = document.getElementsByClassName("close")[0];
                window.onclick = function(event) {
                    if (event.target == popup) {
                    popup.style.display = "none";
                    }
                };
        };
        
    };
    }
    showBasic()
        

    function showMore() {
        // adds to the count variable to display more cards
        count = count + 4

        // checks it all the data is displeyed
        // hides the 'load more' button if true
        if(data.length <= count){
            document.getElementById('show').style.visibility='hidden'
        }
        //runs the showBasic function again to loop through the added data in count variable
        showBasic()
    }
    document.getElementById('show').addEventListener('click', showMore)
    
    });


