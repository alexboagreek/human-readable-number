module.exports = function toReadable (number) {

    let singleNumbers = [" ","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    
    let dozensNumbers = [" "," ","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    
    let text = "";
    
    if (number == 0) return "zero";  
    
    let hundreds = Math.floor(number / 100), 
        tenUnit = number % 100;
    
    if (hundreds >= 1) {
        text += singleNumbers[hundreds] + " hundred ";
    }
    
    let tens = Math.floor(tenUnit / 10),

         units = tenUnit % 10; 
    
    if(tens >= 2) {
        text += dozensNumbers[tens];
        if(units != 0){
            text += " " + singleNumbers[units];
        }
    }
    else if (0 < tenUnit < 20) {
        text += singleNumbers[tenUnit];
    }	
    return text.trim();
    }


