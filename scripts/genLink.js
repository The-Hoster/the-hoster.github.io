function extractVideoID(url){
	/*this can be cut if you'd just enter the ID
	 *source: https://ctrlq.org/code/19797-regex-youtube-id
	 * */
	var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	var match = url.match(regExp);
	if ( match && match[7].length == 11 ){
		return match[7];
	}else{
		alert("Could not extract video ID.");
	}
}



function genLink() {
	/*would be nice to be able to fetch the raw data from the github repo, but doesnt work*/
	var listLink="https://www.youtube.com/watch_videos?video_ids=";
	var vids=[
		"https://www.youtube.com/watch?v=x2P7nDtXg-A",
		"https://www.youtube.com/watch?v=lki1y2wa820",
		"https://www.youtube.com/watch?v=OBl4pp0Sfko",
		"https://www.youtube.com/watch?v=u4x9YyRnFDE"
	];





	while (vids.length != 1){
		rndmNumber = Math.floor((Math.random() * vids.length));
		listLink=listLink+extractVideoID(vids[rndmNumber])+',';
		vids.splice(rndmNumber,1);
	}	
	listLink=listLink+extractVideoID(vids[0]);
	console.log(listLink);
	return listLink;
	
}

window.onload = function() {document.getElementById("YTMIX").href = genLink();}
