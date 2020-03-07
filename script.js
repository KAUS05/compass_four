// compass-4

//dropdown
$(".ui.dropdown").dropdown();

//dropdown-list
const data = [];

function handleChangeOne() {
  var x = document.querySelector(".selector_one").value;
  data.push(x);
  // console.log(data);
}
function handleChangeTwo() {
  var x = document.querySelector(".selector_two").value;
  data.push(x);
  // console.log(data);
}
function handleChangeThree() {
  var x = document.querySelector(".selector_three").value;
  data.push(x);
  // console.log(data);
}
function handleChangeFour() {
  var x = document.querySelector(".selector_four").value;
  data.push(x);
  // console.log(data);
}
function handleChangeFive() {
  var x = document.querySelector(".selector_five").value;
  data.push(x);
  // console.log(data);
}
function handleChangeSix() {
  var x = document.querySelector(".selector_six").value;
  data.push(x);
  // console.log(data);
}
function handleChangeSeven() {
  var x = document.querySelector(".selector_seven").value;
  data.push(x);
  // console.log(data);
}
function handleChangeEight() {
  var x = document.querySelector(".selector_eight").value;
  data.push(x);
  // console.log(data);
}
function handleChangeNine() {
  var x = document.querySelector(".selector_nine").value;
  data.push(x);
  // console.log(data);
}
function handleChangeTen() {
  var x = document.querySelector(".selector_ten").value;
  data.push(x);
  // console.log(data);
}
function handleChangeEleven() {
  var x = document.querySelector(".selector_eleven").value;
  data.push(x);
  // console.log(data);
}
function handleChangeTwelve() {
  var x = document.querySelector(".selector_twelve").value;
  data.push(x);
  // console.log(data);
}

// search_list_delete
// let del = document.querySelectorAll('.delete')
// del.addEventListener('click', () => alert('Deleted'))

function clicked() {
  alert("Deleted");
}

function selectedItems() {
  const items = [];
  for (i of data) {
    if (items.indexOf(i) === -1) {
      items.push(i);
    }
  }

  console.log(items, ' items')
  // console.log(data, ' data');

  const searchdiv = document.querySelector(".Compass_search_list");

  if (data.length) {
    searchdiv.style.display = "block";
  }

  for (i of items) {
    var divNode = document.createElement("a");
    divNode.classList.add("ui");
    divNode.classList.add("label");
    divNode.innerHTML = i;

    var node = document.createElement("i");
    node.classList.add("delete");
    node.classList.add("icon");

    divNode.appendChild(node);

    searchdiv.appendChild(divNode);
    node.addEventListener("click", clicked);
  }
}

//pagination_start

fetch(
  "http://139.59.9.205:8002/v1/search/new?q=mba&country=uk&level=1&ielts=7&toefl=90",
)
  .then(res => res.json())
  .then(output => {
    var data = output.results;
    const totalUniversities = document.querySelector(".total");
    totalUniversities.innerHTML = data.length;

    // console.log(data, ' data');
    // console.log(courses, ' courses');

    const list_element = document.querySelector("#List");
    const pagination_element = document.querySelector("#Pagination");

    let current_page = 1;
    let rows = 30;

    function DisplayList(items, wrapper, rows_per_page, page) {
      wrapper.innerHTML = "";
      page--;

      let start = rows_per_page * page;
      let end = start + rows_per_page;

      let paginatedItems = items.slice(start, end);
      // console.log(paginatedItems, ' paginated Items');
      for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];
        // console.log(item, ' item');
        let item_element = document.createElement("div");

        //inside div
        let insideDiv = document.createElement("div");
        insideDiv.classList.add("courses_list");

        for (j of item.course) {
          let courseDiv = document.createElement("div");
          courseDiv.classList.add("singleCourse");
          courseDiv.setAttribute("id", j.pk);

          // console.log(j, ' JJJ')
          courseDiv.innerText = j.name;
          insideDiv.appendChild(courseDiv);
          // courseDiv.addEventListener('click', getInnerText)
          // courseDiv.addEventListener('click', (e) => {
          //   console.log(j.name);
          //   console.log('hello');
          // })
        }

        item_element.classList.add("Item");

        const university_name = document.createElement('p')
        university_name.innerText = item.university
        // item_element.innerText = item.university;

        item_element.appendChild(university_name);
        item_element.appendChild(insideDiv);
        wrapper.appendChild(item_element);
      }
    }

    function SetupPagination(items, wrapper, rows_per_page) {
      wrapper.innerHTML = "";

      let page_count = Math.ceil(items.length / rows_per_page);

      for (let i = 1; i < page_count + 1; i++) {
        let btn = PaginationButton(i, items);
        wrapper.appendChild(btn);
      }
    }

    function PaginationButton(page, items) {
      let button = document.createElement("button");
      button.innerText = page;

      if (current_page == page) {
        button.classList.add("active");
      }

      button.addEventListener("click", () => {
        current_page = page;
        DisplayList(items, list_element, rows, current_page);

        let current_btn = document.querySelector(".Pagenumbers button.active");
        current_btn.classList.remove("active");

        button.classList.add("active");
      });

      return button;
    }

    DisplayList(data, list_element, rows, current_page);
    SetupPagination(data, pagination_element, rows);
  });

