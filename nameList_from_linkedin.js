// Get name of people working in a company
// i hate cors
// i love the band cors though
// especially the violin girl :)
function showNames(company_name){
  var page = 1;
  
  var breakIt = false;
  while(page < 100){
    var url = 'https://www.linkedin.com/vsearch/pj?keywords='+company_name+'&sb=People%20who%20work%20at%'+company_name+'&page_num='+page;
    $.ajax({
      url: url,
      success: function(data){
        var results = data.content.page.voltron_unified_search_json.search.results;
        console.log(results.length);
        for(var i=1;i<results.length;i++){
          console.log(results[i].person.fmt_name);        
        }
      }
    });
    page++;
  }
}

showNames('Freshdesk');
