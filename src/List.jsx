import { useState } from 'react';
import './list.css'
function List({itemName , groceryList , setGroceryList , index}){
    // console.log("itemName",itemName)

    const [checked , checkedSet] = useState(false);

    function getValue(e){
        const checkedValue = (e.target.checked);
        if(checkedValue == true){
           checkedSet(true);
        }
        else{
            checkedSet(false);
        }
    }

    function deleteHandler(indexNo){
        console.log("name",indexNo)
        const data = [...groceryList]
        data.splice(index , 1);
        // data.filter((items , index)=>{
        //     if(index==indexNo){
        //       return  console.log("finally");
        //     }
        // })
        setGroceryList(data);
    }
   
    return(
        <>
            <section>
                <div className="listContainer">
                    <div className="lists">
                        <div className="listCard">
                            <input type="checkbox" onChange={(e)=>{
                                getValue(e)
                            }} />
                            <p 
                                style={{
                                    textDecoration : checked ? 'line-through' : 'none'
                                }}
                            >{itemName}</p>
                            <div>
                            <button id = {index} onClick={()=>{
                                deleteHandler({index})
                            }}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default List;