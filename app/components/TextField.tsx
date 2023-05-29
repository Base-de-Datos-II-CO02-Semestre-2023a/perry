

export default function TextField(props: { label: string, name: string, type: string, variant?: string, onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void, isValid: boolean }) {
  
    return (
        <div className={"textField "+props.variant+" "+(props.isValid?"":"error")}>
            <label className="body-small" htmlFor={props.name}>{props.label}</label>
            <input  id={props.name} name={props.name} type={props.type} placeholder=" " className="body-large" onChange={props.onChange} />
        </div>
    );
}