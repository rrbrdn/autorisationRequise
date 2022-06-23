function check() {
   var date;
   date = new Date();
 

   const month = parseFloat(document.getElementById("month").value);
   const date1 = parseFloat(document.getElementById("date").value);
   const year = parseFloat(document.getElementById("year").value)+18;


   if (date.getFullYear() > year)
   {
      alert("Vous êtes un adulte")
    
   }
   else if (date.getFullYear() === year)
   {
      if (date.getMonth()+1 >month)
         alert("Vous êtes adulte")

      else if (date.getMonth()+1 === month) 
      {
         if (date.getDate() >= date1) 
         {
            alert("Vous êtes adulte")
         }
         else 
         {
            alert("Vous n'êtes pas un adulte")
         }

      }

      else 
      {
         alert("Vous n'êtes pas un adulte")
      }   
   }
   else
   {
      alert("Vous n'êtes pas un adulte")
   }
}