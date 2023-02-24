import { fireEvent, render, waitFor } from '@testing-library/react';
import FKTextField from './FKTextField';
import userEvent from '@testing-library/user-event';
import FKProvider from '../FKProvider';
import { act } from 'react-dom/test-utils';

describe('<FKTextField />', () => {
  it('should display input text', async () => {
    /* const { getByTestId } = render(
            <FKProvider value={{ text: 'input text' }} onSubmit={() => 'ok'}>
                <FKTextField name="text" data-testid="text-field" />
            </FKProvider>
        );
        const TextField = getByTestId('text-field');
        await waitFor(() => expect(TextField).toHaveValue('input text'));*/
  });
});
