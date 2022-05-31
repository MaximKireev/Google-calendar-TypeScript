
import moment from "moment";
import React from "react";

export const useTimePicker = (initialValue: any, required: boolean) => {
	const [timeOption, setTimeValue] = React.useState(initialValue);
    const [error, setError] = React.useState <string | null>(null);


	const timeHandler = (item: string ) => {
		setTimeValue(`${new Date(item).getHours()}:${new Date(item).getMinutes()}`);
        if (item === '' && required) setError("Required field");
      else setError(null);
	};


    return {
        timeOption,
        onSelect: (value: any) => timeHandler(value._d),
        error
      };
};