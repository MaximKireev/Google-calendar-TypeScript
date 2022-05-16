// import React from 'react'
// interface useInputHookProps {
//     type: string, 
//     className: string, 
//     required: boolean
// }


// export const useInput = ({type, className, required}: useInputHookProps) => {
//     const [value, setInputValue] = React.useState<string>("");

//     const inputValueHandler = (e: React.SyntheticEvent<EventTarget>) => {
// 		const currentTarget = e.target as HTMLInputElement;
// 		setInputValue(currentTarget.value);
// 	};
      
//     const input = <input className = {className} value={value} onChange={inputValueHandler} type={type} required = {required}/> as JSX.Element;
    
//     return [value, input];
//   }