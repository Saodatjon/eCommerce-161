// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Box, Flex } from '../index'
// import { H4, Span } from '../Typography'
// import { SidebarStyle } from './SidebarStyle'

// function Sidebar({ subCats, categoryAttributes, ...props }) {
//     return (
//         <SidebarStyle>
//             <Box borderBottom='1px solid #E2E4EB' mb='10px'>
//                 {subCats?.map((item) => {
//                     return (
//                         <Box mb='10px'  >
//                             <Link to={`/category/${item.slug}`}  >
//                                 <Span key={item.id} >{item.name_ru}</Span>
//                             </Link>
//                         </Box>
//                     )
//                 })}
//             </Box>

//             <Box>
//                 {categoryAttributes?.map((attribute) => {
//                     return (
//                         <Box
//                             key={attribute.id}
//                             borderBottom='1px solid #E2E4EB'
//                             mb='10px'
//                         >
//                             <H4 mb='10px'>{attribute?.name_ru}</H4>
//                             {attribute?.values?.map((value) => {
//                                 return (
//                                     <Flex gap='10px' key={value.id} mb='10px'>
//                                         <input
                                            
//                                             type='checkbox'
//                                             mr='10px'
//                                             id={`value_${value.value_id}`}
//                                         />
//                                         <label htmlFor={`value_${value.value_id}`}>
//                                             <Span style={{ useSelect: 'none' }} >
//                                                 {value.value_ru}
//                                             </Span>
//                                         </label>
//                                     </Flex>
//                                 )
//                             })}
//                         </Box>
//                     )
//                 })}
//             </Box>
//         </SidebarStyle>
//     )
// }

// export default Sidebar

import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex } from '../index'
import { H4, Span } from '../Typography'
import { SidebarStyle } from './SidebarStyle'

function Sidebar({ subCats, categoryAttributes, ...props }) {
    return (
        <SidebarStyle>
            <Box borderBottom='1px solid #E2E4EB' mb='10px'>
                {subCats?.map((item) => {
                    return (
                        <Box mb='10px'>
                            <Link to={`/category/${item.slug}`}>
                                <Span key={item.id}>{item.name_ru}</Span>
                            </Link>
                        </Box>
                    )
                })}
            </Box>

            <Box>
                {categoryAttributes?.map((attribute) => {
                    return (
                        <Box
                            key={attribute.id}
                            borderBottom='1px solid #E2E4EB'
                            mb='10px'
                        >
                            <H4 mb='10px'>{attribute?.name_ru}</H4>
                            {attribute?.values?.map((value) => {
                                return (
                                    <Flex gap='10px' key={value.id} mb='10px'>
                                        <input
                                            type='checkbox'
                                            mr='10px'
                                            id={`value_${value.value_id}`}
                                        />
                                        <label htmlFor={`value_${value.value_id}`}>
                                            <Span style={{ useSelect: 'none' }}>
                                                {value.value_ru}
                                            </Span>
                                        </label>
                                    </Flex>
                                )
                            })}
                        </Box>
                    )
                })}
            </Box>
        </SidebarStyle>
    )
}

export default Sidebar