// Code your solution here
function findMatching(driv, nam){
    return driv.filter( function(n){
        return n.toUpperCase() === nam.toUpperCase();
    });
 // return after filtering the driv function ((this is filtering function) only if filtered values uppercase return uppercase
}
function fuzzyMatch(driv, nam){
    return driv.filter( function(d){
            return d[0] === nam[0]
        });
}// return if d 0 and result that wanted 0 is the same when we write first argument
//it wants some letter in a word so slice maybe can help or something checking on placements
function matchName(driver, nam){
    return driver.filter( function(b){
        return b.name === nam
    });
}//nam for name results, driver for drivers, b.name for checking the names in drivers




/* summary for myself to understand what to do:
 1- two arguments(drivers name and a string) returns the matching list, search for case-sensitive
 2- again, two arguments and returns the names with the letters that been wanted
 3-arguments are driver and string. return name property matches provided string argument */