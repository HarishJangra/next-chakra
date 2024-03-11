'use client'

import {ChakraProvider} from '@chakra-ui/react'


export const Providers = ({children} : any) => {
    return (
        <ChakraProvider>
            {children}
        </ChakraProvider>
    )
}