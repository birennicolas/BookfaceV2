import React from "react";


const Stories = () => {
    const [s, setState] = React.useState([
        {id:1, img:"../images/cake.jpeg", name:"Aurelien Saelens", link:"https://aureliensaelens.github.com"},
        {id:2, img:"../images/cake.jpeg", name:"cake group"},
        {id:3, img:"../images/cake.jpeg", name:"cake group"},
        {id:4, img:"../images/cake.jpeg", name:"cake group"},
        {id:5, img:"../images/cake.jpeg", name:"cake group"}
    ]);

return (
        <div className="updates">
            {s.map((up) => (
                <div className="updatesc" key = {up.id} >
                    <div className="updatesb">
                        <img src={up.img} />
                    <div className="updatesbo">
                        <div className="updatesboimg">
                            <img src={up.img}/>
                        </div>
                <div className="updatesboname"> {up.name} </div>
            </div>
            </div>
            </div>
            ))}
        </div>
        

    )
}

export default Stories;