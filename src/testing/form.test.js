import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
//import Form from '../components/form/form';
import TableData from './table';

describe('External data', () => {
   
      test(' renders if button is clicked', async() => {
        //Arrange
        const {findByTestId} = render(<TableData />);

        //Act
        fireEvent.click(screen.getByText('Click Me'));
    
        //Assert
        const test = await findByTestId('list-item-1');
        expect(test).toBeInTheDocument();
      })   

})