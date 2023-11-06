import React, {FC, useState} from "react";
import {Products} from "./Products";

export const SliderInput: FC<{ min: number; max: number; step: number; value: number; onChange: (newValue: number) => void }> =
    ({ min, max, step, value, onChange }) => {
    const [sliderValue, setSliderValue] = useState(value);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value);
        setSliderValue(newValue);
        onChange(newValue);
    };

    return (
        <div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={sliderValue}
                onChange={handleSliderChange}
            />
            <p>Value: {sliderValue}</p>

        </div>
    );
};