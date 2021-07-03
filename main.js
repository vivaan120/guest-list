var  name_of_the_guest_array=[]

function add(){
    var display_name_array=[];
    var guest_name=document.getElementById("name_of_the_guest").value;
    console.log(guest_name);
    name_of_the_guest_array.push(guest_name);
    display_name_array.push("<h4>"+name_of_the_guest_array+"</h4>");
        console.log(display_name_array);
    
        document.getElementById("empty_div").innerHTML= display_name_array;
        document.getElementById("button_sort").style.display="inline-block";
    }
    
     
   
    
    function show(){
        var htmldata;
    htmldata="<ol class='guestlist'>"
    for(var i=0; i<name_of_the_guest_array.length; i++){
    htmldata= htmldata + '<li>' + name_of_the_guest_array[i] + '</li>'
     }
    htmldata=  htmldata + "<ol>"
    document.getElementById("div_output").innerHTML= htmldata;
    }
    
    function sort(){
        name_of_the_guest_array.sort();
        console.log(name_of_the_guest_array);
        var display_guest_array_sorted=[];
        display_guest_array_sorted.push(name_of_the_guest_array);
        console.log(display_guest_array_sorted);
        var array_sorted_list= display_guest_array_sorted.join(" ");
        document.getElementById("div_sort").innerHTML= array_sorted_list;
    }
    
    
    
    

    function search(){
        var search= document.getElementById("searched_name").value;
        var found= 0;
        for (var i=0; i <name_of_the_guest_array.length; i++ ){
            if(search==name_of_the_guest_array[i]){
                found=found+1;
            }
        }
        var search_output="name found "+found+" time/s"
        document.getElementById("search_div").innerHTML= search_output;
        console.log(search_output);
    }