
import { Button } from 'react-bootstrap'

const NumKey =(props)=>{

    return(
        <>
            <Button className="btn keyBtn">
                d{props.die}
            </Button>

        </>
    )
}

export default NumKey;
