let result = 70;

if(result < 0 || result > 100)
{
     console.log('Invalid Input');
     return 0;
}
else if(result <= 100 && result >= 90)
{
    console.log('Grade = A+')
}
else if(result <= 90 && result >= 80)
{
    console.log('Grade = A')
}
else if(result <= 80 && result >= 70)
{
    console.log('Grade = A-')
}
else if(result <= 70 && result >= 60)
{
    console.log('Grade = B')
}
else if(result <= 60 && result >= 50)
{
    console.log('Grade = C')
}
else if(result <= 50 && result >= 40)
{
    console.log('Grade = D')
}
else if(result <= 40 && result >= 33)
{
    console.log('Grade = E')
}
else
{
    console.log('Grade = F')
}