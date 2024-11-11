var Prodect_name=document.getElementById("name");
var prodect_price=document.getElementById("price");
var prodect_catagorey=document.getElementById("catagorey");
var Prodect_img=document.getElementById("img");
var Prodect_description=document.getElementById("desc");
var Add_Btn=document.getElementById("Add_Btn");
var Updata_Btn=document.getElementById("Updata_Btn");

var allprodect;
//ولا لاء وبعدها لو في حاجه يعرضها ولو مفيش يضع الاري فاضي  local storage  انا محتاح شرط علشان اشوف في حاجه متخزنه في ال  
if(localStorage.getItem("allprodect") !=null)
{
allprodect=JSON.parse(localStorage.getItem("allprodect"));
display_value();

}else{
allprodect=[];
}

function getvalues() {
    
    var prodect={
        NAME:Prodect_name.value,
        PRICE:prodect_price.value,
        CATAGOROY:prodect_catagorey.value,
        IMAGE:Prodect_img.files[0]?.name,
        DESCRIPTION:Prodect_description.value
        
    }
    allprodect.push(prodect);
    // console.log(allprodect);
    
    localStorage.setItem("allprodect",JSON.stringify(allprodect))
    clearvalues();

    display_value()
    
};
function clearvalues(){
    Prodect_name.value="";
    prodect_price.value="";
    prodect_catagorey.value="";
    Prodect_img.value="";
    Prodect_description.value="";
}

function display_value(){
    var cartona="";
for(var i=0; i<allprodect.length ; i++){
    cartona=cartona+`<tr>
                            <td>
                                <img src="./images/${allprodect[i].IMAGE} " alt="" class="w-100">
                            </td>
                            <td>
                            ${allprodect[i].NAME}
                            </td>
                            <td>
                            ${allprodect[i].PRICE}
                            </td>
                            <td>
                            ${allprodect[i].CATAGOROY}
                            </td>
                            <td>
                            ${allprodect[i].DESCRIPTION}
                            </td>
                        <td><button class="btn btn-warning" onclick="pre_Updata(${i})">Update</button></td>
                        <td><button class="btn btn-danger"onclick="Delete_value(${i})"> Delete</button></td>
                        </tr>`

}
document.getElementById('TableData').innerHTML=cartona;
}
//ك برمتير  علشان هو متغير علشان انا مش عارف انا هخذف انه عنصر  index  انا وضعط
function Delete_value(index){
    console.log("Deleted");
    //علشان انا مش عارف رقم العنصر ال هخذفه indexدي عباره عن بحذف عنصر 1 علشان يحذف و  splice 
    allprodect.splice(index,1);

// دي علشان تخزن الداتا داخل اللوكال استوردج بعد م اتحذف ال انا محتاجه وتتخذن حتي بعد معمل رفرش
    localStorage.setItem("allprodect",JSON.stringify(allprodect));

// دي علشان تعرض البيانات بعد معملت الحذف علشان تظهر انا عملت اه 
     display_value();
}


function Search_By_Nmae(serch){
    var cartona="";
    for(var i=0; i < allprodect.length; i++){
        if (allprodect[i].NAME.toLowerCase().includes(serch.toLowerCase())==true) {
            cartona=cartona+`<tr>
                            <td>
                                <img src="./images/${allprodect[i].IMAGE} " alt="" class="w-100">
                            </td>
                            <td>
                            ${allprodect[i].NAME}
                            </td>
                            <td>
                            ${allprodect[i].PRICE}
                            </td>
                            <td>
                            ${allprodect[i].CATAGOROY}
                            </td>
                            <td>
                            ${allprodect[i].DESCRIPTION}
                            </td>
                        <td><button class="btn btn-warning" onclick="pre_Updata(${i})">Update</button></td>
                        <td><button class="btn btn-danger"onclick="Delete_value(${i})"> Delete</button></td>
                        </tr>`
        }
    }
    document.getElementById('TableData').innerHTML=cartona;

}
// علشان اعمله كانه كوبري لكي يعرف رقم العنصر ال هنعدل فيه وينعدل مكانه main updata  انا وضعت ال
var mainIndex;

function pre_Updata(index){
    console.log("Updata");
    Add_Btn.classList.replace("d-block","d-none");
    Updata_Btn.classList.replace("d-none", "d-block");

    Prodect_name.value=allprodect[index].NAME;
    prodect_price.value=allprodect[index].PRICE;
    prodect_catagorey.value=allprodect[index].CATAGOROY;
    // Prodect_img.value="";
    Prodect_description.value=allprodect[index].DESCRIPTION;

    mainIndex=index;
}

function Updata_Prodect(){
console.log("done");
var prodect={
    NAME:Prodect_name.value,
    PRICE:prodect_price.value,
    CATAGOROY:prodect_catagorey.value,
    IMAGE:"/images/(2).jpg",
    DESCRIPTION:Prodect_description.value
    
}
allprodect.splice(mainIndex,1,prodect);
display_value();
clearvalues();

    Updata_Btn.classList.replace("d-block","d-none");
    Add_Btn.classList.replace("d-none", "d-block");

localStorage.setItem("allprodect",JSON.stringify(allprodect))
}