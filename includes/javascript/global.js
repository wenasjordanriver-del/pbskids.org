var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function pbs_compare_url_to_list(suburl, url_list) {
  for(var i=0; i<url_list.length; i++) {
    var j = url_list.length - 1 - i;
    if(suburl.indexOf(url_list[j][0]) == 0) return url_list[j];
  }
  return null;
}

// This might not work right.

function pbs_compare_url_to_list_fast(suburl, url_list) {
  // url_list[0] = [ "/newshour/", "foo" ];
  // url_list[1] = [ "/saf/" ];
  // The list *must* be in alphabetical order by URL.
                                                                                                              
  // This is a binary search. Code taken from
  // http://www.tbray.org/ongoing/When/200x/2003/03/22/Binary
                                                                                                              
  var high=url_list.length, low=-1, probe;
  while(high - low > 1) {
    probe = Math.ceil((high + low) / 2);
    if(url_list[probe][0] <= suburl)
      low = probe;
    else
      high = probe;
  }
                                                                                                              
  if(low >= 0 && suburl.indexOf(url_list[low][0]) == 0)
    return url_list[low];
  else
    return null;
}

function pbs_set_cookieval(cookname, val, expirationdate) {
    // cookname will be used unescaped.
    // val will be escaped automatically.
    // expirationdate is optional.
    // Set expirationdate to the past to delete a cookie.

    var cookieval = cookname + "=" + escape(val) + "; path=/";
    if (expirationdate)  {
      var date = new Date(expirationdate);
      cookieval = cookieval + "; expires=" + date.toGMTString();
    }
    document.cookie = cookieval;
}

function pbs_get_cookieval(cookname) {
    // Caution! If your cookiename is a substring of another cookiename,
    // you might not get your cookie back.

    var search = cookname + "=";
    if (document.cookie.length > 0) {
      var offset = document.cookie.indexOf(search);
      if (offset != -1) {
        offset += search.length;
        var end = document.cookie.indexOf(";", offset);
        if (end == -1) end = document.cookie.length;
        return unescape(document.cookie.substring(offset, end));
      }
    }
    return undefined;
}


}
