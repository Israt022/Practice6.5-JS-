const leapYear = (year) =>(year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

let y = 2024;
const Year = leapYear(y);

if(Year == true)
{
    console.log(y,' Is Leap Year');
}
else
{
    console.log(y,' Is not Leap Year');
}
