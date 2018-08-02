function addTitle () {

  var newH1n = document.createElement("p"); 
  var newContentn = document.createTextNode("<h1> Anime Girls </h1>"); 
  newH1n.appendChild(newContentn);  
  document.getElementById("code").appendChild(newH1n);
  var newH1 = document.createElement("h1"); 
  var newContent = document.createTextNode("Anime Girls"); 
  newH1.appendChild(newContent);  
  document.getElementById("prev").appendChild(newH1);
}

function addPar() {
	var newp1n = document.createElement("p"); 
  var newContent1n = document.createTextNode("<p> We love anime girls </p>"); 
  newp1n.appendChild(newContent1n);  
  document.getElementById("code").appendChild(newp1n);
	var newp1 = document.createElement("p"); 
  var newContent1 = document.createTextNode("We love anime girls"); 
  newp1.appendChild(newContent1);  
  document.getElementById("prev").appendChild(newp1);
 } 

function addOl(){
	var newoln = document.createElement("p"); 
  var newContentoln = document.createTextNode(`<ol> Organized anime list`); 
  newoln.appendChild(newContentoln);
  var newlin = document.createElement("p"); 
  var newContentlin = document.createTextNode("<li> Organized anime list item<li>"); 
  newlin.appendChild(newContentlin);
  newoln.appendChild(newlin)
  var newlin3 = document.createElement("p"); 
  var newContentlin3 = document.createTextNode("<li> Organized anime list item</li>"); 
  newlin3.appendChild(newContentlin3);
  newoln.appendChild(newlin3)
   var newlin2 = document.createElement("p"); 
  var newContentlin2 = document.createTextNode("<li> Organized anime list item</li>"); 
  newlin2.appendChild(newContentlin2);
  newoln.appendChild(newlin2)
   var newlin4 = document.createElement("p"); 
  var newContentlin4 = document.createTextNode("</ol>"); 
  newlin4.appendChild(newContentlin4);
  newoln.appendChild(newlin4)
  document.getElementById("code").appendChild(newoln);
	var newol = document.createElement("ol"); 
  var newContentol = document.createTextNode("Organized anime list"); 
  newol.appendChild(newContentol);  
   var newli = document.createElement("li"); 
  var newContentli = document.createTextNode("Organized anime list item"); 
  newli.appendChild(newContentli);
  newol.appendChild(newli);
    var newli2 = document.createElement("li"); 
  var newContentli2 = document.createTextNode("Organized anime list item"); 
  newli2.appendChild(newContentli2);
  newol.appendChild(newli2);
  var newli3 = document.createElement("li"); 
  var newContentli3 = document.createTextNode("Organized anime list item"); 
  newli3.appendChild(newContentli3);
  newol.appendChild(newli3);
  document.getElementById("prev").appendChild(newol);
}

function addUl(){
	var newuln = document.createElement("p"); 
  var newContentuln = document.createTextNode("<ul> Unorganized anime list"); 
  newuln.appendChild(newContentuln);
  var newlin1 = document.createElement("p"); 
  var newContentlin1 = document.createTextNode("<li> Unorganized anime list item</li>"); 
  newlin1.appendChild(newContentlin1);
  newuln.appendChild(newlin1);
  var newlin31 = document.createElement("p"); 
  var newContentlin31 = document.createTextNode("<li> Unorganized anime list item</li>"); 
  newlin31.appendChild(newContentlin31);
  newuln.appendChild(newlin31);
   var newlin21 = document.createElement("p"); 
  var newContentlin21 = document.createTextNode("<li> Unoganized anime list item</li>"); 
  newlin21.appendChild(newContentlin21);
  newuln.appendChild(newlin21);
  var newlin41 = document.createElement("p"); 
  var newContentlin41 = document.createTextNode("</ul>"); 
  newlin41.appendChild(newContentlin41);
  newuln.appendChild(newlin41)
  document.getElementById("code").appendChild(newuln);
	var newul = document.createElement("ul"); 
  var newContentul = document.createTextNode("Unorganized anime list"); 
  newul.appendChild(newContentul);  
   var newli1 = document.createElement("li"); 
  var newContentli1 = document.createTextNode("Unorganized anime list item"); 
  newli1.appendChild(newContentli1);
  newul.appendChild(newli1);
    var newli21 = document.createElement("li"); 
  var newContentli21 = document.createTextNode("Unorganized anime list item"); 
  newli21.appendChild(newContentli21);
  newul.appendChild(newli21);
  var newli31 = document.createElement("li"); 
  var newContentli31 = document.createTextNode("Unorganized anime list item"); 
  newli31.appendChild(newContentli31);
  newul.appendChild(newli31);
  document.getElementById("prev").appendChild(newul);
}

