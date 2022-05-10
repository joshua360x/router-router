import {
  screen,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom';
import App from './App';



test('should render app', async () => { 
  
  render(<MemoryRouter initialEntries={['/']} intialIndex={0}>
    <App />
  </MemoryRouter>)

const loadingElement = await screen.findByText(/loading/i)
await waitForElementToBeRemoved(loadingElement, {timeout: 4000})

const food = await screen.findByText(/chicken/i)
userEvent.click(food)

await waitFor(() => {
  screen.getByText(/chicken/i)
}, { timeout: 3000 })


 })


test.only('should render detail', async () => { 
  
  render(<MemoryRouter initialEntries={['/food/1']} intialIndex={0}>
    <App />
  </MemoryRouter>)

// const loadingElement = await screen.findByText(/loading/i)
// await waitForElementToBeRemoved(loadingElement, {timeout: 4000})

// const food = await screen.findByText(/chicken/i)
// userEvent.click(food)

await waitFor(() => {
  screen.getByText(/fish/i)
}, { timeout: 3000 })


 })


