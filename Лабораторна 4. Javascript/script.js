const api_url =
	"https://api.census.gov/data/2020/acs/acs5/profile?get=NAME&for=county:*";

var array;
var name = "Baldwin County";
fetch(api_url)
  .then((response) => response.json())
  .then((data)=> {
    array = Array.from(data);
    console.log(array[2]);
    const found = array.find(element => element = name);
    console.log(array[2]);
  } );


