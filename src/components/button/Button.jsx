import "./button.styles.scss";

const buttonType={
 google:"google-sign-in",
 inverted:"inverted"
}

const Button = ({children,btnType, ...otherProps}) => {
  return (
    <button className={`button-container ${buttonType[btnType]}`}
    {...otherProps}
    >
     {children}
    </button>
  )
}

export default Button