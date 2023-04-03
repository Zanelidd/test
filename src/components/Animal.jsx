

const Animal = ({resident}) =>
{
    return (

<div>
    <p>{resident.firstName}</p>
    <img src={resident.img} alt={resident.firstName}  />
</div>

    )
}





export default Animal