//pagination_end


fetch(
  "http://139.59.9.205:8002/v1/search/new?q=mba&country=uk&level=1&ielts=7&toefl=90",
)
  .then(res => res.json())
  .then(output => {
    // console.log(output, " output");
    
    const results = output.results
    // console.log(results, ' results');
    
    const allCourses = []

    for(let i of results){
      for(let j of i.course){
        allCourses.push(j)
      }
    }

    console.log(allCourses, ' allCourses');
  
    //get innerText
    $("#List").on("click", ".singleCourse", function(){
      let getSingleCourse = []
      // your code goes here
        for(i of allCourses){
          if(i.pk === $(this).attr('id')){
            getSingleCourse.push(i)
          }
        }
        // console.log($(this).attr('id'));
        // console.log($(this).html());
        // getSingleCourse.map(i => console.log('hello world'))
        console.log(getSingleCourse, ' getSingleCourse');  
        
        
          //list_display
          const List_item_details = document.querySelector('.List_item_details')
          List_item_details.style.display = 'block'
          //list display
        
        //singleCourses

          const singleCourse = document.querySelector('.List_item_details')

          const singleCourseItems = document.createElement('ul')
          singleCourse.appendChild(singleCourseItems)
          
          //all fetch course data          
          const University_name = document.querySelector('.university_name')
          const University_description = document.querySelector('.university_description')
          //score
          const Score_ielts = document.querySelector('.score_ielts')
          const Score_toefl = document.querySelector('.score_toefl')
          const Score_pte = document.querySelector('.score_pte')
          //score

          //data-start
          const Address = document.querySelector('.university_address')
          const Intake = document.querySelector('.intake')
          const Fulltime = document.querySelector('.full_time')
          const Fees = document.querySelector('.fees')

          //data-end

          //all fetch course data-end          

          for (var i=0; i<getSingleCourse.length; i++){
            University_name.innerHTML = getSingleCourse[i].name
            University_description.innerHTML = getSingleCourse[i].univ['name']

            //score
            Score_ielts.innerHTML = getSingleCourse[i].score['ielts']
            Score_toefl.innerHTML = getSingleCourse[i].score['toefl']
            Score_pte.innerHTML = parseInt(getSingleCourse[i].score['pte'])
            //score
            
            //data
            Address.innerHTML = getSingleCourse[i].meta_data[0]['address']
            Intake.innerHTML = getSingleCourse[i].meta_data[0].intake
            Fulltime.innerHTML = getSingleCourse[i].meta_data[0].duration
            // Fees.innerHTML = parseFloat(getSingleCourse[i].meta_data[0].fees)
            Fees.innerHTML = getSingleCourse[i].meta_data[0].fees
            //data

          }

        // getSingleCourse.length = 0
      });


  })

