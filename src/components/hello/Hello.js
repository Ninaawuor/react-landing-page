import React from 'react';
import { TextContainer, Heading } from './HelloStyles';
import Swal from 'sweetalert2';


export function Hello() {

    function Change() {
        Swal.fire({
            title: 'Success',
            text: 'You succeeded in creating your first application',
            icon: 'success',
            confirmButtonText: 'Thanks'
          })
    }

    return (
        <TextContainer>
            <Heading>Hello World</Heading>
            <button onClick={Change}>Click Me</button>
        </TextContainer>
    )
}
export default Hello;
