const __flattenReducer = (result,value,valueIndex,arr)=>{
  if(value instanceof Array){
    return value.reduce(__flattenReducer,result);
  }else{
    result.push(value);
    return result;
  }
};

const flatten = function(arr){
   if(arr instanceof Array){
     return Array.prototype.reduce.apply(arr,[__flattenReducer,[]]);
   }else{
     throw new TypeError('Expected an array');
   }
}
module.exports = flatten;
