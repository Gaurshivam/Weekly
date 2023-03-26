import React from 'react';

const Card = ({userData}) => {
    const GetData = userData.map((ui,i)=>{
        return(
            <table key={i} className='table mt-4 table-striped table-hover table-bordered'>
            <thead className='bg-dark text-white'>
                <tr>
                    <th >Image</th>
                    <th >Name</th>
                    <th >Email</th>
                    <th >Gender</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td className='w-25'><img src={ui.picture.thumbnail} alt="imageApp" /></td>
                        <td className='w-25'>{ui.name.first}</td>
                        <td className='w-25'>{ui.email}</td>
                        <td className='w-25'>{ui.gender}</td>
                    </tr>
                </tbody>
            </table>
        )
    })
    return (
        <div>
            {GetData}
        </div>
    );
}

export default Card;
