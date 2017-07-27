//林沛萱

var Calcu = {
    height : 150,
    weight : 60,
    bmi : 0,
    getBMI: function(){
        var a = this.height;
        var b = this.weight;
        return this.bmi=b/(Math.pow(a/100,2));
    },
    getAdvice : function(){
        var x=this.bmi;
        if (x < 18.5){
            return  "建議 : "+"體重過輕";
        }
        else if(18.5<=x && x<24){
            return "建議 : "+"正常範圍";
        }
        else if(24<=x && x<27){
            return "建議 : "+"過重";
        }
        else if(27<=x && x<30){
            return "建議 : "+"輕度肥胖";
        }
        else if(30<=x && x<35){
            return "建議 : "+"中度肥胖";
        }
        else return "建議 : "+"重度肥胖";
    },
};

var mybmi = Object.create(Calcu);
mybmi.height = 160;
mybmi.weight = 60;
console.log(mybmi.getBMI());
console.log(mybmi.getAdvice());

