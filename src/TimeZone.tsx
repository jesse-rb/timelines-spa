import { useCallback, useContext, useEffect, useRef, useState } from "react"
import { TimeZoneContext } from "./Contexts"

interface TypeTimeZoneProps {
    setTimeZone: (v: string) => void
}

function TimeZone(props: TypeTimeZoneProps) {
    const timeZone = useContext(TimeZoneContext)
    const [isEditing, setIsEditing] = useState(false)
    const input: React.RefObject<null | HTMLInputElement> = useRef(null)
    const button: React.RefObject<null | HTMLButtonElement> = useRef(null)

    useEffect(() => {
        if (isEditing) {
            input.current?.focus()
        } else {
            button.current?.focus()
        }

    }, [isEditing])

    const handleChange = useCallback(() => {
        if (isEditing) {
            props.setTimeZone(input.current?.value ?? 'UTC')
        }
        setIsEditing((v) => !v)

    }, [isEditing])

    return <>
        <span hidden={isEditing}>{timeZone}</span>
        <input ref={input} hidden={!isEditing} type="text" defaultValue={timeZone} onKeyDown={(e) => { if (e.key == 'Enter') { handleChange(); e.preventDefault(); } }} />
        <button ref={button} onClick={handleChange}>{isEditing ? 'save' : 'edit'}</button>
    </>
}

export default TimeZone
