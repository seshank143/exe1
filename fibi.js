var number=process.argv[2];
var input1=0;
var input2=1;
for(var i=0;i<=number;i++){
  if(i==0){
    console.log(0)
  }
  else if (i==1) {
    console.log(1)
  }
  else {
    var result=input1 + input2;
    input1=input2;
    input2=result;
  }
}
