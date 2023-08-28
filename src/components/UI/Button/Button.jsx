import './Button.scss'
export default function Button({children, className}){
    return (
        <button className={className}>{children}</button>
    )
}