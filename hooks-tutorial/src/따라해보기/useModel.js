import React, { useReducer } from 'react';


const reducer=(state,action) =>{
    
    return {...state,action[name]:action.value};
}


const getAverage =(list) =>{
    console.log("평균구하기 메소드");
    if(list == null || list.length === 0)  return 0;
    const sum = list.reduce((a,b)=> a+b);
    return sum/list.length;
}


const useModel = (initState) => {
    initState.avg= getAverage(initState.list);
    const[state,dispatch] = useReducer(reducer,initState);

    const addNumber =(number) =>{
        const updatedList = state.list.concat(parseInt(number));
    }

    dispatch({
        type:'ADD_NUMBER',
        list:updatedList,
        avg:getAverage(updatedList),
    })


    return {state,addNumber}
};

export default useModel;