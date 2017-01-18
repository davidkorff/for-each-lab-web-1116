function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var array = ['a','b','c']
  array.forEach((element, index, array) => {
    callback(element)
  })
  return array
}

function doToArray(array, callback){
  array.forEach((element, index, array)=>{
    callback(element)
  })
  return array

}
