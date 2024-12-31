let numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let unique = [];

for(let i = 0;i < numbers.length;i++)
{
    let d = false;

    for(let j = 0;j < unique.length;j++)
    {
        if(numbers[i] == unique[j])
        {
            d = true;
            break;
        }
    }
    if(!d)
        unique.push(numbers[i]);
}

console.log(unique);