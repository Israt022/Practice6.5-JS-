const monthlySaving = (allPayment,livingCost) =>
{
    if(typeof(allPayment) != 'object' ||  typeof(livingCost) != 'number')
    {
        console.log('Invalid Input');
        return 0;
    }

    let totalPayment = 0;
    for(let i = 0;i < allPayment.length;i++)
    {
        if(allPayment[i] >= 3000)
        {
            totalPayment -= (totalPayment * 20)/100;
        }
        totalPayment += allPayment[i];
    }
    const saving = totalPayment - livingCost;

    if(saving >= 0)
    {
        console.log(saving);
    }
    else
    {
        console.log('earn more');
    }

}

monthlySaving([1000,2000,3000],5400);
monthlySaving([1000,2000,2500],5000);
monthlySaving([900,2700,3400],10000);
monthlySaving(100,[900,2700,3400]);