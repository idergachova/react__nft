import './Checkbox.scss'
import { CheckmarkIcon } from "../../icons/CheckmarkIcon";
export const Checkbox = ({label}) => {
    return (
        <label className="chk">
                        <input type="checkbox" />
                        <span className="chk__block">
                            <CheckmarkIcon />
                        </span>
                        {label && <span>{label}</span>}
                    </label>
    );
};
