import { useEffect, useState } from 'react';
import './cardPageMain.css'
import List from './List';
function CardPageMain(){

const [groceryList , setGroceryList] = useState([]);

function AddItemsClickHandler(){
    const grecerylitsItems = document.getElementById("grecerylitsItems").value;
   // console.log(grecerylitsItems);
    const addList = {
        product : grecerylitsItems ,
        checked : "false"
    } 
    setGroceryList([...groceryList , addList]);
   // console.log(addList);
}

useEffect(()=>{
    console.log("data" , groceryList)
} , [groceryList])

    return(
        <>
            <section>
                {/* <h2>{groceryList}</h2> */}
                <div className='mainContainer'>
                    <h1>Create Your Grocery Items List</h1>
                    <div className='innerContainer'>
                        <input type='text' id = "grecerylitsItems" className= "inputBox" placeholder='make youe List'/>
                        <button type='submit' onClick={AddItemsClickHandler}>Add Items</button>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    {
                        groceryList.map((items , index)=>{
                            return(
                                <List itemName = {items.product} checked = {items.checked} key={index} groceryList = {groceryList} setGroceryList = {setGroceryList} index = {index}/>
                            )
                           
                        })
                    }
                </div>
            </section>
           
        </>
    )
}
export default CardPageMain;