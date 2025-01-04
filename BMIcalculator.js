function bmiCalc(height, weight){
    height = height/1000;
    var bmi = weight / (height*height);
    return bmi;
}

var ans = bmiCalc(5678, 45);
console.log(ans);