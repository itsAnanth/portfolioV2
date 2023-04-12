import { DividerCircle, Divider as DividerDiv, DividerLine } from "./Divider.styled";

function Divider() {
    return (
        <DividerDiv>
            <DividerCircle />
            <DividerCircle />
            <DividerLine />
        </DividerDiv>
    )
}

export default Divider;