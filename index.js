const flatten = (result,value,valueIndex,arr)=>{
  if(value instanceof Array){
    return value.reduce(flatten,result);
  }else{
    result.push(value);
    return result;
  }
};
module.exports = flatten;
