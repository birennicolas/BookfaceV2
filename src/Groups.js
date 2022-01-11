import React from "react";


const Groups = () => {
    const [lg, setState] = React.useState([
        {id:1, img:"../images/cake.jpeg", name:"Aurelien Saelens", link:"https://aureliensaelens.github.com"},
        {id:2, img:"../images/cake.jpeg", name:"cake group"},
        {id:3, img:"../images/cake.jpeg", name:"cake group"},
        {id:4, img:"../images/cake.jpeg", name:"cake group"},
        {id:5, img:"../images/cake.jpeg", name:"cake group"}
    ]);
    return (
        <div className="left">
            {lg.map((i) => (
            <div className="leftl" key = {i.id} >
                <div className="leftimg">
                    <img src={i.img} />
                </div>
                <div className="leftlname"> {i.name} </div>
            </div>
            ))}
        </div>

    )
}

export default Groups;

