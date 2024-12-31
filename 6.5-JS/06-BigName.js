const BigName = (array) =>
{
    let name = array[0];

    for(let i =0;i < array.length;i++)
    {
        const element = array[i];
        if(element.length > name.length)
        {
            name = element
        }
    }
    return name;
}

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const bigName = BigName(friends);

console.log(bigName);