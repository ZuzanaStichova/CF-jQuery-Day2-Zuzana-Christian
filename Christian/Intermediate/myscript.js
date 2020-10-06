
  var mydata = JSON.parse(data); // convert string into an object
  console.log(mydata);

  for (i = 0; i <= mydata.length; i++) {
  			var pic = "<figure id = "+`${i}`+"><img src=" +mydata[i].img+"> </figure>";
  			$(".pictures").prepend(pic);
  			$(`#${i}`).append("<figcaption> Name: " + mydata[i].name+"<br> Relation: " + mydata[i].relation + "</figcaption>");

  		}
  // prints converted object into the console
  /* Prints data from Object1 */



/*
Create a family and friend photo album. Your family and friends are saved initially in a JSON structure, with their names, images and relation(e.g. cousin, sister, father, friend).

    Find images for 7+ "family members" and save them locally.

    Create JSON structure that holds the data

    Use JSON to populate HTML on-the-fly with your items and their images, name and relation(use jQuery)

    Create a design that will indicate the status of each member, e.g. close family members have a blue background, friends a pink background etc. Be creative. (Hint: use conditionals)

    Improve on the fly creation of HTML with adding specific classes to items (in respect to their status)

    */