

// let OTPGenerator = (digit) => {

//     let num = `0123456789` ;
//     let OTP = ``;

//     for(let i = 1; i <= digit ; i++)
//     {
//         OTP +=  num[Math.floor(Math.random()*10)]
//     }

//     return OTP;
// };


// console.log(OTPGenerator(4));

let OtpG = (digit) =>{
    let num =`12345` ;
    let OTP =``;

    for(let i=1; i<=digit ; i++)
    {
        OTP += num[Math.floor(Math.random()*5)]
    }

    return OTP;
}

console.log(OtpG(4));



