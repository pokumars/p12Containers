import React from 'react'
import '@testing-library/jest-dom'
import {screen, render} from '@testing-library/react'
import Todo from './Todo'

test('renders text', () => {
  const txt = 'Some example text'
  const todo = {
    text: txt,
    done: false,
  }
  render(<Todo 
    todo={todo}
    onClickComplete={() => {}}
    onClickDelete={() => {}}/>)

    const element = screen.getByText(txt);
    expect(element).toBeDefined()
})

test('renders correct button text', () => {
  const txt = 'Lorem ipsum dolor'
  const todo = {
    text: txt,
    done: false,
  }
  render(<Todo 
    todo={todo}
    onClickComplete={() => {}}
    onClickDelete={() => {}}/>)

    const deleteButton = screen.getByText('Delete');
    const completeButton = screen.getByText('Set as done')
    expect(deleteButton).toBeDefined()
    expect(completeButton).toBeDefined()
})