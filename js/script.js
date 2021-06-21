

fetch("./data/data.json")
    .then(response => response.json())
    .then(data => {

    var count = 4
    function showBasic() {
        let html = '';

        for(var i = 0; i < count; i++){
            
            function date (){
                const date = new Date(data[i].date).toLocaleString('en-UK', {
                    day: 'numeric',
                    year: 'numeric',
                    month: 'short',
                });
                return date
            }

            html += 
            `
            <div class="card">
                <div class="card_head">
                    <div class="profile_image"><img src="${data[i].profile_image}" alt=""></div>
                    <div class="heading">
                    <p class="profile_name"><strong>${data[i].name}</strong></p>
                    <p class="profile_date">${date()}</p>
                    </div>
                    <div class="instagram_icon"><img src="icons/instagram-logo.svg" alt=""></div>
                </div>

                <div class="card_content">
                    <div class="card_image" style="background-image: url('${data[i].image}');"></div>
                    <div class="caption"><p>${data[i].caption}</p></div>
                </div>

                <div class="card_footer">
                    <div id="btnHeart"><svg id="heart" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7617 3.26543C14.3999 2.90347 13.9703 2.61634 13.4976 2.42045C13.0248 2.22455 12.518 2.12372 12.0063 2.12372C11.4945 2.12372 10.9878 2.22455 10.515 2.42045C10.0422 2.61634 9.61263 2.90347 9.25085 3.26543L8.50001 4.01626L7.74918 3.26543C7.0184 2.53465 6.02725 2.1241 4.99376 2.1241C3.96028 2.1241 2.96913 2.53465 2.23835 3.26543C1.50756 3.99621 1.09702 4.98736 1.09702 6.02084C1.09702 7.05433 1.50756 8.04548 2.23835 8.77626L2.98918 9.52709L8.50001 15.0379L14.0108 9.52709L14.7617 8.77626C15.1236 8.41448 15.4108 7.98492 15.6067 7.51214C15.8026 7.03935 15.9034 6.53261 15.9034 6.02084C15.9034 5.50908 15.8026 5.00233 15.6067 4.52955C15.4108 4.05677 15.1236 3.62721 14.7617 3.26543V3.26543Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                    <div>${data[i].likes}</div>
                </div>
            </div>
            `
        }
        document.getElementById('content').innerHTML = html;
    }
    showBasic()
        

        function showMore() {
            count = count + 4

            if(data.length <= count){
                document.getElementById('show').style.visibility='hidden'
            }
            showBasic()
        }
        document.getElementById('show').addEventListener('click', showMore)

    
    });


    // function color(){
    //     console.log("asd");
    //     document.getElementById('heart').style.fill='red'
    // }

    // document.getElementById('btnHeart').addEventListener('click', color)
