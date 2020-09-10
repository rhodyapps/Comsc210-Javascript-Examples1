function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if(inputtxt.value.match(phoneno))
  {
      alert('Phone Number Valid!!')
      return true;
  }
  else
  {
     alert("Arghh!! Not a valid Phone Number!");
     return false;
  }
  }