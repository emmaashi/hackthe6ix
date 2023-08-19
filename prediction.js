var weatherid = "801";
const numberlist = weatherid.split("");
console.log(numberlist)
if (numberlist[0] === "2"){
    var weather = "Thunderstorm"
}
else if (numberlist[0] === "3"){
    var weather = "rain"
}

else if (numberlist[0] === "5"){
    var weather = "rain"
}

else if (numberlist[0] === "6"){
    var weather = "Snow"
}

else if (numberlist[0] === "7"){
    if (weatherid === "701"){
        var weather = "misty"
    }
    else if (weatherid === "711"){
        var weather = "smokey"
    }
    else if (weatherid === "721"){
        var weather = "hazey"
    }
    else if (weatherid === "731"){
        var weather = "Dusty"
    }
    else if (weatherid === "741"){
        var weather = "foggy"
    
    }
    else if (weatherid === "751"){
        var weather = "sandy"
    }
    else if (weatherid === "761"){
        var weather = "dusty"
    }
    else if (weatherid === "762"){
        var weather = "ashy"
    
    }
    else if (weatherid === "771"){
        var weather = "squalls"
    }
    else if (weatherid === "781"){
        var weather = "tornado"
    }
}
else if (numberlist[0] === "8"){
    if (weatherid === "800"){
        var weather = "clear"
    }
    
    else {
        var weather = "cloudy"
    }
}