function addImg(){
  var newimn = document.createElement("p"); 
  var newContentimn = document.createTextNode("<img src='res/tsundere.jpg'>"); 
  newimn.appendChild(newContentimn);  
  document.getElementById("code").appendChild(newimn);
  var newim = document.createElement("img");
  newim.setAttribute("src","res/tsundere.jpg");
  document.getElementById("prev").appendChild(newim);
  }


function addVid(){
	var newvidn = document.createElement("p");
	var newContentvidn = document.createTextNode("<iframe width='360' height='250' src='https://www.youtube.com/embed/p8P0dGf_6vA' frameborder='0' allow='autoplay; encrypted-media'></iframe>")
	newvidn.appendChild(newContentvidn);
	document.getElementById("code").appendChild(newvidn);
	var newvid = document.createElement("iframe");
	newvid.setAttribute("src","https://www.youtube.com/embed/p8P0dGf_6vA");
	newvid.setAttribute("width","360");
	newvid.setAttribute("height","250");
	newvid.setAttribute("frameborder","0");
	newvid.setAttribute("allow","autoplay; encrypted-media");
	document.getElementById("prev").appendChild(newvid);
}

function addLink(){
	var newlinkn = document.createElement("p");
	var newContentlinkn = document.createTextNode("<a href='https://myanimelist.net/'>My Anime List</a>");
	newlinkn.appendChild(newContentlinkn);
	document.getElementById("code").appendChild(newlinkn);
	var newlinkp = document.createElement("p");
	var newlink = document.createElement("a");
	newlink.setAttribute("href","https://myanimelist.net/");
	var newcontentlink = document.createTextNode("My Anime List");
	newlink.appendChild(newcontentlink);
	newlinkp.appendChild(newlink);
	document.getElementById("prev").appendChild(newlinkp);
}

function addAud(){
	var newaudn1 = document.createElement("p");
	var newContentaudn1 = document.createTextNode("<audio controls>");
	var newaudn2 = document.createElement("p");
	var newContentaudn2 = document.createTextNode("<source src='res/fmaop.mp3' type='audio/mpeg'>");
	var newaudn3 = document.createElement("p");
	var newContentaudn3 = document.createTextNode("</audio>");
	newaudn1.appendChild(newContentaudn1);
	newaudn2.appendChild(newContentaudn2);
	newaudn3.appendChild(newContentaudn3);
	document.getElementById("code").appendChild(newaudn1);
	document.getElementById("code").appendChild(newaudn2);
	document.getElementById("code").appendChild(newaudn3);
	var newaud = document.createElement("audio");
	newaud.setAttribute("src","res/fmaop.mp3");
	var att = document.createAttribute("controls");
	newaud.setAttributeNode(att);
	document.getElementById("prev").appendChild(newaud);
}

function edit(){
	var ntxt = "Type Something";
	var inpt = prompt(ntxt);

	if (inpt!= null) {
   document.getElementById("edit1").innerHTML = inpt;
   document.getElementById("edit2").innerHTML = inpt;
   }

}

function addForm(){
	var newformn = document.createElement("p");
	var newContentformn = document.createTextNode(`
	<form>
		Name:<br>
		<input type="text" name="Name"><br>
		Email:<br>
		<input type="text" name="Email"><br>
		Feedback:<br>
		<input type="text" name="Feedback"><br>
		<input type="submit">
	</form>`);
	newformn.appendChild(newContentformn);
	document.getElementById("code").appendChild(newformn);
	var newform = document.createElement("form");
	var newContentform1 = document.createElement("input");
	newformnode = document.createElement("p");
	newformnode2 = document.createElement("p");
	newformnode3 = document.createElement("p");
	newformtxt = document.createTextNode("Name:");
	newformtxt2 = document.createTextNode("Email:");
	newformtxt3 = document.createTextNode("Feedback");
	newformnode.appendChild(newformtxt);
	newformnode2.appendChild(newformtxt2);
	newformnode3.appendChild(newformtxt3);
	newContentform1.setAttribute("type","text");
	var newContentform2 = document.createElement("input");
	newContentform2.setAttribute("type","text");
	var newContentform3 = document.createElement("input");
	newContentform3.setAttribute("type","text");
	var sbt = document.createElement("input");
	sbt.setAttribute("type","submit");
	document.getElementById("prev").appendChild(newformnode);
	document.getElementById("prev").appendChild(newContentform1);
	document.getElementById("prev").appendChild(newformnode2);
	document.getElementById("prev").appendChild(newContentform2);
	document.getElementById("prev").appendChild(newformnode3);
	document.getElementById("prev").appendChild(newContentform3);
	document.getElementById("prev").appendChild(sbt);
}