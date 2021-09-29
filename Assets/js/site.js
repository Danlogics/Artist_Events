function search(){
    var val = $('#artist_name').val();
    if(!val)
    {
        alert("Input Required")
    }else {

        window.location.href = "file:///D:/KT/with%20backend/KT/preview.html?artist_name=" + val;
    }
}

function inputKeyUp(e){
    var val = e.target.value;
    if(e.keyCode == 13){

        if(!val)
        {
            alert("Input Required")
        }else {

            window.location.href="preview.html?artist_name="+val
        }

    }
  ;
}
