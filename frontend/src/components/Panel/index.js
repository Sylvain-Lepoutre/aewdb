import './style.scss'

function Panel( { children, as, className, ...props }) {
    const ElementTypes = as || 'section';

    let cssClass = "panel";
    if (className) {
        cssClass += " " + className;
    }

    return (
        <ElementTypes className={cssClass} {...props}>
            {children}
        </ElementTypes>
    )
}
export default Panel;