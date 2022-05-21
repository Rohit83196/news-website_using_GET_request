// console.log("rohit bhai is great");
// 03dd30dfce0b471886462b48a628c712
let number = 0;


let news1 = document.getElementById("news1");
const xhr = new XMLHttpRequest();
xhr.open("GET","https://newsapi.org/v2/top-headlines?country=us&apiKey=03dd30dfce0b471886462b48a628c712",true);
// xhr.getResponseHeader("Content-type","appication/json");
xhr.onload = function () {
    if (this.status === 200) {
        // console.log(JSON.parse(this.responseText));
        let html = JSON.parse(this.responseText)["articles"];
        // console.log(html);
        news1.innerHTML = "";
        html.forEach(element => {
            // console.log(element["title"]);
            news1.innerHTML +=   `  <div class="accordion-item">
            <h1 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Breaking News #${++number} <span style = "color:black"> ${element["title"]}</span>
                </button>
            </h1>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <!-- <strong>content is</strong></br> -->
                    ${element["content"]} 
                    <a href="${element["url"]}" style="color:blue" target="_blank">read more</a> </br></br>
                </div>
            </div>
        </div> `;
        });

    }
    else{
        console.log("some error occured");
    }
}
xhr.send();



