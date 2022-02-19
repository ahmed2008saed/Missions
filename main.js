
let inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const allBtn = document.getElementById("all-btn");
const storeEl = document.getElementById("store-el");
let leads = [];



inputBtn.addEventListener("click", function () {
   // يقوم بافراغ محتويات <ol> واضافة قيمة المدخلة الى المصفوفة ويفرف قيمة الصندوق المدخلات ويقوم بارجاع كل عناصر المصفوفة الى <ol>
   // take the value of the text box
   var inp = inputEl.value;
   // add this value to list
   leads.push(inp);
   storeEl.innerHTML = "";

   //store in local storage
   localStorage.setItem('info', JSON.stringify(leads));
   // get information from local storage
   var localStorageLeads = JSON.parse(localStorage.getItem('info')) || [];
   // extract all members of list and build the store-el list 
   for (var i in localStorageLeads) {
      let li = document.createElement("li");
      li.textContent = localStorageLeads[i];
      storeEl.append(li);
      inputEl.value = "";
      console.log("Saved-listener");
   }
});


//Delete button
deleteBtn.addEventListener("dblclick", function () {
   storeEl.innerHTML = "";
});


//view all button
allBtn.addEventListener("click", function () {
   inputEl.value = "";
   var localStorageLeads2 = JSON.parse(localStorage.getItem('info')) || [];
   for (var i in localStorageLeads2) {
      let li = document.createElement("li");
      li.textContent = localStorageLeads2[i];
      storeEl.append(li);
      inputEl.value = "";
   }
});



console.log("%cCopyright %c© %cAhmed Saed & Mohamed 2022"
   , "color: #555; font-size: 30px; font-family: Tahoma;"
   , "color: #dc3545; font-size: 30px; font-family: Tahoma;"
   , "color: #555; font-size: 30px; font-family: Tahoma;");

// console.log("%cAhmed %cSa%c3%ced %cSayed"
//    , "color: #dc3545; font-size: 40px; font-family: Tahoma;"
//    , "color: #ccc; font-size: 40px; font-family: Tahoma;"
//    , "color: #ffee00; font-size: 40px; font-family: Tahoma;"
//    , "color: #ccc; font-size: 40px; font-family: Tahoma;"
//    , "color: #555; font-size: 40px; font-family: Tahoma;");

console.log("%cمتكتبش حاجا هنا ماشي"
   , "color: #dc3545; font-size: 25px; font-family: Tahoma;");




