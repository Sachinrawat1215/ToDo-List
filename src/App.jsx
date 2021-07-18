import React, { useState } from 'react';
import ListItem from './ListItem';

const App = () => {
    const [item, SetItem] = useState();
    const [state, SetState] = useState([]);

    const MainFunction = (events) => {
        SetItem(events.target.value);
    };

    const clicked = () => {
        if (item === "") {
            console.log("you can't add blank item")
                SetState((oldItems) => {
                    return [...oldItems];
                });
        } else {
            SetState((oldItems) => {
                return [...oldItems, item];
            });
            SetItem("");
        }
    };

    const delete_function = (key) => {
        SetState((oldItems) => {
            return oldItems.filter((arrayElem, index) => {
                return index !== key;
            })
        })
    }


    return (
        <React.Fragment>
            <div className="main">
                <header>
                    <h1>To-Do List</h1>
                </header>
                <div className="add-portion">
                    <input type="text" placeholder="Type Something..." onChange={MainFunction} value={item} autoFocus /><i id="add" className="fas fa-plus-circle" onClick={clicked}></i>
                </div>
                <div className="content-portion">
                    <ol>
                        {state.map((itemVal, index) => {
                            return <ListItem text={itemVal} delete={delete_function} key={index} id={index} />
                        })}
                    </ol>
                </div>
            </div>
        </React.Fragment>
    );
};

export default App;