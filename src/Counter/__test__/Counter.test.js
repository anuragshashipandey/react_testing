import React from 'react'
import Counter from'../Counter';
import {render, fireEvent, cleanup} from '@testing-library/react'
import "@testing-library/jest-dom"

let getByTestId;
beforeEach(()=>{
    const component=render(<Counter/>);
    getByTestId=component.getByTestId;
})

afterEach(()=>{
    cleanup();
})


test("Header renders with correct text",()=>{
    const headerEl=getByTestId("header");

    expect(headerEl.textContent).toBe("My Counter")
})

test('Counter initially start with text 0 value', () => {
    const counterEl=getByTestId("counter");

    expect(counterEl.textContent).toBe("0");
})

test("input contains intial value of 1",()=>{
    const inputEl=getByTestId("input");

    expect(inputEl.value).toBe("0");
})

test('button render +', () => {
    const addEl=getByTestId("add-btn");

    expect(addEl.textContent).toBe("+");
    
})
test('button render -', () => {
    const subtractEl=getByTestId("subtract-btn");

    expect(subtractEl.textContent).toBe("-");
    
})

test('should chnge val of input', () => {
    const inputEl=getByTestId("input");
    
    fireEvent.change(inputEl,{
        target:{
            value:"5"
        }
    });
    expect(inputEl.value).toBe("5");
})

test('should add 1 counter to counterVal', () => {
    const btnEl=getByTestId('add-btn');
    const inputEl=getByTestId("input");
    const counterEl=getByTestId("counter");
    

    fireEvent.change(inputEl,{
        target:{
            value:"5"
        }
    });
    fireEvent.click(btnEl);
    expect(counterEl.textContent).toBe("5");
})

test('should subtract 1 counter to counterVal', () => {
    const subbtnEl=getByTestId('subtract-btn');
    const inputEl=getByTestId("input");
    const counterEl=getByTestId("counter");

    fireEvent.change(inputEl,{
        target:{
            value:"5"
        }
    });
    fireEvent.click(subbtnEl);

    expect(counterEl.textContent).toBe("-5");
})


test('adding and subtracting value', () => {
    const addbtnEl=getByTestId('add-btn');
    const subbtnEl=getByTestId('subtract-btn');
    const inputEl=getByTestId("input");
    const counterEl=getByTestId("counter");

    fireEvent.change(inputEl,{
        target:{
            value:"10"
        }
    });
    fireEvent.click(addbtnEl);
    fireEvent.click(addbtnEl);
    fireEvent.click(addbtnEl);
    fireEvent.click(addbtnEl);
    fireEvent.click(subbtnEl);
    fireEvent.click(subbtnEl);

    expect(counterEl.textContent).toBe("20");
})

test('should chnge color', () => {
    const inputEl=getByTestId("input");
    const addbtnEl=getByTestId('add-btn');
    const subbtnEl=getByTestId('subtract-btn');
    const counterEl=getByTestId("counter");

    expect(counterEl.className).toBe("black");

    fireEvent.change(inputEl,{
        target:{
            value:"200"
        }
    });
    fireEvent.click(addbtnEl);

    expect(counterEl.className).toBe("green");

    fireEvent.click(subbtnEl);
    fireEvent.click(subbtnEl);

    expect(counterEl.className).toBe("red");
})
