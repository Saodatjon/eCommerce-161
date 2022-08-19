import styled from "styled-components";
import { borderRadius, color, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, space } from "styled-system";
import { mainFont } from "../utilis/constant";

export const Typography = styled.div`
       line-height:130%;
       font-weight:normal;
       font-family:${mainFont};
       text-decoration: ${(props)=> props.textDecoration};
       ${space},
       ${fontSize},
       ${fontStyle},
       ${fontWeight},
       ${borderRadius},
       ${color},
       ${lineHeight},
       ${letterSpacing},
`

export const H1 = (props) =>(
       <Typography as='h1' fontSize='30px' {...props}/>
)

export const H2 = (props) =>(
       <Typography as='h2' fontSize='25px' {...props}/>
)

export const H3 = (props) =>(
       <Typography as='h3' fontSize='20px' {...props}/>
)

export const H4 = (props) =>(
       <Typography as='h4' fontWeight='600' fontSize='17px' {...props}/>
)

export const H5 = (props) =>(
       <Typography as='h5' fontWeight='600' fontSize='16px' {...props}/>
)

export const H6 = (props) =>(
       <Typography as='h6' fontWeight='600' fontSize='14px' {...props}/>
)

export const Paragraph = (props) => (
     <Typography as='p' {...props}/>
)

export const Span = (props) => (
       <Typography as='span' fontSize='16px' {...props}/>
  )

  export const SemiSpan = (props) => (
       <Typography as='span' fontSize='16px' {...props}/>
  )

  export const Small = (props) => (
       <Typography as='span' fontSize='12px' {...props}/>
  )

  export const Tiny = (props) => (
       <Typography as='span' fontSize='10px' {...props}/>
  )